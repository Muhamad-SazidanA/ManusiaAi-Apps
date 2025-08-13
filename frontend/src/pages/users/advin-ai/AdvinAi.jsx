import React from "react";
import { FaFileAlt, FaRobot, FaUserCheck, FaChartBar } from "react-icons/fa";
import { Outlet, Link } from 'react-router-dom';


export default function AdvinAI() {
    return (
        <div className="w-full bg-white font-sans">
            {/* Section 1 - Hero */}
            <section className="max-w-6xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Text */}
                    <div className="max-w-lg text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
                            Smart Hiring{" "}
                            <br />
                            <span className="text-blue-600">
                                AI-Driven
                                <br />
                                Recruitment Solution
                            </span>
                        </h2>
                        <p className="mt-4 text-black-600 text-base sm:text-lg">
                            Advin is an AI-based recruitment platform to optimize, accelerate,
                            save and objectify the recruitment process.
                        </p>
                        <br />
                        <Link
                            onClick={() => handleNavigation('/demo-email')}
                            className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/Advin/ImagesAdvin1.svg"
                            alt="Advin AI"
                            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
                        />
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
                    <div className="py-4 px-3">
                        <p className="text-xl sm:text-3xl font-bold text-blue-600">70-80%</p>
                        <p className="mt-1 text-xs sm:text-sm text-black-600">
                            more time efficient compared to manual recruitment
                        </p>
                    </div>
                    <div className="py-4 px-3">
                        <p className="text-xl sm:text-3xl font-bold text-blue-600">80%</p>
                        <p className="mt-1 text-xs sm:text-sm text-black-600">
                            Accuracy of candidate match with job
                        </p>
                    </div>
                    <div className="py-4 px-3">
                        <p className="text-xl sm:text-3xl font-bold text-blue-600">50%</p>
                        <p className="mt-1 text-xs sm:text-sm text-black-600">Save costs</p>
                    </div>
                    <div className="py-4 px-3">
                        <p className="text-xl sm:text-3xl font-bold text-blue-600">100%</p>
                        <p className="mt-1 text-xs sm:text-sm text-black-600">
                            Candidate CV are screened
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2 - Easy to Use */}
            <section className="bg-gray-50 border-t border-gray-200">
                <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
                    {/* Text */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                            Easy To Use
                        </h3>
                        <p className="mt-4 text-balck-600 text-base sm:text-lg">
                            Advin's platform is designed to be simple yet robust, with a
                            simple interface that is easily accessible.
                        </p>
                        <ul className="mt-6 space-y-3 text-black-600 text-sm sm:text-base list-disc list-inside">
                            <li>
                                <strong>Customizable Recruitment Flow</strong> – Customize the
                                recruitment process to your company’s needs.
                            </li>
                            <li>
                                <strong>Monitoring Flow</strong> – Track all candidate progress
                                in one concise and efficient view.
                            </li>
                        </ul>
                    </div>
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/Advin/ImagesAdvin2.svg"
                            alt="Easy to Use"
                            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white py-12 sm:py-16">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-900">
                        Why Should You Choose <span className="text-blue-600">Advin</span>?
                    </h2>

                    {/* Grid Features */}
                    <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
                        {/* AI CV Analysis */}
                        <div className="text-center flex flex-col items-center px-4">
                            <div className="bg-blue-500 p-4 rounded-lg text-white text-2xl sm:text-3xl">
                                <FaFileAlt />
                            </div>
                            <h3 className="mt-4 font-semibold text-base sm:text-lg text-gray-900">
                                AI CV Analysis
                            </h3>
                            <p className="mt-2 text-black-600 text-sm sm:text-base max-w-xs">
                                Advin has the ability to screen thousands of CVs using its AI in a very short time.
                            </p>
                        </div>

                        {/* Automated AI Interview */}
                        <div className="text-center flex flex-col items-center px-4">
                            <div className="bg-blue-500 p-4 rounded-lg text-white text-2xl sm:text-3xl">
                                <FaRobot />
                            </div>
                            <h3 className="mt-4 font-semibold text-base sm:text-lg text-gray-900">
                                Automated AI Interview
                            </h3>
                            <p className="mt-2 text-black-600 text-sm sm:text-base max-w-xs">
                                Conduct candidate interviews automatically using AI and analyze the answers in real-time.
                            </p>
                        </div>

                        {/* AI Personality Test */}
                        <div className="text-center flex flex-col items-center px-4">
                            <div className="bg-blue-500 p-4 rounded-lg text-white text-2xl sm:text-3xl">
                                <FaUserCheck />
                            </div>
                            <h3 className="mt-4 font-semibold text-base sm:text-lg text-gray-900">
                                AI Personality Test
                            </h3>
                            <p className="mt-2 text-black-600 text-sm sm:text-base max-w-xs">
                                An accurate and objective AI-based personality test that is not influenced by the interviewer's subjective preferences.
                            </p>
                        </div>

                        {/* Detailed Report */}
                        <div className="text-center flex flex-col items-center px-4">
                            <div className="bg-blue-500 p-4 rounded-lg text-white text-2xl sm:text-3xl">
                                <FaChartBar />
                            </div>
                            <h3 className="mt-4 font-semibold text-base sm:text-lg text-gray-900">
                                Detailed Report (Scoring)
                            </h3>
                            <p className="mt-2 text-black-600 text-sm sm:text-base max-w-xs">
                                In-depth data reports to support informed decision making.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="py-12 px-4 md:px-12 bg-white text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-black mb-10">
                    Use Case AI Recruitment
                </h2>

                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {/* Card 1 */}
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                        <div className="bg-[#0377FF] text-white p-3 font-semibold text-lg">
                            High-Volume Hiring
                        </div>
                        <div className="bg-[#CCE0FF] p-4 text-black text-sm md:text-base leading-relaxed">
                            Optimize High-Volume Hiring with <strong>Advin</strong>. Avoid tedious and complicated seasonal processes. With our AI solution, you can screen, assess, and hire large numbers of candidates quickly and efficiently. Intelligent AI automation ensures positions are filled smoothly, reducing manual burden and increasing the productivity of your recruiting team.
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200 bg-[#CCE0FF]">
                        <div className="bg-[#0377FF] text-white p-3 font-semibold text-lg">
                            Mass Hiring in Short Time
                        </div>
                        <div className="p-4 text-black text-sm md:text-base leading-relaxed">
                            Recruit hundreds to thousands of candidates in days! With AI-powered recruiting, you can screen, assess, and hire in no time without tedious manual processes. Automation using AI ensures fast and efficient recruiting, so positions are filled quickly and smoothly.
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="mt-6 max-w-[750px] mx-auto">
                    <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                        <div className="bg-[#0377FF] text-white p-4 font-semibold text-lg">
                            Seasonal Hiring
                        </div>
                        <div className="bg-[#CCE0FF] p-6 text-black text-sm md:text-base leading-relaxed min-h-[150px]">
                            Increase hiring flexibility for seasonal needs with <strong>Advin</strong> AI solution. From screening to automated onboarding, the hiring process becomes faster and more organized. Get quality talent exactly when you need it, without sacrificing efficiency and productivity.
                        </div>
                    </div>
                </div>
            </section>


            <section className="w-full bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-center text-3xl font-bold mb-12">
                        Comparison
                    </h2>
                    <div className="flex justify-center">
                        <img
                            src="/images/Advin/comparison.svg" // ganti sesuai path file kamu
                            alt="Comparison Chart"
                            className="max-w-full h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-white flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
                {/* Deskripsi */}
                <div className="text-center mb-12">
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0377FF] mb-4 leading-tight">
                        Siap Bangun Solusi AI yang<br /> Relevan untuk Bisnis Anda?
                    </h2>
                    <p className="text-lg md:text-3xl font-medium text-[#0377FF] max-w-3xl mx-auto leading-snug">
                        Mari diskusi dan mulai dari yang paling berdampak.
                    </p>
                </div>

                {/* Card Container */}
                <div className="relative z-10 w-full flex justify-center items-center">
                    <div
                        className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-6 py-10 rounded-2xl text-center md:text-left"
                        style={{
                            background: "white",
                            boxShadow: "0 0 24px 8px #2196F3",
                            border: "1px solid #d3eaff"
                        }}
                    >
                        {/* Bintang - hanya tampil di md ke atas */}
                        <div className="absolute left-1/2 -translate-x-20 -translate-y-10 w-auto h-20 animate-pulse delay-500 opacity-30 z-30 pointer-events-none hidden md:block">
                            <img src="/images/Image-BintangBG.svg" alt="Star" className="w-full h-full" />
                        </div>

                        {/* Left Side */}
                        <div className="flex-1 pr-0 md:pr-10 mb-6 md:mb-0">
                            <h2 className="text-2xl md:text-4xl font-bold text-[#0377FF] mb-2">
                                Get started today!
                            </h2>
                            <p className="text-base md:text-2xl font-light text-[#0377FF] leading-snug">
                                Temukan bagaimana AI bisa mempercepat proses dan keputusan bisnis Anda.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex-1 flex flex-col justify-center items-center md:items-end gap-3 w-full md:w-auto">
                            {/* Badge */}
                            <div className="w-full flex justify-center md:justify-end">
                                <div className="inline-flex items-center gap-2 bg-[#0075FF] text-white px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium shadow-md">
                                    <img src="/images/Image-BintangBG.svg" alt="Star" className="w-4 h-4 md:w-5 md:h-5" />
                                    New: Our AI integration just landed
                                </div>
                            </div>
                            {/* Button */}
                            <div className="w-full flex justify-center md:justify-end">
                                <Link
                                    onClick={() => handleNavigation('/demo-email')}
                                    className="bg-[#0075FF] hover:bg-[#0066e0] text-white text-base md:text-lg font-bold px-6 py-2 md:px-8 md:py-3 rounded-xl shadow-lg border border-[#A4D1FF] transition-transform transform hover:scale-105"
                                >
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}