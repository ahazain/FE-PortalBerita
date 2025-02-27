import { useEffect, useRef, useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

function Contact() {
  // State untuk menentukan apakah elemen kiri harus "stuck"
  const [isStuck, setIsStuck] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: '',
    email: '',
    departemen: '',
    subjek: '',
    pesan: '',
  });
  const [errors, setErrors] = useState({});

  // useRef digunakan untuk mereferensikan elemen kiri dan kanan
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  const departemenOptions = [
    'Pilih...',
    'Customer Service',
    'Sales & Marketing',
    'Technical Support',
    'Human Resources',
    'Finance',
    'Management',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = 'Nama lengkap harus diisi';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email harus diisi';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid';
    }

    if (formData.departemen === '' || formData.departemen === 'Pilih...') {
      newErrors.departemen = 'Silakan pilih departemen';
    }

    if (!formData.subjek.trim()) {
      newErrors.subjek = 'Subjek harus diisi';
    }

    if (!formData.pesan.trim()) {
      newErrors.pesan = 'Pesan harus diisi';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);

      // Reset form after submission
      setTimeout(() => {
        setFormData({
          namaLengkap: '',
          email: '',
          departemen: '',
          subjek: '',
          pesan: '',
        });
        setIsSubmitted(false);
      }, 3000);
    }
  };

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
            <div className="title text-2xl font-bold">Contact</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Kolom kiri - Menjadi sticky setelah scroll */}
          <div
            ref={leftColumnRef}
            className={`w-full md:w-1/3 ${isStuck ? '' : 'sticky top-[240px]'}`}
            style={{
              height: 'fit-content',
            }}
          >
            <div className="space-y-6">
              {/* Bagian Misi */}
              <div>
                <h2 className="text-xl font-medium mb-3">
                  Bergabunglah dengan tim kami dan raih berbagai peluang di
                  industri media.
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
          <div ref={rightColumnRef} className="w-full md:w-2/3 space-y-6">
            <img
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15773.jpg?t=st=1740619458~exp=1740623058~hmac=f7e6136a099f054433d4366f780a030472857a0c9503c0483338e4e27e42e0e5&w=1060"
              alt="News Flash Office"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-6"
            />
            {/* Konten artikel */}
            <div className="text-gray-700 space-y-4 leading-relaxed">
              <p>
                Apakah Anda memerlukan informasi lebih lanjut, memiliki
                pertanyaan spesifik atau sedang mencari bantuan lebih lanjut,
                tim kami ada di sini untuk membantu. Cukup isi formulir dan kami
                akan menghubungi Anda.
              </p>
              <p>
                Tim kami terdiri dari profesional berpengalaman yang siap
                membantu Anda dengan berbagai kebutuhan. Kami berkomitmen untuk
                memberikan layanan terbaik dan solusi yang tepat untuk setiap
                pertanyaan atau masalah yang Anda hadapi.
              </p>

              {/* Form section */}
              <div className="mt-8">
                {isSubmitted ? (
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
                    <CheckCircle
                      className="mx-auto text-green-500 mb-2"
                      size={48}
                    />
                    <h3 className="text-xl font-semibold text-green-700 mb-2">
                      Terima Kasih!
                    </h3>
                    <p className="text-green-600">
                      Pesan Anda telah terkirim. Kami akan menghubungi Anda
                      segera.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="namaLengkap"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Nama lengkap
                      </label>
                      <input
                        type="text"
                        id="namaLengkap"
                        name="namaLengkap"
                        value={formData.namaLengkap}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.namaLengkap
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                        placeholder="Nama lengkap Anda"
                      />
                      {errors.namaLengkap && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.namaLengkap}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="email@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="departemen"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Departemen
                      </label>
                      <select
                        id="departemen"
                        name="departemen"
                        value={formData.departemen}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.departemen
                            ? 'border-red-500'
                            : 'border-gray-300'
                        }`}
                      >
                        {departemenOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                      {errors.departemen && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.departemen}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="subjek"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Subjek
                      </label>
                      <input
                        type="text"
                        id="subjek"
                        name="subjek"
                        value={formData.subjek}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.subjek ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Subjek pesan Anda"
                      />
                      {errors.subjek && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.subjek}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="pesan"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Pesan
                      </label>
                      <textarea
                        id="pesan"
                        name="pesan"
                        value={formData.pesan}
                        onChange={handleChange}
                        rows={5}
                        className={`w-full px-4 py-2 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                          errors.pesan ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Tulis pesan Anda di sini..."
                      />
                      {errors.pesan && (
                        <p className="mt-1 text-sm text-red-600">
                          {errors.pesan}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-md transition duration-300 flex items-center justify-center"
                    >
                      <Send size={18} className="mr-2" />
                      Kirim
                    </button>
                  </form>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mt-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Jam Operasional
                </h3>
                <ul className="space-y-1 text-blue-700">
                  <li>Senin - Jumat: 08.00 - 17.00 WIB</li>
                  <li>Sabtu: 09.00 - 14.00 WIB</li>
                  <li>Minggu & Hari Libur: Tutup</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
