// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var dataHouses = require("../data/houses");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/houses", function (req, res) {
    res.sendFile(path.join(__dirname, "../data/books.js"))
  });
  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------


  app.post("/api/houses", function (req, res) {
    //need the internal structure to this once I have more information about the survey data
    var userInput = req.body;
    userScores = userInput['scores[]'];
    // console.log(userInput);
    var totalDifference = 0;
    var houseMatched = {
      houseName: "",
      houseShield: "",
      chosenDifference: Infinity
    };
    for (var i = 0; i < dataHouses.length; i++) {
      currentHouse = dataHouses[i];
      totalDifference = 0;
      for (var j = 0; j < userInput.scores.length; j++) {
        currentUserScore = userInput.scores[j];
        currentHouseScores = currentHouse.scores[j];
        totalDifference += Math.abs(parseInt(currentHouseScores) - parseInt(currentUserScore));
        console.log(totalDifference);
      }
      if (totalDifference <= houseMatched.chosenDifference) {
        houseMatched.houseName = currentHouse.house;
        houseMatched.houseShield = currentHouse.photo;
        houseMatched.chosenDifference = totalDifference;
      }
    }
    console.log(houseMatched)
    res.json(houseMatched);
  });
};