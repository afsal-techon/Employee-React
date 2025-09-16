import { useNavigate } from "react-router-dom";
import axios  from "../services/axios";
import { toast } from "sonner";
import { useState } from "react";
import ConfirmBox from "../components/Popup/ConfirmBox";

export const columns = [
  {
    name: "S No",
    selector: (row) => row.sno,
  },
  {
    name: "Dept. Name",
    selector: (row) => row.dep_name,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];

export const DepartmentButtons = ({ deptId,onDelete  }) => {
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false)
  const handleDelete =async (e) => {
    try {
      e.preventDefault();

      const { data } = await axios.delete(`/delete-department/${deptId}`);
      toast.success(data.message);
      setOpenDialog(false)

      //  update UI instantly
      if (onDelete) onDelete(deptId);

    } catch (err) {
      toast.error(err?.response?.data?.message);
    }
  };
  return (
    <div className="flex space-x-3 ">
      <button
        onClick={() => navigate(`/admin-dashboard/department/${deptId}`)}
        className="px-3 py-1 bg-teal-600 cursor-pointer text-white rounded-sm "
      >
        Edit
      </button>
      <button
        onClick={()=>setOpenDialog(true)}
        className="px-3 py-1 cursor-pointer text-white bg-red-600 rounded-sm"
      >
        Delete
      </button>
{/* 
      //confirmation popup */}
          {/* Confirmation Popup */}
      <ConfirmBox
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        onConfirm={handleDelete}
        title="Confirm Delete"
        message="Are you sure you want to delete this department?"
      />

    </div>
  );
};
