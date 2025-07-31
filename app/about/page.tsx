import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, ArrowLeft, Heart, Sparkles, Users } from "lucide-react"

export default function AboutPage() {
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
              <Link href="/about" className="text-green-600 font-semibold">
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
          <div className="mb-6">
            <Leaf className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-4xl font-bold text-amber-900 mb-4">Tentang Sanctuary Bloom</h1>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main About Section */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 text-center">Misi Kami</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-amber-700 leading-relaxed mb-6">
                Sanctuary Bloom merupakan sebuah ruang aman untuk bertumbuh secara mental dan emosional. Sanctuary hadir
                sebagai teman untuk kamu yang sedang menginginkan ketenangan batin dan pikiran. Sanctuary Bloom siap
                menemani setiap pertumbuhan batin mu.
              </p>
              <p className="text-amber-600 leading-relaxed">
                Kami percaya bahwa setiap orang berhak memiliki ruang yang aman untuk tumbuh, belajar, dan menyembuhkan
                diri. Melalui video meditasi, quotes inspiratif, dan pertanyaan refleksi, kami ingin membantu kamu
                menemukan kedamaian dalam perjalanan hidup yang penuh dengan tantangan.
              </p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Heart className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Kasih Sayang</h3>
                <p className="text-green-600 text-sm">
                  Kami percaya bahwa penyembuhan dimulai dari kasih sayang pada diri sendiri dan penerimaan yang tulus.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-200 bg-amber-50/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Sparkles className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-amber-800 mb-2">Pertumbuhan</h3>
                <p className="text-amber-600 text-sm">
                  Setiap hari adalah kesempatan untuk tumbuh. Kami mendampingi perjalanan pertumbuhanmu dengan sabar.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/80 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">Komunitas</h3>
                <p className="text-green-600 text-sm">
                  Meskipun perjalanan batin bersifat personal, kamu tidak sendirian. Kami hadir sebagai teman setia.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Philosophy Section */}
          <Card className="border-amber-200 bg-white/80 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-900 text-center">Filosofi Kami</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="text-center">
                  <blockquote className="text-xl text-green-800 font-medium italic mb-4">
                    "Seperti bunga yang mekar dalam waktu yang tepat, setiap orang memiliki ritme pertumbuhan yang
                    unik."
                  </blockquote>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Prinsip Kami:</h4>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>• Tidak ada timeline yang "benar" untuk penyembuhan</li>
                      <li>• Setiap emosi layak dirasakan dan dihormati</li>
                      <li>• Pertumbuhan terjadi dalam keheningan dan kesabaran</li>
                      <li>• Kamu sudah cukup, apa adanya saat ini</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-amber-800 mb-3">Yang Kami Tawarkan:</h4>
                    <ul className="text-amber-700 space-y-2 text-sm">
                      <li>• Ruang aman tanpa judgment</li>
                      <li>• Tools praktis untuk self-care harian</li>
                      <li>• Inspirasi yang menyentuh hati</li>
                      <li>• Panduan untuk refleksi yang bermakna</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <Card className="border-green-200 bg-gradient-to-r from-green-50 to-amber-50 backdrop-blur-sm text-center">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">Mulai Perjalananmu Hari Ini</h3>
              <p className="text-amber-700 mb-6 max-w-2xl mx-auto">
                Tidak ada waktu yang terlalu dini atau terlalu terlambat untuk mulai merawat diri. Sanctuary Bloom siap
                menemanimu dalam setiap langkah perjalanan pertumbuhan batinmu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  <Link href="/quotes-reflection">
                    <Heart className="mr-2 h-5 w-5" />
                    Mulai Refleksi
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-amber-600 text-amber-700 hover:bg-amber-50 bg-transparent"
                >
                  <Link href="/meditation">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Lihat Meditasi
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
