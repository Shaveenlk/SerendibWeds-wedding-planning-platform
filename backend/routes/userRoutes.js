import express, {Router} from 'express';
import { checkuser, createUser, getUserData } from '../controller/userController.js';
import { deleteTodo, getTodo, updateTodo,addTodo } from '../controller/todoController.js';
import {getVendors,getVendor, checkVendor,getVendorAppointments} from "../controller/vendorController.js"
import { getServices, addServices, deleteService,updateService } from '../controller/serviceController.js';
import { getWeddingDetails } from '../controller/pastWeddingController.js';
import { createVendorBooking, getAppointmentsByUser, deleteAppointment } from '../controller/bookingController.js';

const route =express.Router();

route.post("/createuser", createUser);
route.get('/checkUser/:firebaseUserId', checkuser);
route.get('/getuser/:firebaseUserId', getUserData);
route.get('/todo/:firebaseUserId',getTodo);
route.delete('/todo/:firebaseUserId/:taskId',deleteTodo);
route.put('/todo/:firebaseUserId/:index', updateTodo);
route.post('/todo/:firebaseUserId', addTodo);
route.get('/vendors',getVendors);
route.get('/vendors/:id',getVendor);
route.get('/vendors/:id/services',getServices);
route.post('/vendors/:id/services',addServices);
route.delete('/vendors/:id/services/:serviceId',deleteService);
route.put('/vendors/:id/services/:serviceId',updateService);
route.get('/checkvendor/:firebaseUserId', checkVendor);
route.get('/getPastWedding/:wedding_id', getWeddingDetails);
route.post('/vendors/:id/booking',createVendorBooking);
route.get('/users/:firebaseUserId/bookings', getAppointmentsByUser);
route.get('/vendors/:id/appointments', getVendorAppointments);
route.delete('/bookings/:firebaseUserId/:appointmentId', deleteAppointment);

export default route;