import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div className="flex-[1] bg-red-400">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-[5]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AdminLayout;
