import React, { useState } from 'react';

export default function DemoEmail() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        linkedin: '',
        message: '',
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const validate = () => {
        const newErrors = {};
        if (!form.name.trim()) newErrors.name = 'Name wajib diisi';
        // Email wajib diisi, tidak boleh gmail, dan harus format valid
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
        // LinkedIn boleh kosong, tidak perlu validasi
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
                const response = await fetch('http://localhost:3001/api/send-email', {
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
                        linkedin: '',
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
        <section className="min-h-screen bg-[#F6FBFF] text-[#1A2B4C] font-inter">
            {/* Banner Background */}
            <div className="relative w-full h-[320px] md:h-[340px] flex items-center justify-center overflow-hidden">
                <img
                    src="/images/Banner/BannerDemo-Ct.svg"
                    alt="Banner"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                    draggable={false}
                />
                <div className="absolute inset-0 bg-blue-900/40 z-1"></div>
                <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-4 text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-600/40 border border-[#0377FF]/30 rounded-full px-4 py-2 mb-6">
                        <img
                            src="/images/Image-BintangBG.svg"
                            alt="Star"
                            className="w-4 h-4 animate-pulse opacity-60"
                        />
                        <span className="text-blue-300 text-sm font-inter font-bold">
                            Best Indonesia AI Expert
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">
                        Request Demo
                    </h1>
                    <p className="text-lg md:text-xl text-white mb-2 text-center">
                        Dapatkan demo langsung dari tim kami dan lihat bagaimana AI dapat mengubah bisnis Anda
                    </p>
                </div>
            </div>

            <div className="min-h-screen bg-[#F6FBFF] text-[#1A2B4C] font-inter flex items-center justify-center">
                <div className="w-full max-w-xl mx-auto my-12">
                    <div className="bg-white rounded-2xl shadow-[0_0_0_2px_rgba(3,119,255,0.10)] border border-blue-100 p-8 md:p-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-10 text-center">Request Demo</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold text-[#0377FF] mb-2">Name</label>
                                <input
                                    name="name"
                                    type="text"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter Personal Name"
                                    className={`w-full px-5 py-3 rounded-xl border ${errors.name ? 'border-red-400' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition`}
                                />
                                {errors.name && <div className="text-red-500 text-xs mt-1">{errors.name}</div>}
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold text-[#0377FF] mb-2">Company Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Enter Company Email Eddress"
                                    className={`w-full px-5 py-3 rounded-xl border ${errors.email ? 'border-red-400' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition`}
                                />
                                {errors.email && <div className="text-red-500 text-xs mt-1">{errors.email}</div>}
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold text-[#0377FF] mb-2">Company Name</label>
                                <input
                                    name="company"
                                    type="text"
                                    value={form.company}
                                    onChange={handleChange}
                                    placeholder="Enter Company Name"
                                    className={`w-full px-5 py-3 rounded-xl border ${errors.company ? 'border-red-400' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition`}
                                />
                                {errors.company && <div className="text-red-500 text-xs mt-1">{errors.company}</div>}
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold text-[#0377FF] mb-2">Phone Number</label>
                                <input
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                    className={`w-full px-5 py-3 rounded-xl border ${errors.phone ? 'border-red-400' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition`}
                                />
                                {errors.phone && <div className="text-red-500 text-xs mt-1">{errors.phone}</div>}
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold text-[#0377FF] mb-2">LinkedIn URL (Optional)</label>
                                <input
                                    name="linkedin"
                                    type="url"
                                    value={form.linkedin}
                                    onChange={handleChange}
                                    placeholder="Enter LinkedIn URL (optional)"
                                    className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition"
                                />
                            </div>
                            <div className="mb-8">
                                <label className="block text-sm font-semibold text-[#0377FF] mb-2">Massage</label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Massage"
                                    className={`w-full px-5 py-3 rounded-xl border ${errors.message ? 'border-red-400' : 'border-blue-200'} focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-300 text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] resize-none transition`}
                                ></textarea>
                                {errors.message && <div className="text-red-500 text-xs mt-1">{errors.message}</div>}
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-[#0377FF] hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-base shadow-[0_4px_12px_0_rgba(3,119,255,0.12)] transition-colors duration-200 disabled:opacity-50"
                                disabled={loading}
                            >
                                {loading ? 'Mengirim...' : 'Submit Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Popup Sukses */}
            {success && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center max-w-md mx-4">
                        <div className="text-green-600 text-5xl mb-4">✓</div>
                        <h3 className="text-xl font-semibold mb-2">Demo Request Berhasil Dikirim!</h3>
                        <p className="text-gray-600 mb-6">Tim kami akan menghubungi Anda dalam 1x24 jam untuk menjadwalkan demo.</p>
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
    );
}