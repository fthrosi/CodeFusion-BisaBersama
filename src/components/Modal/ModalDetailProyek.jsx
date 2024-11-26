import React from "react";

export default function ModalDetailProyek({ isOpen, onClose }) {
  const skills = [
    "React.JS",
    "Java Script",
    "Backend Development",
    "HTML",
    "CSS",
    "Node.JS",
    "Front-End Development",
    "Express.JS",
    "MySql",
    "Database",
  ];
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 overflow-x-hidden overflow-y-auto p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl max-h-[90vh] relative overflow-hidden mx-auto transition-all duration-300 ease-in-out scale-100 p-4 md:p-6 lg:p-8 flex flex-col">
        <button
          onClick={onClose}
          className="sticky top-0 right-0 z-10 p-2 self-end text-gray-400 hover:text-gray-600 flex ml-auto mb-4"
        >
          X
        </button>
        <div className="flex-grow overflow-y-auto pr-4">
          <section className="w-full">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col w-full lg:w-1/2">
                <img
                  src="/image1.png"
                  alt="Gambar"
                  className="object-cover w-full h-auto rounded-lg aspect-video"
                />
                <div className="space-y-3">
                  <p className="font-semibold text-xl lg:text-2xl">
                    Market Place Untuk Bengkel
                  </p>
                  <div className="flex flex-wrap gap-3 items-center">
                    <div className="bg-[#33C3E0] text-white text-xs px-3 py-1 rounded-full">
                      Web Development
                    </div>

                    <div className="flex items-center">
                      <img
                        src="/calendar_4111880.svg"
                        alt="Calendar Icon"
                        className="w-4 h-4 mr-1"
                      />
                      <p className="font-normal text-sm">Durasi: 1 Bulan</p>
                    </div>

                    <div className="flex items-center">
                      <img
                        src="/team_3839469.svg"
                        alt="Tim Icon"
                        className="w-4 h-4 mr-1"
                      />
                      <p className="font-normal text-sm">Team: 2/3</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <img
                        src="/services_7461826.svg"
                        alt="Skill Icon"
                        className="w-5 h-5"
                      />
                      <p className="font-normal">Skill yang dibutuhkan</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skills.map((item) => (
                        <span className="bg-[#33C3E0] rounded-full py-1 px-2 text-white text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 space-y-4">
                <h4 className="text-xl font-bold">Deskripsi Proyek</h4>
                <div className="space-y-3 text-3 leading-relaxed">
                  <p>
                    Proyek ini dirancang sebagai studi kasus untuk memahami dan
                    mengembangkan sebuah platform berbasis web
                  </p>
                  <div>
                    <p className="font-semibold mb-2">
                      Tujuan Pengerjaan Proyek:
                    </p>
                    <ul className="list-decimal pl-4 space-y-1">
                      <li>
                        Memahami proses pengembangan aplikasi web end-to-end.
                      </li>
                      <li>
                        Mengaplikasikan teknologi front-end dan back-end untuk
                        membangun platform.
                      </li>
                      <li>
                        Mempelajari konsep manajemen database untuk menyimpan data
                        pengguna, bengkel, dan transaksi.
                      </li>
                      <li>
                        Mengimplementasikan fitur-fitur marketplace, seperti
                        pencarian lokasi, ulasan pengguna, dan pembayaran.
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold mb-2">
                      Fitur yang akan dikembangkan:
                    </p>
                    <ul className="list-decimal pl-4 space-y-1">
                      <li>
                        Pencarian Lokasi Bengkel: Mengintegrasikan fitur geolokasi
                        untuk membantu pengguna menemukan bengkel terdekat.
                      </li>
                      <li>
                        Daftar Layanan dan Harga: Memungkinkan bengkel untuk
                        menampilkan layanan yang ditawarkan beserta estimasi
                        biaya.
                      </li>
                      <li>
                        Sistem Reservasi: Pengguna dapat melakukan pemesanan
                        layanan secara online.
                      </li>
                      <li>
                        Ulasan dan Rating:Pengguna dapat memberikan feedback
                        setelah menggunakan layanan.
                      </li>
                      <li>
                        Dashboard Admin: Untuk mengelola data pengguna, bengkel,
                        dan transaksi.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="sticky bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200 py-4 px-4 md:px-6 lg:px-8 flex justify-end gap-4">
          <button className="px-6 py-2 text-sm font-medium bg-red-600 rounded-lg text-white">Batal</button>
          <button className="px-6 py-2 text-sm font-medium bg-[#33C3E0] rounded-lg text-white">Ambil</button>
        </div>
      </div>
    </div>
  );
}
