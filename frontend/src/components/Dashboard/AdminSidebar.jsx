import React from "react";
import { NavLink } from "react-router-dom";
import { FaBuilding, FaCalendar, FaMoneyBillWave, FaTachometerAlt, FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
const AdminSidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen md:w-64 w-full fixed left-0 top-0 flex flex-col  gap-8">
      <div className="w-full bg-teal-600 text-center flex items-center justify-center   h-12 text-xl font-lobster">
        <h3 className="">Employee MS</h3>
      </div>
      <div className="px-6 space-y-2">
        <NavLink to="/admin-dashboard" end className={ ({isActive})=> `${isActive ? "bg-teal-600" :""} flex gap-5 items-center hover:bg-teal-600 p-2 rounded-sm`}>
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/admin-dashboard"  className='flex gap-5 items-center hover:bg-teal-600 p-2 rounded-sm'>
          <FaUser />
          <span>Employee</span>
        </NavLink>

        <NavLink to="/admin-dashboard/departments" className={ ({isActive})=> `${isActive ? "bg-teal-600" :""} flex gap-5 items-center hover:bg-teal-600 p-2 rounded-sm`}>
          <FaBuilding />
          <span>Department</span>
        </NavLink>

             <NavLink to="/admin-dashboard"  className='flex gap-5 items-center hover:bg-teal-600 p-2 rounded-sm'>
          <FaCalendar />
          <span>Leaves</span>
        </NavLink>
             <NavLink to="/admin-du8ashboard" className='flex gap-5 items-center hover:bg-teal-600 p-2 rounded-sm'>
          <FaMoneyBillWave />
          <span>Salary</span>
        </NavLink>
             <NavLink to="/admin-dashboard" className='flex gap-5 items-center hover:bg-teal-600 p-2 rounded-sm'>
          <IoIosSettings />
          <span>settting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
