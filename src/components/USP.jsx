
// USP Section
const USPSection = () => {
  const usps = [
    { icon: <Leaf className="w-12 h-12" />, title: "Eco Enzyme", desc: "Berbahan dasar kulit buah yang difermentasi" },
    { icon: <Heart className="w-12 h-12" />, title: "Ramah Kulit", desc: "Aman untuk kulit sensitif tanpa bahan keras" },
    { icon: <Users className="w-12 h-12" />, title: "Pemberdayaan", desc: "Dibuat bersama komunitas perempuan lokal" },
    { icon: <Sparkles className="w-12 h-12" />, title: "Biodegradable", desc: "Mudah terurai dan ramah lingkungan" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Kenapa Memilih Kelv Skin?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {usps.map((usp, idx) => (
            <div key={idx} className="text-center p-6 rounded-2xl hover:bg-green-50 transition group">
              <div className="text-green-600 mb-4 flex justify-center group-hover:scale-110 transition">
                {usp.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{usp.title}</h3>
              <p className="text-gray-600">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default USPSection;