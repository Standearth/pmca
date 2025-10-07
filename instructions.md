# Introduction 
Use the following instructions to build a web app that is aimed at mobilizing Amazon Prime members to push Amazon to do more on climate. 

# Key Functionality
- Adaptive mobile design 
- Ensure each page and the overall template is optimized for social sharing (has open graph meta elements) and for search engines
- The web app will have the following routes:
    - Homepage
    - Learn More
    - Leaderboard

# Framework & Conventions
- In individual Svelte component files, the order should be JS, HTML, CSS 
- Use TypeScript and Bootstrap 5, using locally hosted files for both. 


# Design
 The static folder also the following visual assets to be used in the website design:
    - logo_black.svg and logo_white.svg - primary campaign logos to be used on different background
    - marker.svg - marker to be used in the hero visualization 
    - hero_bg.webp - background for the hero section

Here are the primary colors to be used in the website:
    - #1298ff - primary color
    - #ff9f2e - seondary accent color, used primarily for CTAs, buttons, forms, etc.
    - #000000 and #ffffff - secondary accent colors to increase contrast.


# Steps
I want you to follow each of the following steps and confirm when each step has been completed. Each step should be committed separately to github, with summary of changes in comments. 

## Step 1 - Scaffolding
- review the codebase and familiarize yourself with the different built-in functions.
- Replace the fonts defined within the code with those stored in the static folder. You should use AmsiPro for headings and CTAs, Carlito for body
- Remove all references to pudding.cool 
- Create the three principal routes for the site (homepage, Learn More, Leaderboard, Get Started)

## Step 2 - Design
- use the attached mockup to design the different components starting with the homepage. 
- here is the list of components to build and their specifications:
    - Header - includes the logo_black.svg that is centered on the page, with a hamburger menu on the right, opening an offcanvas menu with available routes. The header should have transparent background and thus use the background defined in the hero below.
    - Hero - follow the structure of the design. There should be a full width, 100vh video background (file bg_video.mp4 in the static folder). Use the static image hero_bg.webp as the static image placeholder to optimize onload time. 
    - Popup - the CTA buttons through the designs should open a popup that preloads an iframe with the URL https://act.stand.earth/page/88799/petition/1. Importantly, the iframe should load dynamically, so that any present URL parameters are passed along to the iframe URL. 
    - Counter - dynamic counter centered at the bottom of the hero section, with dynamic counting up JS functionality. The value for it will be defined manually within the code to start. 
    - Demands - the second part of the design
    - Tape - the section transition element that just uses the full width tape.png file in the static folder
    - How - the third section that uses the bg2.png file from the static folder
    - Footer - as per design specification 

## Step 3 - Get started page

I want you to design the get started page with the following elements and functionality. This is the page that user would land on after filling out the get involved/get started form. The objective of the page is to maximize the window of attention of the end user, with three primary asks - to share the campaign on social media, fill out an embedded typeform survey and donate.

The hero should be similar to the Learn more page and include the heading "Your Prime member power has been activated!". The hero should also feature a box for a unique share link that will be generated using the instructions below. The user should have the option of copying the unique link to clipboard. There should then be a icons for Facebook, Bluesky, Mailto email sharirng, Whatsapp and Linkedin, all sharing the unique URL generated on the page. 

Below is sample code for the unique link generation. If a ref parameter exists in the URL the code should use it to generate a unique URL and populate the relevant box in the hero section and update all the social sharing links. If no ref parameter is present, there should be no unique link box and the share buttons should use the regular full URL of the page. 
```
<script>
        $(document).ready(function() {
            const API_ENDPOINT = "https://amazonpri.me/shorten";
            const LONG_URL_BASE = "https://primemembers.earth/?ref=";
            
            const $hiddenField = $('input[name="supporter.NOT_TAGGED_77"]');

            // --- Step 1: Extract ref from URL ---
            const supporterId = [[fill in the proper code]]
            if (!supporterId) {
                return;
            }

            // --- Step 2: Construct full URL and Payload ---
            const fullUrl = LONG_URL_BASE + supporterId;
            const payload = {
                unique_id: supporterId,
                full_url: fullUrl
            };


            // --- Step 3: Call the Cloud Run API ---
            $.ajax({
                url: API_ENDPOINT,
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(payload),
                // Crucial: The browser automatically sets the 'Referer' header to the current page's URL.
                // The Cloud Run service MUST be configured to trust this page's domain.
                
                success: function(response) {
                    const shortUrl = response.short_url;

                    if (shortUrl) {
                        // --- Step 4 & 5: Populate the hidden field and update status ---
                        $hiddenField.val(shortUrl);

                        // In a production scenario, you would set the field type to "hidden" now:
                        // $hiddenField.attr('type', 'hidden'); 
                    } else {
                        throw new Error("API returned success but missing 'short_url'.");
                    }
                },
                error: function(xhr, status, error) {
                    let errorMessage = `API Call Failed: ${xhr.status} ${xhr.statusText}`;
                    try {
                        const err = JSON.parse(xhr.responseText);
                        errorMessage = `Error: ${err.error || errorMessage}. Check Cloud Run logs.`;
                    } catch {
                        // Use generic message if response is not JSON
                    }
                    
                    console.error("Shortener API Error:", errorMessage);
                }
            });
        });
    </script>
```

The next step for the user would be to fill out a survey, which will be embedded as an iframe from typeform. The iframe URL should include the ref parameter from the URL of the parent page, if it exists. 

The final call to action would be to donate. The page should offer a grid of 6 buttons with present dollar amounts. Upon clicking, a modal should open up with the URL: https://act.stand.earth/page/77077/donate/1?transaction.donationAmt= and append the respective amount from the button. The options should be $25, $50, $75, $100, $250, $500. 