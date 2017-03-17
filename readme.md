---
title: NanoPets
type: exercise
competencies: control flow, js basics
creator: Christine Yi for WDIR
---


[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive-remote)

# Exercise: NanoPet

![image](http://www.fangirlnextdoor.com/wp-content/uploads/2013/04/nano-pets.jpg)

## Exercise Objectives
* Run Javascript in the browser
* Explore interactivity using alerts and prompts to get user input
* Gain practice with control flow and writing functions

## Setup

* `index.html` is linked to `app.js`. You will write your code in `app.js`.
* You will work in pairs and create a simple interactive game.

## Instructions

* Using [alerts and prompts](https://www.w3schools.com/js/js_popup.asp), create functions so that when the game starts you have a choice of options from a menu:

1. Set NanoPet's name
2. Feed the pet
     * This increases our NanoPet's foodInTummy by 5
3. Exercise the pet
     * This decreases our NanoPet's foodInTummy by 3
4. After each selection it alerts you with the NanoPet's stats.


* NanoPet has 2 properties: a name, and a foodInTummy. Let's start with default values of our pet:

```
var nanoPet = {
  name: "Gertrude",
  foodInTummy: 0
}
```

#### TIPS:
 - Separate the functionality.
 - Use your debugging skills and console log. Don't assume things are what you think they are.
 - Work one piece at a time.


## Reach Goal:
- Add an option to restart the game so that NanoPet goes back to its default values.
- Add `sing with pet` as an option. Selecting this option will cause your pet to sing "la la la la". You'll have to add another property to NanoPet.

## Super Reach
- Display the information on the page!
- Add buttons and make it an interactive site.

## Resources
- [Alerts and prompts](https://www.w3schools.com/js/js_popup.asp)
