import React from 'react';
import { Link } from 'react-router-dom';


export default function RangkumBangking() {
    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };
    return (
        <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-16">
                <div className="relative max-w-7xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-16 md:gap-24 mb-16">

                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-inter leading-snug mb-6">
                            <span className="bg-[#0377FF] text-transparent bg-clip-text">
                                AI-Powered Document<br />Automation for Banking <br />& Multifinance
                            </span>
                        </h1>

                        <p className="text-base md:text-2xl text-black/90 font-light mb-8 max-w-xl">
                            Otomatisasi dokumen finansial dan identitas untuk proses yang lebih cepat dan akurat.
                        </p>

                        <Link
                            onClick={() => handleNavigation('/demo-email')}
                            className="px-8 py-4 rounded-xl font-semibold text-lg bg-[#0377FF] text-white shadow-md border border-blue-300 hover:scale-105 transition-all duration-200"
                        >
                            Request Demo
                        </Link>
                    </div>

                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src="/images/RangkumAi/RangkumBanking/IndustriBMF1.svg"
                            alt="HR Document Management"
                            className="w-full max-w-xl h-auto object-contain"
                        />
                    </div>

                </div>
            </section>


            {/* Benefits Section */}
            <section className="relative py-20 overflow-hidden px-4 md:px-16 bg-white">
                <h3 className="text-3xl md:text-5xl font-semibold text-black/90 text-center mb-2">
                    Challenges in the
                </h3>
                <h3 className="text-3xl md:text-5xl font-semibold text-[#0377FF] text-center mb-16">
                    Banking & Multifinance Industry
                </h3>

                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* List Section */}
                    <div className="flex-1">
                        <ul className="space-y-10">
                            <li className="flex items-start gap-4">
                                <div className="w-3 h-3 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-base md:text-2xl font-inter text-[#0377FF] leading-snug">
                                    Volume dokumen tinggi & tidak terstruktur<br />
                                    (KTP, slip gaji, rekening koran)
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-3 h-3 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-base md:text-2xl font-inter text-[#0377FF] leading-snug">
                                    Proses input & validasi manual<br />
                                    lambat dan rawan kesalahan
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-3 h-3 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-base md:text-2xl font-inter text-[#0377FF] leading-snug">
                                    Sistem yang tidak fleksibel<br />
                                    terhadap format dokumen baru
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-[360px] flex justify-center md:justify-end">
                        <img
                            src="/images/RangkumAi/RangkumBanking/IndustriBMF2.svg"
                            alt="Banking Chart"
                            className="w-[240px] md:w-[360px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>


            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-20 overflow-hidden px-4 md:px-16 bg-white">
                <h2 className="text-3xl md:text-5xl font-bold text-[#0377FF] mb-20 text-left md:text-center w-full">
                    How Rangkum.AI Helps
                </h2>

                {/* Intro Section */}
                <div className="flex flex-col md:flex-row-reverse max-w-6xl mx-auto items-center justify-between gap-12 mb-24">
                    {/* Text */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <p className="text-lg md:text-3xl font-inter text-[#0377FF] leading-relaxed max-w-xl">
                            Rangkum.AI dari Manusia.AI membantu tim perbankan dan multifinance mengelola dokumen dalam volume besar secara cepat dan akurat — tanpa aturan tetap, tanpa input manual.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1 flex items-center justify-center">
                        <img
                            src="/images/RangkumAi/RangkumBanking/IndustriBMF3.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>
                </div>

                {/* Benefit Points Section */}
                <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* List */}
                    <div className="flex-1">
                        <ul className="space-y-10">
                            <li className="flex items-start gap-4">
                                <div className="w-3 h-3 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-base md:text-2xl text-[#0377FF] leading-snug">
                                    Ekstraksi data otomatis dari<br />dokumen identitas & finansial
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-3 h-3 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-base md:text-2xl text-[#0377FF] leading-snug">
                                    Klasifikasi dokumen seperti<br />KTP, NPWP, PO, invoice, slip gaji
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <div className="w-3 h-3 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-base md:text-2xl text-[#0377FF] leading-snug">
                                    Input data langsung ke<br />sistem internal, CRM, atau bot RPA
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-[360px] flex justify-center md:justify-end">
                        <img
                            src="/images/RangkumAi/RangkumBanking/IndustriBMF4.svg"
                            alt="Banking Chart"
                            className="w-[240px] md:w-[360px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>


            {/* Benefits Section */}
            <section className="relative py-20 px-4 md:px-16 bg-white overflow-hidden">
                <h3 className="text-3xl md:text-5xl font-bold text-[#0377FF] text-center mb-20">
                    Main Use Case
                </h3>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-20">

                    {/* List Use Cases */}
                    <div className="flex-1 w-full">
                        <ul className="space-y-10">
                            <li className="flex items-start gap-6">
                                <div className="w-4 h-4 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-lg md:text-3xl text-[#0377FF] leading-snug">
                                    <strong>Onboarding Nasabah Baru:</strong><br />
                                    Ekstrak & validasi KYC secara otomatis
                                </p>
                            </li>
                            <li className="flex items-start gap-6">
                                <div className="w-4 h-4 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-lg md:text-3xl text-[#0377FF] leading-snug">
                                    <strong>Pemrosesan Kredit:</strong><br />
                                    Percepat analisis dokumen pengajuan & jaminan
                                </p>
                            </li>
                            <li className="flex items-start gap-6">
                                <div className="w-4 h-4 mt-2 rounded-full bg-[#0377FF]" />
                                <p className="text-lg md:text-3xl text-[#0377FF] leading-snug">
                                    <strong>Otomatisasi AP:</strong><br />
                                    Cocokkan invoice & PO, ambil data pembayaran
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div className="w-full md:w-[360px] flex justify-center md:justify-end">
                        <img
                            src="/images/RangkumAi/RangkumBanking/IndustriBMF5.svg"
                            alt="Banking Chart"
                            className="w-[240px] md:w-[360px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="relative py-24 bg-white flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
                {/* Deskripsi */}
                <div className="text-center mb-12">
                    <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#0377FF] mb-4 leading-tight">
                        Stop buang waktu input manual!                    </h2>
                    <p className="text-lg md:text-3xl font-medium text-[#0377FF] max-w-3xl mx-auto leading-snug">
                        Lihat bagaimana Rangkum.AI bisa memangkas waktu kerja hingga 80%.                    </p>
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