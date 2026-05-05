import { error } from "@sveltejs/kit";
import { l as loadAllSlugs, a as loadUpdate } from "../../../../chunks/loadUpdates.js";
const prerender = true;
async function entries() {
  try {
    const slugs = await loadAllSlugs();
    return slugs.map((slug) => ({ slug }));
  } catch (err) {
    console.error("Error fetching post slugs for prerender entries:", err);
    return [];
  }
}
async function load({ params }) {
  const post = await loadUpdate(params.slug);
  if (!post) {
    error(404, "Update not found");
  }
  return { post };
}
export {
  entries,
  load,
  prerender
};
