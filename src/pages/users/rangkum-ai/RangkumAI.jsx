import React from 'react';

export default function RangkumAI() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen py-20 px-6 md:px-16 bg-white text-black flex items-center justify-center">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl w-full">

                    {/* Kiri: Teks */}
                    <div className="md:w-1/2 w-full text-left md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-[#2563eb] mb-3">Rangkum.AI</h1>
                        <p className="text-lg md:text-xl text-gray-700 mb-6">
                            Intelligent Document Processing & <br className="hidden md:block" />
                            Smart OCR Platform
                        </p>
                        <button className="px-6 py-2 bg-[#2563eb] text-white font-semibold rounded-md shadow hover:bg-[#1e4db7] transition-all">
                            Request Demo
                        </button>
                    </div>

                    {/* Kanan: Gambar Invoice */}
                    <div className="md:w-1/2 w-full flex justify-center">
                        <img
                            src="/images/RangkumAi/RangkumContentDS.svg"
                            alt="Invoice Preview"
                            className="w-full max-w-md rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </section>


            {/* What is Rangkum.AI Section */}
            <section className="py-20 px-6 md:px-16 bg-white text-black">
                <h2 className="text-center text-3xl md:text-5xl font-semibold mb-12">
                    What is <span className="text-[#2563eb]">Rangkum.AI</span>
                </h2>
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16 max-w-6xl mx-auto">
                    {/* Gambar */}
                    <div className="w-full md:w-1/2">
                        <img src="/images/RangkumAi/asetLogoRangkum.svg" alt="Rangkum.AI Logo" className="w-full max-w-md mx-auto" />
                    </div>

                    {/* Deskripsi */}
                    <div className="w-full md:w-1/2 text-left space-y-6">
                        <p className="text-lg md:text-xl text-gray-700">
                            Rangkum.AI adalah platform Intelligent Document Processing (IDP) berbasis AI yang membantu organisasi
                            mengotomatisasi ekstraksi, pemrosesan, dan peringkasan dokumen, dari PDF, formulir, hingga laporan kompleks.
                        </p>
                        <button className="px-6 py-2 bg-[#2563eb] text-white font-semibold rounded-md shadow hover:bg-[#1e4db7] transition-all">
                            Book a demo
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16 bg-[#0070f0] text-white">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Kiri: List Keuntungan */}
                    <div className="w-full md:w-1/2">
                        <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-center md:text-left">
                            Key Benefits Rangkum.AI
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="w-4 h-4 mt-2 rounded-full bg-white flex-shrink-0" />
                                <p className="text-base md:text-lg">
                                    Mengubah dokumen tak terstruktur <br />
                                    menjadi data rapi dan siap pakai
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-4 h-4 mt-2 rounded-full bg-white flex-shrink-0" />
                                <p className="text-base md:text-lg">
                                    Akurasi tinggi tanpa perlu template
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-4 h-4 mt-2 rounded-full bg-white flex-shrink-0" />
                                <p className="text-base md:text-lg">
                                    Integrasi mudah dengan sistem ERP,<br />
                                    CRM, RPA, dan lainnya
                                </p>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="w-4 h-4 mt-2 rounded-full bg-white flex-shrink-0" />
                                <p className="text-base md:text-lg">
                                    Model AI terus belajar dan semakin <br />
                                    akurat dari waktu ke waktu
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Kanan: Gambar */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src="/images/RangkumAi/ImageKBRangkum.svg"
                            alt="Key Benefits Image"
                            className="w-full max-w-md h-auto"
                        />
                    </div>
                </div>
            </section>



            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-[#2563eb]">
                        What Makes
                    </h1>
                    <h2 className="text-2xl md:text-4xl text-black mt-2 mb-0">
                        Rangkum.AI Powerful?
                    </h2>
                </div>

                {/* Optional: Background blur efek bintang */}
                <div className="absolute top-1/4 right-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-blue-400/10 blur-[150px] -translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-1/3 left-0 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-blue-400/10 blur-[150px] translate-x-1/4 pointer-events-none"></div>
                <div className="absolute inset-0 pointer-events-none z-0">
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute top-12 left-20 h-12 md:h-16 animate-pulse opacity-10" />
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute bottom-16 left-16 h-4 md:h-5 animate-pulse delay-800 opacity-10" />
                    <img src="/images/Image-BintangBG.png" alt="Star" className="absolute top-1/3 left-24 h-8 md:h-10 animate-pulse delay-500 opacity-10" />
                </div>


                <div className="container mx-auto px-4 md:px-[80px] lg:px-[140px]">
                    {/* Feature List */}
                    <div className="flex flex-col gap-24">

                        {/* Feature 1 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <div className="md:w-[700px]">
                                    {/* Judul diubah jadi biru */}
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#2563eb]">
                                        Ekstraksi Data Adaptif
                                    </h1>

                                    {/* Paragraf diubah jadi biru dengan sedikit transparansi */}
                                    <p className="text-base md:text-2xl font-normal font-inter text-[#2563eb]/90 leading-relaxed mb-6">
                                        AI Rangkum.AI mampu membaca dan mengekstrak data dari berbagai format dokumen seperti invoice, formulir, dan identitas tanpa perlu template statis atau aturan zona.
                                    </p>
                                </div>

                                <img
                                    src="/images/RangkumAi/ImageRangkum1.svg"
                                    alt="Chat Interface"
                                    className="w-full md:w-[360px] object-contain"
                                />
                            </div>
                        </div>

                        {/* Feature 2 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <img
                                    src="/images/RangkumAi/ImageRangkum2.svg"
                                    alt="Chat Interface"
                                    className="w-full md:w-[360px] object-contain"
                                />
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#2563eb]">
                                        Klasifikasi Dokumen Otomatis
                                    </h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-[#2563eb]/90 leading-relaxed mb-6">
                                        Sistem secara otomatis mengenali jenis dokumen, mengelompokkan berdasarkan kategori seperti identitas, finansial, dan legal, sehingga proses digitalisasi menjadi efisien.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 3 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#2563eb]">
                                        Pengenalan Tabel Canggih
                                    </h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-[#2563eb]/90 leading-relaxed mb-6">
                                        Teknologi AI memahami struktur tabel yang rumit, termasuk yang memiliki baris berganda, kolom nested, atau format tabel tidak standar.
                                    </p>
                                </div>
                                <img
                                    src="/images/RangkumAi/ImageRangkum3.svg"
                                    alt="Chat Interface"
                                    className="w-full md:w-[360px] object-contain"
                                />
                            </div>
                        </div>

                        {/* Feature 4 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <img
                                    src="/images/RangkumAi/ImageRangkum4.svg"
                                    alt="Chat Interface"
                                    className="w-full md:w-[360px] object-contain"
                                />
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#2563eb]">
                                        Multibahasa
                                    </h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-[#2563eb]/90 leading-relaxed mb-6">
                                        Dengan OCR tingkat lanjut, sistem dapat membaca tulisan tangan, mendeteksi centang pada formulir, dan menangkap data dari dokumen cetak dengan akurasi tinggi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature 5 */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="md:flex justify-between items-center gap-12">
                                <div className="md:w-[700px]">
                                    <h1 className="text-4xl md:text-5xl font-semibold font-inter mb-8 md:text-2xl text-[#2563eb]">
                                        Pengenalan Tulisan Tangan & Checkbox
                                    </h1>
                                    <p className="text-base md:text-2xl font-normal font-inter text-[#2563eb]/90 leading-relaxed mb-6">
                                        Mendukung pengolahan dokumen dalam berbagai bahasa, termasuk Bahasa Indonesia dan Inggris, sehingga fleksibel digunakan oleh perusahaan lokal maupun multinasional.
                                    </p>
                                </div>
                                <img
                                    src="/images/RangkumAi/ImageRangkum5.svg"
                                    alt="Chat Interface"
                                    className="w-full md:w-[360px] object-contain"
                                />
                            </div>

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
                                    <img src="/images/Image-BintangBG.png" alt="Star" className="w-4 h-4" />
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