import "clsx";
import "@sveltejs/kit/internal/server";
function StoriesCarousel($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<section class="stories-carousel svelte-1b6kjxn"><div class="container svelte-1b6kjxn"><div class="carousel-header svelte-1b6kjxn"><h2 class="svelte-1b6kjxn">Real Stories from Prime Members</h2> <p class="carousel-subtitle svelte-1b6kjxn">Prime members are speaking up about their experiences with Amazon. 
				These voices are driving change for a more sustainable future.</p></div> `);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="loading svelte-1b6kjxn"><div class="loading-spinner svelte-1b6kjxn"></div> <p class="svelte-1b6kjxn">Loading member stories...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section>`);
  });
}
export {
  StoriesCarousel as S
};
