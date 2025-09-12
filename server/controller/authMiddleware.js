

import jwt from 'jsonwebtoken';
import { SECRET_KEY} from '../controller/userCntrl.js'

export const VerifyToken = async(req,res,next)=>{
    try{

        const token = req.header("Authorization");
        if (!token) return res.status(401).send("Access Denied");
        const verified = jwt.verify(token, SECRET_KEY);  
        req.user = verified._id    
        next();

    }catch(err){
        console.log(err.message)
        res.status(400).json({ Error: "Invalid Token" });
    }
  

}