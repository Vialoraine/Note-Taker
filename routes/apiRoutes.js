// Load data
var notes = require("../db/db.json");
var fs = require("fs");
var path = require("path");

// ROUTER

module.exports = function (app) {

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });



  // API POST Request

  app.post("/api/notes", function (req, res) {
    let newNotes = {
      title: req.body.title,
      text: req.body.text,
    };

    fs.readFile("./db/db.json", "utf8", function (error) {
      if (error) {
        return console.log(error);
      }
      console.log("success!")
    });
    const allNotes = JSON.parse(data);

    allNotes.push(newNotes);

  })


}

// var newNotes = JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json", "utf8")));
// res.sendFile(path.join(__dirname, "public/notes.html"));

// newNotes = replacePlaceholders(newNotes, "Note Title", newNotes.get()); 