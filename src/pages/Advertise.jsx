import { useEffect, useRef, useState } from 'react';

function Advertise() {
  // State untuk menentukan apakah elemen kiri harus "stuck"
  const [isStuck, setIsStuck] = useState(false);

  // useRef digunakan untuk mereferensikan elemen kiri dan kanan
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    // Fungsi untuk menangani event scroll
    const handleScroll = () => {
      if (leftColumnRef.current && rightColumnRef.current) {
        const leftRect = leftColumnRef.current.getBoundingClientRect();
        const rightRect = rightColumnRef.current.getBoundingClientRect();

        // Menentukan apakah bottom dari elemen kanan sejajar dengan elemen kiri
        if (rightRect.bottom <= leftRect.bottom) {
          setIsStuck(true);
        } else {
          setIsStuck(false);
        }
      }
    };

    // Menambahkan event listener untuk scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup function untuk menghapus event listener saat komponen unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Dependency array kosong berarti useEffect hanya dijalankan sekali setelah render pertama

  return (
    <div className="About mt-20">
      <div className="container mx-auto relative">
        {/* Bagian judul yang tetap di atas saat discroll */}
        <div className="sticky top-[160px] z-10 py-4">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-1 h-6 bg-red-600"></div>
            <div className="title text-2xl font-bold">Advertise with us</div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Kolom kiri - Menjadi sticky setelah scroll */}
          <div
            ref={leftColumnRef}
            className={`w-1/3 ${isStuck ? '' : 'sticky top-[240px]'}`}
            style={{
              height: 'fit-content',
            }}
          >
            <div className="space-y-6">
              {/* Bagian Misi */}
              <div>
                <h2 className="text-xl font-medium mb-3">
                  Rangkaian solusi canggih dari Cahya Warta dirancang untuk
                  mendukung bisnis dan merek dari berbagai skala, tanpa
                  memandang industri atau tujuan yang ingin dicapai.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Apakah Anda ingin memperluas jangkauan, meningkatkan
                  keterlibatan audiens, atau mendorong pertumbuhan yang terukur,
                  kami memiliki alat dan keahlian untuk membantu Anda meraih
                  kesuksesan. Dengan strategi yang disesuaikan dan teknologi
                  inovatif, kami tidak hanya membantu Anda mencapai target,
                  tetapi juga melampauinya, memastikan posisi merek Anda tetap
                  kuat dalam persaingan jangka panjang.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                  Mari bermitra dengan kami dalam perjalanan menuju potensi
                  penuh bisnis Anda.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                  Di era yang serba cepat ini, solusi kami yang fleksibel dan
                  disesuaikan membantu meningkatkan visibilitas, mengoptimalkan
                  konversi, serta membangun hubungan yang berkelanjutan—sehingga
                  Anda dapat lebih fokus pada pengembangan bisnis.
                </p>
              </div>
            </div>
          </div>

          {/* Kolom kanan - Bagian scrollable */}
          <div ref={rightColumnRef} className="w-2/3 space-y-6 ">
            <img
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1740619458~exp=1740623058~hmac=f7e6136a099f054433d4366f780a030472857a0c9503c0483338e4e27e42e0e5&w=1060"
              alt="News Flash Office"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
            {/* Konten artikel */}
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Layanan iklan berbasis data dari Cahya Warta dirancang secara
                menyeluruh untuk membantu bisnis Anda menjangkau audiens yang
                tepat dengan cara paling efektif. Kami menciptakan kampanye yang
                disesuaikan secara spesifik, memastikan bahwa iklan Anda
                ditempatkan di platform dan lokasi yang memiliki dampak terbesar
                bagi pertumbuhan merek.
           
                Dengan pendekatan berbasis data, kami menganalisis tren,
                perilaku konsumen, dan preferensi pasar untuk mengoptimalkan
                strategi periklanan Anda. Hasilnya, kampanye iklan yang tidak
                hanya menarik perhatian tetapi juga meningkatkan interaksi dan
                konversi.
             
                Jangan lewatkan kesempatan untuk memperluas jangkauan bisnis
                Anda! Mulailah beriklan bersama kami hari ini dan rasakan
                perbedaannya.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertise;
