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

![End Game](https://github.com/mushfique44/elementals/blob/main/media/end_game.jpg)

### Features Left to Implement

- Another feature idea is to implement these sections into pages and having them be easy to navigate around.
- To make the week based workout plans to appear in a weekly calander format when the screen sizes are larger, so it makes it more appealing to the user and easier to follow.
- Have a gallary page with images of users transformations and experiences of using the workout plans.
- Make the sign up form more detailed so that it request more information by giving a questionare.

## Testing

This website has been tested to work on chrome, microsoft edge and firefox.
The web page is responsive, looks good and is functional on all screen sizes. This was checked using the inspect element feature on google chrome.
The sign up form has been tested and works perfectly. It will require the user to input in all fields and make sure the email is in correct format.
All sections of the webpage are easy to read and understand.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fmushfique44.github.io%2Fgoing-gym%2F)

![W3S HTML](https://github.com/mushfique44/going-gym/blob/main/media/w3c_html.PNG)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=mushfique44.github.io%2Fgoing-gym&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

![W3C CSS](https://github.com/mushfique44/going-gym/blob/main/media/w3c_css.PNG)

- Accessability
  - The accessabilty scores are as follows, done through the website [Page Speed Insight](https://pagespeed.web.dev/)

![Page Speed Insight](https://github.com/mushfique44/going-gym/blob/main/media/page_speed.PNG)

![Page Speed Insight Mobile](https://github.com/mushfique44/going-gym/blob/main/media/page_speed_mobile.PNG)

### Unfixed Bugs

There is only one bug that has been noticed and that is the body images in the workout section do not align properly when the workout plans are expanded as shown below. This is because of the way the images were posiioned in each div element meant that they could not be refered to when the checkbox was checked. However this is not the case when all the section are expanded out at the same time, as all the body images get hidden. Because of the layout of the HTML code it was very challenging to figure (in CSS) out how to get the images to hide while some of the sections where expanded. This would be an easy solve with JAVA script as it can do more complicated executions.

![Unfixed Bug](https://github.com/mushfique44/going-gym/blob/main/media/unfixed_bug.PNG)

## Deployment

Github and codeanywhere was used to write and store the code for this website:

- Github pages was used to deploy the website. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - Under the 'Code and automation' section, select pages
  - From the source section drop-down menu, select deploy from a Branch
  - In the Branches section select 'main' and '/(root)', and then hit save
  - Once its saved refresh page a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://mushfique44.github.io/going-gym>

## Credits

The content idea was inspired by myself but some of the features of the website was inspired from different websites.

### Content

- The layout of the webiste was inspired by the 'Coding Club' website given by code-institute
- The header and footer section was inspired by the 'Love Running' website given by code-institut

### Media

- All images where used are license free and were taken from [Vecteezy](https://www.vecteezy.com/)
- All the icons were taken from [Font Awesome](https://fontawesome.com/)