import express, {Router} from 'express';
import { checkuser, createUser, getUserData } from '../controller/userController.js';
import { deleteTodo, getTodo, updateTodo,addTodo } from '../controller/todoController.js';


const route =express.Router();

route.post("/createuser", createUser);
route.get('/checkUser/:firebaseUserId', checkuser);
route.get('/getuser/:firebaseUserId', getUserData);
route.get('/todo/:firebaseUserId',getTodo);
route.put('/todo/:firebaseUserId/:index', updateTodo);
route.delete('/todo/:firebaseUserId/:index',deleteTodo);
route.post('/todo/:firebaseUserId', addTodo);


export default route;