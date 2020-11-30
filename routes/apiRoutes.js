const noteData = require('../db/db.json');
const fs = require("fs");
module.exports = function (app) {

  app.get('/api/notes', function (req, res) {
    // console.log("loading api page")
    res.json(noteData);
  });

  app.post('/api/notes', function (req, res) {
    let resNote = req.body;
    noteData.push(resNote);
    // alert("1234")
    res.json(true);

    let dbString = JSON.stringify(noteData);
    fs.writeFileSync("db/db.json", dbString, function (err) {
      // console.log("write something")
      if (err) { throw err
        console.log(err)}
    })


    //     console.log("complete");
  });

  // delete data
  app.delete("/api/notes/:id", function (req, res) {
    var id = req.params.id;
    noteData.forEach(function (item, index, arr) {
      if (item.id === id) {
        arr.splice(index, 1);
        res.send();
        return;
      }
    });
    res.status(404).send();
  });

};