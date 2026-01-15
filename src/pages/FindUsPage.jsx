import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function FindUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Pesan Anda telah dikirim! Kami akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero with Image */}
      <section className="relative bg-gradient-to-br from-amber-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[400px]">
            <div className="px-8 py-12 md:py-0">
              <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
                Temukan Kami
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Kunjungi toko kami atau hubungi customer service untuk informasi lebih lanjut
              </p>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-amber-200 flex items-center justify-center">
                <div className="text-8xl">📍</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info with Better Design */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-8">Hubungi Kami</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl hover:shadow-md transition">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Alamat Toko</h3>
                    <p className="text-stone-600 leading-relaxed">
                      Jl. Eco Street No. 123<br />
                      Surabaya, Jawa Timur 60123<br />
                      Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl hover:shadow-md transition">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Telepon</h3>
                    <p className="text-stone-600 text-lg font-medium">+62 812-3456-7890</p>
                    <p className="text-stone-600 text-sm mt-1">Senin - Jumat: 09.00 - 18.00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-stone-50 rounded-2xl hover:shadow-md transition">
                  <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-stone-800 mb-2">Email</h3>
                    <p className="text-stone-600 text-lg font-medium">hello@kelvskin.com</p>
                    <p className="text-stone-600 text-sm mt-1">Kami akan membalas dalam 24 jam</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-6 border-2 border-emerald-100">
                <h3 className="font-semibold text-stone-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">⏰</span> Jam Operasional
                </h3>
                <div className="space-y-3 text-stone-600">
                  <div className="flex justify-between items-center">
                    <span>Senin - Jumat</span>
                    <span className="font-semibold text-emerald-800">09.00 - 18.00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sabtu</span>
                    <span className="font-semibold text-emerald-800">09.00 - 15.00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Minggu</span>
                    <span className="font-semibold text-red-600">Tutup</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-br from-amber-50 to-emerald-50 rounded-2xl p-6 border-2 border-amber-100">
                <h3 className="font-semibold text-stone-800 mb-2 flex items-center gap-2">
                  <span className="text-2xl">🚚</span> Info Pengiriman
                </h3>
                <p className="text-stone-600">
                  Gratis ongkir untuk pembelian minimal Rp 150.000 ke seluruh Surabaya!
                </p>
              </div>
            </div>

            {/* Contact Form with Better Design */}
            <div className="bg-stone-50 rounded-3xl p-8 shadow-sm border-2 border-stone-200">
              <h2 className="text-3xl font-bold text-stone-800 mb-2">Kirim Pesan</h2>
              <p className="text-stone-600 mb-8">Kami siap membantu Anda</p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="Masukkan nama Anda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-2">
                    Pesan <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-white border-2 border-stone-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-emerald-800 text-stone-50 py-4 rounded-xl font-semibold hover:bg-emerald-900 transition transform hover:scale-105 shadow-lg"
                >
                  Kirim Pesan
                </button>
              </form>

              <p className="text-sm text-stone-500 mt-6 text-center">
                Dengan mengirim pesan, Anda menyetujui <a href="#" className="text-emerald-800 hover:underline font-medium">Kebijakan Privasi</a> kami
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section with Better Design */}
      <section className="bg-stone-100 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-stone-800 mb-4 text-center">Lokasi Toko Kami</h2>
          <p className="text-stone-600 text-center mb-12">Kunjungi kami untuk pengalaman belanja yang lebih personal</p>
          <div className="bg-gradient-to-br from-emerald-100 to-amber-100 rounded-3xl h-96 flex items-center justify-center shadow-xl border-4 border-white">
            <div className="text-center">
              <p className="text-7xl mb-4">🗺️</p>
              <p className="text-2xl font-semibold text-stone-800">Google Maps</p>
              <p className="text-stone-600 mt-2">Integrasi peta akan ditambahkan di sini</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Ikuti Kami di Media Sosial</h2>
          <p className="text-stone-600 mb-12 text-lg">
            Dapatkan update terbaru, tips eco-friendly, dan promo eksklusif!
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="bg-gradient-to-br from-emerald-100 to-amber-100 hover:from-emerald-200 hover:to-amber-200 p-6 rounded-2xl transition transform hover:scale-110 shadow-md">
              <span className="text-4xl">📷</span>
              <p className="text-sm font-medium text-stone-800 mt-2">Instagram</p>
            </a>
            <a href="#" className="bg-gradient-to-br from-emerald-100 to-amber-100 hover:from-emerald-200 hover:to-amber-200 p-6 rounded-2xl transition transform hover:scale-110 shadow-md">
              <span className="text-4xl">📘</span>
              <p className="text-sm font-medium text-stone-800 mt-2">Facebook</p>
            </a>
            <a href="#" className="bg-gradient-to-br from-emerald-100 to-amber-100 hover:from-emerald-200 hover:to-amber-200 p-6 rounded-2xl transition transform hover:scale-110 shadow-md">
              <span className="text-4xl">💬</span>
              <p className="text-sm font-medium text-stone-800 mt-2">WhatsApp</p>
            </a>
            <a href="#" className="bg-gradient-to-br from-emerald-100 to-amber-100 hover:from-emerald-200 hover:to-amber-200 p-6 rounded-2xl transition transform hover:scale-110 shadow-md">
              <span className="text-4xl">🐦</span>
              <p className="text-sm font-medium text-stone-800 mt-2">Twitter</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}