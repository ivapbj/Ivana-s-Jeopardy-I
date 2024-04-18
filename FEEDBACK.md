### This file was created in lieu of the missing or deleted feedback pull request ###

Functionality:
  - Project has a bug that pops up an alert informing the user of a turn switch every, roughly, three seconds;
  - When a card is clicked on, a question is displayed, however if the user clicks on that same card again, the question changes;
  - Questions are not able to be answered as when a user enters an answer into the provided form and hits submit, nothing happens, nor does anything happen with pass;
  - Final Jeopardy does not display a question, does not say which user is supposed to be entering their wager, does not show points of both players, nor allows a user to answer anything;
  Suggestions:
    - In the future, ensure that your card does NOT allow a user to click on it again (either by disabling it or by some other means), and instead prompts the user to answer or pass;
    - Ensure that you remove the bug where you have an alert every 5 seconds that informs the user of a turn change (this bug comes from lines 295 through 299 of your index.js as you have made it so that on the load of the page, the user enters into a loop of player1Turn() and player2Turn(): I would suggest that you make these functions NOT call one another after 3 seconds (i.e remove the setTimeout part) and simply call the functions within your checking of a user submitted answer or when the user selects pass;
    - In the future, I would suggest you spend more time working on the basic foundation- i.e making sure your submit and pass buttons work and that your turns work- BEFORE adding in all the question content;
  Icebox:
    - There is no pre-playing question randomization as all questions of a category cycle through the same card if clicked enough, there is no prompt to enter unique player names, nor is there a daily double, nor is there a fetch to an external api/db to get questions from, as such I cannot award the icebox point;
  Overall Score: 1/3

Readability:
  -Variable names are clear and easy to understand and there is SOME descriptive commenting
  Suggestions:
    - In the future, I would suggest you remove the comment that you had copy pasted with your event listeners and I would encourage you to add more commenting to unique functions to better describe/explain them both for reviewers and for your own organizational sake;
  Overall Score: 2/3

Organization:
  - Code is organized with intention, and each component has a clear aim - however, some functions do not get called (like submitAnswer() within index-final.js);
  - Your files names are descript however they do not share a common naming convention;
  - ### This is not something I will be marking off for this time### -> Your event listeners are super numerous and it can cause issues with both organization and ease of changing/manipulation
  Suggestions:
    -In the future, I would suggest for you to simply use camelCasing to ensure that all your files are named and read the same way;
    -In the future, consider using a .map() on each category of questions to better ensure that your code can both be changed dynamically (i.e without having to go and make the same change 25 times) and can be much more concise. If you have any questions on this suggestion, first go back and check on Chris' github lessons for the week of April 1st as he demonstrates this suggestion there
  Overall Score: 2/3

### FINAL SCORE: 5/9 ###
