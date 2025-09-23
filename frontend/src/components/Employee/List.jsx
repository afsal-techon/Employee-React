import React from 'react'
import { Link } from 'react-router-dom'

const List = () => {
  return (
    <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Employees</h3>
          </div>
          <div className="flex justify-between items-center pt-4 mb-6">
            <input
              className="px-4 py-2 border rounded-md border-gray-600 outline-0"
              type="text"
              placeholder="Search By Department"
            />
            <Link
              className="px-4 py-1 bg-teal-600 text-white font-semibold rounded-md"
              to="/admin-dashboard/add-employee"
            >
              Add Employee
            </Link>
          </div>
    
        </div>
  )
}

export default List