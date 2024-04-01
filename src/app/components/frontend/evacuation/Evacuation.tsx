import Image from "next/image"

export default function Evacuation() {
    return (
        <>
            <section className="flex">
                <div className="w-[70%]">
                    <h1 className="font-bold text-[32px]">
                        Cara Evakuasi Dari Bencana Gunung Meletus
                    </h1>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Cek Situasi Lingkungan</span><br />Langkah pertama dalam evakuasi bencana gunung berapi adalah memeriksa situasi lingkungan sekitar. Ini melibatkan pemantauan aktivitas vulkanik dan pengamatan kondisi geografis di sekitar gunung. Informasi dari otoritas terkait, seperti badan mitigasi bencana, juga harus dipantau untuk mengetahui perkembangan terbaru dari letusan gunung berapi.</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Standar Evakuasi</span><br />Ketika diperintahkan untuk evakuasi, penting untuk mengikuti standar evakuasi yang telah ditetapkan oleh pemerintah atau lembaga terkait. Ini termasuk mengikuti instruksi dari petugas penanggulangan bencana, mengikuti rute evakuasi yang ditetapkan, dan membawa perlengkapan darurat seperti makanan, air, obat-obatan, dan dokumen penting.</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Pertolongan Pertama Apabila Ada Korban</span><br />Jika terjadi korban selama proses evakuasi, pertolongan pertama harus segera diberikan. Ini termasuk memberikan perawatan medis pertama kepada korban luka, mencari bantuan medis jika diperlukan, dan memastikan bahwa korban menerima perhatian medis secepat mungkin.</p>
                </div>
                <div className="w-[30%] flex justify-end">
                    <div className="w-[80%]">
                        <Image src="/images/vertical-mountain.jpg" alt="Vertical Mountain" width={1000} height={1000} priority className="" />
                        <p className="text-right text-[13px]">Gambar: Gunung Entah</p>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-justify mt-3" id=""><span className="font-bold">Rute Evakuasi</span><br />Rute evakuasi harus direncanakan dan dipilih dengan hati-hati untuk memastikan keamanan evakuasi. Rute evakuasi harus menghindari daerah rawan seperti lereng gunung, sungai atau aliran lahar, dan area yang rentan terhadap awan panas atau gas beracun. Perlu juga diingat bahwa rute evakuasi dapat berubah tergantung pada perkembangan situasi, jadi penting untuk tetap waspada dan fleksibel.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Kapan Harus Kembali</span><br />Setelah evakuasi, masyarakat harus mematuhi instruksi dari otoritas setempat tentang kapan aman untuk kembali ke rumah atau daerah yang terkena dampak. Ini dapat melibatkan penilaian kondisi lingkungan, evaluasi risiko, dan pemantauan aktivitas vulkanik. Kembali ke daerah yang terkena dampak sebelum dinyatakan aman oleh otoritas setempat dapat membahayakan keselamatan.</p>
            </section>
        </>
    )
}