const express = require('express');
const app = express();

const users = [ 
  { "number": 1234123412341234, "id": "123" },
  { "number": 2345234523452345, "id": "546" },
  { "number": 8907890789078907, "id": "101" },
  { "number": 5678567856785678, "id": "1" },
  { "number": 6789678967896789, "id": "25" },
 ];

app.get('/card/:id', function (req, res) {
  res.send(JSON.stringify(users.find((user) => user.id == req.params.id)));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
