import axios from  '../../services/axios'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AddDepartments = () => {

    const [department , setDepartment] = useState({
        dept_name :'',
        description: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        const { name, value } = e.target

        setDepartment({ ...department , [name]: value})
    }


    const handleSubmit = async (e)=>{
       e.preventDefault();
       try {
               const {data} = await axios.post('/add-department',department);
               console.log(data,'data come')
               navigate('/admin-dashboard/departments')
               toast.success(data.message)
       } catch (err) {
             toast.error(err?.response?.data?.message);
       }


    }



  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h3 className="text-2xl font-bold">Add Department</h3>
      <form onSubmit={handleSubmit} action="">
        <div>
          <label className="text-sm font-medium text-gray-700" htmlFor="dep_name">Department Name</label>
          <input
            className="mt-1  w-full p-2 border border-gray-300 rounded-md outline-0"
            type="text"
            name="dept_name"
            placeholder="Enter Dept. Name"
            onChange={handleChange}

          />
        </div>
        <div className="mt-3">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id=""
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md outline-0"
            placeholder="Enter description"
            rows="4"
          ></textarea>
        </div>

        <button type="submit" className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md">
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartments;
