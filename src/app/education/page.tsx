"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "../components/frontend/Footer"
import VolcanoProcess from "../components/frontend/education/VolcanoProcess"
import Religious from "../components/frontend/education/Religious"
import Benefit from "../components/frontend/education/Benefit"
import Damage from "../components/frontend/education/Damage"
import Sidebar from "../components/frontend/education/Sidebar"

export default function EducationPage() {
  return (
    <>
      <nav className="flex h-[78px] items-center px-[5.4%] justify-between bg-white z-10 sticky top-0">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={178} height={63} priority />
        </Link>
        <div className="flex items-center w-[55%] justify-between">
          <Link href="/" className="font-semibold text-[13px] text-[#141414]">
            Beranda
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-[#141414]">
            Tentang Kami
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-[#141414]">
            Edukasi
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-[#141414]">
            Artikel
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-[#141414]">
            Penyelamatan Diri
          </Link>
          <select name="" id="" className="bg-transparent font-semibold text-[13px] text-[#141414] -mt-1">
            <option value="" className="font-semibold text-[13px] text-[#141414]">Bahasa Indonesia</option>
            <option value="" className="font-semibold text-[13px] text-[#141414]">English(UK)</option>
            <option value="" className="font-semibold text-[13px] text-[#141414]">简体中文</option>
          </select>
        </div>
        <div className="flex items-center">
          <Link href="/" className="font-semibold text-[13px] text-[#141414]">Login</Link>
          <Link href="/">
            <button className="bg-[#FB6D48] hover:bg-[#d45839] text-white px-5 py-2 font-semibold text-[13px] ml-3 rounded-md">
              Register
            </button>
          </Link>
        </div>
      </nav>
      <div className="flex px-[5.4%] pt-5">
        <Sidebar/>
        <div className="w-[100%]">
          <VolcanoProcess />
          <Religious />
          <Benefit />
          <Damage />
        </div>
      </div>
      <Footer />
    </>
  )
}
