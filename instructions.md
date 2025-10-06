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
- Use Sveltekit framework, using the best practices around how components and utilities are created. 
- In individual Svelte component files, the order should be JS, HTML, CSS 
- Use TypeScript and Bootstrap 5, using locally hosted files for both. 
- Use ArchieML to pull in content from a structure Google Doc. Set up a configuration file that allows for inputing of relevavnt document URL. See ArchieML documentation or the example in the following repository: https://github.com/the-pudding/svelte-starter
- The app will be hosted on netlify 
- 


# Design
In the project folder, there is a folder titled creative that has a visual mockup of the website landing page in both svg and png. Use whichever file in the relevant step below to create the website design Note that the mockup file includes visualizations of the popup form experience, as explained below. The creative folder also includes the following visual assets to be used in the website design:
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
- Scaffold the app using best practices for Sveltekit
- Setup github using the following repository: git@github.com:Standearth/pmca.git
- Add bootstrap

## Step 2 - Mockup Design Kickoff
- Use the mockup.png file added to your context to take a first pass at building the website. 