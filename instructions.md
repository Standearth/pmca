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

