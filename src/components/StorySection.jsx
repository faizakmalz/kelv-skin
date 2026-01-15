// Story Section
const StorySection = () => {
  return (
    <section className="py-20 bg-white" id="story">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl h-96 flex items-center justify-center">
              <span className="text-8xl">🌿</span>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl p-6 shadow-xl">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm">Eco-Friendly</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Lahir dari Kepedulian</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Kelv Skin didirikan sebagai respons atas dua tantangan yang saling berkaitan: meningkatnya limbah organik dan terbatasnya ruang pemberdayaan ekonomi bagi perempuan.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Berangkat dari pemanfaatan kulit buah sebagai bahan baku eco enzyme, Kelv Skin mengembangkan produk turunan yang berorientasi pada keberlanjutan, kualitas, dan nilai guna melalui proses yang dijalankan bersama komunitas perempuan dan generasi muda secara edukatif dan kolaboratif.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Kami percaya bahwa merek yang berkelanjutan dibangun melalui kepercayaan; oleh karena itu, Kelv Skin menempatkan konsumen bukan hanya sebagai pelanggan, tetapi sebagai bagian dari ekosistem pengguna yang terlibat dalam praktik konsumsi dan produksi yang bertanggung jawab.
            </p>
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
              Baca Selengkapnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;