import { a4 as stringify, a6 as attr_style, a3 as attr, a0 as escape_html } from "../../../../chunks/index.js";
import { b as base } from "../../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, h as html, F as Footer } from "../../../../chunks/Footer.js";
import { H as Header } from "../../../../chunks/Header.js";
import { f as formatDate } from "../../../../chunks/loadUpdates.js";
import { b as buildImageUrl } from "../../../../chunks/sanity.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    const post = data.post;
    const preloadFont = [
      base + "/fonts/AmsiPro-Ultra.woff2",
      base + "/fonts/Carlito/Carlito-Regular.ttf",
      base + "/fonts/Carlito/Carlito-Bold.ttf"
    ];
    function escapeHtml(str) {
      return String(str ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
    }
    function renderSpan(span, markDefs = []) {
      let text = escapeHtml(span.text ?? "");
      for (const mark of span.marks ?? []) {
        switch (mark) {
          case "strong":
            text = `<strong>${text}</strong>`;
            break;
          case "em":
            text = `<em>${text}</em>`;
            break;
          case "underline":
            text = `<u>${text}</u>`;
            break;
          case "code":
            text = `<code>${text}</code>`;
            break;
          case "strike-through":
            text = `<s>${text}</s>`;
            break;
          default: {
            const def = markDefs.find((d) => d._key === mark);
            if (def?._type === "link") {
              const isExternal = /^https?:\/\//.test(def.href);
              const target = isExternal ? ' target="_blank"' : "";
              const rel = isExternal ? ' rel="noopener noreferrer"' : "";
              text = `<a href="${escapeHtml(def.href)}"${target}${rel}>${text}</a>`;
            }
          }
        }
      }
      return text;
    }
    function portableTextToHtml(blocks = []) {
      let html2 = "";
      let i = 0;
      while (i < blocks.length) {
        const block = blocks[i];
        if (block._type !== "block") {
          i++;
          continue;
        }
        if (block.listItem) {
          const tag = block.listItem === "number" ? "ol" : "ul";
          let listHtml = `<${tag}>`;
          while (i < blocks.length && blocks[i].listItem === block.listItem) {
            const inner2 = (blocks[i].children ?? []).map((s) => renderSpan(s, blocks[i].markDefs)).join("");
            listHtml += `<li>${inner2}</li>`;
            i++;
          }
          listHtml += `</${tag}>`;
          html2 += listHtml;
          continue;
        }
        const inner = (block.children ?? []).map((s) => renderSpan(s, block.markDefs)).join("");
        switch (block.style ?? "normal") {
          case "h1":
            html2 += `<h1>${inner}</h1>`;
            break;
          case "h2":
            html2 += `<h2>${inner}</h2>`;
            break;
          case "h3":
            html2 += `<h3>${inner}</h3>`;
            break;
          case "h4":
            html2 += `<h4>${inner}</h4>`;
            break;
          case "h5":
            html2 += `<h5>${inner}</h5>`;
            break;
          case "h6":
            html2 += `<h6>${inner}</h6>`;
            break;
          case "blockquote":
            html2 += `<blockquote><p>${inner}</p></blockquote>`;
            break;
          default:
            html2 += inner ? `<p>${inner}</p>` : "";
            break;
        }
        i++;
      }
      return html2;
    }
    const heroImageUrl = buildImageUrl(post?.image, { width: 1400, height: 600 }) ?? `${base}/hero-bg.webp`;
    const bodyHtml = portableTextToHtml(post?.body ?? []);
    buildImageUrl(post?.image, { width: 1200, height: 630 });
    Meta($$renderer2, {
      title: `${stringify(post.title)} – Campaign Updates`,
      description: post.excerpt ?? `Read the latest campaign update: ${post.title}`,
      url: `https://primemembers.earth/updates/${stringify(post.slug)}`,
      ogType: "article",
      preloadFont
    });
    $$renderer2.push(`<!----> `);
    Header($$renderer2);
    $$renderer2.push(`<!----> <section class="post-hero svelte-1y8w763"${attr_style(`background-image: url('${stringify(heroImageUrl)}')`)}><div class="hero-overlay svelte-1y8w763"></div> <div class="hero-content svelte-1y8w763"><nav class="breadcrumb svelte-1y8w763" aria-label="Breadcrumb"><a${attr("href", `${stringify(base)}/updates`)} class="svelte-1y8w763">← All Updates</a></nav> <time class="post-date svelte-1y8w763"${attr("datetime", post.publishedAt)}>${escape_html(formatDate(post.publishedAt))}</time> <h1 class="svelte-1y8w763">${escape_html(post.title)}</h1></div></section> <article class="post-article svelte-1y8w763"><div class="container svelte-1y8w763"><div class="post-body prose svelte-1y8w763">${html(bodyHtml)}</div> <div class="post-footer svelte-1y8w763"><a${attr("href", `${stringify(base)}/updates`)} class="btn btn-outline svelte-1y8w763">← Back to all updates</a></div></div></article> <section class="cta-section svelte-1y8w763"><div class="container svelte-1y8w763"><h2 class="svelte-1y8w763">Ready to add your voice?</h2> <p class="svelte-1y8w763">Join thousands of Prime members calling for Amazon to do better on climate.</p> <a${attr("href", `${stringify(base)}/join`)} class="btn btn-cta svelte-1y8w763">Join the campaign</a></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
