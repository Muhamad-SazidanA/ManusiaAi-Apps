//AdvinContent
// AdvinIndustry.jsx
import React, { useState } from "react";
import { FaFileAlt, FaUserCog, FaRobot, FaShieldAlt, FaCalendarTimes, FaTasks, FaUserSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function AdvinContent() {
    const [activeTab, setActiveTab] = useState("cv");
    const navigate = useNavigate();
    const handleNavigation = (url) => navigate(url);

    const tabContent = {
        cv: (

            <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 mt-8 px-4 sm:px-6 lg:px-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                        <div className="bg-[#E8F0FE] p-3 sm:p-4 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                            <img
                                src="/images/Advin/AdvinContent/icon1.svg"
                                alt="Icon CV"
                                className="w-8 h-8 sm:w-9 sm:h-9"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                            AI CV Screening & Scoring
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        Menilai ribuan CV dalam hitungan detik, memberikan skor objektif, dan memprioritaskan kandidat terbaik.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        <li><span className="text-[#1976ED] mr-2">›</span>Algoritma pencocokan berbasis AI</li>
                        <li><span className="text-[#1976ED] mr-2">›</span>Penilaian objektif & bebas bias</li>
                        <li><span className="text-[#1976ED] mr-2">›</span>Filter otomatis sesuai kriteria</li>
                        <li><span className="text-[#1976ED] mr-2">›</span>Multi-language processing (Indonesia & Inggris)</li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="/images/Advin/AdvinContent/IndustriAdvin1.svg"
                        alt="CV Screening"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 md:mt-0"
                    />
                </div>
            </div>
        ),

        interview: (

            <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 mt-8 px-4 sm:px-6 lg:px-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                        <div className="bg-[#E6FBF0] p-3 sm:p-4 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                            <img
                                src="/images/Advin/AdvinContent/icon2.svg"
                                alt="Icon Interview"
                                className="w-8 h-8 sm:w-9 sm:h-9"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                            AI Interview & Scoring
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        Wawancara otomatis 24/7 dengan analisis mendalam terhadap respons kandidat.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        <li><span className="text-[#01B574] mr-2">›</span>Wawancara video atau teks otomatis</li>
                        <li><span className="text-[#01B574] mr-2">›</span>Analisis komunikasi verbal & non-verbal</li>
                        <li><span className="text-[#01B574] mr-2">›</span>Penilaian kepribadian & soft skills</li>
                        <li><span className="text-[#01B574] mr-2">›</span>Skoring instan dan konsisten</li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="/images/Advin/AdvinContent/IndustriAdvin2.svg"
                        alt="Interview Scoring"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 md:mt-0 object-cover"
                    />
                </div>
            </div>
        ),

        automation: (

            <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 mt-8 px-4 sm:px-6 lg:px-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                        <div className="bg-[#FFF3EC] p-3 sm:p-4 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                            <img
                                src="/images/Advin/AdvinContent/icon3.svg"
                                alt="Icon Automation"
                                className="w-8 h-8 sm:w-9 sm:h-9"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                            Dynamic Interview & Automation
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        Mengotomatiskan seluruh proses pasca-shortlist hingga penawaran kerja, menghemat waktu tim HR.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        <li><span className="text-[#FF914D] mr-2">›</span>Penjadwalan wawancara otomatis</li>
                        <li><span className="text-[#FF914D] mr-2">›</span>Integrasi kalender dan email perusahaan</li>
                        <li><span className="text-[#FF914D] mr-2">›</span>Pengiriman pengingat otomatis ke kandidat</li>
                        <li><span className="text-[#FF914D] mr-2">›</span>Otomasi proses penawaran kerja</li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="/images/Advin/AdvinContent/IndustriAdvin3.svg"
                        alt="Dynamic Interview"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 md:mt-0"
                    />
                </div>
            </div>
        ),

        secure: (

            <div className="flex flex-col md:flex-row md:items-center gap-8 lg:gap-12 mt-8 px-4 sm:px-6 lg:px-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-4 sm:mb-6">
                        <div className="bg-[#F0F4FF] p-3 sm:p-4 rounded-xl mr-3 sm:mr-4 flex-shrink-0">
                            <img
                                src="/images/Advin/AdvinContent/icon4.svg"
                                alt="Icon Secure"
                                className="w-8 h-8 sm:w-9 sm:h-9"
                            />
                        </div>
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
                            Secure Talent Data Management
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                        Menjamin keamanan seluruh data kandidat dan riwayat proses rekrutmen.
                    </p>
                    <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
                        <li><span className="text-[#6C63FF] mr-2">›</span>Enkripsi end-to-end untuk semua data</li>
                        <li><span className="text-[#6C63FF] mr-2">›</span>Akses berbasis peran (role-based access control)</li>
                        <li><span className="text-[#6C63FF] mr-2">›</span>Kepatuhan GDPR & regulasi perlindungan data lokal</li>
                        <li><span className="text-[#6C63FF] mr-2">›</span>Backup & recovery otomatis</li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center">
                    <img
                        src="/images/Advin/AdvinContent/IndustriAdvin4.svg"
                        alt="Secure Talent Data"
                        className="w-full max-w-xs sm:max-w-sm md:max-w-md mt-6 md:mt-0 object-cover"
                    />
                </div>
            </div>
        ),
    };


    return (
        <div className="w-full min-h-screen bg-white font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative py-16 flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-12">
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 ">

                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center px-0 md:px-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-5 leading-[1.3] pb-2">
                            <span className="bg-[#0377FF] text-transparent bg-clip-text">
                                Advin for
                            </span><br />
                            Every Industry
                        </h1>
                        <p className="text-base md:text-2xl text-black/90 mb-8 font-light max-w-lg">
                            Satu platform HR cerdas untuk semua industri—otomatisasi proses rekrutmen, absensi lebih cepat dan akurat.
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
                            src="/images/Advin/AdvinContent/AdvinIndustri1.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>



            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <p className="ttext-base md:text-2xl text-black/90 mb-8 font-light max-w-lg text-left">
                            Advin adalah platform rekrutmen berbasis AI yang dirancang untuk mengelola proses perekrutan end-to-end. Mulai dari membaca ribuan CV, melakukan wawancara otomatis, hingga mengirim offering letter — semua dilakukan secara cepat, akurat, dan bebas bias.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/Advin/AdvinContent/AdvinIndustri2.svg"
                            alt="Interview"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative py-16 overflow-hidden px-4 bg-[#0377FF] text-white/90 md:px-0 mb-24">
                <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-white/90 mb-24 text-center">The Challenges of Conventional Recruitment</h3>
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-12 shadow-lg">
                            <FaFileAlt size={36} />
                        </div>
                        <h3 className="font-bold text-lg">
                            Baca CV manual memakan waktu lama
                        </h3>
                        <p className="text-white/90 text-sm">                                                                         ribuan lamaran perlu disaring satu per satu.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-12 shadow-lg">
                            <FaCalendarTimes size={36} />
                        </div>
                        <h3 className="font-bold text-lg">
                            Penjadwalan wawancara rumit
                        </h3>
                        <p className="text-white/90 text-sm">
                            kandidat sering reschedule atau batal hadir.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-12 shadow-lg">
                            <FaTasks size={36} />
                        </div>
                        <h3 className="font-bold text-lg">
                            Beban administrasi tinggi
                        </h3>
                        <p className="text-white/90 text-sm">
                            mulai dari shortlist hingga negosiasi.
                        </p>
                    </div>
                    {/* Item 4 */}
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-12 shadow-lg">
                            <FaUserSlash size={36} />
                        </div>
                        <h3 className="font-bold text-lg">
                            Risiko kehilangan kandidat terbaik
                        </h3>
                        <p className="text-white/90 text-sm">
                            proses terlalu lama.
                        </p>
                    </div>
                </div>
            </section>

            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                {/* Tab Section (last section) */}
                <h2 className="text-4xl md:text-5xl font-bold text-[#1976ED] text-center mb-20">
                    How Advin Helps
                </h2>
                {/* Tabs */}
                <div className="flex justify-center mb-4">
                    <div className="flex gap-3 overflow-x-auto md:overflow-visible">
                        {/* Reusable Button */}
                        {[
                            {
                                key: "cv",
                                activeBg: "bg-[#E8F0FE] border-[#1976ED] shadow-[0_4px_24px_0_rgba(25,118,237,0.10)]",
                                inactiveBg: "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]",
                                activeIcon: "/images/Advin/AdvinContent/icon1.svg",
                                inactiveIcon: "/images/Advin/AdvinContent/abu1.svg",
                                label: "AI CV Screening & Scoring"
                            },
                            {
                                key: "interview",
                                activeBg: "bg-[#E6FBF0] border-[#01B574] shadow-[0_4px_24px_0_rgba(1,181,116,0.10)]",
                                inactiveBg: "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]",
                                activeIcon: "/images/Advin/AdvinContent/icon2.svg",
                                inactiveIcon: "/images/Advin/AdvinContent/abu2.svg",
                                label: "AI Interview & Scoring"
                            },
                            {
                                key: "automation",
                                activeBg: "bg-[#FFF3EC] border-[#FF914D] shadow-[0_4px_24px_0_rgba(255,145,77,0.10)]",
                                inactiveBg: "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]",
                                activeIcon: "/images/Advin/AdvinContent/icon3.svg",
                                inactiveIcon: "/images/Advin/AdvinContent/abu3.svg",
                                label: "Dynamic Interview & Automation"
                            },
                            {
                                key: "secure",
                                activeBg: "bg-[#F0F4FF] border-[#6C63FF] shadow-[0_4px_24px_0_rgba(108,99,255,0.10)]",
                                inactiveBg: "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]",
                                activeIcon: "/images/Advin/AdvinContent/icon4.svg",
                                inactiveIcon: "/images/Advin/AdvinContent/abu4.svg",
                                label: "Secure Talent Data Management"
                            }
                        ].map(tab => (
                            <button
                                key={tab.key}
                                className={`transition-all duration-200 border rounded-xl flex flex-col items-center justify-center
                    ${activeTab === tab.key ? tab.activeBg : tab.inactiveBg}
                    w-[55px] h-[55px] md:w-auto md:h-auto md:min-w-[180px] px-3 md:px-6 py-3 md:py-5`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                <img
                                    src={activeTab === tab.key ? tab.activeIcon : tab.inactiveIcon}
                                    alt={tab.label}
                                    className="w-7 h-7"
                                />
                                <span className="hidden md:inline font-medium text-sm mt-2">
                                    {tab.label}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
                {/* Tab Content */}
                <div>
                    {tabContent[activeTab]}
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