export default function Navbar() {
    return (
        <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
            <h2 className="font-semibold text-lg">Dashboard</h2>
            <div className="flex items-center gap-3">
                <span className="text-gray-600">Welcome Talha</span>
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            </div>
        </div>
    );
}