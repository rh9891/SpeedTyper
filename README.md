# Speed Typer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellowgreen)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![localStorage](https://img.shields.io/badge/Storage-localStorage-brightgreen)
![API](https://img.shields.io/badge/API-Custom-blue)

## Table of Contents

- [Description](#description)
- [User Story](#user-story)
- [Features of the Application](#features-of-the-application)
- [Preview of Speed Typer](#preview-of-speed-typer)
- [Links](#links)
- [Built Using](#built-using)
- [License](#license)

## Description

Challenge yourself as you race against the clock to type the randomly displayed words as quickly as you possibly can.
For each accurate word that you type, a new word will appear and additional time will be added to the clock.

Accumulate points for each accurately typed word, but don't let the time run out, or it'll be game over. Speed Typer is
a fun and exciting way to practice your typing skills that will have you hooked.

Speed Typer generates random words from a custom API and places it in the DOM. The application has a settings toggle
that not only allows the player to toggle between difficulties, but
stores difficulty setting in localStorage.

## User Story

```
AS A user
I WANT TO play a game where I can type words against a timer
SO THAT I can improve my typing speed.
```

## Features of the Application

```
GIVEN a typing game
WHEN I click on the "Start Game" button
THEN I am presented with the Speed Typer game.

WHEN I click on the "Directions" button
THEN I am presented with directions on how to play the game.

WHEN I play the game
THEN I am to type the word displayed into the designated field.

WHEN I type in the word correctly
THEN I am presented with a new word and additional time will be added to the clock.

WHEN I have run out of time
THEN I am given a prompt to record my score.

WHEN I have entered my name and saved my score
THEN I am presented with the top five scores.

WHEN I close the high score table
THEN I am presented with options to play again or quit.

WHEN I click on the "settings" icon
THEN I am presented with a menu to toggle between three difficulty settings.
```

## Preview of Speed Typer

![Speed Typer Preview](images/SpeedTyperLandingPage.png)

The following animation demonstrates the complete application functionality:

![Speed Typer Functionality]()

## Links

- [Deployed Application](https://rh9891.github.io/SpeedTyper)

- [Github Repository](https://go-speed-typer-go.netlify.app/)

## Built Using

Listed below are the resources and guides that made building this application possible:

- [localStorage Property](https://www.w3schools.com/jsref/prop_win_localstorage.asp)
- [setInterval() Method](https://www.w3schools.com/jsref/met_win_setinterval.asp)
- [setTimeout() Method](https://www.w3schools.com/jsref/met_win_settimeout.asp)
- [clearInterval() Method](https://www.w3schools.com/jsref/met_win_clearinterval.asp)
- [clearTimeout() Method](https://www.w3schools.com/jsref/met_win_cleartimeout.asp)

## License

The MIT License (MIT)

Copyright (c) 2021 Romie Hecdivert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.