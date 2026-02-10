import React from 'react';
import { Leaf, Heart, Users, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function HomePage({ setCurrentPage, setSelectedProduct }) {
  const products = [
    {
    id: 1,
    name: "Gel Shower Parijis Van Bali",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Membersihkan dengan lembut, aroma lavender menenangkan. Dilengkapi dengan aroma bunga lavender yang lembut dan menenangkan saat digunakan.",
    image: "/images/parijis van bali gel shower.png",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil, Cocamidopropyl Betaine, Ekstrak Lavender, Butterfly Pea Flower",
    description: "Membersihkan tubuh dari kotoran dan minyak berlebih, membantu menjaga kesegaran dan kelembapan alami kulit."
  },
  {
    id: 2,
    name: "Gel Shower Siena",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Aroma lemon segar yang cerah, memberikan sensasi fresh saat mandi",
    image: "/images/siena gel shower.jpeg",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil, Cocamidopropyl Betaine, Ekstrak Lemon, Butterfly Pea Flower",
    description: "Hadir dengan aroma lemon dan jeruk segar yang cerah, memberikan sensasi fresh saat mandi."
  },
  {
    id: 3,
    name: "Gel Shower Hangzhou",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Cherry blossom extract yang menyegarkan dengan aroma floral yang lembut",
    image: "/images/hangzou gel shower.jpeg",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil, Cocamidopropyl Betaine, Cherry Blossom Extract",
    description: "Membersihkan dengan lembut sambil memberikan aroma cherry blossom yang menyegarkan."
  },
  {
    id: 4,
    name: "Gel Shower Osaka",
    category: "body-care",
    categoryName: "Eco Body Care",
    benefits: "Aroma bunga mawar yang mewah dan bold, memberikan kesan premium",
    image: "/images/osaka gel shower.jpeg",
    price: "Rp 75.000",
    sizes: ["300ml", "500ml"],
    ingredients: "Aqua, Metyl Ester Sulfonat, Eco Enzyme, Glyserin, Essential Oil Stress Health, Cocamidopropyl Betaine, Cherry Blossom Extract",
    description: "Memiliki aroma bunga mawar yang kuat dan berkarakter, memberikan kesan mewah dan bold."
  },
  // Home Care
  {
    id: 6,
    name: "Liquid Eco Detergent Siena",
    category: "home-care",
    categoryName: "Home Care",
    benefits: "Membersihkan pakaian secara efektif tanpa merusak serat kain, aman untuk kulit sensitif",
    image: "/images/liquid eco detergent.jpeg",
    price: "Rp 55.000",
    sizes: ["500ml", "1000ml"],
    ingredients: "Methyl Ester Sulfonat, Eco Enzyme, Aqua, Fragrance Oil Lavender",
    description: "Ramah lingkungan & mudah terurai dengan aroma lavender yang menenangkan."
  },
  {
    id: 9,
    name: "Moisturizer Daily Nourish",
    category: "skin-care",
    categoryName: "Skin Care",
    benefits: "Menjaga kelembapan kulit sepanjang hari, membuat kulit terasa lebih lembut dan kenyal",
    image: "/images/moisturizer.png",
    price: "Rp 95.000",
    sizes: ["50ml"],
    ingredients: "Sweet Almond Oil, Olive Oil, Mango Butter, Pulawak, Cetyl Alcohol, Eco Enzyme, Aloe Vera Extract, Aqua, Germall Plus, Essential Oil, Argan Oil",
    description: "Cocok untuk kulit normal hingga kering, memberikan nutrisi optimal."
  }
];

  const handleViewDetail = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
    window.scrollTo(0, 0);
  };

  return (
    <>
      {/* Hero Section with Real Image */}
      <section className="relative bg-[url(/moisturizer.png)] bg-cover bg-center overflow-hidden">
          <div className='absolute z-10 py-16 md:py-20 bg-gradient-to-br from-forest-800 to-beige-800 w-screen opacity-30 h-[700px]'>
          </div>
        <div className="mx-auto relative z-20">
          <div className="items-center min-h-[600px]">
            {/* Left Content */}
            <div className="px-8 md:px-24 lg:px-48 py-16 md:py-20 flex flex-col items-center md:items-start  justify-center">
              
              <span className="inline-block text-xs font-bold w-[225px] text-center lg:text-left lg:w-[220px] text-forest-50 uppercase tracking-widest mb-4 bg-forest-700 px-4 py-2 rounded-full">
                Natural & Eco-Friendly
              </span>
              <h1 className="text-5xl md:text-5xl lg:text-8xl font-bold text-center md:text-left text-white mb-6 lg:leading-24">
                Our #1<br />
                <span className="text-white">Soothing Solution</span>
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 px-8 md:px-0 leading-6 md:leading-7 max-w-md text-center md:text-left">
                Perawatan alami berbahan eco enzyme yang lembut untuk kulit sensitif, dipercaya ribuan pengguna di Indonesia
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <button 
                  onClick={() => setCurrentPage('products')}
                  className="bg-forest-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-forest-900 transition transform hover:scale-105 shadow-xl"
                >
                  Shop Now
                </button>
                <a 
                  href='https://wa.me/62881026986577?text=Halo%20saya%20ingin%20konsultasi%20lanjutan%20terkait%20pengisian%20survey%20jenis%20kulit'
                  className=" text-center bg-white text-forest-800  px-8 py-4 rounded-full text-lg font-semibold hover:bg-forest-50 transition"
                >
                  Learn More
                </a>
              </div>
              
              {/* Trust Badges */}
              <div className="flex gap-6 mt-12 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-beige-200 rounded-full flex items-center justify-center">
                    <Leaf className="w-3 h-3 md:w-5 md:h-5 text-forest-700" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white uppercase">100%</p>
                    <p className="text-sm font-semibold text-white">Natural</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-beige-200 rounded-full flex items-center justify-center">
                    <Heart className="w-3 h-3 md:w-5 md:h-5 text-forest-700" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white uppercase">SIG</p>
                    <p className="text-sm font-semibold text-white">Certified</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-beige-200 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 md:w-5 md:h-5 text-text-forest-700" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-white uppercase">1000+</p>
                    <p className="text-sm font-semibold text-white">Happy Users</p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="relative h-[500px] md:h-[600px] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1599847935464-fde3827639c2?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Natural Skincare Products"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-forest-50 to-transparent opacity-20"></div>
              
              <div className="absolute bottom-8 right-8 bg-white rounded-2xl p-6 shadow-2xl backdrop-blur-sm bg-opacity-95">
                <div className="text-center">
                  <p className="text-3xl font-bold text-forest-800">500kg+</p>
                  <p className="text-sm text-forest-600 mt-1">Limbah Organik<br/>Terolah</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Featured Banner */}
      <section className="py-12 bg-beige-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-forest-800 font-semibold uppercase tracking-wide mb-2">Discover Our Story</p>
          <h2 className="text-3xl font-bold text-forest-800 mb-4">
            Where nature's gentlest ingredients<br />meet simple acts of care
          </h2>
          <p className="text-forest-600 max-w-2xl mx-auto">for your sensitive skin</p>
        </div>
      </section>

      {/* Love Your Skin Section with Real Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Side */}
            <div className="relative h-[800px] md:h-[800px] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/images/gel shower.jpg" 
                alt="Woman with natural skincare"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent opacity-30"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-beige-200" />
                  </div>
                  <div>
                    <p className="font-bold text-forest-800">Safe for Sensitive Skin</p>
                    <p className="text-sm text-forest-600">Formula lembut & natural</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div>
              <h2 className="text-4xl font-bold text-forest-800 mb-6">Love Your Skin Again</h2>
              <p className="text-forest-700 mb-8 leading-relaxed">
                Solusi alami kami dipercaya oleh ribuan orang dengan kulit sensitif. Formulasi lembut berbahan eco enzyme yang aman dan efektif.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-beige-100 rounded-xl">
                  <div className="text-forest-800 mb-3 flex justify-center">
                    <Leaf className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-forest-800 mb-2">Natural & Handmade</h3>
                  <p className="text-sm text-forest-800">Dibuat dengan tangan menggunakan bahan alami pilihan</p>
                </div>

                <div className="text-center p-6 bg-beige-100 rounded-xl">
                  <div className="text-forest-800 mb-3 flex justify-center">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-forest-800 mb-2">Sensitive Skin Friendly</h3>
                  <p className="text-sm text-forest-800">Formula lembut tanpa SLS dan steroid</p>
                </div>

                <div className="text-center p-6 bg-beige-100 rounded-xl">
                  <div className="text-forest-800 mb-3 flex justify-center">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-forest-800 mb-2">Halal</h3>
                  <p className="text-sm text-forest-800">Tersertifikasi halal dan aman</p>
                </div>

                <div className="text-center p-6 bg-beige-100 rounded-xl">
                  <div className="text-forest-800 mb-3 flex justify-center">
                    <Users className="w-8 h-8" />
                  </div>
                  <h3 className="font-bold text-forest-800 mb-2">SIG</h3>
                  <p className="text-sm text-forest-800">Terdaftar resmi di SIG</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 to-amber-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Image */}
              <div className="relative h-64 md:h-auto rounded-3xl">
                <img 
                  src="images/model face wash.png" 
                  alt="Skin Test"
                  className="w-full h-full object-cover rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-forest-800 to-transparent opacity-60"></div>
                
                {/* Floating Badge */}
                <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🔍</div>
                    <div>
                      <p className="text-sm font-bold text-stone-800">Gratis</p>
                      <p className="text-xs text-stone-600">2 menit</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-white to-stone-50">
                <span className="inline-block text-xs font-bold text-emerald-800 uppercase tracking-widest mb-4 bg-emerald-100 px-4 py-2 rounded-full w-fit">
                  Personalized Recommendation
                </span>
                
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4 leading-tight">
                  Belum Tahu Jenis Kulit Kamu?
                </h2>
                
                <p className="text-lg text-stone-600 mb-6 leading-relaxed">
                  Ikuti tes kulit gratis kami dan dapatkan rekomendasi produk yang tepat untuk kulitmu. Hanya 6 pertanyaan simple!
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-800 text-xs">✓</span>
                    </div>
                    <span className="text-stone-700">Hasil akurat berdasarkan kondisi kulitmu</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-800 text-xs">✓</span>
                    </div>
                    <span className="text-stone-700">Rekomendasi produk yang sesuai</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-800 text-xs">✓</span>
                    </div>
                    <span className="text-stone-700">Tips perawatan khusus untuk jenis kulitmu</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setCurrentPage('skin-test')}
                  className="bg-forest-800 text-stone-50 px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-900 transition transform hover:scale-105 shadow-lg w-full md:w-auto"
                >
                  Mulai Tes Sekarang →
                </button>

                <p className="text-xs text-stone-500 mt-4">
                  ✨ Sudah dipercaya oleh 1000+ pengguna
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 bg-forest-700">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-sm text-forest-50 text-center mb-4 font-semibold uppercase tracking-wide mb-2">OUR VALUES</p>
          <h2 className="text-4xl font-bold text-center mb-16 text-forest-50">
            Kenapa Memilih Kelv Skin?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Leaf className="w-12 h-12" />, title: "Eco Enzyme", desc: "Berbahan dasar kulit buah yang difermentasi" },
              { icon: <Heart className="w-12 h-12" />, title: "Ramah Kulit", desc: "Aman untuk kulit sensitif tanpa bahan keras" },
              { icon: <Users className="w-12 h-12" />, title: "Pemberdayaan", desc: "Dibuat bersama komunitas perempuan lokal" },
              { icon: <Sparkles className="w-12 h-12" />, title: "Biodegradable", desc: "Mudah terurai dan ramah lingkungan" }
            ].map((usp, idx) => (
              <div key={idx} className="text-center bg-forest-50 p-6 rounded-2xl hover:bg-beige-400 transition group">
                <div className="text-forest-800 mb-4 flex justify-center group-hover:scale-110 transition">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-forest-700">{usp.title}</h3>
                <p className="text-forest-700">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gradient-to-b from-beige-200 to-beige-400">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-stone-800">Produk Bestseller</h2>
            <p className="text-xl text-stone-600">Dipercaya oleh ribuan pelanggan di seluruh Indonesia</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                name={product.name}
                category={product.categoryName}
                benefits={product.benefits}
                image={product.image}
                onViewDetail={() => handleViewDetail(product)}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-stone-50 text-emerald-800 border-2 border-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-800 hover:text-stone-50 transition"
            >
              Lihat Semua Produk
            </button>
          </div>
        </div>
      </section>

      {/* Story Preview with Better Layout */}
      <section className="py-20 bg-gradient-to-b from-forest-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <span className="text-sm font-semibold text-forest-800 uppercase tracking-wide mb-4 block">Our Story</span>
              <h2 className="text-4xl font-bold mb-6 text-forest-800">Lahir dari Kepedulian</h2>
              <p className="text-forest-600 mb-4 leading-relaxed">
                Kelv Skin didirikan sebagai respons atas dua tantangan yang saling berkaitan: meningkatnya limbah organik dan terbatasnya ruang pemberdayaan ekonomi bagi perempuan.
              </p>
              <p className="text-forest-600 mb-6 leading-relaxed">
                Berangkat dari pemanfaatan kulit buah sebagai bahan baku eco enzyme, kami mengembangkan produk berkualitas yang berkelanjutan dan ramah lingkungan.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8 bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-center">
                  <p className="text-3xl font-bold text-forest-800 mb-1">500kg+</p>
                  <p className="text-xs text-forest-600">Limbah Terolah</p>
                </div>
                <div className="text-center border-l border-r border-forest-200">
                  <p className="text-3xl font-bold text-forest-800 mb-1">50+</p>
                  <p className="text-xs text-forest-600">Perempuan Berdaya</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-forest-800 mb-1">100%</p>
                  <p className="text-xs text-forest-600">Eco-Friendly</p>
                </div>
              </div>

              <button 
                onClick={() => setCurrentPage('story')}
                className="bg-forest-800 text-forest-50 px-8 py-3 rounded-full font-semibold hover:bg-forest-900 transition"
              >
                Baca Selengkapnya
              </button>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/model liquid eco detergent.png" 
                  alt="Eco enzyme making process"
                  className="w-full h-full object-cover scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900 to-transparent opacity-40"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-forest-800 text-forest-50 rounded-2xl p-6 shadow-2xl">
                <p className="text-3xl font-bold">1000+</p>
                <p className="text-sm">Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-forest-800">Apa Kata Mereka</h2>
          <p className="text-center text-forest-600 mb-12">Dipercaya oleh ribuan pelanggan di Indonesia</p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-forest-50 rounded-2xl p-8 relative">
              <div className="text-5xl text-forest-800 mb-4">"</div>
              <p className="text-forest-600 mb-6 italic">
                "Produk yang sangat lembut di kulit. Sejak pakai Kelv Skin, eksim saya berkurang drastis!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-200 to-amber-200 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Siti Nurhaliza</p>
                  <p className="text-sm text-forest-600">Jakarta</p>
                </div>
              </div>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8 relative">
              <div className="text-5xl text-forest-800 mb-4">"</div>
              <p className="text-forest-600 mb-6 italic">
                "Senang bisa mendukung produk lokal yang ramah lingkungan. Kualitasnya juga bagus!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-200 to-amber-200 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Budi Santoso</p>
                  <p className="text-sm text-forest-600">Surabaya</p>
                </div>
              </div>
            </div>

            <div className="bg-forest-50 rounded-2xl p-8 relative">
              <div className="text-5xl text-forest-800 mb-4">"</div>
              <p className="text-forest-600 mb-6 italic">
                "Aroma lavendernya bikin rileks. Kulit juga jadi lebih lembut dan sehat!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-forest-200 to-amber-200 flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <p className="font-semibold text-forest-800">Dewi Lestari</p>
                  <p className="text-sm text-forest-600">Bandung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Find Us on Social Media - tambahkan sebelum closing tag di HomePage */}
      <section className="py-20 bg-gradient-to-br from-stone-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold text-emerald-800 uppercase tracking-widest mb-4 bg-emerald-100 px-4 py-2 rounded-full">
              Connect With Us
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
              Follow Our Journey
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Bergabunglah dengan komunitas kami untuk tips perawatan kulit, promo eksklusif, dan update terbaru
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a 
              href="https://www.instagram.com/kelv.skin" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-pink-50 hover:to-purple-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 mb-1">Instagram</p>
              <p className="text-xs text-stone-600">@kelv.skin</p>
            </a>

            <a 
              href="https://www.tiktok.com/@kelvnaturalcare" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-cyan-50 hover:to-pink-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 mb-1">TikTok</p>
              <p className="text-xs text-stone-600">@kelvnaturalcare</p>
            </a>

            <a 
              href="https://wa.me/62881026986577" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-green-50 hover:to-emerald-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 mb-1">WhatsApp</p>
              <p className="text-xs text-stone-600">Chat with us</p>
            </a>

            <a 
              href="https://shopee.co.id/KELV" 
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white hover:bg-gradient-to-br hover:from-orange-50 hover:to-red-50 p-8 rounded-2xl transition-all transform hover:scale-105 shadow-md hover:shadow-xl text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 12.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-5.5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zM23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316L23 0zM3.5 17.5L0 24l3.5-2.5 3.5 2.5-3.5-6.5z"/>
                </svg>
              </div>
              <p className="font-bold text-stone-800 mb-1">Shopee</p>
              <p className="text-xs text-stone-600">Shop now</p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}