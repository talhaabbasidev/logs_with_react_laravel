import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
    const location = useLocation();

    return (
        <div className="w-64 h-screen bg-slate-900 text-white p-5">
            <h3 className="text-xl font-bold">Admin Panel</h3>

            <ul className="space-y-2 mt-6">

                {/* Dashboard */}
                <li className={`p-2 rounded cursor-pointer ${
                    location.pathname === "/" ? "bg-slate-700" : "hover:bg-slate-700"
                }`}>
                    <Link to="/">Dashboard</Link>
                </li>

                {/* Logs */}
                <li className={`p-2 rounded cursor-pointer ${
                    location.pathname === "/logs" ? "bg-slate-700" : "hover:bg-slate-700"
                }`}>
                    <Link to="/logs">Logs</Link>
                </li>

                {/* Users */}
                <li className="hover:bg-slate-700 p-2 rounded cursor-pointer">
                    Users
                </li>

            </ul>
        </div>
    );
}