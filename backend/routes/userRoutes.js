import express, {Router} from 'express';
import { createUser } from '../controller/userController.js';

const route =express.Router();

route.post("/createuser", createUser);

export default route;