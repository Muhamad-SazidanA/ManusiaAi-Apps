import React from 'react';

export default function RangkumInsurance() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            <section className="w-full bg-white py-20 px-6 md:px-16 flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Kiri: Teks */}
                    <div className="flex-1 text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1669F2] leading-tight mb-6">
                            AI for Faster Claims & <br />
                            Policy Document <br />
                            Processing in Insurance
                        </h1>
                        <p className="text-black text-base md:text-xl mb-8">
                            Otomatisasi pemrosesan dokumen <br />
                            klaim dan polis — tanpa input <br />
                            manual, tanpa kesalahan.
                        </p>
                        <button className="bg-[#1669F2] hover:bg-[#1257C3] text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-200">
                            Request Demo
                        </button>
                    </div>
                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/images/RangkumAi/RangkumInsurance/IndustriInsurance1.svg" // Ganti ini dengan gambar kamu
                            alt="Insurance Document Illustration"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-[#1669F2]">Key Benefits</h1>
                </div>

                <div className="container mx-auto px-4 md:px-[80px] lg:px-[140px] space-y-32">

                    {/* Feature 1 */}
                    <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Percepat Proses Klaim & Underwriting
                            </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Ekstraksi otomatis dari formulir klaim, laporan medis, dokumen kecelakaan, dan lainnya — mempercepat waktu respons & pembayaran klaim.                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/RangkumAi/RangkumInsurance/IndustriInsurance2.svg" alt="Data Extraction" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="md:flex md:flex-row-reverse justify-between items-center gap-12" data-aos="fade-right">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Validasi Dokumen Polis Secara Instan                            </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Membaca dan memahami dokumen polis dan kontrak secara menyeluruh untuk memastikan keabsahan & kelengkapan secara otomatis.                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/RangkumAi/RangkumInsurance/IndustriInsurance3.svg" alt="Report Generation" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Pengenalan Dokumen Identitas & Pendukung
                            </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Tangani dokumen klaim asuransi dengan pemrosesan otomatis: mulai dari surat rujukan hingga kuitansi rumah sakit.                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/RangkumAi/RangkumInsurance/IndustriInsurance4.svg" alt="Report Analysis" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="md:flex md:flex-row-reverse justify-between items-center gap-12" data-aos="fade-right">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Mudah Terintegrasi ke Sistem Asuransi Anda                            </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                API terbuka & workflow fleksibel memudahkan integrasi ke platform underwriting, CRM, dan core insurance systems Anda.                            </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/RangkumAi/RangkumInsurance/IndustriInsurance5.svg" alt="Highlight Summary" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                        {/* Kiri: List Dokumen */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Examples of Supported Documents
                            </h1>
                            <ul className="list-disc pl-5 text-base md:text-lg text-[#1A73E8] space-y-3 marker:text-[#1A73E8]">
                                <li>Polis Asuransi (mobil, jiwa, kesehatan, properti)</li>
                                <li>Formulir Klaim & Bukti Kerugian</li>
                                <li>Surat Keterangan Dokter & Medis</li>
                                <li>Kuitansi & Dokumen Identitas (KTP, SIM, NPWP), Invoice Medis</li>
                                <li>Kwitansi Rumah Sakit & Tagihan Medis</li>
                            </ul>
                        </div>

                        {/* Kanan: Gambar */}
                        <div className="flex-1 flex justify-center mt-10 md:mt-0">
                            <img
                                src="/images/RangkumAi/RangkumInsurance/IndustriInsurance6.svg"
                                alt="Contoh Dokumen Invoice"
                                className="w-full max-w-md rounded-xl shadow-lg border"
                            />
                        </div>
                    </div>



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