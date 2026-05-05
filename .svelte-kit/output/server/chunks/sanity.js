import { createClient } from "@sanity/client";
const sanityClient = createClient({
  projectId: "6mclpc7f",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
  // Use CDN for faster reads
});
function buildImageUrl(imageRef, options = {}) {
  if (!imageRef?.asset?._ref) return null;
  const { width = 800, height, quality = 80 } = options;
  const ref = imageRef.asset._ref;
  const [, id, dimensions, format] = ref.split("-");
  const [w, h] = dimensions ? dimensions.split("x") : ["800", "600"];
  let url = `https://cdn.sanity.io/images/6mclpc7f/production/${id}-${w}x${h}.${format}`;
  const params = new URLSearchParams();
  if (width) params.set("w", String(width));
  if (height) params.set("h", String(height));
  params.set("q", String(quality));
  params.set("auto", "format");
  if (imageRef.hotspot) {
    params.set("fp-x", String(imageRef.hotspot.x));
    params.set("fp-y", String(imageRef.hotspot.y));
  }
  return `${url}?${params.toString()}`;
}
export {
  buildImageUrl as b,
  sanityClient as s
};
