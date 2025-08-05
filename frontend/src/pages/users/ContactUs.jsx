import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name wajib diisi';
        if (!form.email.trim()) {
            newErrors.email = 'Email wajib diisi';
        } else if (/@gmail\.com\s*$/i.test(form.email)) {
            newErrors.email = 'Gunakan email perusahaan, bukan Gmail';
        } else if (
            !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
        ) {
            newErrors.email = 'Format email tidak valid';
        }
        if (!form.company.trim()) newErrors.company = 'Company wajib diisi';
        if (!form.phone.trim()) newErrors.phone = 'Phone wajib diisi';
        if (!form.message.trim()) newErrors.message = 'Pesan wajib diisi';
        return newErrors;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccess(false);
        setErrorMsg('');

        const validation = validate();
        setErrors(validation);

        if (Object.keys(validation).length === 0) {
            setLoading(true);
            try {
                const response = await fetch('http://localhost:3001/api/send-contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(form),
                });

                const data = await response.json();

                if (response.ok) {
                    setSuccess(true);
                    setForm({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        message: '',
                    });
                } else {
                    setErrorMsg(data.message || 'Gagal mengirim email');
                }
            } catch (err) {
                setErrorMsg('Gagal terhubung ke server. Pastikan backend berjalan di port 3001.');
                console.error('Submit error:', err);
            }
            setLoading(false);
        }
    };

    return (
        <>
            <section className="min-h-screen bg-[#F6FBFF] text-[#1A2B4C] font-inter">
                {/* Banner Background */}
                <div className="relative w-full h-[320px] md:h-[340px] flex items-center justify-center overflow-hidden">
                    <img
                        src="/images/Banner/BannerDemo-Ct.svg"
                        alt="Banner"
                        className="absolute inset-0 w-full h-full object-cover z-0"
                        draggable={false}
                    />
                    <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">
                            Contact Us
                        </h1>
                        <p className="text-lg md:text-2xl text-white max-w-4xl mx-auto leading-relaxed text-center drop-shadow">
                            Manusia.AI adalah perusahaan konsultan dan custom AI yang berbasis di Jakarta, yang berfokus pada penyediaan layanan konsultasi strategi AI dan pengembangan solusi AI kustom
                        </p>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto py-20 px-2 md:px-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                        {/* Contact Form */}
                        <div className="bg-white border border-blue-200/50 rounded-2xl shadow-lg p-8 md:p-10"
                            style={{ boxShadow: '0 8px 32px rgba(33, 150, 243, 0.12)' }}>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#0377FF] mb-2">Contact Us</h2>
                            <p className="text-[#0377FF] text-sm mb-6">
                                Don't have time to call? Send your enquiry to the Manusia.AI team and we'll get back to you quickly. If you do not receive a response, please reach out via WhatsApp.
                            </p>
                            <form className="space-y-5" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="Your full name"
                                        className={`w-full bg-[#F0F7FF] border-2 rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] ${errors.name ? 'border-red-400' : 'border-[#E3F2FD]'}`}
                                    />
                                    {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Company Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="Enter Company Email Address"
                                        className={`w-full bg-[#F0F7FF] border-2 rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] ${errors.email ? 'border-red-400' : 'border-[#E3F2FD]'}`}
                                    />
                                    {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Company Name</label>
                                    <input
                                        name="company"
                                        type="text"
                                        value={form.company}
                                        onChange={handleChange}
                                        placeholder="Enter Company Name"
                                        className={`w-full bg-[#F0F7FF] border-2 rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] ${errors.company ? 'border-red-400' : 'border-[#E3F2FD]'}`}
                                    />
                                    {errors.company && <div className="text-red-500 text-xs mt-1">{errors.company}</div>}
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">Phone Number</label>
                                    <input
                                        name="phone"
                                        type="text"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Enter Phone Number"
                                        className={`w-full bg-[#F0F7FF] border-2 rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] ${errors.phone ? 'border-red-400' : 'border-[#E3F2FD]'}`}
                                    />
                                    {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                                </div>
                                <div>
                                    <label className="block text-[#0377FF] text-sm mb-2 font-semibold">How can we help</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can we help you"
                                        rows="4"
                                        className={`w-full bg-[#F0F7FF] border-2 rounded-xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all resize-none shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] ${errors.message ? 'border-red-400' : 'border-[#E3F2FD]'}`}
                                    />
                                    {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-[#0377FF] hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition-colors duration-200"
                                    disabled={loading}
                                >
                                    {loading ? 'Mengirim...' : 'Submit Message'}
                                </button>
                            </form>
                        </div>
                        {/* Info & Map */}
                        <div className="w-full flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 md:px-0">
                            <h1 classN ame="text-2xl md:text-3xl font-bold text-[#0377FF] mb-4 mt-2 md:mt-20 leading-tight">
                                Bring Your Ideas to Life<br />
                                with Manusia.AI.
                            </h1>

                            <p className="text-[#0377FF] text-base mb-8 max-w-md">
                                Reach out today — let's craft intelligent solutions that accelerate your business transformation.
                            </p>

                            <h3 className="text-xl font-bold text-[#0377FF] mb-2">Our Office</h3>

                            <div className="flex items-start gap-3 mb-4 justify-center md:justify-start">
                                <div className="w-6 h-6 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[#0377FF] text-sm leading-relaxed">
                                        Jl. Siantar No.18, RT.1/RW.2, Cideng,<br />
                                        Kecamatan Gambir, Kota Jakarta Pusat,<br />
                                        Daerah Khusus Ibukota Jakarta 10150
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Popup Sukses */}
                {success && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-4">
                            <div className="text-green-600 text-5xl mb-4">✓</div>
                            <h3 className="text-xl font-semibold mb-2">Pesan Berhasil Dikirim!</h3>
                            <p className="text-gray-600 mb-6">Tim kami akan menghubungi Anda dalam 1x24 jam.</p>
                            <button
                                className="px-6 py-2 bg-[#0377FF] text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                                onClick={() => setSuccess(false)}
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                )}

                {/* Popup Error */}
                {errorMsg && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                        <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-4">
                            <div className="text-red-600 text-5xl mb-4">✗</div>
                            <h3 className="text-xl font-semibold mb-2">Gagal Mengirim</h3>
                            <p className="text-gray-600 mb-6">{errorMsg}</p>
                            <button
                                className="px-6 py-2 bg-[#0377FF] text-white rounded-lg font-semibold hover:bg-blue-600 transition"
                                onClick={() => setErrorMsg('')}
                            >
                                Coba Lagi
                            </button>
                        </div>
                    </div>
                )}
            </section>
            {/* CTA Section */}
            <section className="relative py-24 bg-white flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
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
        </>
    );
}