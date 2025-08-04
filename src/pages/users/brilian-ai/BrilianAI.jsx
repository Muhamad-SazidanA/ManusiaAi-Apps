import React from 'react';
import { Link } from 'react-router-dom';

export default function BriliamAI() {
    const handleNavigation = (url) => {
        window.location.href = url; // Force reload the page
    };
    return (
        <div className="w-full min-h-screen bg-white text-blue-800 font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden relative px-4 md:px-12">
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 mt-20 mb-20 mb-16">
                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h1 className="text-8xl md:text-8xl lg:text-8xl font-bold font-inter mb-5 leading-[1.3] pb-[10px]">
                            <span className="bg-[#0377FF] text-transparent bg-clip-text whitespace-nowrap">
                                Brilian.AI
                            </span>
                        </h1>
                        <p className="text-base md:text-3xl text-black/90 mb-8 font-light max-w-lg  text-left">
                            Accelerate Decisions with AI-Powered Knowledge Management
                        </p>
                        <Link onClick={() => handleNavigation('/demo-email')}
                            className="px-8 py-4 rounded-xl font-semibold text-lg bg-[#0377FF] text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                            Request Demo
                        </Link>
                    </div>
                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/BrilianContentDS.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-16 overflow-hidden px-4 md:px-0">
                <h2 className="relative text-4xl md:text-5xl font-semibold text-[#0377FF] mb-20 text-center">
                    What is Brilian.AI?
                </h2>
                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            brilian.ai adalah platform manajemen pengetahuan berbasis AI yang memungkinkan akses cepat dan aman ke informasi internal, serta otomatisasi dokumen untuk efisiensi dan pengambilan keputusan yang lebih cerdas.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/asetLogoBrilian.svg"
                            alt="Solusi Brilian.AI"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>

            {/*Section Solusi dari Brilian.AI*/}
            <section className="relative py-16 overflow-hidden px-4 md:px-12">
                <h3 className="relative text-4xl md:text-5xl font-light text-[#0377FF] mb-4 text-center">Key Features</h3>
                <h3 className="relative text-4xl md:text-5xl font-light text-[#ADADAD] mb-20 text-center">What Makes Brilian.AI Different?</h3>
                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20 ">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Tanya apa aja
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Cari informasi seperti berbicara dengan kolega.Brilian.AI memungkinkan pengguna mengajukan pertanyaan dengan bahasa alami (natural language), tanpa perlu tahu struktur file atau letak dokumen. Sistem akan menjawab langsung dari sumber data internal Anda.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/Image-Tanyaapasaja.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Buatin Laporan
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Integrasikan berbagai sumber — PDF, spreadsheet, email, hingga notulensi — ke dalam satu platform. Brilian.AI akan bantu menyusun dan menyajikan laporan yang siap dibagikan.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/Image-Buatlaporan.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Analisa Laporan
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Brilian.AI membaca dan memahami laporan panjang, lalu merangkumnya menjadi insight utama: temuan penting, tren tersembunyi, hingga anomali. Semua ditampilkan secara ringkas dan mudah dicerna.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/Image-Analisislaporan.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Riset Market
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Brilian.AI memindai ribuan dokumen internal dan eksternal untuk mengungkap tren pasar, pergerakan kompetitor, serta preferensi pelanggan. Cocok untuk tim marketing, produk, dan strategi yang butuh data cepat untuk ambil keputusan.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/Image-Risetmarket.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
                
                <div className="flex flex-col md:flex-row-reverse relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Pikirin Ide
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            AI Brilian.ai membantu brainstorming otomatis berdasarkan konteks kerja dan data Anda dandari ide konten hingga sudut pandang unik, tanpa perlu mulai dari nol.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/Image-Pikirinide.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

                <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 mb-20 mb-25">
                    <div className="flex-1 flex flex-col items-start justify-center px-0 md:px-6">
                        <h2 className="text-4xl md:text-5xl font-semibold text-[#0377FF] mb-12 md:mb-8 text-left md:text-left w-full">
                            Rangkumin Meeting
                        </h2>
                        <p className="text-1xl md:text-3xl font-inter font-normal text-black/90 leading-relaxed max-w-lg text-left">
                            Hasil meeting, baik online maupun offline, dapat langsung ditranskrip dan dirangkum otomatis. Dapatkan ringkasan poin penting yang siap dibagikan ke tim — tanpa perlu mengetik manual.
                        </p>
                    </div>
                    <div className="flex-1 flex items-center justify-center px-0 md:px-6">
                        <img
                            src="/images/BrilianAi/Image-Rangkuminmeet.svg"
                            alt="HR Document Management"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>

            </section>
            {/* CTA Section */}
            <section className="relative py-24 bg-white flex items-center justify-center overflow-hidden px-4 md:px-12">
                {/* Card Container */}
                <div className="relative z-10 w-full flex justify-center items-center">
                    <div
                        className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl px-8 py-10 rounded-2xl"
                        style={{
                            background: "white",
                            boxShadow: "0 0 24px 4px #2196F3",
                            border: "1px solid #d3eaff"
                        }}
                    >
                        <div className="absolute left-1/2 -translate-x-20 -translate-y-10 w-auto h-20 animate-pulse delay-500 opacity-30 z-30 pointer-events-none">
                            <img src="/images/Image-BintangBG.svg" alt="Star" className="w-full h-full" />
                        </div>
                        {/* Left Side */}
                        <div className="flex-1 text-left pr-0 md:pr-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-2">
                                Get started today!
                            </h2>
                            <p className="text-lg md:text-4xl font-light text-[#0377FF] max-w-3xl mx-auto leading-snug">
                                Siap Mempercepat Akses <br /> Pengetahuan Anda?
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex-1 flex flex-col justify-center items-center gap-4 w-full md:w-auto mt-0">
                            {/* Badge */}
                            <div className="w-full flex justify-center md:justify-end">
                                <div className="inline-flex items-center gap-2 bg-[#0075FF] text-white px-6 py-2 rounded-full text-base font-medium shadow-md">
                                    <img src="/images/Image-BintangBG.svg" alt="Star" className="w-5 h-5" />
                                    New: Our AI integration just landed
                                </div>
                            </div>
                            {/* Button */}
                            <div className="w-full flex justify-center md:justify-end">
                                <Link onClick={() => handleNavigation('/demo-email')}
                                    className="bg-[#0075FF] hover:bg-[#0066e0] text-white text-lg font-bold px-8 py-3 rounded-xl shadow-lg border border-[#A4D1FF] transition-transform transform hover:scale-105">
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