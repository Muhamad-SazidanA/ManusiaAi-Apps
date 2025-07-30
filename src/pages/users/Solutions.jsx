import React from 'react';

export default function Solutions() {
    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-black via-slate-900 to-blue-950 text-white font-inter relative overflow-x-hidden">
            <section className="w-full bg-white py-20 px-6 md:px-16 flex items-center justify-center">
                <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Kiri: Teks */}
                    <div className="flex-1 text-left">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#1669F2] leading-tight mb-6">
                            Tailored AI Solutions for <br />
                            Real Business Impact
                        </h1>
                        <p className="text-black text-base md:text-xl mb-8">
                            Kami bangun solusi AI yang relevan, kustom, dan berdampak nyata. untuk bisnis Anda.
                        </p>
                        <button className="bg-[#1669F2] hover:bg-[#1257C3] text-white px-6 py-3 rounded-md font-semibold shadow-md transition-all duration-200">
                            Request Demo
                        </button>
                    </div>
                    {/* Kanan: Gambar */}
                    <div className="flex-1 flex justify-center">
                        <img
                            src="/images/Solutions/ImageSolustions1.svg"
                            alt="Insurance Document Illustration"
                            className="w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            {/* Key Features Section */}
            <section className="pt-[100px] md:pt-[150px] pb-20 bg-white overflow-hidden relative">
                <div className="container mx-auto px-4 md:px-24 text-center relative z-10 mb-36">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-inter text-[#1669F2]">Our Services</h1>
                </div>

                <div className="container mx-auto px-4 md:px-[80px] lg:px-[140px] space-y-32">

                    {/* Feature 1 */}
                    <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                AI Readiness & Opportunity Assessment
                            </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Evaluasi kesiapan digital dan identifikasi potensi penerapan AI di berbagai fungsi bisnis Anda.                      </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/Solutions/ImageSolustions2.svg" alt="Data Extraction" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="md:flex md:flex-row-reverse justify-between items-center gap-12" data-aos="fade-right">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Custom AI Development                          </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Pengembangan model AI kustom seperti NLP, OCR, prediction model, LLM tuning, dan lainnya — sesuai kebutuhan spesifik Anda.                         </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/Solutions/ImageSolustions3.svg" alt="Report Generation" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Integration with Existing Systems
                            </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Solusi kami dirancang untuk terhubung mulus dengan ERP, CRM, RPA, atau sistem internal lainnya.                         </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/Solutions/ImageSolustions4.svg" alt="Solutions" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 4 */}
                    <div className="md:flex md:flex-row-reverse justify-between items-center gap-12" data-aos="fade-right">
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                Proof-of-Concept & Scalable Deployment                      </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Kami bantu uji coba awal (POC) hingga deployment skala besar untuk memastikan AI memberikan dampak nyata.                         </p>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <img src="/images/Solutions/ImageSolustions5.svg" alt="Highlight Summary" className="w-full max-w-md" />
                        </div>
                    </div>

                    {/* Feature 5 */}
                    <div className="md:flex justify-between items-center gap-12" data-aos="fade-left">
                        {/* Kiri: List Dokumen */}
                        <div className="flex-1">
                            <h1 className="text-3xl md:text-5xl font-bold font-inter mb-6 text-[#1669F2]">
                                AI Lifecycle Support & Optimisation                            </h1>
                            <p className="text-base md:text-xl font-normal text-black leading-relaxed mb-6">
                                Monitoring, retraining, dan pengembangan berkelanjutan agar performa AI tetap optimal seiring waktu.                    </p>
                        </div>

                        {/* Kanan: Gambar */}
                        <div className="flex-1 flex justify-center mt-10 md:mt-0">
                            <img
                                src="/images/Solutions/ImageSolustions6.svg"
                                alt="Contoh Dokumen Invoice"
                                className="w-full max-w-md rounded-xl shadow-lg border"
                            />
                        </div>
                    </div>



                </div>
            </section>

            <section className="w-full py-16 px-6 md:px-20 bg-white text-center">
                <h2 className="text-3xl md:text-4xl font-semibold text-black mb-12">
                    Why <span className="text-[#1669F2]">Manusia.AI?</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-[#1669F2] text-white rounded-lg p-6 font-medium shadow-md">
                        Pendekatan end-to-end: dari strategi hingga implementasi
                    </div>
                    <div className="bg-[#1669F2] text-white rounded-lg p-6 font-medium shadow-md">
                        Solusi 100% disesuaikan, bukan plug-and-play generik
                    </div>
                    <div className="bg-[#1669F2] text-white rounded-lg p-6 font-medium shadow-md">
                        Fokus pada dampak bisnis, bukan sekadar eksperimen teknologi
                    </div>
                    <div className="bg-[#1669F2] text-white rounded-lg p-6 font-medium shadow-md">
                        Tim multidisiplin: AI engineers, data scientists, dan business consultants
                    </div>
                </div>
            </section>

            {/* deskripsi */}
            <section className="py-20 bg-white text-center">
                <h2 className="text-2xl md:text-4xl font-semibold text-[#1A62DC] mb-6">
                    Siap Bangun Solusi AI yang <br />  Relevan untuk Bisnis Anda?    </h2>
                <p className="text-lg md:text-xl text-[#1A62DC] max-w-2xl mx-auto leading-relaxed">
                    Mari diskusi dan mulai dari yang paling berdampak.      </p>
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