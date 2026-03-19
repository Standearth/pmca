import { a6 as attr_style, a7 as ensure_array_like, a0 as escape_html, a5 as attr_class, a3 as attr, a4 as stringify } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
function StoriesCarousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { ssrStories = [] } = $$props;
    let stories = [...ssrStories];
    let currentIndex = 0;
    let isLoading = ssrStories.length === 0;
    const storiesPerView = 3;
    const maxStoryLength = 150;
    function truncateStory(story, maxLength) {
      if (story.length <= maxLength) return story;
      const truncated = story.substring(0, maxLength);
      const lastSpaceIndex = truncated.lastIndexOf(" ");
      if (lastSpaceIndex > 0) {
        return truncated.substring(0, lastSpaceIndex) + "...";
      }
      return truncated + "...";
    }
    $$renderer2.push(`<section class="stories-carousel svelte-1b6kjxn"><div class="container svelte-1b6kjxn"><div class="carousel-header svelte-1b6kjxn"><h2 class="svelte-1b6kjxn">Real Stories from Prime Members</h2> <p class="carousel-subtitle svelte-1b6kjxn">Prime members are speaking up about their experiences with Amazon. 
				These voices are driving change for a more sustainable future.</p></div> `);
    if (
      // Start autoplay when stories are loaded
      isLoading
    ) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="loading svelte-1b6kjxn"><div class="loading-spinner svelte-1b6kjxn"></div> <p class="svelte-1b6kjxn">Loading member stories...</p></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (stories.length === 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="no-stories svelte-1b6kjxn"><p class="svelte-1b6kjxn">Stories are currently unavailable. Please check back later.</p></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<div class="carousel-wrapper svelte-1b6kjxn">`);
        if (stories.length > storiesPerView) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<button class="carousel-btn carousel-btn-prev svelte-1b6kjxn" aria-label="Previous stories"><svg viewBox="0 0 24 24" width="24" height="24" class="svelte-1b6kjxn"><path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" class="svelte-1b6kjxn"></path></svg></button> <button class="carousel-btn carousel-btn-next svelte-1b6kjxn" aria-label="Next stories"><svg viewBox="0 0 24 24" width="24" height="24" class="svelte-1b6kjxn"><path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" class="svelte-1b6kjxn"></path></svg></button>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--> <div class="carousel-container svelte-1b6kjxn"><div class="carousel-track svelte-1b6kjxn"${attr_style(`transform: translateX(-${stringify(currentIndex * (100 / storiesPerView))}%)`)}><!--[-->`);
        const each_array = ensure_array_like(stories);
        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
          let story = each_array[index];
          $$renderer2.push(`<div class="story-slide svelte-1b6kjxn"><div class="story-preview-card svelte-1b6kjxn"><div class="story-preview-content svelte-1b6kjxn"><p class="story-preview-text svelte-1b6kjxn">${escape_html(truncateStory(story.story, maxStoryLength))}</p> `);
          if (story.name) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<div class="story-preview-author svelte-1b6kjxn">– ${escape_html(story.name)}</div>`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--></div></div></div>`);
        }
        $$renderer2.push(`<!--]--></div></div> `);
        if (stories.length > storiesPerView) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="carousel-dots svelte-1b6kjxn"><!--[-->`);
          const each_array_1 = ensure_array_like(Array(Math.ceil(stories.length - storiesPerView + 1)));
          for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
            each_array_1[index];
            $$renderer2.push(`<button${attr_class(`carousel-dot ${stringify(currentIndex === index ? "active" : "")}`, "svelte-1b6kjxn")}${attr("aria-label", `Go to slide ${stringify(index + 1)}`)}></button>`);
          }
          $$renderer2.push(`<!--]--></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div> <div class="carousel-cta svelte-1b6kjxn"><a${attr("href", `${stringify(base)}/stories`)} class="btn btn-outline svelte-1b6kjxn">Read all member stories</a></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  StoriesCarousel as S
};
