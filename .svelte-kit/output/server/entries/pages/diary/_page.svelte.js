import { $ as attr, a2 as escape_html, a5 as ensure_array_like, a6 as attr_class, a0 as stringify, a7 as bind_props } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { t as targetCount } from "../../../chunks/variables.js";
import { M as Meta, F as Footer } from "../../../chunks/Footer.js";
import { T as TapeTransition } from "../../../chunks/TapeTransition.js";
/* empty css                                                            */
import { d as diaryStats } from "../../../chunks/diaryStats.svelte.js";
function VanGuide($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let pinned = false;
    const open = pinned;
    $$renderer2.push(`<span class="van-guide svelte-1l28rnx" role="presentation"><button type="button" class="help svelte-1l28rnx"${attr("aria-expanded", open)} aria-controls="van-guide-panel" aria-label="How to tell electric and gas vans apart">?</button> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></span>`);
  });
}
function ChoiceQuestion($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { question, value = "", required = false, idPrefix = "q" } = $$props;
    $$renderer2.push(`<fieldset class="choice svelte-dac30x"><legend class="svelte-dac30x">${escape_html(question.label)}`);
    if (!required) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="optional svelte-dac30x">(optional)</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
    if (question.vanHelp) {
      $$renderer2.push("<!--[-->");
      VanGuide($$renderer2);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></legend> <div class="options svelte-dac30x"><!--[-->`);
    const each_array = ensure_array_like(question.options);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let option = each_array[i];
      $$renderer2.push(`<label${attr_class("option svelte-dac30x", void 0, { "selected": value === option })}><input type="radio"${attr("name", `${stringify(idPrefix)}-${stringify(question.name)}`)}${attr("value", option)}${attr("checked", value === option, true)}${attr("required", required, true)} class="svelte-dac30x"/> <span>${escape_html(option)}</span></label>`);
    }
    $$renderer2.push(`<!--]--></div></fieldset>`);
    bind_props($$props, { value });
  });
}
const SPLIT_STILL_COMING = "No, more still coming";
const WHERE_ELSEWHERE = "Somewhere else";
const VEHICLE_OPTIONS = [
  "Branded electric van",
  "Branded gas/diesel van",
  "Unmarked personal car making Amazon deliveries",
  "USPS/UPS/other",
  "Didn't see",
  "Not sure"
];
const SPOTTER_VEHICLE_OPTIONS = VEHICLE_OPTIONS.filter(
  (o) => o !== "USPS/UPS/other" && o !== "Didn't see"
);
const diaryFast = [
  {
    name: "packaging",
    label: "How did it arrive?",
    options: ["Cardboard box", "Padded paper mailer", "Plastic/poly mailer", "Item in its own packaging", "Several of these"]
  },
  {
    name: "box_fit",
    label: "Was the box about right for what was inside?",
    options: ["About right", "Somewhat oversized", "Absurdly oversized"]
  },
  { name: "vehicle", label: "What delivered it?", options: VEHICLE_OPTIONS, optional: true, vanHelp: true },
  {
    name: "split_status",
    label: "Did everything in this order come together?",
    options: ["Yes", SPLIT_STILL_COMING, "No, part already arrived", "Single-item order"],
    optional: true
  }
];
const groupedSelected = {
  name: "grouped_selected",
  label: "Did you choose a grouped or slower delivery option at checkout?",
  options: ["Yes", "No", "Don't remember"]
};
const spotter = [
  { name: "vehicle", label: "What did you see?", options: SPOTTER_VEHICLE_OPTIONS, vanHelp: true },
  { name: "sighting_where", label: "Where?", options: ["Near home", WHERE_ELSEWHERE] }
];
const sightingWhen = {
  name: "sighting_when",
  label: "When?",
  options: ["Today", "This week", "Earlier"]
};
const COUNTRIES = ["United States", "Canada", "Other"];
function SupporterFields($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      supporter = {
        email: "",
        first_name: "",
        postal_code: "",
        country: "United States"
      },
      optIn = false,
      idPrefix = "sup"
    } = $$props;
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="fields svelte-15q5b1x"><label class="field svelte-15q5b1x"><span>ZIP / postal code</span> <input type="text"${attr("value", supporter.postal_code)} autocomplete="postal-code" required maxlength="10"${attr("id", `${stringify(idPrefix)}-postal`)} class="svelte-15q5b1x"/></label> <label class="field svelte-15q5b1x"><span>Country</span> `);
      $$renderer2.select(
        {
          value: supporter.country,
          autocomplete: "country-name",
          id: `${stringify(idPrefix)}-country`,
          class: ""
        },
        ($$renderer3) => {
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(COUNTRIES);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let country = each_array[$$index];
            $$renderer3.option({ value: country }, ($$renderer4) => {
              $$renderer4.push(`${escape_html(country)}`);
            });
          }
          $$renderer3.push(`<!--]-->`);
        }
      );
      $$renderer2.push(`</label> <label class="field svelte-15q5b1x"><span>First name <span class="optional svelte-15q5b1x">(optional)</span></span> <input type="text"${attr("value", supporter.first_name)} autocomplete="given-name"${attr("id", `${stringify(idPrefix)}-first`)} class="svelte-15q5b1x"/></label> <label class="field svelte-15q5b1x"><span>Email `);
      if (!optIn) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span class="optional svelte-15q5b1x">(optional)</span>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></span> <input type="email"${attr("value", supporter.email)} autocomplete="email"${attr("required", optIn, true)}${attr("id", `${stringify(idPrefix)}-email`)} class="svelte-15q5b1x"/></label></div>`);
    }
    $$renderer2.push(`<!--]--> <label class="opt-in svelte-15q5b1x"><input type="checkbox"${attr("checked", optIn, true)}${attr("id", `${stringify(idPrefix)}-opt-in`)} class="svelte-15q5b1x"/> <span>Keep me updated on this campaign <span class="optional svelte-15q5b1x">(optional)</span></span></label>`);
    bind_props($$props, { supporter, optIn });
  });
}
function DiaryForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { door = "" } = $$props;
    const emptyDiary = () => ({
      packaging: "",
      split_status: "",
      box_fit: "",
      grouped_selected: "",
      vehicle: "",
      inside: ""
    });
    const emptySpotter = () => ({
      vehicle: "",
      sighting_where: "",
      sighting_location: "",
      sighting_when: ""
    });
    let supporter = {
      email: "",
      first_name: "",
      postal_code: "",
      country: "United States"
    };
    let optIn = false;
    let diaryAnswers = emptyDiary();
    let spotterAnswers = emptySpotter();
    let status = "idle";
    let trap = "";
    const showGrouped = diaryAnswers.split_status === SPLIT_STILL_COMING;
    const showLocation = spotterAnswers.sighting_where === WHERE_ELSEWHERE;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      {
        $$renderer3.push("<!--[!-->");
        $$renderer3.push(`<form class="diary-form svelte-1rdl5ux"><div class="doors svelte-1rdl5ux" role="group" aria-label="What are you logging?"><button type="button" class="door svelte-1rdl5ux"${attr("aria-pressed", door === "diary")}><span class="door-label"><span aria-hidden="true">📦</span> A package arrived</span> `);
        if (door === "diary") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<span class="door-selected svelte-1rdl5ux" aria-hidden="true">✓ Selected</span>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></button> <button type="button" class="door svelte-1rdl5ux"${attr("aria-pressed", door === "spotter")}><span class="door-label"><span aria-hidden="true">🚐</span> I saw an Amazon van</span> `);
        if (door === "spotter") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<span class="door-selected svelte-1rdl5ux" aria-hidden="true">✓ Selected</span>`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></button></div> `);
        if (door === "diary") {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<!--[-->`);
          const each_array = ensure_array_like(diaryFast);
          for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
            let question = each_array[$$index];
            ChoiceQuestion($$renderer3, {
              question,
              required: !question.optional,
              idPrefix: "d",
              get value() {
                return diaryAnswers[question.name];
              },
              set value($$value) {
                diaryAnswers[question.name] = $$value;
                $$settled = false;
              }
            });
          }
          $$renderer3.push(`<!--]--> `);
          if (showGrouped) {
            $$renderer3.push("<!--[-->");
            ChoiceQuestion($$renderer3, {
              question: groupedSelected,
              required: true,
              idPrefix: "d",
              get value() {
                return diaryAnswers.grouped_selected;
              },
              set value($$value) {
                diaryAnswers.grouped_selected = $$value;
                $$settled = false;
              }
            });
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> `);
          {
            $$renderer3.push("<!--[!-->");
            $$renderer3.push(`<button type="button" class="more svelte-1rdl5ux">Add more detail (optional)</button>`);
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
          if (door === "spotter") {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="guide svelte-1rdl5ux"><p><strong>Not sure what it was? Pick "Not sure".</strong> A wrong guess hurts the count more than a blank. Tap the <span class="guide-q svelte-1rdl5ux">?</span> for how to tell electric and gas vans apart.</p></div> <!--[-->`);
            const each_array_2 = ensure_array_like(spotter);
            for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
              let question = each_array_2[$$index_2];
              ChoiceQuestion($$renderer3, {
                question,
                required: true,
                idPrefix: "s",
                get value() {
                  return spotterAnswers[question.name];
                },
                set value($$value) {
                  spotterAnswers[question.name] = $$value;
                  $$settled = false;
                }
              });
            }
            $$renderer3.push(`<!--]--> `);
            if (showLocation) {
              $$renderer3.push("<!--[-->");
              $$renderer3.push(`<label class="text-field svelte-1rdl5ux"><span>Postal code or town</span> <input type="text"${attr("value", spotterAnswers.sighting_location)} maxlength="40" required class="svelte-1rdl5ux"/> <small class="svelte-1rdl5ux">Never a street address.</small></label>`);
            } else {
              $$renderer3.push("<!--[!-->");
            }
            $$renderer3.push(`<!--]--> `);
            ChoiceQuestion($$renderer3, {
              question: sightingWhen,
              required: true,
              idPrefix: "s",
              get value() {
                return spotterAnswers.sighting_when;
              },
              set value($$value) {
                spotterAnswers.sighting_when = $$value;
                $$settled = false;
              }
            });
            $$renderer3.push(`<!---->`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        }
        $$renderer3.push(`<!--]--> <div class="trap svelte-1rdl5ux" aria-hidden="true"><label>Leave this field empty <input type="text" name="website" tabindex="-1" autocomplete="off"${attr("value", trap)}/></label></div> `);
        if (door) {
          $$renderer3.push("<!--[-->");
          SupporterFields($$renderer3, {
            idPrefix: "diary",
            get supporter() {
              return supporter;
            },
            set supporter($$value) {
              supporter = $$value;
              $$settled = false;
            },
            get optIn() {
              return optIn;
            },
            set optIn($$value) {
              optIn = $$value;
              $$settled = false;
            }
          });
          $$renderer3.push(`<!----> <p class="privacy svelte-1rdl5ux">No photos, no Amazon account details, no street addresses. Never photograph or follow a driver.</p> `);
          {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--> <button type="submit" class="btn btn-cta submit svelte-1rdl5ux"${attr("disabled", status === "sending", true)}>${escape_html("Log it")}</button> `);
          {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]-->`);
        } else {
          $$renderer3.push("<!--[!-->");
        }
        $$renderer3.push(`<!--]--></form>`);
      }
      $$renderer3.push(`<!--]-->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
    bind_props($$props, { door });
  });
}
const quotes = [
  {
    theme: "Grouped delivery",
    text: "I’ve tried using the Amazon delivery day feature to reduce the number of deliveries as everything is supposed to come together on one day. This never seems to work as I still get multiple deliveries."
  },
  {
    theme: "Grouped delivery",
    text: "On so many occasions i have ordered things through amazon prime using the least amount of deliveries possible. Almost every time, the packages are delivered across multiple days and NOT delivered in one."
  },
  {
    theme: "Split orders",
    text: "Please stop using so much packaging. I bought a vacuum last week and it was in 3 separate boxes. Why??"
  },
  {
    theme: "Box size",
    text: "I used to order nail polish but stopped because one tiny bottle came in a box big enough to hold 50."
  },
  {
    theme: "Packaging",
    text: "Despite recyclable packaging for envelopes Amazon Prime greatly favours using non recyclable plastic envelopes instead of the recyclable paper ones they seldom use."
  },
  {
    theme: "Delivery vans",
    text: "I am the property manager of a building with 270 units. If the delivery vehicles that come bringing Amazon packages to me and to many of the other residents everyday (10-15 times a day) were electric, that would begin to have a significant positive impact on our planet's climate."
  }
];
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const title = "Delivery Diary & EV Spotter | Prime Members for a Cleaner Amazon";
    const description = "For anyone Amazon delivers to. Log a package that arrived or an Amazon van you saw. Twenty seconds turns an annoyance on your porch into evidence Amazon can't ignore.";
    let door = "";
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Meta($$renderer3, {
        title,
        description,
        canonical: "https://primemembers.earth/diary/"
      });
      $$renderer3.push(`<!----> <section class="hero svelte-1uyldbo"><div class="hero-background svelte-1uyldbo"><div class="hero-overlay svelte-1uyldbo"></div> <img${attr("src", `${stringify(base)}/hero-bg.webp`)} alt="" class="hero-image svelte-1uyldbo"/></div> <div class="hero-content svelte-1uyldbo"><p class="eyebrow svelte-1uyldbo">Delivery Diary &amp; EV Spotter</p> <h1 class="svelte-1uyldbo">Amazon makes big promises. Your doorstep shows what it actually delivers.</h1> <p class="hero-subtitle svelte-1uyldbo">Prime member or not, if Amazon delivers to your door, you're one of the customers it depends on. Log what lands on your porch, or an Amazon van you see. Twenty seconds turns an annoyance into evidence Amazon can't ignore.</p> <div class="doors svelte-1uyldbo"><button class="door svelte-1uyldbo"><span class="door-icon svelte-1uyldbo" aria-hidden="true">📦</span> <span class="door-label">A package arrived</span></button> <button class="door svelte-1uyldbo"><span class="door-icon svelte-1uyldbo" aria-hidden="true">🚐</span> <span class="door-label">I saw an Amazon van</span></button></div> <div class="counters svelte-1uyldbo"><div class="counter-circle svelte-1uyldbo"><div class="counter-number svelte-1uyldbo">${escape_html(targetCount.toLocaleString())}</div> <div class="counter-text svelte-1uyldbo">people<br/>joined</div></div> <div class="counter-circle orange svelte-1uyldbo"><div class="counter-number svelte-1uyldbo">${escape_html(diaryStats.count.toLocaleString())}</div> <div class="counter-text svelte-1uyldbo">deliveries &amp;<br/>sightings logged</div></div></div></div></section> <section class="why svelte-1uyldbo"><div class="container svelte-1uyldbo"><h2 class="svelte-1uyldbo">Why the Diary exists</h2> <p class="why-lead svelte-1uyldbo">Amazon tells its own story about deliveries. The Diary lets its customers tell theirs, with evidence Amazon can't wave away.</p> <div class="why-grid svelte-1uyldbo"><div class="why-item svelte-1uyldbo"><h3 class="svelte-1uyldbo">Amazon's green options go unchecked</h3> <p class="svelte-1uyldbo">Amazon offers grouped and slower delivery as the greener choice. Members keep telling us those orders still arrive in pieces, but nobody counts how often. Your logs do.</p></div> <div class="why-item svelte-1uyldbo"><h3 class="svelte-1uyldbo">Amazon won't say how many vans are electric</h3> <p class="svelte-1uyldbo">It doesn't publish the share of its deliveries made by electric vehicles. Members counting the vans on their own streets is how we find out.</p></div> <div class="why-item svelte-1uyldbo"><h3 class="svelte-1uyldbo">One porch is easy to ignore. Thousands aren't.</h3> <p class="svelte-1uyldbo">Every log joins everyone else's. We add them up and show the totals back to you right here.</p></div></div></div></section> <section class="log-section svelte-1uyldbo" id="log"><div class="container svelte-1uyldbo"><h2 class="svelte-1uyldbo">${escape_html(door === "spotter" ? "Log an Amazon vehicle" : door === "diary" ? "Log a delivery" : "Log it now")}</h2> `);
      DiaryForm($$renderer3, {
        get door() {
          return door;
        },
        set door($$value) {
          door = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----></div></section> <section class="findings svelte-1uyldbo"><div class="container svelte-1uyldbo"><h2 class="svelte-1uyldbo">In members' own words</h2> <p class="findings-lead svelte-1uyldbo">Prime members told us what turns up at their door. Their answers to our member survey are why the Diary asks what it asks.</p> <div class="quotes-grid svelte-1uyldbo"><!--[-->`);
      const each_array = ensure_array_like(quotes);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let quote = each_array[$$index];
        $$renderer3.push(`<figure class="quote svelte-1uyldbo"><span class="quote-theme svelte-1uyldbo">${escape_html(quote.theme)}</span> <blockquote class="svelte-1uyldbo">“${escape_html(quote.text)}”</blockquote> <figcaption class="svelte-1uyldbo">Prime member</figcaption></figure>`);
      }
      $$renderer3.push(`<!--]--></div> <p class="quotes-cta svelte-1uyldbo"><a href="#log" class="svelte-1uyldbo">Seen the same at your door? Log it.</a> <span class="divider svelte-1uyldbo" aria-hidden="true">·</span> <a${attr("href", `${stringify(base)}/stories/`)} class="svelte-1uyldbo">Read more member stories</a></p></div></section> `);
      TapeTransition($$renderer3);
      $$renderer3.push(`<!----> <section class="how-used svelte-1uyldbo"><div class="container svelte-1uyldbo"><h2 class="svelte-1uyldbo">From your porch to Amazon's boardroom</h2> <p class="how-lead svelte-1uyldbo">The numbers are the evidence. <strong>The power is the people behind them.</strong> Amazon listens to its customers, so every log is also a signal that one more customer is paying attention and wants Amazon to do more.</p> <ol class="change-steps svelte-1uyldbo"><li class="change-step svelte-1uyldbo"><span class="change-number svelte-1uyldbo">1</span> <h3 class="svelte-1uyldbo">You log it</h3> <p class="svelte-1uyldbo">Twenty seconds, from your porch or the sidewalk. A package that arrived in pieces, a box ten times too big, a gas van idling down your street.</p></li> <li class="change-step svelte-1uyldbo"><span class="change-number svelte-1uyldbo">2</span> <h3 class="svelte-1uyldbo">It adds up</h3> <p class="svelte-1uyldbo">Your log joins everyone else's in the totals on this page. One porch is easy to ignore. Thousands of customers saying the same thing aren't.</p></li> <li class="change-step svelte-1uyldbo"><span class="change-number svelte-1uyldbo">3</span> <h3 class="svelte-1uyldbo">We take it to Amazon</h3> <p class="svelte-1uyldbo">We use the totals to show Amazon, the press and the public the gap between Amazon's promises and what customers see, and to back our demands: electric vans, clean energy and better conditions for workers.</p></li> <li class="change-step svelte-1uyldbo"><span class="change-number svelte-1uyldbo">4</span> <h3 class="svelte-1uyldbo">Amazon has to answer</h3> <p class="svelte-1uyldbo">The more people logging, the bigger the group Amazon has to answer to. That's how customers move a company that size: together, and with proof.</p></li></ol> <div class="how-grid svelte-1uyldbo"><div class="how-item svelte-1uyldbo"><h3 class="svelte-1uyldbo">We show our working</h3> <p class="svelte-1uyldbo">Each figure says how many people logged and what it can and can't tell us. People choose what to log, so the totals show what customers saw, not how often it happens everywhere. Counts, never made-up percentages.</p></div> <div class="how-item svelte-1uyldbo"><h3 class="svelte-1uyldbo">Your details stay yours</h3> <p class="svelte-1uyldbo">All we need is your ZIP or postal code. Your name and email are optional, and we only send you campaign updates if you tick the box to ask for them.</p></div></div> <div class="privacy svelte-1uyldbo"><h3 class="svelte-1uyldbo">What stays private</h3> <ul class="svelte-1uyldbo"><li class="svelte-1uyldbo">No photos, and nothing from inside your Amazon account: no order numbers, no screenshots.</li> <li class="svelte-1uyldbo">Location is only your postal code, or a postal code or town you type. Never a street address, never your phone's GPS.</li> <li class="svelte-1uyldbo">Nothing location-level is shown publicly.</li> <li class="svelte-1uyldbo">Never photograph, follow or report on delivery drivers. Most are contractors on monitored routes, and this campaign stands with them.</li> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></ul></div></div></section> `);
      Footer($$renderer3);
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
