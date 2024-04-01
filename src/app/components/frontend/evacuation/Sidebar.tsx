"use client"

import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [accordionOneOpen, setAccordionOneOpen] = useState(false)
    const [accordionTwoOpen, setAccordionTwoOpen] = useState(false)
    return (
        <>
            <aside className="w-[20%] h-[80vh] sticky top-[14vh] left-0 pt-2">
                <button className="mb-3 flex" onClick={() => setAccordionOneOpen(!accordionOneOpen)}>
                    <p className="text-[12px] font-semibold">
                        Apa Yang Harus Dilakukan
                    </p>
                    {accordionOneOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[12px] ml-2 mt-[3px] rotate-180"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[12px] ml-2 mt-[3px]"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    }

                </button>
                <div className={`transform origin-center transition-all duration-300 ease-in-out ${accordionOneOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#" className="text-[12px] font-semibold">Situasi Lingkungan</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#" className="text-[12px] font-semibold">Standar Evakuasi</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#" className="text-[12px] font-semibold">Pertolongan Pertama</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#" className="text-[12px] font-semibold">Rute Evakuasi</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#" className="text-[12px] font-semibold">Kapan Harus Kembali</Link>
                    </div>
                </div>
                <button className="mb-3 flex" onClick={() => setAccordionTwoOpen(!accordionTwoOpen)}>
                    <p className="text-[12px] font-semibold">
                        Apa Yang Jangan Dilakukan
                    </p>
                    {accordionTwoOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[12px] ml-2 mt-[3px] rotate-180"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[12px] ml-2 mt-[3px]"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    }

                </button>
                <div className={`transform origin-center transition-all duration-300 ease-in-out ${accordionTwoOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionTwoOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#dont1" className="text-[12px] font-semibold">Mengabaikan Peringatan</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionTwoOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#dont2" className="text-[12px] font-semibold">Mendekati Kawah Gunung</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionTwoOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#dont3" className="text-[12px] font-semibold">Menunda Evakuasi</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionTwoOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#dont4" className="text-[12px] font-semibold">Mengabaikan Persiapan Darurat</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionTwoOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#dont5" className="text-[12px] font-semibold">Menghiraukan Petunjuk Evakuasi</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionTwoOpen ? 'block': 'hidden'}`}>
                        <Link href="/evacuation#dont6" className="text-[12px] font-semibold">Kembali Terlalu Cepat</Link>
                    </div>
                </div>
                <div className="mb-3">
                    <Link href="/evacuation#status" className="text-[12px] font-semibold">Status Bencana</Link>
                </div>
                <div className="mb-3">
                    <Link href="/evacuation#contact" className="text-[12px] font-semibold">Kontak Darurat</Link>
                </div>
            </aside>

        </>
    )
}
