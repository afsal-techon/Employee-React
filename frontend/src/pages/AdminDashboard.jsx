import React from 'react'
import { useAuth } from '../context/authContext'
import { toast } from "sonner";

const AdminDashboard = () => {

  const { user } = useAuth()

  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard