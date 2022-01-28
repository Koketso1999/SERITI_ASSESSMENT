import React from "react";
import MainDashboardContent from "../Components/MainDashboardContent/MainDashboardContent";
import SideNav from "../Components/SideNav/SideNav";

const Dashboard = () => {
  return (
    <>
    {/* Calling all components used to make up the Dashboard */}
      <SideNav />
      <MainDashboardContent />
    </>
  );
};

export default Dashboard;
