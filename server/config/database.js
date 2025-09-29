import mongoose from "mongoose";



const connectDB = async (req, res)=>{
    try{
        // const dbURI =  'mongodb://127.0.0.1:27017/EMP';
        const dbURI =  'mongodb+srv://techonafsal_db_user:GcHvyjaH6EHj8fcx@cluster0.omxeyim.mongodb.net/EMP?retryWrites=true&w=majority&appName=Cluster0';
        await mongoose.connect(dbURI);
        console.log('Database connected succssfully')

    }catch(error){
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
}

export default connectDB;