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

//socket.io instantiation
const io = require("socket.io")(server)

//listen on every connection
io.on('connection', (socket) => {
    console.log('New user connected')

    //default username
    socket.username = "Anonymous"

    //listen on change_username
    socket.on('change_username', (data) => {
        socket.username = data.username
    })

    //listen on new_message
    socket.on('new_message', (data) => {
        //broadcast the new message
        io.sockets.emit('new_message', { message: data.message, username: socket.username });
    })

    //listen on typing
    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', { username: socket.username })
    })
})