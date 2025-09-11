import express from 'express';
import { addDepartment, Login } from '../controller/userCntrl.js';
import {  VerifyToken } from '../controller/authMiddleware.js'

const router = express.Router();


router.post('/login',Login);
router.post('/add-department',VerifyToken,addDepartment)

export default router