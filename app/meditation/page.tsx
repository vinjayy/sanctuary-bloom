import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Play } from "lucide-react"
import Image from "next/image"

export default function MeditationPage() {
  const meditationVideos = [
    {
      id: "1",
      title: "Meditasi Sanctuary Blooming",
      description:
        "Meditasi khusus Sanctuary Bloom untuk membantu kamu menemukan ketenangan dan kedamaian dalam perjalanan pertumbuhan diri.",
      embedId: "Olvq9gKGkfQ", // Updated YouTube video ID
      duration: "10 menit",
    },
    {
      id: "2",
      title: "Meditasi Body Scan untuk Relaksasi",
      description: "Teknik meditasi untuk melepaskan ketegangan fisik dan mental dengan memindai seluruh tubuh.",
      embedId: "15q-N-_kkrU", // YouTube video ID
      duration: "15 menit",
    },
    {
      id: "3",
      title: "Meditasi Mindfulness untuk Kesadaran",
      description: "Latihan mindfulness untuk meningkatkan kesadaran akan momen saat ini dan mengurangi kecemasan.",
      embedId: "ZToicYcHIOU", // YouTube video ID
      duration: "12 menit",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-green-50">
      {/* Header */}
      <header className="border-b border-amber-200/50 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/sanctuary-bloom-logo.png"
                alt="Sanctuary Bloom Logo"
                width={64}
                height={64}
                className="h-16 w-16"
              />
              <span className="text-2xl font-bold text-amber-900">Sanctuary Bloom</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-amber-800 hover:text-green-600 transition-colors">
                Home
              </Link>
              <Link href="/meditation" className="text-green-600 font-semibold">
                Meditasi
              </Link>
              <Link href="/quotes-reflection" className="text-amber-800 hover:text-green-600 transition-colors">
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
          <h1 className="text-4xl font-bold text-amber-900 mb-4">Video Meditasi</h1>
          <p className="text-lg text-amber-700 max-w-2xl mx-auto">
            Temukan ketenangan dan kedamaian melalui praktik meditasi yang dipandu. Pilih video yang sesuai dengan
            kebutuhanmu saat ini.
          </p>
        </div>

        {/* Meditation Videos */}
        <div className="grid gap-8 max-w-4xl mx-auto">
          {meditationVideos.map((video) => (
            <Card key={video.id} className="border-amber-200 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl text-amber-900 flex items-center">
                  <Play className="mr-2 h-6 w-6 text-green-600" />
                  {video.title}
                </CardTitle>
                <div className="flex items-center text-sm text-amber-600">
                  <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">{video.duration}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="text-amber-700 leading-relaxed">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tips Section */}
        <Card className="mt-12 max-w-4xl mx-auto border-green-200 bg-green-50/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-green-800 text-center">Tips untuk Meditasi yang Efektif</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Persiapan:</h4>
                <ul className="text-green-600 space-y-1 text-sm">
                  <li>• Cari tempat yang tenang dan nyaman</li>
                  <li>• Matikan notifikasi ponsel</li>
                  <li>• Duduk dengan posisi yang nyaman</li>
                  <li>• Gunakan headphone untuk pengalaman terbaik</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-700 mb-2">Selama Meditasi:</h4>
                <ul className="text-green-600 space-y-1 text-sm">
                  <li>• Jangan memaksakan diri</li>
                  <li>• Biarkan pikiran mengalir natural</li>
                  <li>• Fokus pada instruksi yang diberikan</li>
                  <li>• Tidak apa-apa jika pikiran melayang</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
