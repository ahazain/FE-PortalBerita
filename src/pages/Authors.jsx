import { useEffect, useRef, useState } from 'react';

function Author() {
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
            <div className="title text-2xl font-bold">Author</div>
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
                  Tim penulis di Cahya Warta terdiri dari para profesional
                  dengan latar belakang beragam, masing-masing membawa keahlian
                  unik dari berbagai industri.
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Cahyawarta adalah salah satu agen berita terkemuka yang
                  menyajikan berita dan fitur berkualitas tinggi kepada jutaan
                  pembaca setiap hari. Dengan komitmen terhadap akurasi,
                  keadilan, dan integritas, kami menghadirkan liputan berita di
                  berbagai topik.
                </p>
                <br />
                <p className="text-gray-700 leading-relaxed">
                  Bergabunglah dengan tim berbakat kami dan jadilah bagian dari
                  perusahaan yang menghargai inovasi, keberagaman, dan
                  kreativitas dalam jurnalisme.
                </p>
              </div>
            </div>
          </div>

          {/* Kolom kanan - Bagian scrollable */}
          <div
            ref={rightColumnRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="flex flex-col">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg flex-grow">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Business Meeting"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  Business Meeting
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg flex-grow">
                <img
                  src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
                  alt="Office Workspace"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  Office Workspace
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg flex-grow">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Team Collaboration"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  Team Collaboration
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg flex-grow">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Creative Workspace"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  Creative Workspace
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg flex-grow">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Office Meeting"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  Office Meeting
                </h3>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg flex-grow">
                <img
                  src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1740619458~exp=1740623058~hmac=f7e6136a099f054433d4366f780a030472857a0c9503c0483338e4e27e42e0e5&w=1060"
                  alt="News Flash Office"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-lg font-medium text-gray-800">
                  News Flash Office
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Author;
