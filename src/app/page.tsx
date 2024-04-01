"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "./components/frontend/Footer"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import { type CSSProperties } from 'react'

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
          <Link href="/education" className="font-semibold text-[13px] text-white">
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
      <section className="bg-[#FFFFFF]">
        <div className="w-[58%] text-center mx-auto pt-[55px]">
          <p className="text-[17px] text-[#FB6D48] font-semibold">Sambutan</p>
          <h1 className="font-bold text-[35px] text-[#141414]">Sambutan Dari Bapak Maulana Salim S.T, M.BA, Selaku Direktur Utama pada PT. VEC Indonesia</h1>
        </div>
        <div className="flex px-[5.4%] justify-between mt-12 pb-10">
          <div className="w-[50%]">
            <p className="text-justify text-[16px]">
              Selamat datang di PT. VEC Indonesia, tempat di mana keselamatan dan pemahaman tentang bencana gunung berapi menjadi prioritas utama kami.
              <br /><br />
              Sebagai direktur PT. VEC Indonesia, saya dengan bangga menyambut Anda dalam perjalanan edukatif ini. Melalui platform kami, kami berkomitmen untuk menyebarkan pengetahuan yang mendalam tentang bencana alam ini, serta memberikan panduan praktis untuk menjaga keselamatan diri dan orang-orang terdekat.
              <br /><br />
              Bencana gunung berapi merupakan ancaman yang serius bagi masyarakat di berbagai belahan dunia. Namun, dengan pemahaman yang tepat dan persiapan yang baik, kita dapat mengurangi dampak negatifnya dan melindungi diri kita serta orang-orang di sekitar kita.
              <br /><br />
              Kami percaya bahwa pendidikan adalah kunci untuk menghadapi tantangan ini dengan bijak. Oleh karena itu, kami menyediakan beragam sumber daya, kursus online, dan acara pelatihan untuk membantu Anda memahami geologi gunung berapi, mengenali tanda-tanda awal erupsi, dan mengetahui langkah-langkah yang harus diambil dalam situasi darurat.
              <br /><br />
              Mari bersama-sama membangun komunitas yang tangguh dan siap menghadapi tantangan alam. Terima kasih telah bergabung dengan kami di PT. VEC Indonesia. Bersama, kita bisa menjadikan dunia ini tempat yang lebih aman dan berdaya. Selamat belajar!
            </p>
          </div>
          <div className="flex w-[38%] items-center">
            <div className="w-full">
              <Image src="/images/directur.jpeg" alt="Maulana Salim" width={600} height={600} className="w-full rounded-2xl" />
              <p className="text-right text-[13px]">Gambar: Maulana Salim</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F7]">
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
                    <Image src="/images/sponsor/sekneg.png" alt="Sekretariat Negara" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.bmkg.go.id/">
                    <Image src="/images/sponsor/bmkg.png" alt="BMKG" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://basarnas.go.id/">
                    <Image src="/images/sponsor/sar.png" alt="Tim SAR" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.baidu.com/">
                    <Image src="/images/sponsor/baidu.png" alt="Baidu" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.alibabacloud.com/">
                    <Image src="/images/sponsor/alibaba.png" alt="Alibaba" width={600} height={600} className="w-full" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-evenly">
                <div className="w-[160px] flex items-center">
                  <Link href="http://www.yangming.com/">
                    <Image src="/images/sponsor/yangming.png" alt="Yang Ming" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://en.shu.edu.cn/">
                    <Image src="/images/sponsor/su.png" alt="Shangai University" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://english.bnu.edu.cn/">
                    <Image src="/images/sponsor/bnu.png" alt="Beijing Normal University" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.indofood.com/">
                    <Image src="/images/sponsor/indofood.png" alt="Indofood" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[160px] flex items-center">
                  <Link href="https://www.cnpc.com.cn/cnpc/index.shtml">
                    <Image src="/images/sponsor/cnpc.png" alt="CNPC" width={600} height={600} className="w-full" />
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
