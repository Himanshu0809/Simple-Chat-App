const express = require("express"),
      app = express();

//set the template engine ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

//routes
app.get('/', (req, res) => {
    res.render('index');
});

const PORT = process.env.PORT || 8000;

server = app.listen(PORT, function () {
    console.log(`Chat App server started on port ${PORT}`);
});

const io=require("socket.io")(server);

io.on("connect",(socket)=>{
    console.log("New user connected");
});