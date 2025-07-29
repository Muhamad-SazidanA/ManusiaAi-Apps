import React from 'react';

export default function RangkumHospital() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            <section className="min-h-screen py-20 px-6 md:px-16 bg-white overflow-hidden">
                <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Kiri: Teks dan Button */}
                    <div className="flex-1">
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold font-inter mb-5 leading-tight bg-gradient-to-b from-[#97BDFD] to-[#1A62DC] text-transparent bg-clip-text">
                            AI for Smarter Document Processing in Healthcare
                        </h1>
                        <p className="text-base md:text-2xl text-black mb-8 font-medium max-w-lg">
                            Percepat pemrosesan dokumen pasien dan administrasi medis tanpa template, tanpa repot.
                        </p>
                        <button className="px-6 py-3 rounded-xl font-semibold text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white shadow-lg border border-blue-300 hover:scale-105 transition-all duration-200">
                            Request demo
                        </button>
                    </div>

                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex justify-center items-center">
                        <img
                            src="/images/RangkumAi/RangkumHospital/IndustriHC1.svg"
                            alt="Medical Record"
                            className="w-full max-w-md h-auto object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-[#1669F2]">What Makes</h1>
                    <h2 className="text-2xl md:text-4xl text-white mt-2 mb-0">Rangkum.AI Powerful?</h2>
                </div>

                {/* Background Effects */}
                <div className="absolute top-1/4 right-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-blue-400/15 blur-[150px] -translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-1/3 left-0 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-blue-400/15 blur-[150px] translate-x-1/4 pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none z-0">
                    <img src="/images/Image-BintangBG.svg" alt="Star" className="absolute top-12 left-20 h-12 md:h-16 animate-pulse opacity-30" />
                    <img src="/images/Image-BintangBG.svg" alt="Star" className="absolute bottom-16 left-16 h-4 md:h-5 animate-pulse delay-800 opacity-25" />
                    <img src="/images/Image-BintangBG.svg" alt="Star" className="absolute top-1/3 left-24 h-8 md:h-10 animate-pulse delay-500 opacity-20" />
                </div>


                <div className="container mx-auto px-4 md:px-[80px] lg:px-[140px]">
                    {/* Feature List */}
                    <div className="flex flex-col gap-24">
                        {/* Feature 1 */}
                        <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                    Ekstraksi Otomatis Rekam Medis & Hasil Lab
                                </h1>
                                <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                    Baca data pasien, diagnosa, resep, hingga hasil pemeriksaan dari berbagai format dan tulisan tangan.                       </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img src="/images/RangkumAi/RangkumHospital/IndustriHC2.svg" alt="Data Extraction" className="w-full max-w-md" />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="md:flex md:flex-row-reverse justify-between items-center gap-12" data-aos="fade-right">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                    Digitalisasi Arsip Medis Lama                        </h1>
                                <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                    Ubah dokumen cetak atau hasil scan menjadi data terstruktur dan mudah dicari untuk kebutuhan administratif maupun audit.                    </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img src="/images/RangkumAi/RangkumHospital/IndustriHC3.svg" alt="Report Generation" className="w-full max-w-md" />
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                    Klaim Asuransi Lebih <br />Cepat & Akurat
                                </h1>
                                <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                    Tangani dokumen klaim asuransi dengan pemrosesan otomatis: mulai dari surat rujukan hingga kuitansi rumah sakit.                        </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img src="/images/RangkumAi/RangkumHospital/IndustriHC4.svg" alt="Report Analysis" className="w-full max-w-md" />
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="md:flex md:flex-row-reverse justify-between items-center gap-12" data-aos="fade-right">
                            <div className="flex-1">
                                <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                    Digitalisasi Arsip Medis                      </h1>
                                <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                    Ubah dokumen cetak atau hasil scan menjadi data terstruktur dan mudah dicari untuk kebutuhan administratif maupun audit                          </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <img src="/images/RangkumAi/RangkumHospital/IndustriHC5.svg" alt="Highlight Summary" className="w-full max-w-md" />
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
                                    src="/images/RangkumAi/RangkumHospital/IndustriHC6.svg"
                                    alt="Contoh Dokumen Invoice"
                                    className="w-full max-w-md rounded-xl shadow-lg border"
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </section>

            <section className="py-20 bg-white text-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#1A62DC] mb-6">
                    Ingin Lihat Langsung?
                </h2>
                <p className="text-lg md:text-xl text-[#1A62DC] max-w-2xl mx-auto leading-relaxed">
                    Temukan bagaimana Rangkum.AI bisa membantu rumah sakit dan klinik Anda bekerja lebih cepat dan efisien.
                </p>
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