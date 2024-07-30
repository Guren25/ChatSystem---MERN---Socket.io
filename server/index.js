const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const userRoute = require("./Routes/userRoute");
const chatRoute = require("./Routes/chatRoute");
const messageRoute = require("./Routes/messageRoute");

require("dotenv").config()

app.use(express.json());
app.use(cors());
app.use("/api/users", userRoute)
app.use("/api/chats", chatRoute)
app.use("/api/messages", messageRoute)

app.get("/", (req, res) =>{
    res.send("Welcome to our chat app APIs....")
});

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);

    socket.on("disconnect", () => {
        console.log("User Disconnected", socket.id);
    });
});

const port = process.env.PORT || 3001;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
    console.log(`SERVER RUNNING ON PORT: ${port}`);
});


mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connection established"))
.catch((error) => console.log("MongoDB connection failed: ", error.message));