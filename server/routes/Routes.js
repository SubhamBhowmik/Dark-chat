import express from 'express';
import { addUser,getUsers} from '../controller/user-controller.js';
import {newconversation,getConversation} from '../controller/conversation-controller.js'
import { newMessage,getMessage} from '../controller/message-controller.js';
const route = express.Router();

route.post('/add', addUser);
route.get('/users',getUsers);
route.post('/onadd',newconversation)
route.post('/get',getConversation)
route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);
export default route;