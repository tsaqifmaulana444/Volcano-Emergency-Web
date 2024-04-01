import Image from "next/image"
import Link from "next/link"

export default function LandingNavbar() {
    return (
        <nav className="flex h-[78px] items-center px-[5.4%] justify-between bg-transparent sticky top-0 left-0 right-0 z-10">
            <Link href="/">
                <Image src="/images/logo.png" alt="logo" width={178} height={63} priority />
            </Link>
            <div className="flex items-center w-[55%] justify-between">
                <Link href="/" className="font-semibold text-[13px] text-white">
                    Beranda
                </Link>
                <Link href="/#about-us" className="font-semibold text-[13px] text-white">
                    Tentang Kami
                </Link>
                <Link href="/education" className="font-semibold text-[13px] text-white">
                    Edukasi
                </Link>
                <Link href="https://magma.vsi.esdm.go.id/" className="font-semibold text-[13px] text-white">
                    Peta Aktif
                </Link>
                <Link href="/evacuation" className="font-semibold text-[13px] text-white">
                    Penyelamatan Diri
                </Link>
                <select name="" id="" className="bg-transparent font-semibold text-[13px] text-white -mt-1">
                    <option value="" className="font-semibold text-[13px] text-[#141414]">Bahasa Indonesia</option>
                    <option value="" className="font-semibold text-[13px] text-[#141414]">English(UK)</option>
                    <option value="" className="font-semibold text-[13px] text-[#141414]">简体中文</option>
                </select>
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
    )
}
