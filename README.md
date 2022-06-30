# Whatsapp Web Utility

This is an app designed for productivity, adding user-friendly functionality to WhatsApp Web's API, packaged conveniently into a Chrome extension.

![App Screenshot](/assets/Screenshot.png)

**Link to preview version:** https://whatsapp-web-utility.netlify.app (**NOTE:** THIS IS **NOT** THE LINK TO THE APP ITSELF!
**THIS IS ONLY A LIVE PREVIEW**.

FOR INSTALLATION, PLEASE REFER TO THE SECTION BELOW.) 

## Installation

The installation process is simple. Since this extension is currently being approved by Google, it has to be installed as an "Unpacked" extension. Here's a step-by-step guide:

1. Go towards the right panel on this site and click on the latest version under "Releases".

2. Select the appropriate "Source code" option.
   - ZIP version if you're using Windows or MacOS.
   - tar.gz version if you're using Linux.

3. After the file has downloaded, extract the folder (Unzip it), it should create a new -unzipped- folder with the same name as the original file.

4. Open Chrome Browser and navigate to [chrome://extensions](chrome://extensions).
   
   -  Alternatively, you can click on the Chrome menu, select "More Tools", and then select "Extensions".

5. Toggle the switch to enable "Developer Mode" located at the top-right corner.

6. Click on "Load unpacked" and select the unzipped folder.

#### Alternative way

1. Alternatively, you can go to the top of the page and find the green button that reads "Code" over the top-right corner. Click it.

2. Select the last option on the drop-down menu, the one that reads "Download ZIP".

Continue regular steps 3 - 6 above.

## Current Working Version

Current version is 1.1.0

## Why Was This App Made

WhatsApp Web offers an amazing (and well established) app that makes for a great complement for their main version designed for mobile. It's a productivity tool that helps you stay in your PC and manage your chats from there.

However there's one flaw that disrupts the productivity flow:

**Whenever the user wants to open a chat that's not cached by the web app, they have to do it from their mobile.**

This Chrome extension is designed to increase the level of productivity offered by WhatsApp Web App allowing the user to simply type in the desired phone number and even the first message's text content and letting them decide if they want to open the new chat on a new tab or on the current one.

This way, the user has one less reason to get away from their workflow; improving their ease of use and overall experience.

## How It Was Made

**Tech used:** HTML, CSS, JavaScript, Chrome API, WhatsApp API

This app is conceived to prioritize the ease of use and here's how it's broken down.

**HTML:**

- A drop-down menu populated by different countries, this will generate the appropriate prefix corresponding to each country's phone number system.
- A text input field where the phone number will be typed (or pasted), designed to ignore any non-numeric character -thought to facilitate copying a number and pasting it here irrespective of the original format-.
- A text area designed for the user to type in (or paste) their desired text content for the first message. This text gets processed and parsed into a query string digestible for WhatsApp Web's API.
- A button made to open the new chat on a new tab.
- A button made to open the new chat on the current tab without altering that tab's current history, allowing the user to go back if desired.
- A button made to save the number under a name typed by the user (currently on development).

**JavaScript:**

- A function to process the user's country selection and assigns the correct prefix to the phone number.
- A function to process the phone number ridding it of any non-numeric character.
- A function to parse the user's text as a query string for the appropriate use of WhatsApp Web API
- Every button's functionality as it pertains to the appropriate method selected by the user to open the new chat (new tab or current tab), following Chrome API's tools to manage the tabs behaviour.

**CSS:** 

-Currently on development-

## Optimizations

- On version 1.0.0 the button meant to open the new chat on the same window was programmed without considering Chrome's way of managing and identifying tabs. This means it didn't contemplate the fact that the extension's window itself is not the same as the active tab. Version 1.1.0 solved this issue by adopting Chrome's API's functionality and tabs behaviour.

## Future Updates

- The styling and aesthetic aspects of this app are currently under development and will be incorporated in future revisions.

- The "Save" button is currently disabled and the ability for numbers and names to be saved, rendered, and to persist is currently under development and will be incorporated in future revisions. 

## Lessons Learned

- Even though this app focuses on functionality and ease-of-use, the aesthetic part plays a very important role and significantly contributes to the user's overall experience.

- Chrome's API is deeply interesting and often overlooked. As a developer constantly working towards improving and making impactful products, it's worth it to learn more about it and incorporate it into regular use.

- Tools that make the user's workflow easier/better can ultimately improve their lives. Apps such as this, as small as they may seem, can still be impactful and that's a responsibility we, as Software Engineers, cannot overlook.