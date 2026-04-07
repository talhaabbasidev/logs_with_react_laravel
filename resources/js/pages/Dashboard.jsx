import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import LogTable from "../components/LogTable";
import Logs from "./Logs";

export default function Dashboard() {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 bg-gray-100 min-h-screen">
                <Navbar />

                <div className="p-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                </div>
            </div>
        </div>
    );
}