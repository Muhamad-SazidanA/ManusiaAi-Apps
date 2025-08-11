import React from 'react';
import { Link } from 'react-router-dom';

export default function RangkumInsurance() {
    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };
    return (
        <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
            <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-12">
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16 py-12">

                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6 text-center md:text-left">
                        <h1 className="text-3xl md:text-5xl font-bold font-inter leading-snug mb-5">
                            <span className="bg-[#0377FF] text-transparent bg-clip-text">
                                AI for Faster Claims & Policy Document<br className="hidden md:block" />Processing in Insurance
                            </span>
                        </h1>

                        <p className="text-base md:text-2xl text-black/80 font-light mb-8 max-w-xl">
                            Otomatisasi pemrosesan dokumen klaim dan polis — tanpa input manual, tanpa kesalahan.
                        </p>

                        <Link
                            onClick={() => handleNavigation('/demo-email')}
                            className="px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-base md:text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/RangkumInsurance/IndustriInsurance1.svg"
                            alt="Insurance AI Illustration"
                            className="w-full max-w-[400px] md:max-w-[500px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>


            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                <h2 className="text-3xl md:text-5xl font-bold text-[#0377FF] mb-20 text-center w-full">
                    Key Benefits
                </h2>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Percepat Proses Klaim & Underwriting
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Ekstraksi otomatis dari formulir klaim, laporan medis, dokumen kecelakaan, dan lainnya — mempercepat waktu respons & pembayaran klaim.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/RangkumInsurance/IndustriInsurance2.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Validasi Dokumen Polis Secara Instan
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Membaca dan memahami dokumen polis dan kontrak secara menyeluruh untuk memastikan keabsahan & kelengkapan secara otomatis.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/RangkumInsurance/IndustriInsurance3.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Pengenalan Dokumen Identitas & Pendukung
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Tangani dokumen klaim asuransi dengan pemrosesan otomatis: mulai dari surat rujukan hingga kuitansi rumah sakit.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/RangkumInsurance/IndustriInsurance4.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Mudah Terintegrasi ke Sistem Asuransi Anda
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            API terbuka & workflow fleksibel memudahkan integrasi ke platform underwriting, CRM, dan core insurance systems Anda.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/RangkumInsurance/IndustriInsurance5.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

            </section>

            {/* Benefits Section */}
            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                <h3 className="relative text-4xl md:text-5xl font-semibold text-[#0377FF] mb-20 text-center">
                    Examples of Supported Documents
                </h3>

                <div className="relative max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Kiri: List Dokumen */}
                    <div className="flex-1">
                        <ul className="space-y-6 relative z-20">
                            {[
                                "Polis Asuransi (mobil, jiwa, kesehatan, properti)",
                                "Formulir Klaim & Bukti Kerugian",
                                "Surat Keterangan Dokter & Medis",
                                "Kuitansi & Dokumen Identitas (KTP, SIM, NPWP), Invoice Medis",
                                "Kwitansi Rumah Sakit & Tagihan Medis"
                            ].map((text, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-[#0377FF] flex-shrink-0" />
                                    <span className="text-base md:text-2xl text-[#0377FF] leading-relaxed font-inter font-normal">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Kanan: Gambar diperbesar */}
                    <div className="flex-none w-full md:w-[400px] mt-12 md:mt-0 flex justify-center relative z-10">
                        <img
                            src="/images/RangkumAi/RangkumHumanR/IndustriHR6.svg"
                            alt="Banking Chart"
                            className="w-full max-w-[400px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 bg-white flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
                {/* Deskripsi */}
                <div className="text-center mb-12">
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0377FF] mb-4 leading-tight">
                        Ingin Lihat Langsung?                    </h2>
                    <p className="text-lg md:text-3xl font-medium text-[#0377FF] max-w-3xl mx-auto leading-snug">
                        Temukan bagaimana Rangkum.AI dapat memangkas waktu pemrosesan klaim dan meningkatkan pengalaman nasabah Anda.                    </p>
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