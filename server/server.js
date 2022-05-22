import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './routes/Routes.js';
import mongoose from 'mongoose'
import httpServer from 'http-server'

import {Server, Socket} from 'socket.io';
dotenv.config();
const app = express();


const PORT=8000||process.env.PORT;
const username=process.env.MONGO_USERNAME
const password=process.env.MONGO_PASSWORD 
const url1=`mongodb+srv://whatsappdatabase:${password}@cluster0.0uolw.mongodb.net/newcreated?retryWrites=true&w=majority`;

mongoose.connect( url1,{
    useNewUrlParser: true, useUnifiedTopology: true
}) ;
const db=mongoose.connection;
db.once('open',()=>{
    console.log('DB is established');
})




app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);
  app.listen(process.env.PORT || PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

 const io = new Server(httpServer)
let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({ userId, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.userId === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected')

    //connect
    socket.on("addUser", userId => {
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    })

    //send message
    socket.on('sendMessage', ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);
        io.to(user.socketId).emit('getMessage', {
            senderId, text
        })
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);  
    })
})