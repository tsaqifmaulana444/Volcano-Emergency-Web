"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "./components/frontend/Footer"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import { CSSProperties } from 'react'

interface CustomCSSProperties {
  '--swiper-navigation-color'?: string
}

type CustomStyle = CSSProperties & CustomCSSProperties

export default function HomePage() {
  return (
    <>
      <nav className="flex h-[78px] items-center px-[5.4%] justify-between bg-transparent absolute top-0 left-0 right-0 z-10">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={178} height={63} priority />
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
            Artikel
          </Link>
          <Link href="/" className="font-semibold text-[13px] text-white">
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
      <section className="w-full h-[100vh] relative">
        <Image src="/images/sinabung.jpg" width={1000} height={1000} alt="sinabung" className="h-[100vh] w-full" />
        <div className="absolute inset-0 bg-[#14141472] flex items-center justify-center">
          <div className="w-[45%] text-center">
            <h1 className="font-bold text-[40px] text-white">Ketahui Risiko, Lindungi Diri</h1>
            <p className="text-[20px] text-white">Selamat Datang di Website Volcano Education Centre, Panduan Penyelamatan Diri dari Gunung Berapi, Temukan Cara Menghadapi Bahaya dengan Sigap.</p>
            <button className="bg-[#FB6D48] hover:bg-[#d45839] text-white px-5 py-2 font-semibold text-[19px] rounded-md mt-7">
              Panduan Evakuasi/Penyelamatan
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F7]">
        <div className="w-[48%] text-center mx-auto pt-[55px]">
          <p className="text-[17px] text-[#FB6D48] font-semibold">Tentang Kami</p>
          <h1 className="font-bold text-[35px] text-[#141414]">Kami Hadir Untuk Keselamatan Anda.</h1>
          <p className="text-[18px] text-[#141414]">Kami bertujuan untuk menyediakan informasi yang tepat waktu dan terpercaya tentang langkah-langkah keselamatan dalam situasi darurat gunung berapi, mengingat banyaknya bencana gunung meletus yang terjadi di Indonesia.</p>
        </div>
        <div className="flex justify-between px-[5.4%] py-[70px]">
          <div className="w-[380px] relative rounded-2xl">
            <Image src="/images/jokowi.png" alt="jokowi" width={600} height={600} className="w-full rounded-2xl" />
            <div className="bg-[#14141472] absolute bottom-0 rounded-b-2xl h-[90px]">
              <p className="font-semibold text-[13px] text-white p-4">
                CNBC NEWS: Presiden Jokowi Dodo menyatakan dukungan dalam pengembangan web VEC Indonesia
              </p>
            </div>
          </div>
          <div className="w-[380px] relative rounded-2xl">
            <Image src="/images/jokowi.png" alt="jokowi" width={600} height={600} className="w-full rounded-2xl" />
            <div className="bg-[#14141472] absolute bottom-0 rounded-b-2xl h-[90px]">
              <p className="font-semibold text-[13px] text-white p-4">
                CNBC NEWS: Presiden Jokowi Dodo menyatakan dukungan dalam pengembangan web VEC Indonesia
              </p>
            </div>
          </div>
          <div className="w-[380px] relative rounded-2xl">
            <Image src="/images/jokowi.png" alt="jokowi" width={600} height={600} className="w-full rounded-2xl" />
            <div className="bg-[#14141472] absolute bottom-0 rounded-b-2xl h-[90px]">
              <p className="font-semibold text-[13px] text-white p-4">
                CNBC NEWS: Presiden Jokowi Dodo menyatakan dukungan dalam pengembangan web VEC Indonesia
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="w-[57%] text-center mx-auto pt-[55px]">
          <p className="text-[17px] text-[#FB6D48] font-semibold">Sponsor</p>
          <h1 className="font-bold text-[35px] text-[#141414]">Terimakasih Diucapkan Untuk Para Sponsor Yang Selalu Memberikan Dukungan.</h1>
        </div>
        <div className="py-10 pb-[55px]">
          <Swiper
            spaceBetween={15}
            style={{
              '--swiper-navigation-color': '#141414',
            } as CustomStyle}
            slidesPerView={1}
            navigation={false}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className=""
          >
            <SwiperSlide>
              <div className="flex  justify-evenly">
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.setneg.go.id/">
                    <Image src="/images/sponsor/sekneg.png" alt="Sekretariat Negara" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.bmkg.go.id/">
                    <Image src="/images/sponsor/bmkg.png" alt="BMKG" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://basarnas.go.id/">
                    <Image src="/images/sponsor/sar.png" alt="Tim SAR" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.baidu.com/">
                    <Image src="/images/sponsor/baidu.png" alt="Baidu" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.alibabacloud.com/">
                    <Image src="/images/sponsor/alibaba.png" alt="Alibaba" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-evenly">
                <div className="w-[160px] flex items-center">
                  <Link href="http://www.yangming.com/">
                    <Image src="/images/sponsor/yangming.png" alt="Yang Ming" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://en.shu.edu.cn/">
                    <Image src="/images/sponsor/su.png" alt="Shangai University" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://english.bnu.edu.cn/">
                    <Image src="/images/sponsor/bnu.png" alt="Beijing Normal University" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.indofood.com/">
                    <Image src="/images/sponsor/indofood.png" alt="Indofood" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.cnpc.com.cn/cnpc/index.shtml">
                    <Image src="/images/sponsor/cnpc.jpeg" alt="CNPC" width={600} height={600} className="w-full rounded-2xl" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <Footer />
    </>
  )
}
