import USER from '../models/user.js';
import jwt from 'jsonwebtoken';
import DEPARTMENT from '../models/Department.js'



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

export const register = async(req,res)=>{
    try {
         
        const { name,email,password} = req.body;

        if(!name){
            return res.status(400).json({ message:"Name is required!"})
        }
         if(!email){
            return res.status(400).json({ message:"Email is required!"})
        }
         if(!password){
            return res.status(400).json({ message:"Password is required!"})
        }

        const existEmial = await USER.findOne({ email });
        if(existEmial){
            return res.status(400).json({ message:"User already exist this email!"})
        }

      const user =   await USER.create({ 
            name,
            email,
            password,
            role:"admin"
        });

        const token = jwt.sign({_id:user._id,role:user.role},
            SECRET_KEY ,{expiresIn:"10d"});

            return res.status(200).json({ message:'Registeration successful',token,user})
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
         
        const { dept_name, description} = req.body;

        if(!dept_name){
            return res.status(404).json({ message:"Department name is required!"})
        }

        const newDep = new DEPARTMENT({
            department:dept_name,
            description: description,
        });

        await newDep.save();

        return res.status(200).json({ message:'Department added sucssfully'});

    
    } catch (error) {
        console.log(error)
    }
}


export const getDepartment = async(req,res)=>{
    try {
         
        const userId = req.user;
       

       const user = await USER.findById(userId);
       if(!user){
        return res.status(400).json({ message:'User not found!'})
       }

        const departments = await DEPARTMENT.find({ })
       
        return res.status(200).json(departments);

    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message:'Internal server error'})
    }
}

export const getOneDepartment = async(req,res)=>{
    try {
         const { deptId } = req.params;
        const userId = req.user;

       const user = await USER.findById(userId);
       if(!user){
        return res.status(400).json({ message:'User not found!'})
       }

        const department = await DEPARTMENT.findById(deptId);

        return res.status(200).json(department);

    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message:'Internal server error'})
    }
}

export const updateDepartment = async(req,res)=>{
    try {
        console.log(req.body,'body')
        
        const { deptId, dept_name, description} = req.body;

        if(!dept_name){
            return res.status(404).json({ message:"Department name is required!"})
        }

         await DEPARTMENT.updateOne({_id:deptId},{$set:{
            department:dept_name,
            description:description
         }})


        return res.status(200).json({ message:'Department Updated sucssfully'});

    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message:'Internal server error'})
    }
}


export const deleteDepartment = async(req,res)=>{
    try {
        
        
        const { deptId} = req.params;
        

        if(!deptId){
            return res.status(404).json({ message:"Department Id not found!"})
        }

         await DEPARTMENT.findByIdAndDelete(deptId)

        return res.status(200).json({ message:'Department deleted sucssfully'});

    
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message:'Internal server error'})
    }
}