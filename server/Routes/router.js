import express from 'express';
import { addDepartment, deleteDepartment, getDepartment, getOneDepartment, Login, register, updateDepartment } from '../controller/userCntrl.js';
import {  VerifyToken } from '../controller/authMiddleware.js'

const router = express.Router();

router.post('/register',register)
router.post('/login',Login);
router.post('/add-department',VerifyToken,addDepartment);
router.get('/departments',VerifyToken,getDepartment)
router.get('/department/:deptId',VerifyToken,getOneDepartment)
router.put('/department',VerifyToken,updateDepartment)
router.delete('/delete-department/:deptId',deleteDepartment)
export default router