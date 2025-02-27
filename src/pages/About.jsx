import { useEffect, useRef, useState } from "react";

function About() {
  const [isStuck, setIsStuck] = useState(false);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (leftColumnRef.current && rightColumnRef.current) {
        const leftRect = leftColumnRef.current.getBoundingClientRect();
        const rightRect = rightColumnRef.current.getBoundingClientRect();

        // Check if bottom of right content is aligned with left content
        if (rightRect.bottom <= leftRect.bottom) {
          setIsStuck(true);
        } else {
          setIsStuck(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="About mt-20">
      <div className="container mx-auto relative">
        {/* Title section - always fixed at top */}
        <div className="sticky top-[160px] z-10 py-4">
          <div className="flex items-center gap-2 mb-10">
            <div className="w-1 h-6 bg-red-600"></div>
            <div className="title text-2xl font-bold">About us</div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Left column - becomes sticky after initial scroll */}
          <div
            ref={leftColumnRef}
            className={`w-1/3 ${isStuck ? "" : "sticky top-[240px]"}`}
            style={{
              height: "fit-content",
            }}
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">Misi Kami</h2>
                <p className="text-gray-700 leading-relaxed">
                  Untuk menyampaikan berita yang tidak bias, tepat waktu, dan
                  komprehensif yang memberdayakan pembaca untuk membuat
                  keputusan yang tepat dan menumbuhkan pemahaman yang lebih
                  mendalam tentang peristiwa global.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Visi Kami</h2>
                <p className="text-gray-700 leading-relaxed">
                  Menjadi sumber berita paling tepercaya dan berpengaruh,
                  membentuk percakapan global dan menghubungkan dunia melalui
                  jurnalisme yang bertanggung jawab.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - scrollable content */}
          <div ref={rightColumnRef} className="w-2/3 space-y-6 ">
            <img
              src="https://plus.unsplash.com/premium_photo-1700694067296-e3fb391cebe3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="News Flash Office"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                NewsFlash adalah kantor berita daring terkemuka di negara ini,
                yang menghubungkan jutaan pembaca dengan berita terkini, akurat,
                dan berdampak dari seluruh dunia. Misi kami adalah menyediakan
                liputan terpercaya tentang segala hal yang perlu diketahui dunia
                tentang AS dan segala hal yang perlu diketahui AS tentang dunia.
              </p>
              <p>
                Dari berita terkini hingga analisis mendalam tentang politik,
                bisnis, budaya, dan urusan internasional, kami berkomitmen untuk
                memberikan informasi yang Anda butuhkan agar tetap terinformasi.
                Di NewsFlash, kami percaya bahwa berita harus lebih dari sekadar
                melaporkan fakta; berita harus memberikan konteks, wawasan, dan
                pemahaman.
              </p>
              <p>
                Tim jurnalis kami yang berdedikasi bekerja sepanjang waktu untuk
                memastikan Anda tidak hanya mendapatkan berita utama tetapi juga
                cerita yang lebih mendalam yang membentuk masyarakat kita. Baik
                itu perkembangan politik terkini atau tren ekonomi, kami
                menghadirkan perspektif yang seimbang dan kritis, memberdayakan
                pembaca kami dengan pengetahuan untuk membuat keputusan yang
                tepat.
              </p>
              <p>
                Kami bangga dengan komitmen kami terhadap integritas
                jurnalistik, menyampaikan berita yang tidak memihak, adil, dan
                transparan. Tim redaksi kami mematuhi standar tertinggi, dengan
                fokus pada akurasi dan kedalaman untuk memastikan bahwa setiap
                cerita mencerminkan kebenaran tanpa sensasionalisme.
              </p>
              <p>
                Di dunia yang dibanjiri informasi, NewsFlash menonjol sebagai
                sumber tepercaya yang mengutamakan kejelasan dan kredibilitas.
                Selain liputan domestik kami, NewsFlash memiliki kehadiran
                internasional yang kuat, dengan koresponden di seluruh dunia
                yang memberikan laporan langsung tentang peristiwa global.
              </p>
              <p>
                Kami percaya bahwa memahami perkembangan internasional adalah
                kunci untuk memahami perkembangan nasional, dan jangkauan global
                kami memungkinkan kami untuk memberi Anda perspektif yang
                benar-benar komprehensif tentang urusan dunia.
              </p>
              <p>
                Sebagai platform digital pertama, NewsFlash berkomitmen pada
                inovasi, memanfaatkan teknologi mutakhir untuk menyampaikan
                berita dalam format yang mudah diakses dan menarik. Baik Anda
                menjelajah di ponsel, tablet, atau desktop, kami memastikan Anda
                dapat tetap mendapatkan informasi di mana pun Anda berada.
              </p>
              <p>
                Tujuan kami sederhana: memberdayakan pembaca dengan menyampaikan
                berita yang membentuk opini, memicu percakapan, dan
                menghubungkan Anda dengan dunia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
