import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component'
import { columns } from '../../Utils/DepartmentHelper'
import axios from '../../services/axios'
import { toast } from "sonner";


const DepartList = () => {

  const [departments, setDepartments] = useState(null)

  useEffect(()=>{

    const fetchDepartment = async()=>{
      try {

        const { data } = await axios.get('/departments');
        data.map((dep)=>(
          {
            _id: dep._id,
            sno : sno++,
            dep_name: dep.department,
            action : 
          }
        ))
        
        
      } catch (err) {
        
      }

    }
  fetchDepartment()
  },[])




  return (
    <div className='p-5'>
      <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Departments</h3>
      </div>
      <div className='flex justify-between items-center pt-4'>
        <input className='px-4 py-2 border rounded-md border-gray-600 outline-0' type="text" placeholder='Search By Department' />
        <Link className='px-4 py-1 bg-teal-600 text-white font-semibold rounded-md' to='/admin-dashboard/add-department'>Add Department</Link>
      </div>

      <div>
        <DataTable columns={columns} />

      </div>


    </div>
  )
}

export default DepartList