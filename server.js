const express = require('express');
const app = express();

const cards = [ 
  { number: "1234123412341234", id: 123 },
  { number: "2345234523452345", id: 546 },
  { number: "8907890789078907", id: 101 },
  { number: "5678567856785678", id: 1 },
  { number: "6789678967896789", id: 25 },
 ];
 app.get('/card/:id', function (req, res) {
  res.send(JSON.stringify(cards.find((card) => card.id == req.params.id)));
});
app.get("/card/:id", function (req, res) {
  const idOfcard = parseInt(req.params.id);
  const c = cards.find((c) => c.id === idOfcard);
  if (!c) {
    res.status(404).send();
  }
  res.status(200).json(c);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
