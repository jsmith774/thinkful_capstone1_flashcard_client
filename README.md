# CyberCard

## Client

This repo is client side of the CyberCard application. **NOTE: Requires API Server**: A running instance of the CyberCard API Server is required for client applicaion to function.

## Deployment

- Live demo client running on <https://client-eta-cyan.vercel.app>

- Live deployment of the API server being called by this demo is running at <https://dry-scrubland-36737.herokuapp.com>

## Summary

CyberCard is an online flashcard app. The demo is for early reader "sight words", but this could be used for math problems, music rythym patterns, or any other subject matter where short answer formats are appropriate.

The Landing Page is for demo purposes and contains basic instructions for demo accounts. All screens , including the Landing Page have a 'Login' or 'Logout' link at the top (see screenshot).
![Landing Page Login Link Screenshot](./README_Screenshots/LandingPage.png?s=320)

Click Login to begin demo and you can Logout at anytime to end your session and/or log in as a new user with a different role.
![Login Page Screenshot](./README_Screenshots/LoginForm.png?s=320)

There is no user registration because the education institution admin/registrars would preload user accounts. Users have one of two roles, either Educator or Student

Each role has access to different functionality within the app.

**Educator**

Educators will see a read-only list of decks and a button to create a new Deck.
![Educator Dashboard Screenshot](./README_Screenshots/Educator.png?s=320)

Educators will create new Decks by providing a unique Deck name then selecting specific cards that will make up the deck from the pre-existing card pool, and selecting which Student users should have access to the Deck.
![Create Deck Screenshot](./README_Screenshots/CreateDeck.png?s=320)

**Student**

Students can select a Deck they have been granted access to to do a self-assessment for formative stage learning.
![Student Dashborad Screenshot](./README_Screenshots/Student.png?s=320)

They will be taken to an Assessment launch page where they will need to click the start button to begin the assessment.
![Start Assessment Screenshot](./README_Screenshots/Start.png?s=320)

The Assessment will cycle through all cards. Cards will be initially presented face down.  
![Facedown Card Screenshot](./README_Screenshots/Facedown.png?s=320)

The Student will click the card to "flip" it face up and try to formulate an answer.
![Faceup Card Screenshot](./README_Screenshots/Faceup.png?s=320)

The Student will then check their work against the pre-recorded audio of the correct answer by pressing play, and will check whether they arrived at the correct answer.  
![Check Answer Screenshot](./README_Screenshots/CheckAnswer.png?s=320)

Selecting either "yes" or "no" will advance to the next Facedown card and the entire process continues. After answering the last card, a summary will show the number correct for the previous deck assessment and students can "Try Again" which will restart the current Deck or return to their Dashboard to select a different Deck.
![Assessment Summary Screenshot](./README_Screenshots/Summary.png?s=320)
