import Image from "next/image"

export default function Status() {
    return (
        <>
            <section className="sm:flex block mt-12" id="status">
                <div className="sm:w-[70%] w-full">
                    <h1 className="font-bold sm:text-[32px] text-[28px]">
                        Status Bencana Gunung Berapi
                    </h1>
                    <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="">Status gunung berapi adalah penilaian tentang tingkat aktivitas gunung berapi dan potensi ancaman yang ditimbulkannya terhadap masyarakat dan lingkungan sekitarnya. Berikut adalah beberapa macam status gunung berapi yang umum digunakan:</p>
                    <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id=""><span className="font-bold">Normal</span><br />Status normal menunjukkan bahwa tidak ada tanda-tanda aktivitas vulkanik yang tidak biasa yang terjadi di gunung berapi. Ini adalah kondisi di mana gunung berapi tidak menunjukkan ancaman yang signifikan terhadap masyarakat dan lingkungan sekitarnya.</p>
                    <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id=""><span className="font-bold">Waspada</span><br />Status waspada diberikan ketika ada indikasi awal aktivitas vulkanik yang meningkat, tetapi belum mencapai tingkat yang mengancam. Ini biasanya disertai dengan peningkatan gempa bumi vulkanik, deformasi tanah, atau aktivitas gas yang meningkat.</p>
                    <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id=""><span className="font-bold">Siaga</span><br />Status siaga menunjukkan bahwa terjadi peningkatan aktivitas vulkanik yang signifikan dan ada kemungkinan letusan dalam waktu dekat. Evakuasi mungkin diperlukan di sekitar gunung berapi yang terancam, dan wilayah yang terkena dampak langsung harus waspada terhadap potensi bahaya letusan.</p>
                </div>
                <div className="w-full sm:w-[30%] flex sm:justify-end justify-normal mt-4 sm:mt-0">
                    <div className="w-[80%]">
                        <Image src="/images/vertical-mountain.jpg" alt="Vertical Mountain" width={1000} height={1000} priority className="" />
                        <p className="text-left sm:text-right text-[13px]">Gambar: Gunung Entah</p>
                    </div>
                </div>
            </section>
            <section>
                <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id=""><span className="font-bold">Awas</span><br />Status awas diberikan ketika terjadi letusan gunung berapi atau ancaman letusan sangat besar dan sangat dekat. Evakuasi darurat diperlukan, dan wilayah yang terkena dampak harus segera dievakuasi untuk melindungi nyawa manusia.</p>
                <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="">Selain status ini, beberapa negara juga menggunakan sistem peringatan atau kode warna tambahan untuk memberikan informasi lebih detail tentang tingkat aktivitas vulkanik. Misalnya, kode warna seperti hijau, kuning, oranye, dan merah dapat digunakan untuk memberikan indikasi tingkat ancaman yang berbeda.</p>
                <p className="text-justify mt-3 sm:text-[16px] text-[13px]" id="">Penting untuk memantau peringatan dan status gunung berapi dari otoritas setempat atau lembaga penanggulangan bencana, dan untuk selalu mengikuti instruksi evakuasi yang diberikan dalam situasi darurat.</p>
            </section>
        </>
    )
}