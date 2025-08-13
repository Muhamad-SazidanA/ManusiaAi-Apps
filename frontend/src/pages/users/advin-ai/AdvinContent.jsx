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
            <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-6">
                        <div className="bg-[#E8F0FE] p-4 rounded-xl mr-4">
                            <FaFileAlt size={36} className="text-[#1976ED]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            AI CV Screening & Scoring
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                        Menilai ribuan CV dalam hitungan detik, memberikan skor objektif, dan memprioritaskan kandidat terbaik.
                    </p>
                    <ul className="space-y-3 text-gray-700 text-base">
                        <li>
                            <span className="text-[#1976ED] mr-2">›</span>
                            Algoritma pencocokan berbasis AI
                        </li>
                        <li>
                            <span className="text-[#1976ED] mr-2">›</span>
                            Penilaian objektif & bebas bias
                        </li>
                        <li>
                            <span className="text-[#1976ED] mr-2">›</span>
                            Filter otomatis sesuai kriteria
                        </li>
                        <li>
                            <span className="text-[#1976ED] mr-2">›</span>
                            Multi-language processing (Indonesia & Inggris)
                        </li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-[#E8F0FE] p-4 rounded-xl shadow-lg flex items-center justify-center">
                            <FaFileAlt size={36} className="text-[#1976ED]" />
                        </div>
                    </div>
                    <img
                        src="/images/Advin/AdvinContent/CVScreening.jpg"
                        alt="CV Screening"
                        className="rounded-2xl shadow-2xl w-full max-w-md mt-12"
                    />
                </div>
            </div>
        ),
        interview: (
            <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-6">
                        <div className="bg-[#E6FBF0] p-4 rounded-xl mr-4">
                            <FaUserCog size={36} className="text-[#01B574]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            AI Interview & Scoring
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                        Wawancara otomatis 24/7 dengan analisis mendalam terhadap respons kandidat.
                    </p>
                    <ul className="space-y-3 text-gray-700 text-base">
                        <li>
                            <span className="text-[#01B574] mr-2">›</span>
                            Wawancara video atau teks otomatis
                        </li>
                        <li>
                            <span className="text-[#01B574] mr-2">›</span>
                            Analisis komunikasi verbal & non-verbal
                        </li>
                        <li>
                            <span className="text-[#01B574] mr-2">›</span>
                            Penilaian kepribadian & soft skills
                        </li>
                        <li>
                            <span className="text-[#01B574] mr-2">›</span>
                            Skoring instan dan konsisten
                        </li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-[#E6FBF0] p-4 rounded-xl shadow-lg flex items-center justify-center">
                            <FaUserCog size={36} className="text-[#01B574]" />
                        </div>
                    </div>
                    <img
                        src="/images/Advin/AdvinContent/InterviewScoring.jpg"
                        alt="Interview Scoring"
                        className="rounded-2xl shadow-2xl w-full max-w-md mt-12"
                    />
                </div>
            </div>
        ),
        automation: (
            <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-6">
                        <div className="bg-[#FFF3EC] p-4 rounded-xl mr-4">
                            <FaRobot size={36} className="text-[#FF914D]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Dynamic Interview & Automation
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                        Mengotomatiskan seluruh proses pasca-shortlist hingga penawaran kerja, menghemat waktu tim HR.
                    </p>
                    <ul className="space-y-3 text-gray-700 text-base">
                        <li>
                            <span className="text-[#FF914D] mr-2">›</span>
                            Penjadwalan wawancara otomatis
                        </li>
                        <li>
                            <span className="text-[#FF914D] mr-2">›</span>
                            Integrasi kalender dan email perusahaan
                        </li>
                        <li>
                            <span className="text-[#FF914D] mr-2">›</span>
                            Pengiriman pengingat otomatis ke kandidat
                        </li>
                        <li>
                            <span className="text-[#FF914D] mr-2">›</span>
                            Otomasi proses penawaran kerja
                        </li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-[#FFF3EC] p-4 rounded-xl shadow-lg flex items-center justify-center">
                            <FaRobot size={36} className="text-[#FF914D]" />
                        </div>
                    </div>
                    <img
                        src="/images/Advin/AdvinContent/DynamicInterview.jpg"
                        alt="Dynamic Interview"
                        className="rounded-2xl shadow-2xl w-full max-w-md mt-12"
                    />
                </div>
            </div>
        ),
        secure: (
            <div className="flex flex-col md:flex-row items-start gap-10 mt-12">
                {/* Left */}
                <div className="flex-1">
                    <div className="flex items-center mb-6">
                        <div className="bg-[#F0F4FF] p-4 rounded-xl mr-4">
                            <FaShieldAlt size={36} className="text-[#6C63FF]" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                            Secure Talent Data Management
                        </h2>
                    </div>
                    <p className="text-gray-700 mb-6">
                        Menjamin keamanan seluruh data kandidat dan riwayat proses rekrutmen.
                    </p>
                    <ul className="space-y-3 text-gray-700 text-base">
                        <li>
                            <span className="text-[#6C63FF] mr-2">›</span>
                            Enkripsi end-to-end untuk semua data
                        </li>
                        <li>
                            <span className="text-[#6C63FF] mr-2">›</span>
                            Akses berbasis peran (role-based access control)
                        </li>
                        <li>
                            <span className="text-[#6C63FF] mr-2">›</span>
                            Kepatuhan GDPR & regulasi perlindungan data lokal
                        </li>
                        <li>
                            <span className="text-[#6C63FF] mr-2">›</span>
                            Backup & recovery otomatis
                        </li>
                    </ul>
                </div>
                {/* Right */}
                <div className="flex-1 flex justify-center items-center relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                        <div className="bg-[#F0F4FF] p-4 rounded-xl shadow-lg flex items-center justify-center">
                            <FaShieldAlt size={36} className="text-[#6C63FF]" />
                        </div>
                    </div>
                    <img
                        src="/images/Advin/AdvinContent/SecureTalent.jpg"
                        alt="Secure Talent Data"
                        className="rounded-2xl shadow-2xl w-full max-w-md mt-12"
                    />
                </div>
            </div>
        ),
    };

    return (
        <div className="w-full bg-white font-sans px-6 py-16">
            {/* Section 1 */}
            <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mb-20">
                {/* Text */}
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#0377FF] leading-tight">
                        Advin for
                    </h2>
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-black leading-tight">
                        Every Industry
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                        Satu platform HR cerdas untuk semua industri—otomatisasi proses rekrutmen,
                        absensi lebih cepat dan akurat.
                    </p>
                    <Link
                        onClick={() => handleNavigation('/demo-email')}
                        className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200"
                    >
                        Request Demo
                    </Link>
                </div>

                {/* Image */}
                <div className="flex-1 relative flex justify-center">
                    <img
                        src="/images/Advin/AdvinIndustri1.svg"
                        alt="Meeting"
                        className="rounded-lg shadow-lg w-full max-w-[380px]"
                    />
                </div>
            </section>

            {/* Section 2 */}
            <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
                {/* Text */}
                <div className="flex-1">
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                        Advin adalah platform rekrutmen berbasis AI yang dirancang untuk mengelola proses
                        perekrutan end-to-end. Mulai dari membaca ribuan CV, melakukan wawancara otomatis,
                        hingga mengirim offering letter — semua dilakukan secara cepat, akurat, dan bebas bias.
                    </p>
                </div>

                {/* Image */}
                <div className="flex-1 relative flex justify-center">
                    <img
                        src="/images/Advin/AdvinIndustri2.svg"
                        alt="Interview"
                        className="rounded-lg shadow-lg w-full max-w-[380px]"
                    />
                </div>
            </section>
            <br />
            <section className="w-screen bg-[#0377FF] text-white py-16">
                <div className="max-w-6xl mx-auto text-center px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-12">
                        The Challenges of Conventional Recruitment
                    </h2>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                        {/* Item 1 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-4 shadow-lg">
                                <FaFileAlt size={36} />
                            </div>
                            <h3 className="font-bold text-lg">
                                Baca CV manual memakan waktu lama
                            </h3>
                            <p className="text-white/90 text-sm">
                                ribuan lamaran perlu disaring satu per satu.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-4 shadow-lg">
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
                            <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-4 shadow-lg">
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
                            <div className="bg-white text-[#0377FF] rounded-xl p-5 mb-4 shadow-lg">
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
                </div>
            </section>

            {/* Tab Section (last section) */}
            <h2 className="text-4xl md:text-5xl font-bold text-[#1976ED] text-center mb-12">
                How Advin Helps
            </h2>
            {/* Tabs */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-2">
                <button
                    className={`flex-1 min-w-[220px] px-6 py-5 rounded-xl border transition-all duration-200 flex flex-col items-center
                        ${activeTab === "cv"
                            ? "bg-[#E8F0FE] border-[#1976ED] shadow-[0_4px_24px_0_rgba(25,118,237,0.10)]"
                            : "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]"}
                    `}
                    onClick={() => setActiveTab("cv")}
                >
                    <FaFileAlt size={28} className="mb-2" />
                    <span className="font-medium text-sm">AI CV Screening & Scoring</span>
                </button>
                <button
                    className={`flex-1 min-w-[220px] px-6 py-5 rounded-xl border transition-all duration-200 flex flex-col items-center
                        ${activeTab === "interview"
                            ? "bg-[#E6FBF0] border-[#01B574] shadow-[0_4px_24px_0_rgba(1,181,116,0.10)]"
                            : "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]"}
                    `}
                    onClick={() => setActiveTab("interview")}
                >
                    <FaUserCog size={28} className="mb-2" />
                    <span className="font-medium text-sm">AI Interview & Scoring</span>
                </button>
                <button
                    className={`flex-1 min-w-[220px] px-6 py-5 rounded-xl border transition-all duration-200 flex flex-col items-center
                        ${activeTab === "automation"
                            ? "bg-[#FFF3EC] border-[#FF914D] shadow-[0_4px_24px_0_rgba(255,145,77,0.10)]"
                            : "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]"}
                    `}
                    onClick={() => setActiveTab("automation")}
                >
                    <FaRobot size={28} className="mb-2" />
                    <span className="font-medium text-sm">Dynamic Interview & Automation</span>
                </button>
                <button
                    className={`flex-1 min-w-[220px] px-6 py-5 rounded-xl border transition-all duration-200 flex flex-col items-center
                        ${activeTab === "secure"
                            ? "bg-[#F0F4FF] border-[#6C63FF] shadow-[0_4px_24px_0_rgba(108,99,255,0.10)]"
                            : "bg-white border-[#E3EAFD] hover:bg-[#F5F8FF]"}
                    `}
                    onClick={() => setActiveTab("secure")}
                >
                    <FaShieldAlt size={28} className="mb-2" />
                    <span className="font-medium text-sm">Secure Talent Data Management</span>
                </button>
            </div>
            {/* Tab Content */}
            <div>
                {tabContent[activeTab]}
            </div>
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