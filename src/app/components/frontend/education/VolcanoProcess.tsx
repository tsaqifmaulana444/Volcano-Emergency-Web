import Image from "next/image"

export default function VolcanoProcess() {
    return (
        <>
            <section className="flex">
                <div className="w-[70%]">
                    <h1 className="font-bold text-[32px]">
                        Proses Gunung Meletus
                    </h1>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Aktivitas Seismik</span><br />Proses dimulai dengan aktivitas seismik, di mana ada gerakan dan tekanan yang terjadi di dalam kerak bumi. Ini bisa menjadi tanda awal dari aktivitas vulkanik yang sedang berkembang di dalam gunung.</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Aktivitas Vulkanik</span><br />Tekanan magma dari dalam bumi mulai naik ke permukaan melalui saluran vulkanik. Selama periode ini, ada peningkatan aktivitas vulkanik di gunung, seperti peningkatan frekuensi letusan kecil atau aktivitas pemicu lainnya seperti gempa bumi dangkal atau peningkatan emisi gas.</p>
                    <p className="text-justify mt-3" id=""><span className="font-bold">Peningkatan Suhu</span><br />Proses naiknya magma ke permukaan mengakibatkan peningkatan suhu di sekitar kawah gunung. Ini dapat diamati dalam bentuk peningkatan suhu di air dan tanah di sekitar gunung, serta penguapan yang meningkat.</p>
                </div>
                <div className="w-[30%] flex justify-end">
                    <div className="w-[80%]">
                        <Image src="/images/vertical-mountain.jpg" alt="Vertical Mountain" width={1000} height={1000} priority className="" />
                        <p className="text-right text-[13px]">Gambar: Gunung Entah</p>
                    </div>
                </div>
            </section>
            <section>
            <p className="text-justify mt-3" id=""><span className="font-bold">Ledakan</span><br />Pada titik tertentu, tekanan di dalam kawah gunung menjadi terlalu besar untuk ditahan, yang mengakibatkan ledakan besar. Ledakan ini dapat menyebabkan pembentukan kawah baru atau melepaskan penutup material yang menutupi lubang gunung.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Pelepasan Material Vulkanik</span><br />Setelah ledakan, material vulkanik seperti lava, abu, dan batu-batu vulkanik dilepaskan ke udara. Material ini bisa membentuk awan panas atau aliran piroklastik yang berbahaya bagi wilayah sekitarnya.</p>
                <p className="text-justify mt-3" id=""><span className="font-bold">Pasca Letusan</span><br />Setelah letusan, gunung vulkanik bisa memasuki fase pasca letusan, di mana aktivitas vulkanik mulai mereda. Namun, masih mungkin terjadi aktivitas lanjutan seperti aliran lava, peningkatan emisi gas, atau gempa bumi susulan. Selama periode ini, kawah baru atau kerucut baru juga bisa terbentuk.</p>
                <p className="text-justify mt-3" id="">Ini adalah gambaran umum dari proses gunung meletus dengan struktur yang diberikan, meskipun setiap letusan bisa memiliki karakteristik yang berbeda-beda tergantung pada jenis vulkanisme, jenis magma, dan kondisi geologis setempat.</p>
            </section>
        </>
    )
}