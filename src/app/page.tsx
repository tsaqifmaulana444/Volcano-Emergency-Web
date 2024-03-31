import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <>
      <nav className="flex h-[78px] items-center px-[5.4%] justify-between bg-transparent absolute top-0 left-0 right-0 z-10">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={178} height={63} priority/>
        </Link>
        <div className="flex items-center w-[55%] justify-between">
          <Link href="/" className="font-semibold text-[13px] text-white">
            Beranda
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-white">
            Tentang Kami
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-white">
            Edukasi
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-white">
            Donasi Korban
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-white">
            Penyelamatan Diri
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-white">
            Bahasa Indonesia
          </Link>
        </div>
        <div className="flex items-center">
          <Link href="/" className="font-semibold text-[13px] text-white">Login</Link>
          <Link href="/">
            <button className="bg-[#FB6D48] hover:bg-[#d45839] text-white px-5 py-2 font-semibold text-[13px] ml-3 rounded-md">
              Register
            </button>
          </Link>
        </div>
      </nav>
      <div className="relative">
        <section className="w-full h-[100vh] relative">
          <img src="/images/sinabung.jpg" alt="sinabung" className="h-[100vh] w-full"/>
          <div className="absolute inset-0 bg-[#14141472] flex items-center justify-center">
            <div className="w-[45%] text-center">
              <h1 className="font-bold text-[40px] text-white">Ketahui Risiko, Lindungi Diri</h1>
              <p className="text-[20px] text-white">Selamat Datang di Panduan Penyelamatan Diri dari Gunung Berapi, Temukan Cara Menghadapi Bahaya dengan Sigap.</p>
              <button className="bg-[#FB6D48] hover:bg-[#d45839] text-white px-5 py-2 font-semibold text-[19px] rounded-md mt-7">
              Panduan Evakuasi/Penyelamatan
            </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
