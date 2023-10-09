import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="">
      <Sidebar />
      {/* <Outlet /> */}
    </div>
  );
};

export default AdminLayout;
