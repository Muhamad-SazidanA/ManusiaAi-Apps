import React from 'react';

export default function BrilianAI() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            {/* Hero Section */}
            <section className="min-h-screen py-20 px-6 md:px-16 flex items-center justify-center bg-white overflow-hidden relative">
                <div className="relative max-w-6xl w-full mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Kiri: Teks dan Tombol */}
                    <div className="flex-1 flex flex-col items-start justify-center">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold font-inter mb-5 leading-tight text-[#1A62DC]">
                            Brilian.AI
                        </h1>
                        <p className="text-lg md:text-2xl text-black/80 mb-8 font-medium max-w-lg">
                            Accelerate Decisions with AI-<br />
                            Powered Knowledge Management
                        </p>
                        <button className="px-6 py-3 rounded-xl font-semibold text-lg bg-[#1A62DC] hover:bg-[#174bb0] text-white shadow-md transition-all duration-200">
                            Request Demo
                        </button>
                    </div>

                    {/* Kanan: Gambar dan Chat UI */}
                    <div className="flex-1 relative flex justify-center items-center">
                        {/* Gambar utama */}
                        <div className="relative z-10">
                            <img
                                src="/images/BrilianAi/BrilianContentDS.svg"
                                alt="AI Illustration"
                                className="rounded-2xl w-full max-w-md object-cover shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>


            {/* What is Brilian.AI Section */}
            <section className="relative py-16 bg-white overflow-hidden">
                <div className="relative max-w-6xl mx-auto px-10">
                    {/* Judul */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A62DC] mb-8 text-center relative z-20">
                        What is Brilian.AI?
                    </h2>

                    {/* Konten */}
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        {/* Deskripsi */}
                        <div className="space-y-6">
                            <p className="text-base md:text-xl font-inter text-[#444] leading-relaxed">
                                brilian.ai adalah platform manajemen pengetahuan berbasis AI yang
                                memungkinkan akses cepat dan aman ke informasi internal, serta
                                otomatisasi dokumen untuk efisiensi dan pengambilan keputusan yang
                                lebih cerdas.
                            </p>
                        </div>

                        {/* Gambar */}
                        <div className="flex justify-center relative z-10">
                            <img
                                src="/images/BrilianAi/asetLogoBrilian.svg"
                                alt="Brilian.AI"
                                className="w-full max-w-md h-auto object-contain scale-[1.1] translate-x-[30px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-[#1D6FF2]">Key Features</h1>
                    <h2 className="text-2xl md:text-4xl text-gray-500 mt-2 mb-0">What Makes Brilian.AI Different?</h2>
                </div>

                {/* Background Effects */}
                <div className="absolute top-1/4 right-0 w-[340px] h-[340px] md:w-[400px] md:h-[400px] rounded-full bg-blue-400/15 blur-[150px] -translate-x-1/4 pointer-events-none"></div>
                <div className="absolute bottom-1/3 left-0 w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full bg-blue-400/15 blur-[150px] translate-x-1/4 pointer-events-none"></div>

                <div className="container mx-auto px-4 md:px-[80px] lg:px-[140px]">
                    {/* Feature List */}
                    <div className="flex flex-col gap-24">
                        {/* Feature: Tanya Apa Aja */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                {/* Gambar Kiri */}
                                <div className="w-full md:w-1/2">
                                    <img src="/images/BrilianAi/Image-Tanyaapasaja.svg" alt="Tanya Apa Aja" className="w-full h-auto object-contain" />
                                </div>
                                {/* Teks Kanan */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-bold text-[#1D6FF2] font-inter mb-4">Tanya apa aja</h1>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                                        Cari informasi seperti berbicara dengan kolega. <strong>Brilian.AI</strong> memungkinkan pengguna mengajukan pertanyaan dengan bahasa alami (natural language), tanpa perlu tahu struktur file atau letak dokumen. Sistem akan menjawab langsung dari sumber data internal Anda.
                                    </p>
                                </div>
                            </div>
                            <hr className="border-t-2 border-gray-200 mt-12" />
                        </div>

                        {/* Feature: Buatin Laporan */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                                {/* Gambar Kanan */}
                                <div className="w-full md:w-1/2">
                                    <img src="/images/BrilianAi/Image-Buatlaporan.svg" alt="Report Generation" className="w-full h-auto object-contain" />
                                </div>
                                {/* Teks Kiri */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-bold text-[#1D6FF2] font-inter mb-4">Buatin Laporan</h1>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                                        Integrasikan berbagai sumber — PDF, spreadsheet, email, hingga notulensi — ke dalam satu platform.
                                        <br />
                                        <strong>Brilian.AI</strong> akan bantu menyusun dan menyajikan laporan yang siap dibagikan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature: Analisa Laporan */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                {/* Gambar Kiri */}
                                <div className="w-full md:w-1/2">
                                    <img src="/images/BrilianAi/Image-Analisislaporan.svg" alt="Report Analysis" className="w-full h-auto object-contain" />
                                </div>
                                {/* Teks Kanan */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-bold text-[#1D6FF2] font-inter mb-4">Analisa Laporan</h1>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                                        <strong>Brilian.AI</strong> membaca dan memahami laporan panjang, lalu merangkumnya menjadi insight utama:
                                        temuan penting, tren tersembunyi, hingga anomali. Semua ditampilkan secara ringkas dan mudah dicerna.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature: Riset Market */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                                {/* Gambar Kanan */}
                                <div className="w-full md:w-1/2">
                                    <img src="/images/BrilianAi/Image-Risetmarket.svg" alt="Market Research" className="w-full h-auto object-contain" />
                                </div>
                                {/* Teks Kiri */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-bold text-[#1D6FF2] font-inter mb-4">Riset Market</h1>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                                        <strong>Brilian.AI</strong> memindai ribuan dokumen internal dan eksternal untuk mengungkap tren pasar,
                                        pergerakan kompetitor, serta preferensi pelanggan. Cocok untuk tim marketing, produk, dan strategi
                                        yang butuh data cepat untuk ambil keputusan.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature: Pikirin Ide */}
                        <div className="mb-0" data-aos="fade-left">
                            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                                {/* Gambar Kiri */}
                                <div className="w-full md:w-1/2">
                                    <img src="/images/BrilianAi/Image-Pikirinide.svg" alt="Ideas Generation" className="w-full h-auto object-contain" />
                                </div>
                                {/* Teks Kanan */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-bold text-[#1D6FF2] font-inter mb-4">Pikirin Ide</h1>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                                        <strong>Brilian.AI</strong> membantu brainstorming otomatis berdasarkan konteks kerja dan data Anda —
                                        dari ide konten hingga sudut pandang unik, tanpa perlu mulai dari nol.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Feature: Rangkumin Meeting */}
                        <div className="mb-0" data-aos="fade-right">
                            <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
                                {/* Gambar Kanan */}
                                <div className="w-full md:w-1/2">
                                    <img src="/images/BrilianAi/Image-Rangkuminmeet.svg" alt="Meeting Summary" className="w-full h-auto object-contain" />
                                </div>
                                {/* Teks Kiri */}
                                <div className="w-full md:w-1/2 text-center md:text-left">
                                    <h1 className="text-2xl md:text-4xl font-bold text-[#1D6FF2] font-inter mb-4">Rangkumin Meeting</h1>
                                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-inter">
                                        Hasil meeting, baik online maupun offline, dapat langsung ditranskrip dan dirangkum otomatis.
                                        Dapatkan ringkasan poin penting yang siap dibagikan ke tim — tanpa perlu mengetik manual.
                                    </p>
                                </div>
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