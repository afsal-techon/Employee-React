import express from 'express';
import { addDepartment, getDepartment, Login } from '../controller/userCntrl.js';
import {  VerifyToken } from '../controller/authMiddleware.js'

const router = express.Router();


router.post('/login',Login);
router.post('/add-department',VerifyToken,addDepartment);
router.get('/departments',VerifyToken,getDepartment)


export default router