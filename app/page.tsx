import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Heart, Sparkles } from "lucide-react"

export default function HomePage() {
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold text-amber-900 mb-4">Sanctuary Bloom</h1>
            <p className="text-2xl text-green-700 font-light mb-8">Ruang aman untuk bertumbuh</p>
            <p className="text-lg text-amber-700 max-w-2xl mx-auto leading-relaxed">
              Temukan ketenangan dalam perjalanan pertumbuhan dirimu. Sanctuary Bloom hadir sebagai teman yang siap
              menemani setiap langkah pertumbuhan batin dan emosionalmu.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
              <Link href="/quotes-reflection">
                <Heart className="mr-2 h-5 w-5" />
                Mulai Refleksi
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 bg-transparent"
            >
              <Link href="/meditation">
                <Sparkles className="mr-2 h-5 w-5" />
                Lihat Meditasi
              </Link>
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-amber-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Video Meditasi</h3>
                <p className="text-amber-700">
                  Temukan ketenangan melalui video meditasi yang dipilih khusus untuk perjalanan batinmu.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Quotes Inspiratif</h3>
                <p className="text-amber-700">
                  Dapatkan inspirasi harian melalui quotes yang dipilih untuk menyentuh hati dan jiwa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-white/60 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Leaf className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Refleksi Diri</h3>
                <p className="text-amber-700">
                  Pertanyaan refleksi yang membantu kamu mengenal diri lebih dalam dan tumbuh dengan sadar.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-100/50 border-t border-amber-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-lg font-semibold text-amber-900">Sanctuary Bloom</span>
          </div>
          <p className="text-amber-700">Ruang aman untuk bertumbuh • Menemani perjalanan batinmu dengan penuh kasih</p>
        </div>
      </footer>
    </div>
  )
}
