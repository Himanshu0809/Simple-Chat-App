const express = require("express"),
      app = express();

//set the template engine ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

//routes
app.get('/', (req, res) => {
    res.send("hello")
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
    console.log(`Chat App server started on port ${PORT}`);
});
