const express = require("express");
const app = express();
const server = require("http").Server(app);
const { v4: uuidv4 } = require("uuid");
const io = require("socket.io")(server);
const { ExpressPeerServer } = require("peer");
const url = require("url");
const peerServer = ExpressPeerServer(server, {
    debug: true,
});
const path = require("path");

app.set("view engine", "ejs");
app.use("/public", express.static(path.join(__dirname, "static")));
app.use("/peerjs", peerServer);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "static", "index.html"));
});

app.get("/join", (req, res) => {
    res.redirect(
        url.format({
            pathname: `/join/${uuidv4()}`,
            query: req.query,
        })
    );
});

app.get("/joinold", (req, res) => {
    res.redirect(
        url.format({
            pathname: req.query.meeting_id,
            query: req.query,
        })
    );
});

app.get("/join/:rooms", (req, res) => {
    res.render("room", { roomid: req.params.rooms, Myname: req.query.name });
});

io.on("connection", (socket) => {
    socket.on("join-room", (roomId, id, myname) => {
        socket.join(roomId);
        socket.to(roomId).broadcast.emit("user-connected", id, myname);

        socket.on("messagesend", (message) => {
            console.log(message);
            io.to(roomId).emit("createMessage", message);
        });

        socket.on("tellName", (myname) => {
            console.log(myname);
            socket.to(roomId).broadcast.emit("AddName", myname);
        });

        socket.on("disconnect", () => {
            socket.to(roomId).broadcast.emit("user-disconnected", id);
        });
    });
});

server.listen(process.env.PORT || 3030);

var User = require('./models/userModel'),
  bodyParser = require('body-parser'),
  jsonwebtoken = require("jsonwebtoken");


const mongoose = require('mongoose');
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true
};

const mongoURI = process.env.MONGODB_URI;
//mongodb://127.0.0.1:27017/?compressors=none
mongoose.connect('mongodb+srv://admin_user:chip.the%40123@yilli.zfkq9pp.mongodb.net/?retryWrites=true&w=majority', option).then(function(){
    //connected successfully
    console.log("connected successfully")
}, function(err) {
    //err handle
    console.log(err)
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
    jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
      if (err) req.user = undefined;
      req.user = decode;
      next();
    });
  } else {
    req.user = undefined;
    next();
  }
});
var routes = require('./route/userRoutes');
routes(app);

app.use(function(req, res) {
  res.status(404).send({ url: req.originalUrl + ' not found' })
});



