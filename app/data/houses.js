var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');

//Houses are the possible results the user can get by answering the survey
//Whichever house score matches best with the user's scores will be displayed

var houses = [{
    "house":"Baratheon",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/0/00/House-Baratheon-Main-Shield.PNG/revision/latest?cb=20170519002924",
    "scores":[5, 5, 5, 5, 5, 2, 5, 5, 2, 4]
},
{
    "house":"Stark",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Stark-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101103142",
    "scores":[6, 6, 6, 6, 6, 2, 6, 6, 1, 2]
},
{
    "house":"Targaryen",
    "photo":"../images/cmc_cover.jpg",
    "scores":[7, 7, 7, 7, 7, 2, 7, 7, 2, 4]
},
{
    "house":"Lannister",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/8/8a/House-Lannister-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101095357",
    "scores":[4, 4, 4, 4, 4, 1, 4, 4, 2, 3]
},
{
    "house":"Arryn",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/1/15/House-Arryn-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170101094153",
    "scores":[3, 3, 3, 3, 3, 1, 3, 3, 1, 1]
},
{
    "house":"Greyjoy",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/8/86/House-Greyjoy-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170523015836",
    "scores":[1, 1, 1, 1, 1, 1, 1, 1, 2, 2]
},
{
    "house":"Tyrell",
    "photo":"https://vignette.wikia.nocookie.net/gameofthrones/images/c/cf/House-Tyrell-Main-Shield.PNG/revision/latest/scale-to-width-down/350?cb=20170108163035",
    "scores":[2, 2, 2, 2, 2, 2, 2, 2, 1, 3]
},
]

module.exports = houses;




//EXAMPLE CODE FOR THIS FILE
// var userData = [
//     {
//         "name": "",
//         "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         "scores": [
//             5,
//             1,
//             4,
//             4,
//             5,
//             1,
//             2,
//             5,
//             4,
//             1
//         ]
//     },
//     {
//         "name": "MariaLuisa",
//         "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//         "scores": [
//             3,
//             5,
//             2,
//             1,
//             3,
//             5,
//             2,
//             4,
//             3,
//             4
//         ]
//     }
// ];
// var newArray = [];
// var otherArray = [];


// for (var i = 0; i < userData.length; i++) {

//     var scores = userData[i].scores;
//     var currentScore = userData[userData.length - 1].scores;
//     for (var j = 0; j < userData[i].scores.length; j++) {
//         // if(userData[i].scores[j] === userData[userData.length-1].scores[j]){
//         // }
//         var otherScores = parseInt(userData[i].scores[j]) - parseInt(userData[userData.length - 1].scores[j]);

//     }
//     newArray.push(scores);
//     console.log(newArray);

// }
// //map function jquery 
 
// otherArray.push(otherScores);
// // newArray.push(scores);
// // console.log(newArray);
// console.log(currentScore);
// console.log(otherArray);

// //  var weirdArray = currentScore - userData[i].scores;
// //  console.log(weirdArray) 
// // }

// // Note how we export the array. This makes it accessible to other files using require.
// module.exports = userData;
