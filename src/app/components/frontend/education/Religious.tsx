import Image from "next/image"

export default function Religious() {
    return (
        <>
            <section className="flex mt-12">
                <div className="w-[70%]">
                    <h1 className="font-bold text-[32px]">
                        Hikmah Gunung Meletus
                    </h1>
                    <p className="text-justify mt-3" id="">Dalam beberapa keyakinan dan agama, bencana alam seperti letusan gunung berapi dapat diinterpretasikan sebagai bagian dari hukuman atau azab dari Tuhan. Berikut adalah beberapa cara di mana bencana gunung berapi dapat dianggap memiliki hikmah dari sudut pandang agama:</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Pengingat akan Kekuasaan Tuhan</span><br />Bencana alam, termasuk letusan gunung berapi, dianggap sebagai pengingat bagi umat manusia akan kekuasaan dan kebesaran Tuhan. Hal ini dapat memicu refleksi spiritual dan kepatuhan kepada ajaran agama untuk menghindari dosa dan memperbaiki perilaku.</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Penguatan Iman dan Kesabaran</span><br />Bencana alam dapat dianggap sebagai ujian iman bagi umat manusia. Ketika menghadapi bencana seperti letusan gunung berapi, umat dapat mencari kekuatan dan kesabaran dalam iman mereka, serta menggunakan kesempatan ini untuk mendekatkan diri kepada Tuhan dan memperkuat ikatan spiritual mereka.</p>

                </div>
                <div className="w-[30%] flex justify-end">
                    <div className="w-[80%]">
                        <Image src="/images/vertical-mountain.jpg" alt="Vertical Mountain" width={1000} height={1000} priority className="" />
                        <p className="text-right text-[13px]">Gambar: Gunung Entah</p>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-justify mt-3" id=""><span className="font-bold">Pembelajaran dan Peringatan</span><br />Bencana alam seringkali dianggap sebagai pembelajaran bagi umat manusia untuk lebih memperhatikan lingkungan, memperbaiki perilaku, dan mengambil tindakan untuk melindungi planet ini. Letusan gunung berapi dapat dijadikan peringatan bagi umat manusia untuk lebih hormat dan berhati-hati terhadap kekuatan alam.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Pengingat akan Akhirat</span><br />Dalam beberapa keyakinan agama, bencana alam dipandang sebagai pengingat akan akhirat dan hari kiamat. Letusan gunung berapi bisa dianggap sebagai tanda-tanda akhir zaman yang disebutkan dalam ajaran agama.</p>
                <p className="text-justify mt-3" id="benefit">Penting untuk dicatat bahwa pandangan tentang bencana alam dan hikmah di baliknya dapat bervariasi secara signifikan antara berbagai tradisi agama dan keyakinan individual. Namun, dalam banyak kasus, pengalaman bencana alam dapat menginspirasi pertimbangan spiritual, refleksi, dan tindakan yang lebih baik dalam kehidupan manusia.</p>
            </section>
        </>
    )
}