import React from "react";
import { Outlet, Link } from 'react-router-dom';

export default function Dashboard() {
  const handleNavigation = (url) => {
    window.location.href = url; // Force reload the page
  };

  return (
    <div className="w-full min-h-screen font-inter relative overflow-x-hidden">
      {/* Existing sections... */}

      {/* New Enhanced Section */}
      <section className="relative py-16 overflow-hidden px-4 bg-[#F0F4FF] md:px-0">
        <h2 className="relative text-4xl md:text-5xl font-semibold text-[#0377FF] mb-8 text-center">
          Enhanced Features
        </h2>
        <p className="text-lg md:text-2xl text-black/90 flex justify-center text-center px-0 md:px-6 mb-12">
          Discover our latest features designed to improve your experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <i className="fa-solid fa-bolt text-[#0377FF] text-4xl mb-4"></i>
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-2">Lightning Fast Processing</h3>
            <p className="text-base text-gray-600 text-center">
              Experience unmatched speed with our optimized algorithms that process data in real-time.
            </p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <i className="fa-solid fa-shield-alt text-[#0377FF] text-4xl mb-4"></i>
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-2">Enhanced Security</h3>
            <p className="text-base text-gray-600 text-center">
              Your data is safe with us. We implement top-notch security measures to protect your information.
            </p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
            <i className="fa-solid fa-user-friends text-[#0377FF] text-4xl mb-4"></i>
            <h3 className="text-2xl font-semibold text-[#0377FF] mb-2">Collaborative Tools</h3>
            <p className="text-base text-gray-600 text-center">
              Work seamlessly with your team using our collaborative features that enhance productivity.
            </p>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link onClick={() => handleNavigation('/features')}
            className="bg-[#0377FF] text-white px-8 py-4 rounded-xl font-semibold shadow hover:bg-[#0056b3] transition">
            Explore Features
          </Link>
        </div>
      </section>

      {/* Existing sections... */}
    </div>
  );
}