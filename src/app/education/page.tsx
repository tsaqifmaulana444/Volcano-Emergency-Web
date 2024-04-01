"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "../components/frontend/Footer"
import VolcanoProcess from "../components/frontend/education/VolcanoProcess"
import Religious from "../components/frontend/education/Religious"
import Benefit from "../components/frontend/education/Benefit"
import Damage from "../components/frontend/education/Damage"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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
        <aside className="w-[20%] h-[80vh] sticky top-[14vh] left-0 pt-2">
          <div className="mb-3 flex">
            <Link href="/education#" className="text-[12px] font-semibold">
              Proses Gunung Meletus
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[12px] ml-2"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
          </div>
          <div className="mb-3">
            <Link href="/education#" className="text-[12px] font-semibold">Hikmah Gunung Meletus</Link>
          </div>
          <div className="mb-3">
            <Link href="/education#" className="text-[12px] font-semibold">Keuntungan Gunung Meletus</Link>
          </div>
          <div className="mb-3">
            <Link href="/education#" className="text-[12px] font-semibold">Kerugian Gunung Meletus</Link>
          </div>
        </aside>
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
