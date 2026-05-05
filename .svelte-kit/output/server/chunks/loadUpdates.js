import { s as sanityClient } from "./sanity.js";
const SINGLE_UPDATE_QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  publishedAt,
  image,
  body
}`;
const ALL_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)].slug.current`;
async function loadUpdate(slug) {
  return sanityClient.fetch(SINGLE_UPDATE_QUERY, { slug });
}
async function loadAllSlugs() {
  return sanityClient.fetch(ALL_SLUGS_QUERY);
}
function formatDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}
export {
  loadUpdate as a,
  formatDate as f,
  loadAllSlugs as l
};
