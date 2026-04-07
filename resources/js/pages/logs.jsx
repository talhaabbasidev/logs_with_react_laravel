import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LogTable from "../components/LogTable";

export default function Logs() {
    return (
        <div className="flex">
            <Sidebar />

            <div className="flex-1 bg-gray-100 min-h-screen">
                <Navbar />

                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-4">Logs</h1>
                    <LogTable />
                </div>
            </div>
        </div>
    );
}