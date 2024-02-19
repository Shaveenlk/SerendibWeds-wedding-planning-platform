import express, {Router} from 'express';
import { checkuser, createUser, getUserData } from '../controller/userController.js';
import { getTodo } from '../controller/todoController.js';

const route =express.Router();

route.post("/createuser", createUser);
route.get('/checkUser/:firebaseUserId', checkuser);
route.get('/getuser/:firebaseUserId', getUserData);
route.get('/todo/:firebaseUserId',getTodo);
// route.delete('/todo/:firebaseUserId',deleteTodo);

export default route;