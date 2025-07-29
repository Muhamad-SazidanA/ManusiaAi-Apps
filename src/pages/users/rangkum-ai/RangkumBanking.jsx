import React from 'react';

export default function RangkumBanking() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            <section className="w-full bg-white py-20 px-6 md:px-16 flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Kiri: Teks */}
                    <div className="flex-1 text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1669F2] leading-tight mb-6">
                            AI-Powered Document <br />
                            Automation for Banking <br />
                            & Multifinance
                        </h1>
                        <p className="text-black text-base md:text-xl mb-8">
                            Otomatisasi dokumen finansial dan <br />
                            identitas untuk proses yang lebih <br />
                            cepat dan akurat.
                        </p>
                        <button className="bg-[#1669F2] hover:bg-[#1257C3] text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-200">
                            Request Demo
                        </button>
                    </div>
                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/images/RangkumAi/RangkumBanking/IndustriBMF1.svg" // Ganti ini dengan gambar kamu
                            alt="Insurance Document Illustration"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-black">Challenges in the
                    </h1>
                </div>

                <div className="container mx-auto px-4 md:px-[80px] lg:px-[140px] space-y-32">

                    {/* Feature 1 */}
                    <div className="mb-20" data-aos="fade-left">
                        {/* Judul di tengah atas */}
                        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-12 text-[#1669F2] text-center">
                            Banking & Multifinance Industry
                        </h1>
                        {/* Konten teks dan gambar */}
                        <div className="md:flex justify-between items-center gap-12">
                            {/* Teks */}
                            <div className="flex-1">
                                <ul className="list-disc pl-5 text-base md:text-lg text-[#1A73E8] space-y-3 marker:text-[#1A73E8]">
                                    <li>Volume dokumen tinggi & tidak terstruktur (KTP, slip gaji, rekening koran)</li>
                                    <li>Proses input & validasi manual lambat dan rawan kesalahan</li>
                                    <li>Sistem yang tidak fleksibel terhadap format dokumen baru</li>
                                </ul>
                            </div>
                            {/* Gambar */}
                            <div className="flex-1 flex justify-center mt-10 md:mt-0">
                                <img src="/images/RangkumAi/RangkumBanking/IndustriBMF2.svg" alt="Data Extraction" className="w-full max-w-md" />
                            </div>
                        </div>
                    </div>


                    {/* Feature 2 */}
                    <div className="mb-20" data-aos="fade-right">
                        {/* Judul di tengah atas */}
                        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-12 text-[#1669F2] text-center">
                            How Rangkum.AI Helps
                        </h1>
                        {/* Konten */}
                        <div className="md:flex md:flex-row-reverse justify-between items-center gap-12">
                            {/* Teks */}
                            <div className="flex-1">
                                <p className="text-base md:text-xl font-normal text-black leading-relaxed">
                                    Rangkum.AI dari Manusia.AI membantu tim perbankan dan multifinance mengelola dokumen dalam volume besar secara cepat dan akurat — tanpa aturan tetap, tanpa input manual.
                                </p>
                            </div>
                            {/* Gambar */}
                            <div className="flex-1 flex justify-center mt-10 md:mt-0">
                                <img src="/images/RangkumAi/RangkumBanking/IndustriBMF3.svg" alt="Report Generation" className="w-full max-w-md" />
                            </div>
                        </div>
                    </div>


                    {/* Feature 3 */}
                    <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                        <div className="flex-1">
                            <ul className="list-disc pl-5 text-base md:text-lg text-[#1A73E8] space-y-3 marker:text-[#1A73E8]">
                                <li>Ekstraksi data otomatis dari dokumen identitas & finansial</li>
                                <li>Klasifikasi dokumen seperti KTP, NPWP, PO, invoice, slip gaji</li>
                                <li>Input data langsung ke sistem internal, CRM, atau bot RPA</li>
                                <li>Kuitansi & Dokumen Identitas (KTP, SIM, NPWP), Invoice Medis</li>
                            </ul>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/RangkumAi/RangkumBanking/IndustriBMF4.svg" alt="Report Analysis" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="mb-20" data-aos="fade-left">
                        {/* Judul Tengah */}
                        <h1 className="text-3xl md:text-5xl font-bold font-inter mb-12 text-[#1669F2] text-center">
                            Examples of Supported Documents
                        </h1>

                        {/* Gambar Kiri, Teks Kanan */}
                        <div className="md:flex justify-between items-center gap-12">
                            {/* Gambar */}
                            <div className="flex-1 flex justify-center mb-10 md:mb-0">
                                <img src="/images/RangkumAi/RangkumBanking/IndustriBMF5.svg" alt="Supported Documents" className="w-full max-w-md" />
                            </div>

                            {/* Teks */}
                            <div className="flex-1">
                                <ul className="list-disc pl-5 text-base md:text-lg text-[#1A73E8] space-y-3 marker:text-[#1A73E8]">
                                    <li>Onboarding Nasabah Baru: Ekstrak & validasi KYC secara otomatis</li>
                                    <li>Pemrosesan Kredit: Percepat analisis dokumen pengajuan & jaminan</li>
                                    <li>Otomatisasi AP: Cocokkan invoice & PO, ambil data pembayaran</li>
                                </ul>
                            </div>
                        </div>
                    </div>

            <section className="py-20 bg-white text-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#1A62DC] mb-6">
                    Stop buang waktu input manual!
                </h2>
                <p className="text-lg md:text-xl text-[#1A62DC] max-w-2xl mx-auto leading-relaxed">
                   Lihat bagaimana Rangkum.AI bisa memangkas waktu kerja hingga 80%.
                </p>
            </section>

                </div>
            </section>
            {/* CTA Section */}
            <section className="relative py-24 bg-white flex items-center justify-center overflow-hidden">
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
                        {/* Left Side */}
                        <div className="flex-1 text-left pr-0 md:pr-10">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0075FF] mb-2">
                                Get started today!
                            </h2>
                            <p className="text-xl md:text-2xl font-medium text-[#0075FF]">
                                Siap Mempercepat Akses <br /> Pengetahuan Anda?
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="flex-1 flex flex-col items-center md:items-end gap-4 w-full md:w-auto mt-8 md:mt-0">
                            {/* Badge */}
                            <div className="flex justify-center w-full md:w-auto">
                                <div className="inline-flex items-center gap-2 bg-[#0075FF] text-white px-6 py-2 rounded-full text-sm font-medium shadow-md">
                                    <img src="/images/Image-BintangBG.svg" alt="Star" className="w-4 h-4" />
                                    New: Our AI integration just landed
                                </div>
                            </div>

                            {/* Button */}
                            <div className="flex justify-center md:justify-end w-full md:w-auto">
                                <button className="bg-[#0075FF] hover:bg-[#0066e0] text-white text-lg font-bold px-8 py-3 rounded-xl shadow-lg transition-transform transform hover:scale-105">
                                    Request Demo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
}