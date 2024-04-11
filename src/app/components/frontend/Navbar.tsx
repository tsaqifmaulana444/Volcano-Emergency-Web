import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
    return (
        <>
            <nav className="flex h-[78px] items-center px-[5.4%] justify-between bg-white z-10 sticky top-0">
                <div className="ml-1 sm:ml-0 w-[150px] sm:w-[260px]">
                    <Link href="/">
                        <Image src="/images/logo.png" alt="logo" width={178} height={63} priority />
                    </Link>
                </div>
                <div className="md:flex hidden sm:hidden items-center w-[55%] justify-between">
                    <Link href="/" className="font-semibold text-[13px] text-[#141414]">
                        Beranda
                    </Link>
                    <Link href="/#about-us" className="font-semibold text-[13px] text-[#141414]">
                        Tentang Kami
                    </Link>
                    <Link href="/education" className="font-semibold text-[13px] text-[#141414]">
                        Edukasi
                    </Link>
                    <Link href="https://magma.vsi.esdm.go.id/" className="font-semibold text-[13px] text-[#141414]">
                        Peta Aktif
                    </Link>
                    <Link href="/evacuation" className="font-semibold text-[13px] text-[#141414]">
                        Penyelamatan Diri
                    </Link>
                    <select name="" id="" className="bg-transparent font-semibold text-[13px] text-[#141414] -mt-1">
                        <option value="" className="font-semibold text-[13px] text-[#141414]">Bahasa Indonesia</option>
                        <option value="" className="font-semibold text-[13px] text-[#141414]">English(UK)</option>
                        <option value="" className="font-semibold text-[13px] text-[#141414]">简体中文</option>
                    </select>
                </div>
                <div className="md:flex hidden sm:hidden items-center">
                    <Link href="/" className="font-semibold text-[13px] text-[#141414]">Login</Link>
                    <Link href="/">
                        <button className="bg-[#FB6D48] hover:bg-[#d45839] text-white px-5 py-2 font-semibold text-[13px] ml-3 rounded-md">
                            Register
                        </button>
                    </Link>
                </div>
                <div className="md:hidden sm:flex flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#141414" className="w-[25px]"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                    &nbsp;
                </div>
            </nav>
        </>
    )
}