"use client"

import Image from "next/image"
import Link from "next/link"
import Footer from "./components/frontend/Footer"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import { type CSSProperties } from 'react'
import { useState, useEffect } from 'react'

interface CustomCSSProperties {
  '--swiper-navigation-color'?: string
}

type CustomStyle = CSSProperties & CustomCSSProperties

export default function HomePage() {
  const [section1Scrolled, setSection1Scrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const landingNavbar = document.querySelector('.landing-navbar')
      if (landingNavbar) {
        const navbarBottom = landingNavbar.getBoundingClientRect().bottom
        const section1 = document.getElementById('about-us')
        if (section1) {
          const section1Top = section1.getBoundingClientRect().top
          if (section1Top <= navbarBottom) {
            setSection1Scrolled(true)
          } else {
            setSection1Scrolled(false)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <nav className={`landing-navbar transform origin-center transition-all duration-400 ease-in-out flex h-[78px] items-center px-[5.4%] justify-between sticky top-0 left-0 right-0 z-10 ${section1Scrolled ? "bg-white" : "bg-transparent"}`}>
        <div className="ml-1 sm:ml-0 w-[150px] sm:w-[260px]">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={178} height={63} priority />
          </Link>
        </div>
        <div className="hidden sm:flex items-center w-[55%] justify-between">
          <Link href="/" className={`font-semibold text-[13px] ${section1Scrolled ? 'text-[#141414]' : 'text-white'}`}>
            Beranda
          </Link>
          <Link href="/#about-us" className={`font-semibold text-[13px] ${section1Scrolled ? 'text-[#141414]' : 'text-white'}`}>
            Tentang Kami
          </Link>
          <Link href="/education" className={`font-semibold text-[13px] ${section1Scrolled ? 'text-[#141414]' : 'text-white'}`}>
            Edukasi
          </Link>
          <Link href="https://magma.vsi.esdm.go.id/" className={`font-semibold text-[13px] ${section1Scrolled ? 'text-[#141414]' : 'text-white'}`}>
            Peta Aktif
          </Link>
          <Link href="/evacuation" className={`font-semibold text-[13px] ${section1Scrolled ? 'text-[#141414]' : 'text-white'}`}>
            Penyelamatan Diri
          </Link>
          <select name="" id="" className={`bg-transparent font-semibold text-[13px] -mt-1 ${section1Scrolled ? 'text-[#141414]' : 'text-white'}`}>
            <option value="" className="font-semibold text-[13px] text-[#141414]">Bahasa Indonesia</option>
            <option value="" className="font-semibold text-[13px] text-[#141414]">English(UK)</option>
            <option value="" className="font-semibold text-[13px] text-[#141414]">简体中文</option>
          </select>
        </div>
        <div className="flex items-center">
          <Link href="/" className={`font-semibold text-[13px] ${section1Scrolled ? 'text-[#141414]' : 'text-white'}`}>Login</Link>
          <Link href="/">
            <button className="bg-[#FB6D48] hover:bg-[#d45839] text-white px-5 py-2 font-semibold text-[13px] ml-3 rounded-md">
              Register
            </button>
          </Link>
        </div>
      </nav>
      <section className="w-full h-[100vh] relative -mt-[78px]">
        <Image src="/images/sinabung.jpg" width={1000} height={1000} alt="sinabung" className="h-[100vh] w-full" />
        <div className="absolute inset-0 bg-[#14141472] flex items-center justify-center">
          <div className="sm:w-[45%] w-[75%] text-center">
            <h1 className="font-bold sm:text-[40px] text-[30px] text-white">Ketahui Risiko, Lindungi Diri</h1>
            <p className="sm:text-[20px] text-[16px] text-white">Selamat Datang di Website Volcano Education Centre, Panduan Penyelamatan Diri dari Gunung Berapi, Temukan Cara Menghadapi Bahaya dengan Sigap.</p>
            <Link href="/evacuation">
              <button className="bg-[#FB6D48] hover:bg-[#d45839] text-white px-5 py-2 font-semibold sm:text-[19px] text-[15px] rounded-md sm:mt-7 mt-9 flex mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-[20px] mr-3 sm:mt-1 mt-0" fill="#ffffff" viewBox="0 0 512 512"><path d="M256 32c14.2 0 27.3 7.5 34.5 19.8l216 368c7.3 12.4 7.3 27.7 .2 40.1S486.3 480 472 480H40c-14.3 0-27.6-7.7-34.7-20.1s-7-27.8 .2-40.1l216-368C228.7 39.5 241.8 32 256 32zm0 128c-13.3 0-24 10.7-24 24V296c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24zm32 224a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" /></svg> Panduan Evakuasi/Penyelamatan
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F7]" id="about-us">
        <div className="w-[75%] sm:w-[48%] text-center mx-auto pt-[55px]">
          <p className="text-[17px] text-[#FB6D48] font-semibold">Tentang Kami</p>
          <h1 className="font-bold sm:text-[35px] text-[30px] text-[#141414]">Kami Hadir Untuk Keselamatan Anda.</h1>
          <p className="sm:text-[18px] text-[15px] text-[#141414]">Kami bertujuan untuk menyediakan informasi yang tepat waktu dan terpercaya tentang langkah-langkah keselamatan dalam situasi darurat gunung berapi, mengingat banyaknya bencana gunung meletus yang terjadi di Indonesia.</p>
        </div>
        <div className="sm:flex block justify-between px-[5.4%] sm:py-[70px] py-[50px]">
          <div className="sm:w-[380px] w-full mt-4 sm:mt-0 relative rounded-2xl">
            <Image src="/images/jokowi.png" alt="jokowi" width={600} height={600} className="w-full rounded-2xl" />
            <div className="bg-[#14141472] absolute bottom-0 rounded-b-2xl h-[90px]">
              <p className="font-semibold text-[13px] text-white p-4">
                CNBC NEWS: Presiden Jokowi Dodo menyatakan dukungan dalam pengembangan web VEC Indonesia
              </p>
            </div>
          </div>
          <div className="sm:w-[380px] w-full mt-4 sm:mt-0 relative rounded-2xl">
            <Image src="/images/jokowi.png" alt="jokowi" width={600} height={600} className="w-full rounded-2xl" />
            <div className="bg-[#14141472] absolute bottom-0 rounded-b-2xl h-[90px]">
              <p className="font-semibold text-[13px] text-white p-4">
                CNBC NEWS: Presiden Jokowi Dodo menyatakan dukungan dalam pengembangan web VEC Indonesia
              </p>
            </div>
          </div>
          <div className="sm:w-[380px] w-full mt-4 sm:mt-0 relative rounded-2xl">
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
        <div className="w-[100%] sm:px-0 px-[5.4%] sm:w-[58%] text-center mx-auto pt-[55px]">
          <p className="text-[17px] text-[#FB6D48] font-semibold">Sambutan</p>
          <h1 className="font-bold sm:text-[35px] text-[30px] text-[#141414]">Sambutan Dari Bapak Maulana Salim S.T, M.BA, Selaku Direktur Utama pada PT. VEC Indonesia</h1>
        </div>
        <div className="sm:flex block px-[5.4%] justify-between sm:mt-12 mt-6 pb-10">
          <div className="sm:w-[50%] w-full">
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
          <div className="flex sm:w-[38%] w-full items-center sm:mt-0 mt-6">
            <div className="w-full">
              <Image src="/images/directur.jpeg" alt="Maulana Salim" width={600} height={600} className="w-full rounded-2xl" />
              <p className="text-right text-[13px]">Gambar: Maulana Salim</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#F8F6F7]">
        <div className="w-full sm:px-0 px-[5.4%] sm:w-[57%] text-center mx-auto pt-[55px]">
          <p className="text-[17px] text-[#FB6D48] font-semibold">Sponsor</p>
          <h1 className="font-bold sm:text-[35px] text-[30px] text-[#141414]">Terimakasih Diucapkan Untuk Para Sponsor Yang Selalu Memberikan Dukungan.</h1>
        </div>
        <div className="py-10 pb-[55px] sm:block hidden">
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
        <div className="py-10 pb-[55px] block sm:hidden">
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
              <div className="flex justify-evenly">
                <div className="w-[70px] flex items-center">
                  <Link href="https://www.setneg.go.id/">
                    <Image src="/images/sponsor/sekneg.png" alt="Sekretariat Negara" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[70px] flex items-center">
                  <Link href="https://www.bmkg.go.id/">
                    <Image src="/images/sponsor/bmkg.png" alt="BMKG" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[70px] flex items-center">
                  <Link href="https://basarnas.go.id/">
                    <Image src="/images/sponsor/sar.png" alt="Tim SAR" width={600} height={600} className="w-full" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-evenly">
                <div className="w-[70px] flex items-center">
                  <Link href="https://www.baidu.com/">
                    <Image src="/images/sponsor/baidu.png" alt="Baidu" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[70px] flex items-center">
                  <Link href="https://www.alibabacloud.com/">
                    <Image src="/images/sponsor/alibaba.png" alt="Alibaba" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[70px] flex items-center">
                  <Link href="http://www.yangming.com/">
                    <Image src="/images/sponsor/yangming.png" alt="Yang Ming" width={600} height={600} className="w-full" />
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-evenly">
                <div className="w-[70px] flex items-center">
                  <Link href="https://en.shu.edu.cn/">
                    <Image src="/images/sponsor/su.png" alt="Shangai University" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[70px] flex items-center">
                  <Link href="https://english.bnu.edu.cn/">
                    <Image src="/images/sponsor/bnu.png" alt="Beijing Normal University" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[70px] flex items-center">
                  <Link href="https://www.indofood.com/">
                    <Image src="/images/sponsor/indofood.png" alt="Indofood" width={600} height={600} className="w-full" />
                  </Link>
                </div>
                <div className="w-[70px] flex items-center">
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
