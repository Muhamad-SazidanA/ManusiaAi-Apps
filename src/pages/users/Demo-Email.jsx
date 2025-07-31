import React from 'react';

export default function DemoEmail() {
    return (
        <section className="min-h-screen flex items-center justify-center bg-[#F6FBFF] px-4 py-16 md:py-24 relative overflow-hidden">
            {/* Background Lines */}
            <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 20 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-full w-px bg-gradient-to-b from-blue-200/40 to-transparent"
                        style={{ left: `${5 + i * 5}%` }}
                    />
                ))}
            </div>

            <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 items-start gap-12 relative z-10">
                {/* Contact Form */}
                <div className="relative">
                    <div className="bg-white border border-blue-200/50 rounded-3xl shadow-lg p-8 md:p-10"
                        style={{
                            boxShadow: '0 8px 32px rgba(33, 150, 243, 0.1)'
                        }}>
                        <h2 className="text-2xl md:text-3xl font-bold text-[#0377FF] mb-2">Contact Us</h2>
                        <p className="text-[#0377FF] text-sm mb-6">
                            Don't have time to call? Send your enquiry to the Manusia.AI<br />
                            team and we'll get back to you quickly. If you do not receive<br />
                            a response, please reach out via WhatsApp.
                        </p>
                        <form className="space-y-5">
                            <div>
                                <label className="block text-[#0377FF] text-sm mb-2 font-medium">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your full name"
                                    className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-full px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[#0377FF] text-sm mb-2 font-medium">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-full px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[#0377FF] text-sm mb-2 font-medium">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Company Name"
                                    className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-full px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[#0377FF] text-sm mb-2 font-medium">Phone Number</label>
                                <input
                                    type="text"
                                    placeholder="Enter Phone Number"
                                    className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-full px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all"
                                />
                            </div>
                            <div>
                                <label className="block text-[#0377FF] text-sm mb-2 font-medium">How can we help</label>
                                <textarea
                                    placeholder="How can we help you"
                                    rows="4"
                                    className="w-full bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-2xl px-6 py-3 text-[#2196F3] placeholder-[#90CAF9] focus:outline-none focus:border-[#2196F3] transition-all resize-none"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full mt-6 bg-[#2196F3] hover:bg-[#1976D2] text-white font-semibold rounded-full py-3 transition-all duration-200 shadow-lg"
                            >
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right Side Content */}
                <div className="flex flex-col justify-start items-start mt-8 md:mt-0">
                    <h1 className="text-3xl md:text-4xl font-bold text-[#0377FF] mb-4 mt-16 leading-tight">
                        Bring Your Ideas to Life<br />
                        with Manusia.AI.
                    </h1>
                    <p className="text-[#0377FF] text-base mb-12 max-w-md">
                        Reach out today — let's craft intelligent solutions that<br />
                        accelerate your business transformation.
                    </p>

                    {/* Our Office Section */}
                    <div className="w-full">
                        <h3 className="text-xl font-bold text-[#0377FF] mb-4">Our Office</h3>
                        <div className="flex items-start gap-3 mb-6">
                            <div className="w-6 h-6 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-[#0377FF] text-sm leading-relaxed">
                                    Jl. Siantar No.18, RT.1/RW.2, Cideng,<br />
                                    Kecamatan Gambir,Kota Jakarta Pusat,<br />
                                    Daerah Khusus Ibukota Jakarta 10150
                                </p>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="w-full h-80 bg-[#F0F7FF] border-2 border-[#E3F2FD] rounded-2xl overflow-hidden mt-20">
                            <iframe
                                title="Office Location Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.7503560738334!2d106.81235011476955!3d-6.167364095531146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2129e2647%3A0x67c1035a121f7f4a!2sJl.%20Siantar%20No.18%2C%20Cideng%2C%20Kec.%20Gambir%2C%20Kota%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2010150!5e0!3m2!1sen!2sid!4v1722211111330!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full border-0 rounded-2xl"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}