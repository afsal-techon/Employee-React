import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required:true,
    },
    email:{
      type:String,
      required:true
      
    },
    password: {
      type: String,
      required:true
    },
    role:{ type:String , enum:["admin","employee"]},
    profileImage:{type:String}
  },
  { timestamps: true }
);

userSchema.index({ restaurantId: 1 });

const User = mongoose.model("User", userSchema);
export default User;
