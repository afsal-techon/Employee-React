import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns, DepartmentButtons } from "../../Utils/DepartmentHelper";
import axios from "../../services/axios";
import { toast } from "sonner";

const DepartList = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDepartment = async () => {
      // setLoading(true)

      try {
        const { data } = await axios.get("/departments");
        console.log(data, "data coming");

        let sno = 1;
        const mapppedData = data.map((dep) => ({
          _id: dep._id,
          sno: sno++,
          dep_name: dep.department,
          action: (
            <DepartmentButtons
              deptId={dep._id}
              onDelete={(id) => {
                setDepartments((prev) => prev.filter((d) => d._id !== id));
              }}
            />
          ),
        }));

        setDepartments(mapppedData);
      } catch (err) {
        toast.error(err?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDepartment();
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-[90%]">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="p-5">
          <div className="text-center">
            <h3 className="text-2xl font-bold">Manage Departments</h3>
          </div>
          <div className="flex justify-between items-center pt-4 mb-6">
            <input
              className="px-4 py-2 border rounded-md border-gray-600 outline-0"
              type="text"
              placeholder="Search By Department"
            />
            <Link
              className="px-4 py-1 bg-teal-600 text-white font-semibold rounded-md"
              to="/admin-dashboard/add-department"
            >
              Add Department
            </Link>
          </div>

          <div className="mt-5">
            <DataTable columns={columns} data={departments} />
          </div>
        </div>
      )}
    </>
  );
};

export default DepartList;
