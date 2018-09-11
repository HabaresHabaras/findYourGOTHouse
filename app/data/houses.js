var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

//Houses are the possible results the user can get by answering the survey
//Whichever house score matches best with the user's scores will be displayed

var houses = [{
    "house":"Baratheon",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924",
    "scores":[5, 5, 5, 5, 5, 2, 5, 5, 2, 4],
    "houseStory":"A house of great generals and warriors."
},
{
    "house":"Stark",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142",
    "scores":[6, 6, 6, 6, 6, 2, 6, 6, 1, 2],
    "houseStory":"Noble and wise, the members of this house are always getting ready for winter."

},
{
    "house":"Targaryen",
    "photo":"../images/cmc_cover.jpg",
    "scores":[7, 7, 7, 7, 7, 2, 7, 7, 2, 4],
    "houseStory":"The royal family. Magic runs in their veins and have a bond with dragons."

},
{
    "house":"Lannister",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101095357",
    "scores":[4, 4, 4, 4, 4, 1, 4, 4, 2, 3],
    "houseStory":"A house of sharp strategists. "

},
{
    "house":"Arryn",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101094153",
    "scores":[3, 3, 3, 3, 3, 1, 3, 3, 1, 1],
    "houseStory":"A wise and peacefull house, for "

},
{
    "house":"Greyjoy",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170523015836",
    "scores":[1, 1, 1, 1, 1, 1, 1, 1, 2, 2],
    "houseStory":"A house of pirates"

},
{
    "house":"Tyrell",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170108163035",
    "scores":[2, 2, 2, 2, 2, 2, 2, 2, 1, 3],
    "houseStory":"You are royal and fierce like a dragon, this must be your house."

},
]

module.exports = houses;

