# Password Generator Starter Code


When working on this project we are learning how to create a password generator. I found this homework hard, as I have never used javascript. So when I started this project I frist went to the consoul log and it told me that the password generator was undfined. With that clue I was able to pin point what line in javascript to start my work. Then I used a consal log to let me know that the button was being clicked. Then I used the retun to put "password gose here" to see if it would be put in the password box, and it worked. After that I moved on to the readme and read it super careful, and wrote out all the things I needed for my password. Then I made Var's for all things in the readme, that way I could use them in my funtion. After that I made a prompt asking the user how many letters they wanted to use in there password. 


Once all this was done I thought it would be good to write persudo code to help me outline my thoughts on how I was going to do all the task I need to do. 

# Persudo Code 

1.if the button is clicked then a prompt should apper with how long your password can be (it can be 8-128 long)

2.second prompt is upper or lower case letters 

3.third prompt will be special characters included in the password 

4.then the info needs to be validated so it can output the password 

5.after that the password will be retuned in the password box 

After the persudo code I went about creating my Supersring which is empty, this was helpful because I was able to just add the things I need and it can flow thought my code. After this was complete I moved to getting the password length working I did this with logical operators. The final part was getting the password to become random. I did this with a Four loop and the math random and floor. once this was done we created a new var for the password genorated. 



## User Story

AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

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
THEN the password is either displayed in an alert or written to the page

!["Here is my Screen Shot"](https://file%2B.vscode-resource.vscode-cdn.net/Users/jenniferarevalo/passWord-gen/assets/Screen%20Shot%202023-06-02%20at%209.55.40%20PM.png?version%3D1685761318350)