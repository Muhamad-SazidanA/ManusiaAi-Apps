import React from "react";

export default function AdminDashboard() {
  return (
    <div className="w-full min-h-screen bg-[#F6F8FB] p-8">
      <h1 className="text-3xl font-bold text-[#1976ED] mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#1976ED] flex items-center justify-center text-white text-2xl font-bold mb-4">
            <i className="fa-solid fa-users"></i>
          </div>
          <h2 className="font-semibold text-lg mb-2">Total Users</h2>
          <div className="text-2xl font-bold text-[#1976ED]">1,245</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#01B574] flex items-center justify-center text-white text-2xl font-bold mb-4">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <h2 className="font-semibold text-lg mb-2">Active Sessions</h2>
          <div className="text-2xl font-bold text-[#01B574]">87</div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-[#F59E42] flex items-center justify-center text-white text-2xl font-bold mb-4">
            <i className="fa-solid fa-file-alt"></i>
          </div>
          <h2 className="font-semibold text-lg mb-2">Documents Processed</h2>
          <div className="text-2xl font-bold text-[#F59E42]">3,210</div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-6">
        <h3 className="font-bold text-xl mb-4 text-[#1976ED]">Recent Activity</h3>
        <ul className="divide-y divide-gray-200">
          <li className="py-3 flex justify-between items-center">
            <span className="text-gray-700">User <b>john.doe</b> uploaded a new document.</span>
            <span className="text-xs text-gray-400">2 min ago</span>
          </li>
          <li className="py-3 flex justify-between items-center">
            <span className="text-gray-700">Admin <b>admin.ai</b> approved a request.</span>
            <span className="text-xs text-gray-400">10 min ago</span>
          </li>
          <li className="py-3 flex justify-between items-center">
            <span className="text-gray-700">User <b>jane.smith</b> started a new session.</span>
            <span className="text-xs text-gray-400">30 min ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}