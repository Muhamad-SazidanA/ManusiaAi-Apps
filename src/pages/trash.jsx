import React from 'react';

export default function trash() {
    <div className="flex flex-col gap-16">
        {/* 1. Tanya Apa Aja (img left, text right) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full flex justify-center">
                <img src="/images/Image-Tanyaapasaja.png" alt="Tanya Apa Aja" className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-[#489CFF] mb-2">Tanya apa aja</h3>
                <p className="text-white/80 text-base mb-2">
                    Brilian.ai memudahkan pencarian informasi dari dokumen internal seperti bertanya ke rekan kerja yang paham konteks. AI kami memahami maksud Anda dan memberi jawaban relevan dari berbagai format dokumen, seperti PDF, Word, dan Excel.
                </p>
            </div>
        </div>
        {/* 2. Buatin Laporan (img right, text left) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 w-full flex justify-center">
                <img src="/images/Image-Buatlaporan.png" alt="Buatin Laporan" className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-[#FC6D2D] mb-2">Buatin Laporan</h3>
                <p className="text-white/80 text-base mb-2">
                    Ubah dokumen panjang jadi laporan siap baca dalam hitungan detik. Cocok untuk merangkum notulensi, audit, atau laporan operasional.
                </p>
            </div>
        </div>
        {/* 3. Analisa Laporan (img left, text right) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full flex justify-center">
                <img src="/images/Image-Analisislaporan.png" alt="Analisa Laporan" className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-[#10E0C1] mb-2">Analisa Laporan</h3>
                <p className="text-white/80 text-base mb-2">
                    Brilian.ai menganalisis dokumen untuk menampilkan insight penting, mendeteksi pola, tren, dan anomali dan memudahkan pengambilan keputusan tanpa perlu membaca ratusan halaman.
                </p>
            </div>
        </div>
        {/* 4. Riset Market (img right, text left) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 w-full flex justify-center">
                <img src="/images/Image-Risetmarket.png" alt="Riset Market" className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-[#489CFF] mb-2">Riset Market</h3>
                <p className="text-white/80 text-base mb-2">
                    Brilian.ai menyajikan tren, preferensi konsumen, dan pergerakan kompetitor dengan cepat, menggabungkan data internal dan sumber terbuka. Ini ideal untuk tim marketing, bisnis, dan produk dalam menyusun strategi.
                </p>
            </div>
        </div>
        {/* 5. Pikirin Ide (img left, text right) */}
        <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 w-full flex justify-center">
                <img src="/images/Image-Pikirinide.png" alt="Pikirin Ide" className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-[#FC6D2D] mb-2">Pikirin Ide</h3>
                <p className="text-white/80 text-base mb-2">
                    AI Brilian.ai membantu brainstorming otomatis berdasarkan konteks kerja dan data Anda, dari ide konten hingga sudut pandang unik, tanpa perlu mulai dari nol.
                </p>
            </div>
        </div>
        {/* 6. Rangkumin Meeting (img right, text left) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <div className="md:w-1/2 w-full flex justify-center">
                <img src="/images/Image-Rangkuminmeet.png" alt="Rangkumin Meeting" className="w-full max-w-xs md:max-w-sm rounded-2xl shadow-xl" />
            </div>
            <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-bold text-[#10E0C1] mb-2">Rangkumin Meeting</h3>
                <p className="text-white/80 text-base mb-2">
                    Brilian.ai otomatis transkrip dan ringkas rapat jadi catatan yang siap dibagikan. Ini ringkas, jelas, dan cocok untuk tim hybrid atau eksekutif sibuk.
                </p>
            </div>
        </div>
    </div>
}