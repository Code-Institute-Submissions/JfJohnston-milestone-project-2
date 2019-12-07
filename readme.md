# Do I Draw?

The whole purpose of this website will be to create editable probability tables for board games.

Many games these days have decks or tiles that you can draw from that have various effects and by creating a system to keep track of the state of the board and the starting state of the deck we should be able to determine the probabilities of any draw to have a desired outcome. 

## UX

In an effort to keep the website simple I want to have a very minimalistic UI. There is going to be a lot of numbers thrown at the user and options to change the status of the board. With multiple button inputs I want to make sure that each one stands out and that there are no distracitons from the current page the user is wating.

For example, if a user opens the secion for "Betrayal At Baldur's Gate" they will see a setup for the tiles to draw from similar to how the game should be laid out and the ability to mark what types of tiles are drawn at the top with the probabilities for the tile types on clearly displayed. This will allow them to make an informed choice of what areas to explore in the game. Beneath this main view will be the "Reset Game" button easily accessible and findable, but not in the way of the UI for the game board.

## Features

### Existing Features

- "Betrayal at Baldur's gate" tile management
- "Order of the Stick" standard deck with positive effects when drawing cards, unless it's a trap. 2 possible starting setups depending of if the user has the expansion.

### Features left to implement

- "Clank!" deck management + shuffle mechanics
- Custom deck creation

## Technology Used

- HTML
    - Used for construction the webpage layouts.
- CSS
    - Used for layounts of the webpage, trying to colour the different pages to match their respective games.
- JavaScript
    - Activated by button clicks from the user to change the states and statistics of the game board and thus give feedback on new statistics.

### Libraries
- [Bootstrap](https://getbootstrap.com/) 
    - For Webpage construction with CSS
- [FontAwesome]
    - For easy icon links
- [Google-Forms]
    - For a contact form for suggestion

## Testing

Testing on this was done via manually due to the relatively simple nature of the individual functions that call eachother. 
In addition I did get some friends to stress test the functionality of different interactive pages and report bugs.
No automation was used

## Deployment

Deployment managed by Github, no alternate branches used as of yet, however with this finialized version there will be implementation of branches in the future using separate branches for the respective game pages as they are developed and another branch in order to move games from "upcoming.html" to "livegames.html"

Code editing is done locally on Visual Studio Code Software. 
Openning any of the HTML files from local folders should allow for running the software

## Credits

### Content
All content on the site is compiled and produced by Joseph Johnston

### Media
Images obtained from the websites of the respective game owners and used under fairuse for recognition

### Acknowledgements
My sister and her fiancé for stress testing the pages and finding any faults.
My partner for helping me manage my own stress
W3Schools and SkillShare for being far more useful than Code-Institute
