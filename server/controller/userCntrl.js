import USER from '../models/user.js';
import jwt from 'jsonwebtoken'



export const SECRET_KEY = 'afsal95'


export const userRegister = async()=>{
    try {

        const newUser = await USER({
            name:"Admin",
            email:"admin@gmail.com",
            password:"1234",
            role:"admin"
        })

        await newUser.save();
        
    } catch (error) {
        console.log(error)
    }
}



export const Login = async(req,res)=>{
    try {
         
        const { email, password} = req.body;

        const user = await USER.findOne({ email });
        if(!user){
            return res.status(400).json({ message:'User not found!'})
        }

        if(user.password != password){
               return res.status(400).json({ message:"Incorrect password"})
        }

        const token = jwt.sign({_id:user._id,role:user.role},
            SECRET_KEY ,{expiresIn:"10d"});

            return res.status(200).json({ message:'Login successful',token,user})

    
    } catch (error) {
        console.log(error)
    }
}


export const addDepartment = async(req,res)=>{
    try {
         
        const { email, password} = req.body;

    
    
    } catch (error) {
        console.log(error)
    }
}
