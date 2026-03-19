function parseCSV(csvText) {
  const lines = csvText.trim().split("\n");
  lines[0].split(",").map((h) => h.replace(/"/g, "").trim());
  const stories = [];
  let currentRow = [];
  let inQuotes = false;
  let currentField = "";
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    currentRow = [];
    currentField = "";
    inQuotes = false;
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        if (inQuotes && line[j + 1] === '"') {
          currentField += '"';
          j++;
        } else {
          inQuotes = !inQuotes;
        }
      } else if (char === "," && !inQuotes) {
        currentRow.push(currentField.trim());
        currentField = "";
      } else {
        currentField += char;
      }
    }
    currentRow.push(currentField.trim());
    if (currentRow.length >= 2) {
      const story = currentRow[0].replace(/"/g, "").trim();
      const name = currentRow[1].replace(/"/g, "").trim();
      if (story) {
        stories.push({
          story,
          name: name || null,
          id: Math.random().toString(36).substr(2, 9)
        });
      }
    }
  }
  return stories;
}
const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRS8H-swB-iWOqUboB_WynsaJaQgPdpfde28vCciioq98LWSytyFR0UVnd6G8sOR9EMCB7EZ1vb7qwm/pub?gid=0&single=true&output=csv";
async function load() {
  let ssrStories = [];
  try {
    const response = await fetch(CSV_URL);
    if (response.ok) {
      const csvText = await response.text();
      const allStories = parseCSV(csvText);
      ssrStories = allStories.slice(0, 6);
    }
  } catch (error) {
    console.warn("SSR stories fetch failed:", error);
  }
  return { ssrStories };
}
export {
  load
};
