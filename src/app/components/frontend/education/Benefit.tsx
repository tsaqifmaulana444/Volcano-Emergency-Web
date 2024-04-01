import Image from "next/image"

export default function Benefit() {
    return (
        <>
            <section className="flex mt-12">
                <div className="w-[70%]">
                    <h1 className="font-bold text-[32px]">
                        Manfaaat Gunung Meletus
                    </h1>
                    <p className="text-justify mt-3" id="">Meskipun letusan gunung berapi dapat menyebabkan kerusakan yang serius, ada beberapa manfaat yang bisa diperoleh dari proses tersebut bagi lingkungan, terutama dalam jangka panjang. Berikut adalah beberapa manfaatnya:</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Penyuburan Tanah</span><br />Material vulkanik yang dilepaskan selama letusan gunung berapi kaya akan nutrisi dan mineral. Ketika material ini mengendap di sekitar gunung atau di daerah yang terkena dampak letusan, tanah menjadi lebih subur. Ini dapat mendukung pertumbuhan tanaman yang lebih baik dan meningkatkan produktivitas pertanian.</p>
                    <p className="text-justify mt-3" id="">Pembentukan Tanah Baru<span className="font-bold">Penguatan Iman dan Kesabaran</span><br />Letusan gunung berapi seringkali menyebabkan pembentukan tanah baru. Material vulkanik yang dilepaskan dapat memadat dan menjadi bahan dasar bagi pembentukan tanah baru yang kaya mineral. Ini berkontribusi pada pembentukan ekosistem yang beragam dan mendukung kehidupan flora dan fauna di wilayah tersebut.</p>

                </div>
                <div className="w-[30%] flex justify-end">
                    <div className="w-[80%]">
                        <Image src="/images/vertical-mountain.jpg" alt="Vertical Mountain" width={1000} height={1000} priority className="" />
                        <p className="text-right text-[13px]">Gambar: Gunung Entah</p>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-justify mt-3" id=""><span className="font-bold">Penyediaan Habitat Baru</span><br />Formasi geologis baru, seperti kawah baru atau kerucut vulkanik, dapat menjadi habitat baru bagi berbagai spesies tanaman dan hewan. Wilayah yang terkena dampak letusan gunung berapi sering kali mengalami perkembangan ekologis yang menarik karena munculnya lingkungan baru yang menyediakan kondisi yang unik bagi kehidupan.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Siklus Nutrien</span><br />Letusan gunung berapi dapat memperkenalkan nutrien dan mineral penting ke dalam lingkungan yang sebelumnya tidak tersedia. Proses ini dapat meningkatkan siklus nutrien dalam ekosistem, yang pada gilirannya mendukung pertumbuhan tanaman dan produktivitas biologis di wilayah tersebut.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Pemulihan Ekosistem</span><br />Meskipun awalnya letusan gunung berapi dapat menyebabkan kerusakan ekosistem, dalam jangka panjang, proses ini dapat memicu proses pemulihan yang alami. Misalnya, tanaman yang tumbuh kembali di wilayah yang terkena dampak letusan dapat membantu menstabilkan tanah dan memulihkan keanekaragaman hayati.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Pembentukan Sumber Daya Alam</span><br />Mineral yang ditemukan dalam material vulkanik dapat memiliki nilai ekonomis dan digunakan dalam industri, seperti pertanian, konstruksi, dan energi. Dengan demikian, letusan gunung berapi dapat menyediakan sumber daya alam yang berharga bagi manusia.</p>
            </section>
        </>
    )
}