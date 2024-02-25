import express, {Router} from 'express';
import { checkuser, createUser, getUserData } from '../controller/userController.js';
import { deleteTodo, getTodo } from '../controller/todoController.js';
import {getVendors,getVendor} from "../controller/vendorController.js"
import { getServices } from '../controller/serviceController.js';

const route =express.Router();

route.post("/createuser", createUser);
route.get('/checkUser/:firebaseUserId', checkuser);
route.get('/getuser/:firebaseUserId', getUserData);
route.get('/todo/:firebaseUserId',getTodo);
route.delete('/todo/:firebaseUserId/:taskId',deleteTodo);
route.get('/vendors',getVendors)
route.get('/vendors/:id',getVendor)
route.get('/vendors/:id/services',getServices)


export default route;