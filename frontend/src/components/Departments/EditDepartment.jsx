import axios from "../../services/axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "sonner";

const EditDepartment = () => {
  const { deptId } = useParams();
  const [loading, setLoading] = useState(false);
  const [dept, setDept] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    const fetchOneDeparment = async () => { 
     setLoading(true);
      try {
       
        const { data } = await axios.get(`/department/${deptId}`);
        setDept(data);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchOneDeparment()
  },[]);

  const handleChange = (e) =>{
    const { name, value} = e.target;
    setDept({ ...dept , [name]:value})
  }

  const handleSubmit =async (e)=>{
    e.preventDefault();
    try {
           
        const payload= {
            dept_name : dept.department,
            discription : dept.description,
            deptId : deptId
        }

         
        const { data } = await axios.put('/department',payload);
        navigate('/admin-dashboard/departments')
        toast.success(data.message)
        
    } catch (err) {
        toast.error(err?.response?.data?.message);
    }

  }

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[90%]">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
          <h3 className="text-2xl font-bold">Update Department</h3>
          <form onSubmit={handleSubmit} action="">
            <div>
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="dep_name"
              >
                Department Name
              </label>
              <input
                className="mt-1  w-full p-2 border border-gray-300 rounded-md outline-0"
                type="text"
                name="department"
                value={dept.department}
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
                value={dept.description}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md outline-0"
                placeholder="Enter description"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-md"
            >
              Update Department
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditDepartment;
