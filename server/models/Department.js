import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema(
  {
    department: {
      type: String,
      required:true,
    },
    description:{
      type:String,
      required:true
      
    },
  },
  { timestamps: true }
);


const departmentModel = mongoose.model("Department", departmentSchema);
export default departmentModel;
