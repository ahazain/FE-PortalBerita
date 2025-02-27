import { useEffect, useRef, useState } from "react";

function Careers() {
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
    window.addEventListener("scroll", handleScroll);
    
    // Cleanup function untuk menghapus event listener saat komponen unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Dependency array kosong berarti useEffect hanya dijalankan sekali setelah render pertama

  return (
    <div className="About mt-20">
      <div className="container mx-auto relative">
        {/* Bagian judul yang tetap di atas saat discroll */}
        <div className="sticky top-[160px] z-10 py-4">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-1 h-6 bg-red-600"></div>
            <div className="title text-2xl font-bold">Carriers</div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Kolom kiri - Menjadi sticky setelah scroll */}
          <div
            ref={leftColumnRef}
            className={`w-1/3 ${isStuck ? "" : "sticky top-[240px]"}`}
            style={{
              height: "fit-content",
            }}
          >
            <div className="space-y-6">
              {/* Bagian Misi */}
              <div>
                <h2 className="text-xl font-medium mb-3">Bergabunglah dengan tim kami dan raih berbagai peluang di industri media.</h2>
                <p className="text-gray-700 leading-relaxed">
                Cahyawarta adalah salah satu agen berita terkemuka yang menyajikan berita dan fitur berkualitas tinggi kepada jutaan pembaca setiap hari. Dengan komitmen terhadap akurasi, keadilan, dan integritas, kami menghadirkan liputan berita di berbagai topik.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                Bergabunglah dengan tim berbakat kami dan jadilah bagian dari perusahaan yang menghargai inovasi, keberagaman, dan kreativitas dalam jurnalisme.
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
              Cahyawarta menjunjung tinggi prinsip Kesetaraan Kesempatan dalam setiap aspek rekrutmen dan lingkungan kerja. Kami berkomitmen untuk memberikan peluang kerja yang adil bagi semua kandidat dan karyawan yang memenuhi kualifikasi, tanpa diskriminasi dalam bentuk apa pun.  

Kami memastikan bahwa setiap individu dipertimbangkan secara objektif dalam proses perekrutan, penempatan, promosi, serta pengembangan karier, tanpa memandang jenis kelamin, identitas gender, ras, etnis, warna kulit, agama, kebangsaan, disabilitas, usia, atau karakteristik lain yang dilindungi oleh hukum.  

Sebagai perusahaan yang menghargai keberagaman dan inklusivitas, Cahyawarta terus menciptakan lingkungan kerja yang mendukung, di mana setiap karyawan memiliki kesempatan yang sama untuk berkembang, berkontribusi, dan mencapai kesuksesan.
              </p>
              {/* Paragraf tambahan lainnya */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Careers;
