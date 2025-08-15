//ADVIN AI 
import React from "react";
import { FaFileAlt, FaRobot, FaUserCheck, FaChartBar } from "react-icons/fa";
import { Outlet, Link } from 'react-router-dom';


export default function AdvinAI() {
    return (

        <div className="w-full min-h-screen bg-white font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-16 flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-12">
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center px-0 md:px-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-5 leading-[1.3] pb-2">
                            Smart Hiring<br />
                            <span className="bg-[#0377FF] text-transparent bg-clip-text">
                                AI- Driven<br /> Recruitment Solution
                            </span>
                        </h1>
                        <p className="text-base md:text-2xl text-black/90 mb-8 font-light max-w-lg">
                            Advin is an AI-based recruitment platform to optimize, accelerate, save and objectify the recruitment process.
                        </p>
                        <Link
                            onClick={() => handleNavigation('/demo-email')}
                            className="px-6 py-3 rounded-xl font-semibold text-base md:text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Advin/ImagesAdvin1.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0 text-center divide-y sm:divide-y-0 sm:divide-x divide-gray-300">
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

            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-25 mt-20 mb-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-8 text-center md:text-left w-full">
                            Easy To Use
                        </h2>
                        <p className="text-1xl md:text-2xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Advin's platform is designed to be simple yet robust, with a
                            simple interface that is easily accessible.
                        </p>
                        <ul className="mt-6 space-y-3 text-1xl md:text-2xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left sm:text-base list-disc list-inside">
                            <li>
                                Customizable Recruitment Flow – Customize the
                                recruitment process to your company’s needs.
                            </li>
                            <li>
                                Monitoring Flow – Track all candidate progress
                                in one concise and efficient view.
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Advin/ImagesAdvin2.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white text-center px-4 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00000] mb-24">
                    Why Should You Choose <span className="text-[#0377FF]">Advin</span>?
                </h2>
                {/* Grid Features */}
                <div className="mt-14 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16">
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
            </section>
            <section className="py-16 bg-white text-center px-4 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00000] mb-20">
                    Use Case AI Recruitment
                </h2>
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* Card 1 */}
                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col h-full transition-all hover:shadow-lg">
                        <div className="bg-[#0377FF] text-white p-4 font-semibold text-lg">
                            High-Volume Hiring
                        </div>
                        <div className="bg-[#F8FAFF] p-6 text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                            Optimize High-Volume Hiring with <strong className="text-[#0377FF]">Advin</strong>. Avoid tedious and complicated seasonal processes. With our AI solution, you can screen, assess, and hire large numbers of candidates quickly and efficiently. Intelligent AI automation ensures positions are filled smoothly, reducing manual burden and increasing the productivity of your recruiting team.
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col h-full transition-all hover:shadow-lg">
                        <div className="bg-[#0377FF] text-white p-4 font-semibold text-lg">
                            Mass Hiring in Short Time
                        </div>
                        <div className="bg-[#F8FAFF] p-6 text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                            Recruit hundreds to thousands of candidates in days! With AI-powered recruiting, you can screen, assess, and hire in no time without tedious manual processes. Automation using AI ensures fast and efficient recruiting, so positions are filled quickly and smoothly.
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="mt-8 max-w-4xl mx-auto">
                    <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 flex flex-col h-full transition-all hover:shadow-lg">
                        <div className="bg-[#0377FF] text-white p-4 font-semibold text-lg">
                            Seasonal Hiring
                        </div>
                        <div className="bg-[#F8FAFF] p-6 text-gray-700 text-sm md:text-base leading-relaxed flex-1">
                            Increase hiring flexibility for seasonal needs with <strong className="text-[#0377FF]">Advin</strong> AI solution. From screening to automated onboarding, the hiring process becomes faster and more organized. Get quality talent exactly when you need it, without sacrificing efficiency and productivity.
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16 bg-white text-center px-4 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#00000] mb-20">
                    Comparison
                </h2>
                <div className="flex justify-center">
                    <img
                        src="/images/Advin/comparison.svg" // ganti sesuai path file kamu
                        alt="Comparison Chart"
                        className="max-w-full h-auto"
                    />
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