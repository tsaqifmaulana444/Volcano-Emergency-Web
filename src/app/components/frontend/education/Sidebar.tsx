"use client"

import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
    const [accordionOneOpen, setAccordionOneOpen] = useState(false)
    return (
        <>
            <aside className="w-[20%] h-[80vh] sticky top-[14vh] left-0 pt-2">
                <button className="mb-3 flex" onClick={() => setAccordionOneOpen(!accordionOneOpen)}>
                    <p className="text-[12px] font-semibold">
                        Proses Gunung Meletus
                    </p>
                    {accordionOneOpen ?
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[12px] ml-2 mt-[3px] rotate-180"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-[12px] ml-2 mt-[3px]"><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" /></svg>
                    }

                </button>
                <div className={`transform origin-center transition-all duration-300 ease-in-out ${accordionOneOpen ? 'opacity-100' : 'opacity-0'}`}>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/education#process1" className="text-[12px] font-semibold">Aktivitas Seismik</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/education#process2" className="text-[12px] font-semibold">Aktivitas Vulkanik</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/education#process3" className="text-[12px] font-semibold">Peningkatan Suhu</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/education#process4" className="text-[12px] font-semibold">Ledakan</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/education#process5" className="text-[12px] font-semibold">Pelepasan Material Vulkanik</Link>
                    </div>
                    <div className={`mb-3 pl-4 overflow-hidden ${accordionOneOpen ? 'block': 'hidden'}`}>
                        <Link href="/education#process6" className="text-[12px] font-semibold">Pasca Letusan</Link>
                    </div>
                </div>
                <div className="mb-3">
                    <Link href="/education#wisdom" className="text-[12px] font-semibold">Hikmah Gunung Meletus</Link>
                </div>
                <div className="mb-3">
                    <Link href="/education#benefit" className="text-[12px] font-semibold">Keuntungan Gunung Meletus</Link>
                </div>
                <div className="mb-3">
                    <Link href="/education#damage" className="text-[12px] font-semibold">Kerugian Gunung Meletus</Link>
                </div>
            </aside>

        </>
    )
}
