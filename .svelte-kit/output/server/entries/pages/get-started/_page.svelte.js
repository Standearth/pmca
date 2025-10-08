import { a3 as attr, a5 as attr_class, a4 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, T as TapeTransition, F as Footer } from "../../../chunks/TapeTransition.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const title = "Get Started - Prime Members for Cleaner Amazon";
    const description = "Your Prime member power has been activated! Share your voice and help mobilize more Prime members.";
    let showDonationModal = false;
    let donationAmount = 25;
    const BASE_SHARE_URL = "https://primemembers.earth/";
    function getShareUrl(platform) {
      const shareUrl = BASE_SHARE_URL;
      const text = "Prime members want Amazon to do more on climate. Join thousands of us demanding change!";
      switch (platform) {
        case "facebook":
          return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        case "bluesky":
          return `https://bsky.app/intent/compose?text=${encodeURIComponent(text + " " + shareUrl)}`;
        case "email":
          return `mailto:?subject=${encodeURIComponent("Join the Prime Members for Cleaner Amazon campaign")}&body=${encodeURIComponent(text + "\n\n" + shareUrl)}`;
        case "whatsapp":
          return `https://wa.me/?text=${encodeURIComponent(text + " " + shareUrl)}`;
        case "linkedin":
          return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        default:
          return shareUrl;
      }
    }
    Meta($$renderer2, { title, description });
    $$renderer2.push(`<!----> <section class="hero svelte-1py19mn"><div class="hero-background svelte-1py19mn"><div class="hero-overlay svelte-1py19mn"></div> <img${attr("src", `${stringify(base)}/hero-bg.webp`)} alt="Background" class="hero-image svelte-1py19mn"/></div> <div class="hero-content svelte-1py19mn"><div class="hero-text svelte-1py19mn"><h1 class="svelte-1py19mn">Your Prime member power has been activated!</h1> <p class="hero-subtitle svelte-1py19mn">You've joined thousands of Prime members demanding a cleaner Amazon.</p> <div class="hero-box svelte-1py19mn"><h3 class="svelte-1py19mn">Our strength will come from numbers. Let's amplify your voice and mobilize more Prime members to join our movement.</h3></div></div></div></section> <section class="social-sharing svelte-1py19mn"><div class="container svelte-1py19mn"><h2 class="svelte-1py19mn">Step 1: Spread the word</h2> <p class="section-intro svelte-1py19mn">Help us reach more Prime members by sharing our campaign on your social networks.</p> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="social-buttons svelte-1py19mn"><a${attr("href", getShareUrl("facebook"))} target="_blank" class="social-btn facebook svelte-1py19mn"><span class="social-icon svelte-1py19mn"><svg viewBox="0 0 24 24" fill="currentColor" class="svelte-1py19mn"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" class="svelte-1py19mn"></path></svg></span> <span class="svelte-1py19mn">Facebook</span></a> <a${attr("href", getShareUrl("bluesky"))} target="_blank" class="social-btn bluesky svelte-1py19mn"><span class="social-icon svelte-1py19mn"><img${attr("src", `${stringify(base)}/Bluesky_Logo_White.svg`)} alt="Bluesky" class="svelte-1py19mn"/></span> <span class="svelte-1py19mn">Bluesky</span></a> <a${attr("href", getShareUrl("email"))} class="social-btn email svelte-1py19mn"><span class="social-icon svelte-1py19mn"><svg viewBox="0 0 24 24" fill="currentColor" class="svelte-1py19mn"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" class="svelte-1py19mn"></path></svg></span> <span class="svelte-1py19mn">Email</span></a> <a${attr("href", getShareUrl("whatsapp"))} target="_blank" class="social-btn whatsapp svelte-1py19mn"><span class="social-icon svelte-1py19mn"><svg viewBox="0 0 24 24" fill="currentColor" class="svelte-1py19mn"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.051 3.488" class="svelte-1py19mn"></path></svg></span> <span class="svelte-1py19mn">WhatsApp</span></a> <a${attr("href", getShareUrl("linkedin"))} target="_blank" class="social-btn linkedin svelte-1py19mn"><span class="social-icon svelte-1py19mn"><svg viewBox="0 0 24 24" fill="currentColor" class="svelte-1py19mn"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" class="svelte-1py19mn"></path></svg></span> <span class="svelte-1py19mn">LinkedIn</span></a></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></section> <section class="survey svelte-1py19mn"><div class="container svelte-1py19mn"><h2 class="svelte-1py19mn">Step 2: Tell us more about your priorities</h2> <p class="section-intro svelte-1py19mn">Help us understand what matters most to you as a Prime member so we can better represent your voice.</p> <div class="survey-container svelte-1py19mn">`);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></section> `);
    TapeTransition($$renderer2);
    $$renderer2.push(`<!----> <section class="donation svelte-1py19mn"><div class="container svelte-1py19mn"><h2 class="svelte-1py19mn">Step 3: Power our campaign with a donation</h2> <p class="section-intro svelte-1py19mn">Your contribution helps us reach more Prime members and build the pressure needed to change Amazon.</p> <div class="donation-grid svelte-1py19mn"><button class="donation-btn svelte-1py19mn">$25</button> <button class="donation-btn svelte-1py19mn">$50</button> <button class="donation-btn svelte-1py19mn">$75</button> <button class="donation-btn svelte-1py19mn">$100</button> <button class="donation-btn svelte-1py19mn">$250</button> <button class="donation-btn svelte-1py19mn">$500</button></div></div></section> <div${attr_class("modal-overlay svelte-1py19mn", void 0, { "show": showDonationModal })}><div class="modal-content svelte-1py19mn"><button class="modal-close svelte-1py19mn">×</button> <iframe${attr("src", `https://act.stand.earth/page/77077/donate/1?transaction.donationAmt=${stringify(donationAmount)}`)} title="Make a donation" class="donation-iframe svelte-1py19mn"></iframe></div></div> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
