# Elementals

The Elementals is webpage that contains a simple rock-paper-sissors style game. The elements of this game were inspired by popular entertainment media, 'Avatar: the last airbender' and 'Pokemon'

These three catorgories are generalised as most popular type of workouts a person would look for, and these consists of a lean workout plan; which is to loss muscle and look more toned and fit, then there''s bulk workout plan; which is for someone looking to gain a lot of muscle, and finally there's the weight loss plan; which is for someone looking to lose fat.

The website also provides an option for people to sign up a personalised workout plan which will cater more to the individual and their body type.

![Responsice Mockup](https://github.com/mushfique44/going-gym/blob/main/media/multi_screen_media.PNG)

## Features

There are five sections to this webpage:

    The Nav bar 
    The Hero image
    The Workout Plans
    The Sign up section
    The Footer

### Existing Features

- __Navigation Bar__

  - Featured at the top of the page, the full responsive navigation bar includes links to the Logo, Home, Workout Plans and Sign Up saections
  - This section will always show no matter what section you are in and will allow the user to jump from section to section.
  - The Nav Bar is also responsive to different screen sizes and will have a feature for smaller screen such as mobile phones, where the nave bar will be become a responsive drop down feature.

![Nav Bar](https://github.com/mushfique44/going-gym/blob/main/media/nav_bar.PNG)
![Nav Bar](https://github.com/mushfique44/going-gym/blob/main/media/nav_bar_mobile.PNG)

- __The Hero image Section__

  - The hero image or landing page is an image of a gym and consists of a slogan element to the image.
  - This section grabs the users into the purpose of the website and motivates with a powerful slogan.

![Landing Page](https://github.com/mushfique44/going-gym/blob/main/media/hero_img.PNG)

- __Workout Plans Section__

  - The Workout plans section allows the user to get straight into it and give the users three headings to look at.
  - The users will be able to able pick between a Lean workout, a Buk workout and a Loss workout.
  - Each plan is hidden and will expand when the user presses or clicks the drop down icon.
  - And each plan section will have a detailed week based workout plan for the users to look at.

![Workout plans](https://github.com/mushfique44/going-gym/blob/main/media/workout_section.PNG)

- __Lean, Bulk and Weight Loss Workout Plans__
  - This is how it looks when the user drops the section down.
  - It gives the user a detailed plan that they can follow on a weekly basis.
  - All three are week based plans but have differnet workouts for the user to follow as best fit for them

![Lean plans](https://github.com/mushfique44/going-gym/blob/main/media/lean_workout.PNG)

![Bulk plans](https://github.com/mushfique44/going-gym/blob/main/media/bulk_workout.PNG)

![Loss plans](https://github.com/mushfique44/going-gym/blob/main/media/loss_workout.PNG)
  
- __Sign-Up section__

  - This section is for users to sign up to a personalised workout plan, by wflling in a form.
  - The form will request the users Full name, Email address and what type of personalised workout plan they are looking for.
  - This form is set on a dumbell background to give the users motivation when they sign up.

![Sign up form](https://github.com/mushfique44/going-gym/blob/main/media/signup_section.PNG)

- __The Footer__

  - The footer section is for all the social media pages related to the website Going Gym. All the social links will open to new tabs for the users to give ease of access and better navigation.

![Footer](https://github.com/mushfique44/going-gym/blob/main/media/footer.PNG)

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