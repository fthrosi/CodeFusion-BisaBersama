import illustration from "../../assets/illustration-1.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full h-screen font-nunito">
      <div className="w-full px-8 py-16  md:px-32 md:py-12 flex flex-col items-center justify-center h-full">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
          Bisa <span className="text-primary">Bersama</span>
        </h1>

        <div className="w-full max-w-72 md:max-w-lg mt-24">
          <h2 className="text-xl md:text-3xl text-center lg:text-start font-bold">
            Selamat Datang !
          </h2>
          <div className="my-2 lg:mt-2 lg:mb-6 text-center lg:text-start text-[10px] md:text-xl">
            <p>Halo! Silakan masuk untuk mengakses akun Anda.</p>
          </div>

          <div className="flex flex-col gap-2 md:gap-4">
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
                onClick={handleLogin}
              >
                Masuk
              </button>
              <p className="mt-4 text-[10px] md:text-base">
                Belum Punya Akun ?{" "}
                <Link
                  to={{
                    pathname: "/register",
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
