import React, { useState } from 'react';
import { CheckCircle, ArrowRight, ArrowLeft, Sparkles } from 'lucide-react';

const skinTypes = {
  kering: {
    name: "Kulit Kering",
    icon: "❄️",
    description: "Kulit kamu sering mengelupas dan terasa ketarik setelah cuci muka. Butuh extra kelembapan!",
    characteristics: [
      "Sering mengelupas",
      "Sensasi ketarik setelah cuci muka",
      "Kusam",
      "Mudah keriput"
    ],
    recommendations: [
      "Moisturizer Daily Nourish",
      "Face Wash Lacto Rice",
      "Gel Shower Parijis Van Bali"
    ],
    tips: [
      "Gunakan moisturizer setiap hari",
      "Hindari sabun dengan alkohol tinggi",
      "Minum air putih minimal 2L per hari"
    ]
  },
  berminyak: {
    name: "Kulit Berminyak",
    icon: "✨",
    description: "Kulit kamu mudah mengkilap dan cenderung berjerawat. Butuh produk yang balance oil production!",
    characteristics: [
      "Mudah berjerawat",
      "Kulit mengkilap",
      "Pori-pori besar",
      "Makeup mudah luntur"
    ],
    recommendations: [
      "Face Wash Sunny Calm",
      "Gel Shower Osaka",
      "Facial Gel Cleanser With Oat"
    ],
    tips: [
      "Cuci muka 2x sehari",
      "Gunakan oil-free moisturizer",
      "Hindari produk yang terlalu berat"
    ]
  },
  kombinasi: {
    name: "Kulit Kombinasi",
    icon: "🌓",
    description: "T-zone berminyak tapi area lain kering. Butuh perawatan yang seimbang!",
    characteristics: [
      "T-zone berminyak",
      "Area lain kering",
      "Pori-pori besar di area tertentu",
      "Tekstur tidak merata"
    ],
    recommendations: [
      "Face Wash Midnight Bloom",
      "Moisturizer Daily Nourish",
      "Gel Shower Hangzhou"
    ],
    tips: [
      "Gunakan produk berbeda untuk area berbeda",
      "Focus hydration pada area kering",
      "Kontrol minyak di T-zone"
    ]
  },
  normal: {
    name: "Kulit Normal",
    icon: "😊",
    description: "Selamat! Kulit kamu seimbang dan sehat. Pertahankan dengan perawatan rutin!",
    characteristics: [
      "Pori-pori normal",
      "Tidak mudah berjerawat",
      "Tidak terlalu kering/berminyak",
      "Tekstur halus"
    ],
    recommendations: [
      "Face Wash Bare Hug",
      "Gel Shower Siena",
      "Moisturizer Daily Nourish"
    ],
    tips: [
      "Pertahankan rutinitas skincare konsisten",
      "Lindungi dari sinar matahari",
      "Hidrasi cukup"
    ]
  },
  sensitif: {
    name: "Kulit Sensitif",
    icon: "💛",
    description: "Kulit kamu mudah bereaksi terhadap produk baru. Butuh perawatan yang extra gentle!",
    characteristics: [
      "Mudah berjerawat",
      "Kemerahan",
      "Reaksi terhadap skincare baru",
      "Sering panas/iritasi"
    ],
    recommendations: [
      "Gel Shower Parijis Van Bali",
      "Face Wash Lacto Rice",
      "Moisturizer Daily Nourish"
    ],
    tips: [
      "Patch test produk baru",
      "Hindari fragrance keras",
      "Gunakan produk hypoallergenic"
    ]
  }
};

const questions = [
  {
    id: 1,
    question: "Setelah cuci muka tanpa skincare, kulit terasa...",
    options: [
      { id: 'A', text: "Ketarik / kering", type: 'A' },
      { id: 'B', text: "Mengkilap / berminyak", type: 'B' },
      { id: 'C', text: "Nyaman & seimbang", type: 'C' }
    ]
  },
  {
    id: 2,
    question: "Produksi minyak di wajah...",
    options: [
      { id: 'A', text: "Sangat sedikit", type: 'A' },
      { id: 'B', text: "Berlebih", type: 'B' },
      { id: 'C', text: "Sedang", type: 'C' }
    ]
  },
  {
    id: 3,
    question: "Kondisi pori-pori...",
    options: [
      { id: 'A', text: "Kecil & hampir tidak terlihat", type: 'A' },
      { id: 'B', text: "Besar & jelas", type: 'B' },
      { id: 'C', text: "Besar di area tertentu saja", type: 'C' }
    ]
  },
  {
    id: 4,
    question: "Kondisi kulit di siang hari...",
    options: [
      { id: 'A', text: "Kering / kusam", type: 'A' },
      { id: 'B', text: "Sangat mengkilap", type: 'B' },
      { id: 'C', text: "Berminyak di T-zone saja", type: 'C' }
    ]
  },
  {
    id: 5,
    question: "Kulit mudah perih, panas, atau gatal saat pakai skincare baru?",
    type: 'sensitivity',
    options: [
      { id: 'Ya', text: "Ya", value: true },
      { id: 'Tidak', text: "Tidak", value: false }
    ]
  },
  {
    id: 6,
    question: "Kulit sering kemerahan atau iritasi karena cuaca, debu, atau stres?",
    type: 'sensitivity',
    options: [
      { id: 'Ya', text: "Ya", value: true },
      { id: 'Tidak', text: "Tidak", value: false }
    ]
  }
];

export default function SkinTestPage({ setCurrentPage }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const goToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    // Count A, B, C answers
    const counts = { A: 0, B: 0, C: 0 };
    let sensitivityScore = 0;

    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = questions.find(q => q.id === parseInt(questionId));
      
      if (question.type === 'sensitivity') {
        if (answer.value === true) sensitivityScore++;
      } else {
        counts[answer.type]++;
      }
    });

    // Determine skin type
    let skinType;
    
    if (sensitivityScore >= 2) {
      skinType = 'sensitif';
    } else if (counts.A > counts.B && counts.A > counts.C) {
      skinType = 'kering';
    } else if (counts.B > counts.A && counts.B > counts.C) {
      skinType = 'berminyak';
    } else if (counts.A === counts.B || (counts.C > 0 && counts.A > 0 && counts.B > 0)) {
      skinType = 'kombinasi';
    } else {
      skinType = 'normal';
    }

    setResult({
      skinType,
      isSensitive: sensitivityScore >= 1,
      sensitivityLevel: sensitivityScore,
      ...skinTypes[skinType]
    });
    setShowResult(true);
  };

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setResult(null);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ.id] !== undefined;

  if (showResult && result) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          {/* Result Header */}
          <div className="text-center mb-12">
            <div className="inline-block bg-white rounded-full p-6 shadow-lg mb-6">
              <span className="text-6xl">{result.icon}</span>
            </div>
            <h1 className="text-4xl font-bold text-stone-800 mb-4">
              Hasil Tes Kulit Kamu
            </h1>
            <div className="bg-gradient-to-r from-emerald-800 to-emerald-900 text-white rounded-2xl p-8 shadow-xl">
              <h2 className="text-3xl font-bold mb-3">{result.name}</h2>
              <p className="text-lg opacity-90">{result.description}</p>
              {result.isSensitive && (
                <div className="mt-4 bg-white bg-opacity-20 rounded-xl p-4">
                  <p className="font-semibold">⚠️ Perhatian: Kulit kamu cenderung sensitif (Level: {result.sensitivityLevel}/2)</p>
                </div>
              )}
            </div>
          </div>

          {/* Characteristics */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-emerald-800" />
              Karakteristik Kulit Kamu
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {result.characteristics.map((char, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-800 mt-0.5 flex-shrink-0" />
                  <span className="text-stone-600">{char}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">
              Produk yang Direkomendasikan
            </h3>
            <div className="space-y-4">
              {result.recommendations.map((product, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition">
                  <div className="w-12 h-12 bg-emerald-200 rounded-full flex items-center justify-center text-2xl">
                    🧴
                  </div>
                  <span className="font-semibold text-stone-800">{product}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-gradient-to-br from-emerald-50 to-amber-50 rounded-2xl p-8 shadow-lg mb-8">
            <h3 className="text-2xl font-bold text-stone-800 mb-6">
              Tips Perawatan
            </h3>
            <div className="space-y-3">
              {result.tips.map((tip, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-emerald-800 font-bold">{idx + 1}.</span>
                  <span className="text-stone-600">{tip}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setCurrentPage('products')}
              className="bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-900 transition transform hover:scale-105 shadow-lg"
            >
              Lihat Produk Rekomendasi
            </button>
            <button
              onClick={restartTest}
              className="bg-white text-emerald-800 border-2 border-emerald-800 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition"
            >
              Ulangi Tes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">
            Tes Jenis Kulit
          </h1>
          <p className="text-lg text-stone-600">
            Jawab {questions.length} pertanyaan untuk mengetahui jenis kulit kamu
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-stone-600 mb-2">
            <span>Progress</span>
            <span>{currentQuestion + 1} / {questions.length}</span>
          </div>
          <div className="h-3 bg-stone-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-emerald-800 to-emerald-600 transition-all duration-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl p-8 shadow-xl mb-8">
          <div className="mb-8">
            <span className="inline-block bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Pertanyaan {currentQuestion + 1}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-stone-800 mb-2">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="space-y-4">
            {currentQ.options.map((option) => (
              <button
                key={option.id}
                onClick={() => handleAnswer(currentQ.id, option)}
                className={`w-full text-left p-6 rounded-xl border-2 transition transform hover:scale-105 ${
                  answers[currentQ.id]?.id === option.id
                    ? 'border-emerald-800 bg-emerald-50 shadow-lg'
                    : 'border-stone-200 bg-white hover:border-emerald-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    answers[currentQ.id]?.id === option.id
                      ? 'border-emerald-800 bg-emerald-800'
                      : 'border-stone-300'
                  }`}>
                    {answers[currentQ.id]?.id === option.id && (
                      <CheckCircle className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className={`text-lg font-medium ${
                    answers[currentQ.id]?.id === option.id
                      ? 'text-emerald-800'
                      : 'text-stone-700'
                  }`}>
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={goToPrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed text-stone-700 hover:bg-stone-100"
          >
            <ArrowLeft className="w-5 h-5" />
            Sebelumnya
          </button>

          <button
            onClick={goToNext}
            disabled={!isAnswered}
            className="flex items-center gap-2 bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-emerald-900 transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 shadow-lg"
          >
            {currentQuestion === questions.length - 1 ? 'Lihat Hasil' : 'Selanjutnya'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}