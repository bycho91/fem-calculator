# Frontend Mentor - Tip calculator app

![Design preview for the Tip calculator app coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋
Thanks for checking out this front-end coding challenge.

## Tech Used:
  1. HTML
  2. CSS / SASS
  3. Vanilla Javascript
  4. Google for research :]

## Notes to myself about the development of this app.
 - The first time I created the logic with javascript, I implemented a separate button that allowed the user to input all information and calculate on click. I was unable to get the click event to trigger on mobile (even though it worked correctly on desktop).
 - I solved the above issue by restructuring the logic in the JS file. I separated out the app into 4 different event listeners:
      1. Bill Value on input change
      2. Tip Value on click event (off the pre-set options)
      3. Custom Tip Value on input change
      4. Number of people on input change
 - I created a 'calculateTip' function that is being run every time any of the above event listeners gets triggered.
 - I ran into the issue of creating arrow functions and calling those methods before they were initialized. This was fixed by changing arrow functions to regular function expressions.

## Things to still work on:
  - Need to still learn the nuances of when to use async/await. It doesn't seem relevant here because I'm not having to fetch any data from APIs.
  - Need to learn how to better organize logic - instead of writing it out as I go. Better to plan first, then write code.
