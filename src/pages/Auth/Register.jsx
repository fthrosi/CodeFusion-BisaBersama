import { Link, useNavigate } from "react-router-dom";
import illustration from "../../assets/illustration-1.png";
import { useState } from "react";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    console.log(data);
    navigate("/login");
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen font-nunito">
      <div className="w-full px-8 py-16  md:px-32 md:py-24 lg:py-16 lg:px-24 flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-2xl md:text-3xl xl:text-3xl">
          Bisa <span className="text-primary">Bersama</span>
        </h1>

        <div className="w-full max-w-72 md:max-w-lg mt-28 lg:mt-16 ">
          <h2 className="text-xl text-center lg:text-start md:text-3xl lg:text-2xl xl:text-3xl font-bold">
            Daftar Akun Bisa Bersama
          </h2>
          <div className="mt-2 mb-4 text-center lg:text-start lg:mt-2 lg:mb-4 text-[10px] md:text-lg lg:text-base">
            <p>Gabung Sekarang!</p>
            <p>
              Temukan teman kolaborasi untuk proyek IT dan tingkatkan kemampuan
              melalui pengalaman langsung.
            </p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
            <div>
              <label className="md:text-sm text-[10px]" htmlFor="nama">
                Nama Lengkap <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                onChange={handleChange}
                className="block text-[10px] md:text-sm lg:text-base w-full mt-1 h-8 md:h-12 rounded-md lg:rounded-lg px-3 py-2 drop-shadow-lg"
                placeholder="Masukan Nama Lengkap"
              />
            </div>
            <div>
              <label className="md:text-sm text-[10px]" htmlFor="email">
                Email <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                className="block text-[10px] md:text-sm lg:text-base w-full mt-1 h-8 md:h-12 rounded-md lg:rounded-lg px-3 py-2 drop-shadow-lg"
                placeholder="Masukan Alamat Email"
              />
            </div>
            <div>
              <label className="md:text-sm text-[10px]" htmlFor="password">
                Kata Sandi <span className="font-bold text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                className="block text-[10px] md:text-sm lg:text-base w-full mt-1 h-8 md:h-12 rounded-md lg:rounded-lg px-3 py-2 drop-shadow-lg"
                placeholder="Masukan Kata Sandi"
              />
            </div>

            <div className="mt-6 flex flex-col w-full items-center">
              <button
                className="bg-primary h-8 md:h-14 text-white w-full rounded-md text-sm md:text-base md:rounded-lg font-semibold"
                onClick={handleRegister}
              >
                Daftar
              </button>
              <p className="mt-4 text-[10px] md:text-base">
                Sudah Punya Akun ?{" "}
                <Link
                  to={{
                    pathname: "/login",
                  }}
                  className="text-primary/50"
                >
                  Masuk disini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <aside className="w-full h-screen hidden lg:block">
        <img
          src={illustration}
          alt="background"
          className="h-full w-full object-cover"
        />
      </aside>
    </section>
  );
}
