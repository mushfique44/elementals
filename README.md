# Elementals

The Elementals is website that contains a simple rock-paper-sissors style game. The elements of this game were inspired by popular entertainment media, 'Avatar: the last airbender' and 'Pokemon'. Its a game for all demographics that can enjoy a truly simple game were the user can play against a completely random computer. The elements are representative of elements of this world from, electricity, fire, water and earth. Each element has a strength and a weakness against another element. The image below shows what these weeknesses are.

![Elements Table](https://github.com/mushfique44/elementals/blob/main/media/element_table.JPG)

The users of this site will learn player to play a basic game, where they will pick an option of one out of four and then the computer will pick one of those same options at random, and then the game will determine who wins that round as established above in the table. The game will end after 5 rounds and the winner will be determined (a Draw is possible).This game can be played by all ages and can be played in all way, that being competitive, friendly or for fun.

![Responsice Mockup](https://github.com/mushfique44/elementals/blob/main/media/multi_screen_media.jpg)

## Features

There are seven sections to this webpage:

    The Header
    The Help Screen 
    The Player Choice Section
    The Computer Choice Section
    The Winner of the Round
    The Scorecard
    The End Game Screen

### Existing Features

- __The Header__

  - Featured at the top of the page, the responsive header includes two buttons, one to restart game and one to open the help screen.
  - The size of the header is responsive to screen size as well

![Header](https://github.com/mushfique44/elementals/blob/main/media/header.jpg)

- __The Help Screen__

  - This screen is originally hidden and will appear when the '?' button is clicked. 
  - This screen is greatly laidout, where it gives the rules of the game as well as an image of the possible elemental wins.
  - To close this screen there is an 'X' button at the top right corner.

![Help Screen](https://github.com/mushfique44/elementals/blob/main/media/help_screen.jpg)

- __Player's Choice Section__

  - This section is for the user to pick their choice.
  - There is 4 buttons to choose from, consisting of the elements, 'Electricity', 'Fire', 'Water' and 'Earth'.
  - Once the user picks one of the elements, their choice will be displayed below the buttons in the 'You chose' section.

![Players choice](https://github.com/mushfique44/elementals/blob/main/media/player_choice.jpg)

- __Computer's Choice Section__

  - This section is similar to the 'Players choice' section but this where the computer choice will display.
  - This section will display the computers choice and will not have buttons as this choice is completely randomised.
  - Onces the user has picked an element then will the computer choice be displayed.

![Comps choice](https://github.com/mushfique44/elementals/blob/main/media/computer_choice.jpg)

- __Winner of the Round__

  - Once the player has picked and the computers choice has been randomised the round will end and the winner of the round will be displayed at the bottom of both those sections.

![End of Round](https://github.com/mushfique44/elementals/blob/main/media/end_of_round.jpg)

- __The Scorecard__

  - This section is where the scores of the game will display.
  - If the winner of the round is the user, the 'Wins' tally will increase and if the computer wins then the 'Losses' tally increase. (Note: Draws are not tallied)
  - It will also tally the number of rounds played.

![Scorecard](https://github.com/mushfique44/elementals/blob/main/media/score_area.jpg)

- __The End Game Screen__

  - Once five round are complete, the game ends and a 'End Game' screen will appear and will display the winner of the whole game.
  - Note: game can end in a Draw.
  - The screen will prompt you restart the game to play the game again.

![End Game](https://github.com/mushfique44/elementals/blob/main/media/end_game.jpg)

### Features Left to Implement

- Add images of the elements to display when the choices are selected by both user and computer.
- Have tie-breaker round if the game ends in a Draw after five rounds.
- Add more elements to make the game more complex.

## Testing

This website has been tested to work on chrome, microsoft edge and firefox.
The web page is responsive, looks good and is functional on all screen sizes. This was checked using the inspect element feature on google chrome.
All sections of the webpage are easy to read and understand.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmushfique44.github.io%2Felementals)

![W3S HTML](https://github.com/mushfique44/elementals/blob/main/media/HTML_checker.jpg)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=mushfique44.github.io%2Felementals&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![W3C CSS](https://github.com/mushfique44/elementals/blob/main/media/CSS_checker.jpg)

- JavaScript
  - No errors were found when running the code through the official [Jshint validator](https://jshint.com/)

![Jshint JavaScript](https://github.com/mushfique44/elementals/blob/main/media/JS_code_checker.jpg)

- Accessability
  - The accessabilty scores are as follows, done through the website [Page Speed Insight](https://pagespeed.web.dev/)

![Page Speed Insight](https://github.com/mushfique44/elementals/blob/main/media/performance_desktop.jpg)

![Page Speed Insight Mobile](https://github.com/mushfique44/elementals/blob/main/media/performance_mobile.jpg)

### fixed Bugs

  - There was button bug. Originally the help button was a button tag and the bug that arose from that was, everytime the help button was clicked the game would count it as a pick and the score tallys will increment randomly. To fix this the tag was changed from a button to div tag and the click code was able to read the div with associated div class name.  

## Deployment

Github and codeanywhere was originally used but had to be changed to gitpod and was used in the second half of the project, to write the code:

- Github pages was used to deploy the website. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - Under the 'Code and automation' section, select pages
  - From the source section drop-down menu, select deploy from a Branch
  - In the Branches section select 'main' and '/(root)', and then hit save
  - Once its saved refresh page a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://mushfique44.github.io/elementals>

## Credits

The content idea was inspired by Rock/Paper/Sissor style game and the media contents Avatar: Last Airbender and Pokemon.

### Content

- Some of the JS code of the webiste was inspired by the content from code-institute

### Media

- All images where used are license free and were taken from [FreeImages](https://www.freeimages.com/)
- All the icons were taken from [Font Awesome](https://fontawesome.com/)