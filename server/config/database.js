import mongoose from "mongoose";



const connectDB = async (req, res)=>{
    try{
        const dbURI =  'mongodb://127.0.0.1:27017/EMP';
        await mongoose.connect(dbURI);
        console.log('Database connected succssfully')

    }catch(error){
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}

export default connectDB;