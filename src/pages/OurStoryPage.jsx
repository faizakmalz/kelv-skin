import React from 'react';
import { Leaf, Users, Heart, Sparkles } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero with Image */}
      <section className="relative bg-gradient-to-br from-amber-50 to-emerald-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center min-h-[500px]">
            <div className="px-8 py-12 md:py-0">
              <h1 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
                Cerita Kami
              </h1>
              <p className="text-xl text-stone-600 leading-relaxed">
                Perjalanan dari limbah organik menjadi produk ramah lingkungan yang memberdayakan perempuan Indonesia
              </p>
            </div>
             <div className="relative h-[400px] md:h-[500px]">
              <img 
                src="images/ourstory.png" 
                alt="Sustainable Earth and Environment"
                className="absolute inset-0 w-full h-full object-contain rounded lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Story with Images */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* First Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-stone-800 mb-6">Lahir dari Kepedulian</h2>
              <p className="text-stone-600 mb-4 leading-relaxed text-lg">
                Kelv Skin didirikan sebagai respons atas dua tantangan yang saling berkaitan: meningkatnya limbah organik dan terbatasnya ruang pemberdayaan ekonomi bagi perempuan.
              </p>
              <p className="text-stone-600 mb-6 leading-relaxed text-lg">
                Berangkat dari pemanfaatan kulit buah sebagai bahan baku eco enzyme, Kelv Skin mengembangkan produk turunan yang berorientasi pada keberlanjutan, kualitas, dan nilai guna melalui proses yang dijalankan bersama komunitas perempuan dan generasi muda secara edukatif dan kolaboratif.
              </p>
            </div>
            <div className="relative h-[400px] md:h-[500px] shadow-lg rounded-lg overflow-hidden">
              <img 
                src="images/foto owner.jpg" 
                alt="Sustainable Earth and Environment"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

          </div>

          {/* Mission Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-3xl p-12 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold text-stone-800 mb-6">Misi Kami</h3>
              <p className="text-stone-600 leading-relaxed text-lg mb-8">
                Kami percaya bahwa merek yang berkelanjutan dibangun melalui kepercayaan; oleh karena itu, Kelv Skin menempatkan konsumen bukan hanya sebagai pelanggan, tetapi sebagai bagian dari ekosistem, pengguna yang terlibat dalam praktik konsumsi dan produksi yang bertanggung jawab.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div>
                  <div className="text-5xl font-bold text-emerald-800 mb-2">500kg+</div>
                  <p className="text-stone-700 font-medium">Limbah Organik Terolah</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-emerald-800 mb-2">50+</div>
                  <p className="text-stone-700 font-medium">Perempuan Terberdayakan</p>
                </div>
                <div>
                  <div className="text-5xl font-bold text-emerald-800 mb-2">1000+</div>
                  <p className="text-stone-700 font-medium">Pelanggan Puas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-stone-800 mb-12 text-center">Nilai-Nilai Kami</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-lg transition group">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-4 rounded-xl group-hover:bg-emerald-200 transition">
                    <Leaf className="w-8 h-8 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-stone-800 mb-3">Keberlanjutan</h4>
                    <p className="text-stone-600">Mengubah limbah organik menjadi produk bernilai tinggi yang ramah lingkungan dan berkelanjutan untuk generasi mendatang.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-lg transition group">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-4 rounded-xl group-hover:bg-emerald-200 transition">
                    <Users className="w-8 h-8 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-stone-800 mb-3">Pemberdayaan</h4>
                    <p className="text-stone-600">Membuka peluang ekonomi bagi perempuan dan generasi muda melalui kolaborasi edukatif dan produktif.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-lg transition group">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-4 rounded-xl group-hover:bg-emerald-200 transition">
                    <Heart className="w-8 h-8 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-stone-800 mb-3">Kualitas</h4>
                    <p className="text-stone-600">Produk berkualitas tinggi yang aman, efektif, dan lembut untuk semua jenis kulit, terutama kulit sensitif.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border-2 border-stone-200 rounded-2xl p-8 hover:border-emerald-300 hover:shadow-lg transition group">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-100 p-4 rounded-xl group-hover:bg-emerald-200 transition">
                    <Sparkles className="w-8 h-8 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl text-stone-800 mb-3">Kolaborasi</h4>
                    <p className="text-stone-600">Bekerja sama dengan komunitas untuk menciptakan dampak positif yang berkelanjutan bagi lingkungan dan masyarakat.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Process Section with Image */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-emerald-100 flex items-center justify-center">
                <div className="text-8xl">♻️</div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold text-stone-800 mb-6">Proses Pembuatan</h3>
              <p className="text-stone-600 mb-4 leading-relaxed">
                Setiap produk Kelv Skin dibuat dengan cermat melalui proses fermentasi kulit buah yang menghasilkan eco enzyme berkualitas tinggi.
              </p>
              <p className="text-stone-600 leading-relaxed">
                Proses ini tidak hanya mengurangi limbah organik, tetapi juga menghasilkan bahan aktif yang lembut dan aman untuk kulit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Find Us Section - tambahkan sebelum CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-emerald-50">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block text-xs font-bold text-emerald-800 uppercase tracking-widest mb-4 bg-white px-4 py-2 rounded-full">
            Stay Connected
          </span>
          <h2 className="text-4xl font-bold text-stone-800 mb-4">Ikuti Perjalanan Kami</h2>
          <p className="text-stone-600 mb-12 max-w-2xl mx-auto">
            Jadilah bagian dari komunitas Kelv Skin dan dapatkan inspirasi untuk gaya hidup yang lebih berkelanjutan
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a 
              href="https://www.instagram.com/kelv.skin" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm">Instagram</p>
            </a>

            <a 
              href="https://www.tiktok.com/@kelvnaturalcare" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-cyan-50 hover:to-pink-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm">TikTok</p>
            </a>

            <a 
              href="https://wa.me/62881026986577" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm">WhatsApp</p>
            </a>

            <a 
              href="https://shopee.co.id/KELV" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 12.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316L23 0zM3.5 17.5L0 24l3.5-2.5 3.5 2.5-3.5-6.5z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 text-sm">Shopee</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-800 to-emerald-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center text-stone-50">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Bergabunglah dengan Gerakan Kami</h2>
          <p className="text-xl mb-10 opacity-90 leading-relaxed">
            Mari bersama-sama menciptakan masa depan yang lebih berkelanjutan untuk generasi mendatang
          </p>
          <button className="bg-stone-50 text-emerald-800 px-10 py-4 rounded-full font-semibold hover:bg-white transition transform hover:scale-105 shadow-xl text-lg">
            Mulai Berbelanja
          </button>
        </div>
      </section>
    </div>
  );
}