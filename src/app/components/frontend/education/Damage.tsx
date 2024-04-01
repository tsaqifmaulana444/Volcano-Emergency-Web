import Image from "next/image"

export default function Benefit() {
    return (
        <>
            <section className="flex mt-12">
                <div className="w-[70%]">
                    <h1 className="font-bold text-[32px]">
                        Kerugian Gunung Meletus
                    </h1>
                    <p className="text-justify mt-3" id="">Meskipun ada manfaat jangka panjang dari letusan gunung berapi, dampak kerugiannya juga bisa sangat serius. Berikut adalah beberapa dampak kerugian yang bisa timbul:</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Kerusakan Struktural dan Infrastruktur</span><br />Letusan gunung berapi dapat menyebabkan kerusakan struktural pada bangunan dan infrastruktur di sekitarnya, termasuk rumah, jalan, jembatan, dan fasilitas lainnya. Material vulkanik yang dilepaskan juga dapat menyebabkan blokade sungai, menyebabkan banjir, dan menghancurkan area pemukiman.</p>
                    <p className="text-justify mt-3" id="">Pembentukan Tanah Baru<span className="font-bold">Kehilangan Kehidupan</span><br />Letusan gunung berapi dapat menyebabkan kehilangan nyawa manusia dan hewan. Lava, awan panas, dan aliran piroklastik dapat memusnahkan area yang terkena dampak, sementara gas beracun seperti belerang dioksida dapat meracuni udara dan menyebabkan kerugian bagi makhluk hidup.</p>

                </div>
                <div className="w-[30%] flex justify-end">
                    <div className="w-[80%]">
                        <Image src="/images/vertical-mountain.jpg" alt="Vertical Mountain" width={1000} height={1000} priority className="" />
                        <p className="text-right text-[13px]">Gambar: Gunung Entah</p>
                    </div>
                </div>
            </section>
            <section className="mb-12">
                <p className="text-justify mt-3" id=""><span className="font-bold">Kerusakan Lingkungan</span><br />Letusan gunung berapi dapat merusak lingkungan alami, termasuk hutan, lahan pertanian, dan habitat satwa liar. Material vulkanik yang dilepaskan juga dapat mencemari air dan tanah, meracuni dan merusak ekosistem air tawar dan laut.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Gangguan Ekonomi</span><br />Letusan gunung berapi dapat menyebabkan gangguan ekonomi yang serius, terutama bagi masyarakat yang mengandalkan sektor pertanian dan pariwisata. Kerusakan infrastruktur, penurunan produksi pertanian, dan hilangnya pendapatan pariwisata dapat menyebabkan kerugian ekonomi yang signifikan.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Gangguan Sosial dan Psikologis</span><br />Letusan gunung berapi dapat menyebabkan gangguan sosial dan psikologis bagi masyarakat yang terkena dampak. Kehilangan rumah, harta benda, dan mata pencaharian dapat menyebabkan stres, kecemasan, dan trauma psikologis.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Dampak Jangka Panjang</span><br />Dampak jangka panjang letusan gunung berapi juga bisa berlangsung selama bertahun-tahun. Misalnya, hujan abu vulkanik dapat mengotori tanah dan air, mengganggu pertanian dan sumber daya air, serta menyebabkan masalah pernapasan bagi manusia dan hewan.</p>
                <p className="text-justify mt-3" id="">Dengan mempertimbangkan dampak kerugian yang serius ini, penting bagi pemerintah, ilmuwan, dan masyarakat untuk bekerja sama dalam memahami risiko letusan gunung berapi, mengembangkan sistem peringatan dini, dan merencanakan mitigasi bencana yang efektif untuk melindungi nyawa manusia dan lingkungan dari dampak yang merusak.</p>
            </section>
        </>
    )
}