import DashLayout from "@/components/layouts/DashLayout";
import { useSession } from "next-auth/react";
import React from "react";

const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        fontSize: "26px",
        color: "#40a0a8",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Welcome to Dashboard</h1>
        <h3> {session?.user?.name} </h3>
      </div>
    </div>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page) {
  return <DashLayout> {page} </DashLayout>;
};
