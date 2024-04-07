import Image from "next/image"

export default function Dont() {
    return (
        <>
            <section className="sm:flex block mt-12">
                <div className="sm:w-[70%] w-full">
                    <h1 className="font-bold sm:text-[32px] text-[28px]" id="dont1">
                        Hal Yang Jangan Dilakukan Saat Bencana Gunung Meletus
                    </h1>
                    <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="dont2"><span className="font-bold">Mengabaikan Peringatan</span><br />Jangan mengabaikan peringatan atau instruksi dari otoritas setempat. Jika diperintahkan untuk evakuasi, segera ikuti instruksi tersebut tanpa ragu.</p>
                    <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="dont3"><span className="font-bold">Mendekati Kawah Gunung</span><br />Jangan mendekati kawah atau daerah berbahaya lainnya yang berpotensi terkena dampak langsung dari letusan gunung berapi. Hal ini dapat mengakibatkan risiko luka atau bahkan kematian.</p>
                    <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="dont4"><span className="font-bold">Menunda Evakuasi</span><br />Jangan menunda evakuasi atau bertindak ragu-ragu ketika terjadi ancaman letusan gunung berapi. Setiap detik berharga dalam situasi darurat seperti ini, dan menunda evakuasi dapat meningkatkan risiko terhadap keselamatan.</p>
                </div>
                <div className="w-full sm:w-[30%] flex sm:justify-end justify-normal mt-4 sm:mt-0">
                    <div className="w-[80%]">
                        <Image src="/images/vertical-mountain.jpg" alt="Vertical Mountain" width={1000} height={1000} priority className="" />
                        <p className="text-left sm:text-right text-[13px]">Gambar: Gunung Entah</p>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="dont5"><span className="font-bold">Mengabaikan Persiapan Darurat</span><br />Jangan mengabaikan persiapan darurat seperti membawa perlengkapan penting seperti makanan, air, obat-obatan, dan pakaian hangat. Persiapan ini dapat membantu Anda bertahan selama proses evakuasi dan meminimalkan risiko terhadap keselamatan.</p>
                <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="dont6"><span className="font-bold">Menghiraukan Petunjuk Evakuasi</span><br />Jangan mengabaikan petunjuk evakuasi atau rute yang ditetapkan oleh otoritas setempat. Mengikuti rute evakuasi yang ditetapkan dapat membantu Anda menghindari daerah berbahaya dan mencapai tempat yang lebih aman dengan lebih cepat.</p>
                <p className="text-justify mt-3 sm:text-[16px] text-[13px]"><span className="font-bold">Kembali Terlalu Cepat</span><br />Jangan kembali ke daerah yang terkena dampak terlalu cepat setelah letusan gunung berapi berakhir. Pastikan untuk mematuhi instruksi dari otoritas setempat tentang kapan aman untuk kembali ke rumah atau daerah yang terkena dampak.</p>
            </section>
        </>
    )
}