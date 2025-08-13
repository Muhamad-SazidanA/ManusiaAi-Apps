import React from "react";
import { Outlet } from "react-router-dom";
import { FaFolder, FaCloudUploadAlt, FaChartPie, FaFileAlt, FaUsers, FaCog } from "react-icons/fa";

export default function AdminTemplate() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="bg-[#1565C0] text-white w-64 flex-shrink-0 flex flex-col py-8 px-6">
                <div className="flex items-center gap-3 mb-8">
                    <FaFolder size={28} />
                    <span className="font-bold text-lg">Manusia AI Drive</span>
                </div>
                <nav className="flex-1 flex flex-col gap-2">
                    <button className="bg-[#1976ED] text-white py-2 px-4 rounded-lg flex items-center gap-2 font-semibold mb-4 hover:bg-[#2196F3] transition">
                        <FaCloudUploadAlt /> Upload New Files
                    </button>
                    <a href="#" className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2196F3] transition">
                        <FaChartPie /> Dashboard
                    </a>
                    <a href="#" className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2196F3] transition">
                        <FaFileAlt /> Files
                    </a>
                    <a href="#" className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2196F3] transition">
                        <FaUsers /> Shared
                    </a>
                    <a href="#" className="flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-[#2196F3] transition">
                        <FaCog /> Settings
                    </a>
                </nav>
                <div className="mt-auto pt-8 border-t border-white/20">
                    <div className="text-xs mb-2">Storage Details</div>
                    <div className="w-full h-2 bg-white/20 rounded mb-2">
                        <div className="h-2 bg-[#42A5F5] rounded" style={{ width: "60%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span>60% used</span>
                        <span>Upgrade Storage</span>
                    </div>
                </div>
            </aside>
            {/* Main Content */}
            <main className="flex-1 bg-[#F6F8FB] p-8">
                <Outlet />
            </main>
        </div>
    );
}