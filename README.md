# password Generator

## Description

The aim of this project is to generate a random password for users based on the character type they choose. Four general character types are defined to generate a password from. The project consists of two main functions, one that generates the random password while the second function writes a password in a browser. It also includes logic to validate user's input, ensure the inclusion of the character type chosen by user in the generated password, and to generate a password when conditions are met.


## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security.


## Acceptance Criteria 

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page.

## Installation

You can clone this particular repository (follow this link  https://github.com/Nafbek/password-generator-challenge3 ) form GitHub, and paste it to your local machine. Unzip the repository directory, then open the 'index.html' file in any of your prefered web browser. 

## Usage

After you have opened the 'index.html' file in your prefered browser, click the 'Generator Password' button to begin generating a password. You will then be prompted to choose the length of the password (with a minimum 8 and maximum 128 characters) and the character types you would like to include in your password. If the requirements are fulfilled, the computer will generate a password and display it inside the 'Generate Password' box.


The mock-up of the page can be viewed either by double clicking on the file "Animation.gif" in the repository or by clicking on the follwing syntax link.



![alt text](Animation.gif)


## Credits

I would like to appreciate Philip Clark, a Teaching Assistant, for his constructive feedback and suggestions. Particularly, he recommended using different variable names for the characters type used to generate a random password and the user's preference. In addition to this, he advised me to array and to apply a logic that ensures the inclusion of character type chosen by user in the generated password.  

Lastly, I am often grateful to open source, https://www.w3schools.com/js/js_function_definition.asp . 

## License

The MIT License applies (check here https://github.com/Nafbek/password-generator-challenge3/blob/main/LICENSE for details).