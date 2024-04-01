import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faYoutube, faInstagram, faXTwitter, faLinkedin, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function Footer() {
    return (
        <footer className="bg-[#141414] px-[7%]">
            <div className="pt-8 sm:flex block items-center justify-between">
                <div>
                    <h2 className="font-semibold sm:text-[25px] text-[18px] text-white">Nomor Telpon Darurat: 112</h2>
                    <h2 className="font-semibold sm:text-[18px] text-[12px] text-white">Gmail: contact@vecindonesia.com</h2>
                </div>
                <div className="flex justify-between sm:w-[15%] w-[55%] mt-4 sm:mt-0">
                    <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff"}}  size="xl"/>
                    <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff"}}  size="xl"/>
                    <FontAwesomeIcon icon={faXTwitter} style={{color: "#ffffff"}}  size="xl"/>
                    <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff"}}  size="xl"/>
                    <FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff"}}  size="xl"/>
                </div>
            </div>
            <div className="sm:flex block justify-between mt-6">
                <div className="flex sm:justify-normal justify-between sm:w-[50%] w-full">
                    <div className="">
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Beranda</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Tentang Kami</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Berita</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Beranda</Link>
                        </div>
                    </div>
                    <div className="sm:ml-[35%] ml-0">
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Proses Gunung Meletus</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Sejarah Kejadian</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Keuntungan Gunung Meletus</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Kerugian Gunung Meletus</Link>
                        </div>
                    </div>
                </div>
                <div className="flex sm:justify-end justify-between sm:w-[50%] w-full mt-5 sm:mt-0">
                    <div className="sm:mr-[35%] ml-0">
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Apa Yang Harus Dilakukan</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Apa Yang Jangan Dilakukan</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Status Bencana</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Standar Keselamatan Bencana Alam</Link>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Contact Person</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Privacy & Policy</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">Sponsorship</Link>
                        </div>
                        <div className="">
                            <Link href="" className="font-regular text-[10.5px] sm:text-[12.5px] text-white">FAQ</Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="font-regular text-[10.5px] sm:text-[12px] text-white pb-7 mt-6 text-right">
                Copyright © VEC Indonesia. All Right Reserved | Developed By <Link href="https://github.com/tsaqifmaulana444/" target="_blank" className="underline">Maulana</Link>
                </p>
        </footer>
    )
}