import React from 'react';
import { Link } from 'react-router-dom';

export default function RangkumAi() {
    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };
    return (
        <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
            <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-12">
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mb-16 mt-20">

                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-center md:items-start justify-center text-center md:text-left px-0 md:px-6">
                        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-inter mb-5 leading-tight">
                            <span className="bg-[#0377FF] text-transparent bg-clip-text">
                                Rangkum.AI
                            </span>
                        </h1>
                        <p className="text-sm sm:text-base md:text-2xl text-black/90 mb-8 font-light max-w-lg">
                            Intelligent Document Processing & Smart OCR Platform
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
                            src="/images/RangkumAi/RangkumContentDS.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>

                </div>
            </section>

            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-16 overflow-hidden px-4 md:px-0">
                <h2 className="relative text-4xl md:text-5xl font-semibold text-black/90 mb-8 text-center">
                    What is{" "}
                    <span className="text-[#0377FF] mb-20">Rangkum.AI?</span>
                </h2>
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <p className="text-1xl md:text-3xl font-inter font-normal text-[#0377FF] leading-relaxed max-w-lg text-left mb-12">
                            Rangkum.AI adalah platform Intelligent Document Processing (IDP) berbasis AI yang membantu organisasi mengotomatisasi ekstraksi,pemrosesan, dan peringkasan dokumen, dari PDF, formulir, hingga laporan kompleks
                        </p>
                        <Link onClick={() => handleNavigation('/demo-email')}
                            className="px-8 py-4 rounded-xl font-semibold text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                            Request Demo
                        </Link>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/asetLogoRangkum.svg"
                            alt="Solusi Rangkum.AI"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="relative py-16 overflow-hidden px-4 bg-[#0377FF] md:px-0">
                <h3 className="relative z-20 text-4xl md:text-5xl font-semibold text-white/90 mb-20 text-center">Key Benefits Rangkum.AI</h3>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1">
                        <ul className="space-y-6 relative z-20">
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-white/90 flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed ">Mengubah dokumen tak terstruktur<br />menjadi data rapi dan siap pakai</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-white/90 flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Akurasi tinggi tanpa perlu template</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-white/90 flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Integrasi mudah dengan sistem ERP,<br />CRM, RPA, dan lainnya</span>
                            </li>
                            <li className="flex items-center gap-6 ml-[-30px]">
                                <span className="w-8 h-8 mt-1 rounded-full bg-white/90 flex-shrink-0" />
                                <span className="text-1xl md:text-3xl font-inter font-normal text-white/90 leading-relaxed">Model AI terus belajar dan semakin<br />akurat dari waktu ke waktu</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-none w-[180px] md:w-[280px] relative z-10">
                        <img
                            src="/images/RangkumAi/ImageKBRangkum.svg"
                            alt="Banking Chart"
                            className="w-full max-w-md h-auto object-contain scale-[1.5] -translate-x-[60px] translate-y-[30px] mb-[100px]"
                        />
                    </div>
                </div>
            </section>

            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                <h3 className="relative text-4xl md:text-5xl font-light text-[#0377FF] mb-4 text-center">What Makes</h3>
                <h3 className="relative text-4xl md:text-5xl font-light text-[#ADADAD] mb-20 text-center">Rangkum.AI Powerful?</h3>
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-37 mt-12">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Ekstraksi Data Adaptif
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            AI Rangkum.AI mampu membaca dan mengekstrak data dari berbagai format dokumen seperti invoice, formulir, dan identitas tanpa perlu template statis atau aturan zona.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/ImageRangkum1.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-37 mt-12">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Klasifikasi Dokumen Otomatis
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Sistem secara otomatis mengenali jenis dokumen, mengelompokkan berdasarkan kategori seperti identitas, finansial, dan legal, sehingga proses digitalisasi menjadi efisien.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/ImageRangkum2.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-37 mt-12">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Pengenalan Tabel Canggih
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Teknologi AI memahami struktur tabel yang rumit, termasuk yang memiliki baris berganda, kolom nested, atau format tabel tidak standar.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/ImageRangkum3.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                <hr className="border-t-2 border-gray-200 mt-12" />
                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-37 mt-12">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Multibahasa
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Dengan OCR tingkat lanjut, sistem dapat membaca tulisan tangan, mendeteksi centang pada formulir, dan menangkap data dari dokumen cetak dengan akurasi tinggi.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/ImageRangkum4.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-37 mt-12">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Pengenalan Tulisan Tangan<br />& Checkbox
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Mendukung pengolahan dokumen dalam berbagai bahasa, termasuk Bahasa Indonesia dan Inggris, sehingga fleksibel digunakan oleh perusahaan lokal maupun multinasional.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/RangkumAi/ImageRangkum5.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
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