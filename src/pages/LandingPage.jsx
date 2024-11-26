import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
    const data = [
        {
            img : "/assets/image/bg.jpg",
            durasi: "1 Bulan",
            skil:"React.Js,Tailwind CSS, Express.Js, MySQL, +9 more"
        },
        {
            img : "/assets/image/bg.jpg",
            durasi: "2 Bulan",
            skil:"React.Js,Tailwind CSS, Express.Js, MySQL, +9 more"
        },
        {
            img : "/assets/image/bg.jpg",
            durasi: "3 Bulan",
            skil:"React.Js,Tailwind CSS, Express.Js, MySQL, +9 more"
        },
        {
            img : "/assets/image/bg.jpg",
            durasi: "4 Bulan",
            skil:"React.Js,Tailwind CSS, Express.Js, MySQL, +9 more"
        },
        {
            img : "/assets/image/bg.jpg",
            durasi: "5 Bulan",
            skil:"React.Js,Tailwind CSS, Express.Js, MySQL, +9 more"
        },
        {
            img : "/assets/image/bg.jpg",
            durasi: "6 Bulan",
            skil:"React.Js,Tailwind CSS, Express.Js, MySQL, +9 more"
        }
    ]
  return (
    <div className="md:mt-[8rem] mt-[5rem] md:px-[5rem] px-2 pb-5">
      <section>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row ">
          <div className="md:w-1/2 flex flex-col gap-[1.25rem] justify-center">
            <h1 className="2xl:text-[3.5rem] xl:text-[clamp(3rem,3.75vw,3.5rem)] lg:text-[clamp(2.5rem,10.24vw,3rem)] md:text-[clamp(1.8rem,3.75vw,2.2rem)] text-[1.8rem] font-bold 2xl:w-[34.375rem]">
              Bangun Tim, Bangun Masa Depan
            </h1>
            <p className="lg:w-[23.938rem] xl:text-xl text-black/60 ">
              Bangun tim yang tepat, wujudkan ide-ide besar, dan kembangkan
              keterampilan untuk masa depan yang lebih cerah bersama.
            </p>
            <div className="mt-1">
              <Link className="py-2.5 px-3.5 bg-[#0077B6] rounded-md text-white">
                Bergabung Sekarang
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src="/assets/image/picture1.jpg" alt="" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between mt-[4.5rem] bg-[#90E0EF4D] lg:px-8 lg:py-9 md:p-2 p-2 items-center gap-3">
          <div className="flex md:gap-[1.313rem] gap-[1rem]">
            <div className="bg-white p-[1.875rem]">
              <img
                src="/assets/icons/user.png"
                alt=""
                className="lg:size-[4.375rem] md:size-[2rem] size-[2rem]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[#0077B6] lg:text-[2.125rem] md:text-[1.5rem] font-bold">500+</h3>
              <p className="lg:text-[1.75rem] md:text-[1rem]">Pengguna</p>
            </div>
          </div>
          <div className="flex md:gap-[1.313rem] gap-[1.6rem]">
            <div className="bg-white p-[1.875rem]">
              <img
                src="/assets/icons/project.png"
                alt=""
                className="lg:size-[4.375rem] md:size-[2rem] size-[2rem]"
              />
            </div>
            <div className="flex flex-col justify-center ">
              <h3 className="text-[#0077B6] lg:text-[2.125rem] md:text-[1.5rem] font-bold">500+</h3>
              <p className="lg:text-[1.75rem] md:text-[1rem]">Proyek</p>
            </div>
          </div>
          <div className="flex md:gap-[1.313rem] gap-[1.6rem] ">
            <div className="bg-white p-[1.875rem]">
              <img
                src="/assets/icons/team.png"
                alt=""
                className="lg:size-[4.375rem] md:size-[2rem] size-[2rem]"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-[#0077B6] lg:text-[2.125rem] md:text-[1.5rem] font-bold">500+</h3>
              <p className="lg:text-[1.75rem] md:text-[1rem]">Tim</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-[3.5rem] mt-[4.5rem] font-bold">
          Jelajahi Bisa Bersama
        </h1>
        <p className="text-xl text-black/60 lg:w-[49.375rem]">
          Cari proyek berdasarkan keahlian yang kamu punya dan berikan
          partisipasi kamu dalam pengembangan proyek
        </p>
        <div className="flex lg:flex-row flex-col gap-8 mt-9 items-center justify-between">
          <div className="lg:w-1/2">
            <h1 className="2xl:text-5xl xl:text-[2.5rem] lg:text-[2rem] text-[2rem] 2xl:w-[39.125rem] font-bold">
              Cari Teman Mengerjakan Proyek
            </h1>
            <p className="mt-9 2xl:w-[38.813rem] text-xl text-black/60 lg:text-lg md:text-justify">
              Kamu bisa mencari proyek yang tersedia dan mulai mengerjakan
              bersama dengan orang lain. Kamu juga bisa mengunggah proyekmu dan
              mencari untuk mengerjakan nya bersama. Jangan khawatir Orang yang
              akan mengerjakan proyek sudah terverifikasi kemampuan nya untuk
              mengerjakan proyek tersebut. Jadi kamu bisa dengan tenang
              mengerjakan tanpa perlu khawatir kemampuan teman satu tim mu
            </p>
          </div>
          <div className="lg:w-1/2">
            <img src="/assets/image/busines.jpg" alt="" className="md:w-[37rem] md:h-[24.688rem]"/>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-8 mt-9 lg:items-center lg:justify-between">
          <div className="2xl:w-[45%] xl:w1/2">
            <img src="/assets/image/yes.jpg" alt="" />
          </div>
          <div className="lg:w-1/2">
            <h1 className="2xl:text-5xl xl:text-[2.5rem] lg:text-[2rem] w-[40.125rem] font-bold text-[2rem]">
              Nilai Teman Proyek Kamu
            </h1>
            <p className="mt-9 2xl:w-[38.813rem] text-xl text-black/60 lg:text-lg">
              Kamu bisa menilai teman satu tim yang sudah berkolaborasi dengan
              kamu, sehingga setiap user akan memiliki rating yang dapat dilihat
              oleh orang lain. Hal ini demi menjunjung keadilan dalam pengerjaan
              proyek. selain itu kamu juga bisa melihat review orang-orang
              sebelum nya yang sudah pernah berkolaborasi dengan teman proyek
              mu. Jadi kamu sudah tidak perlu khawatir akan merasa kesusahan
              karena teman proyek mu yang tidak berkompeten.
            </p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-[3.5rem] mt-[4.5rem] font-bold">
        Jelajahi Proyek Terbaru
        </h1>
        <div className="flex justify-between flex-col md:flex-row">
          <p className="text-xl text-black/60 xl:w-[49.375rem] lg:w-[39rem] md:w-[28rem]">
            Cari proyek berdasarkan keahlian yang kamu punya dan berikan partisipasi kamu dalam pengembangan proyek
          </p>
          <div>
            <Link className="xl:py-2.5 xl:px-3.5 lg:p-[0.5rem] md:p-[0.5rem] lg:text-sm bg-white drop-shadow-md rounded-md text-[#33C3E0]">
              Lihat Semua
            </Link>
          </div>
        </div>
        <div className="mt-9 grid lg:grid-cols-3 md:grid-cols-2 2xl:gap-40 gap-10">
            {data.map(item =>(
                 <div className="card py-3 px-4 rounded-sm drop-shadow-md bg-white">
                <img src={item.img} alt="" className="w-[23.5rem]"/>
                <div className="flex">
                    <div className="mt-[1.125rem] p-2 rounded-md bg-[#33C3E0] text-white">
                        Web Development
                    </div>
                </div>
                <h1 className="tetx-lg mt-[1.125rem] font-semibold">
                    Market Place Untuk Bengel
                </h1>
                <div className="flex mt-[1.188rem] items-center gap-[0.375rem]">
                    <div className="px-[0.25rem]">
                        <img src="/assets/icons/calendar.png" alt="" className="size-6" />
                    </div>
                    <p className="text-[0.75rem]">
                        Durasi: {item.durasi}
                    </p>
                </div>
                <div className="flex mt-[1.188rem] items-center gap-[0.375rem]">
                    <div className="px-[0.25rem]">
                        <img src="/assets/icons/services.png" alt="" className="size-6" />
                    </div>
                    <p className="text-[0.75rem]">
                        Skills: {item.skil}
                    </p>
                </div>
            </div>
            ))}
        </div>
      </section>
    </div>
  );
}
