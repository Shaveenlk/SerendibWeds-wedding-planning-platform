import express, {Router} from 'express';
import { checkuser, createUser, getUserData } from '../controller/userController.js';
import { deleteTodo, getTodo, updateTodo,addTodo } from '../controller/todoController.js';
import {getVendors,getVendor, checkVendor} from "../controller/vendorController.js"
import { getServices } from '../controller/serviceController.js';
import { getEventDetails } from '../controller/eventDetailsController.js';


const route =express.Router();

route.post("/createuser", createUser);
route.get('/checkUser/:firebaseUserId', checkuser);
route.get('/getuser/:firebaseUserId', getUserData);
route.get('/todo/:firebaseUserId',getTodo);
route.delete('/todo/:firebaseUserId/:taskId',deleteTodo);
route.put('/todo/:firebaseUserId/:index', updateTodo);
route.post('/todo/:firebaseUserId', addTodo);
route.get('/vendors',getVendors)
route.get('/vendors/:id',getVendor)
route.get('/vendors/:id/services',getServices)
route.get('/checkvendor/:firebaseUserId', checkVendor)
route.get('/vendorsEvents/:id',getEventDetails)

export default route;