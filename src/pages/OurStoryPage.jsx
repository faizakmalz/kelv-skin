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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-amber-200 flex items-center justify-center">
                <div className="text-9xl">🌍</div>
              </div>
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
            <div className="relative h-80 rounded-3xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center">
                <div className="text-8xl">🌿</div>
              </div>
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