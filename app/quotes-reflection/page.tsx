"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, ArrowLeft, RefreshCw, Heart, MessageCircle } from "lucide-react"

export default function QuotesReflectionPage() {
  const quotes = [
    "Bunga tidak tumbuh dalam sehari, begitu juga dengan dirimu.",
    "Kamu tidak harus selalu kuat, cukup hadir dengan jujur.",
    "Tumbuh itu pelan, tapi pasti.",
    "Sebuah luka bisa jadi pintu menuju cahaya.",
    "Hari ini mungkin pelan, tapi kamu tetap berjalan.",
    "Bernapaslah, kamu sudah sampai sejauh ini.",
    "Tidak apa-apa untuk tidak apa-apa hari ini.",
    "Kamu berhak atas ruang yang tenang dan aman.",
    "Kadang diam adalah cara terbaik untuk mendengarkan hati.",
    "Merawat diri bukan egois, itu perlu.",
    "Kesederhanaan adalah bentuk keindahan terdalam.",
    "Kamu tidak tertinggal, kamu sedang dalam jalurmu sendiri.",
    "Peluk dirimu seperti kamu memeluk sahabatmu.",
    "Jangan bandingkan bab awalmu dengan akhir orang lain.",
    "Hidup tidak harus tergesa, nikmati setiap detiknya.",
    "Rasa lelah bukan tanda lemah, tapi tanda kamu sedang berjuang.",
    "Waktu menyembuhkan, tapi penerimaan mempercepatnya.",
    "Menangis bukan kelemahan, itu keberanian yang jujur.",
    "Kamu sedang belajar, bukan gagal.",
    "Hari ini adalah versi paling bijak dari kamu kemarin.",
    "Hening pun bisa menyembuhkan.",
    "Kamu tidak harus sempurna untuk dicintai.",
    "Tumbuh kadang terasa sepi, tapi tidak pernah sia-sia.",
    "Patah pun bisa tetap indah.",
    "Jangan lupa, kamu adalah bagian dari alam yang juga punya musim.",
    "Rasa takut itu wajar, jangan biarkan dia memimpin.",
    "Kamu lebih kuat dari yang kamu pikirkan.",
    "Satu langkah kecil tetap berarti.",
    "Keseimbangan dimulai dari dalam.",
    "Terima dirimu, lalu pelan-pelan bentuk versi terbaiknya.",
    "Setiap pagi adalah kesempatan baru untuk mulai lagi.",
    "Terkadang, melepaskan adalah bentuk cinta tertinggi.",
    "Tenang bukan berarti diam, tapi damai.",
    "Tumbuh dalam diam tetaplah tumbuh.",
    "Matahari pun tidak bersinar setiap hari, tapi ia tetap matahari.",
    "Perjalanan batinmu adalah perjalanan yang paling penting.",
    "Ambil waktu untuk bernapas dengan sadar.",
    "Saat kamu berhenti berlari, kamu akan menemukan dirimu sendiri.",
    "Jangan buru-buru sembuh, peluk setiap prosesnya.",
    "Hadir di sini dan sekarang — itu cukup.",
    "Kamu adalah rumah bagi jiwamu sendiri.",
    "Kadang yang kamu butuhkan hanya hening dan teh hangat.",
    "Jangan lupa bersyukur, meski kecil.",
    "Dirimu yang hari ini adalah keajaiban.",
    "Tidak ada yang salah dengan pelan-pelan.",
    "Semua yang hidup butuh waktu untuk mekar.",
    "Kamu adalah bagian dari semesta yang sedang belajar.",
    "Lelahmu layak dihormati, bukan diabaikan.",
    "Kadang tumbuh artinya mengubah arah, bukan menyerah.",
    "Pulih itu bukan garis lurus, tapi kamu tetap bergerak.",
  ]

  const reflectionQuestions = [
    "Apa yang paling kamu syukuri hari ini, sekecil apa pun itu?",
    "Bagaimana perasaanmu hari ini? Coba beri nama emosinya.",
    "Apa hal kecil yang membuatmu tersenyum hari ini?",
    "Adakah momen hari ini yang membuatmu merasa damai atau tenang?",
    "Apa yang kamu butuhkan dari dirimu sendiri saat ini?",
    "Apa satu hal yang ingin kamu lepaskan hari ini?",
    "Siapa atau apa yang membuatmu merasa didukung akhir-akhir ini?",
    "Apakah ada pikiran yang berulang hari ini? Apa kira-kira pesannya?",
    "Apa yang bisa kamu lakukan besok untuk lebih memeluk dirimu sendiri?",
    "Jika hatimu bisa berbicara padamu sekarang, apa yang akan ia katakan?",
  ]

  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [currentQuestion, setCurrentQuestion] = useState(reflectionQuestions[0])

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex])
  }

  const getRandomQuestion = () => {
    const randomIndex = Math.floor(Math.random() * reflectionQuestions.length)
    setCurrentQuestion(reflectionQuestions[randomIndex])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      {/* Header */}
      <header className="border-b border-amber-200/50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-amber-900">Sanctuary Bloom</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-amber-800 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/meditation" className="text-amber-800 hover:text-green-600 transition-colors">
                Meditasi
              </Link>
              <Link href="/quotes-reflection" className="text-green-600 font-semibold">
                Quotes & Refleksi
              </Link>
              <Link href="/about" className="text-amber-800 hover:text-green-600 transition-colors">
                Tentang
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-6 text-amber-700 hover:text-green-600">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Home
          </Link>
        </Button>

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Quotes & Refleksi</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Temukan inspirasi dan panduan untuk perjalanan refleksi dirimu. Klik tombol untuk mendapatkan quote atau
            pertanyaan baru.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Quotes Section */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-900 flex items-center justify-center">
                <Heart className="mr-2 h-6 w-6 text-green-600" />
                Quote Inspiratif
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-green-50 rounded-lg p-8 mb-6 min-h-[200px] flex items-center justify-center">
                <blockquote className="text-xl text-green-800 font-medium leading-relaxed italic">
                  "{currentQuote}"
                </blockquote>
              </div>
              <Button onClick={getRandomQuote} className="bg-green-600 hover:bg-green-700 text-white" size="lg">
                <RefreshCw className="mr-2 h-5 w-5" />
                Quote Baru
              </Button>
            </CardContent>
          </Card>

          {/* Reflection Questions Section */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-amber-900 flex items-center justify-center">
                <MessageCircle className="mr-2 h-6 w-6 text-green-600" />
                Pertanyaan Refleksi
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="bg-amber-50 rounded-lg p-8 mb-6 min-h-[200px] flex items-center justify-center">
                <p className="text-xl text-amber-800 font-medium leading-relaxed">{currentQuestion}</p>
              </div>
              <Button
                onClick={getRandomQuestion}
                variant="outline"
                className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
                size="lg"
              >
                <RefreshCw className="mr-2 h-5 w-5" />
                Pertanyaan Baru
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Reflection Tips */}
        <Card className="mt-12 max-w-4xl mx-auto border-green-200 bg-green-50/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 text-center">Tips untuk Refleksi yang Bermakna</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Cara Merenungkan Quote:</h4>
                <ul className="text-green-600 space-y-2 text-sm">
                  <li>• Baca quote dengan perlahan dan penuh perhatian</li>
                  <li>• Pikirkan bagaimana quote ini berkaitan dengan hidupmu</li>
                  <li>• Catat insight atau perasaan yang muncul</li>
                  <li>• Tidak perlu memahami semuanya sekaligus</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-3">Cara Menjawab Pertanyaan Refleksi:</h4>
                <ul className="text-green-600 space-y-2 text-sm">
                  <li>• Jawab dengan jujur, tanpa menghakimi diri</li>
                  <li>• Tulis jawabanmu di jurnal atau catatan</li>
                  <li>• Tidak ada jawaban yang benar atau salah</li>
                  <li>• Beri waktu untuk merasakan emosimu</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
