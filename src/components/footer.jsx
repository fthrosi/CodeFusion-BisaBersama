import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between md:px-[5rem] px-2 pt-[1.25rem] bg-[#0077B6] border-white pb-2">
        <div className="md:w-[33%]">
          <h1 className="text-white xl:text-[2rem] text-[1.5rem]">
            Bisa <span className="text-[#90E0EF]">Bersama</span>
          </h1>
          <p className="mt-[0.813rem] xl:text-xl lg:text-lg xl:w-[20.938rem] text-white md:text-sm">
            Bangun tim yang tepat, wujudkan ide-ide besar, dan kembangkan
            keterampilan untuk masa depan yang lebih cerah bersama.
          </p>
        </div>
        <div className="md:w-[33%]">
            <h1 className="md:text-[2rem] text-[1.5rem] text-white md:justify-self-center hidden md:block">Kontak</h1>
            <Link className="flex gap-[0.938rem] mt-[0.813rem] items-center">
                <img src="/assets/icons/mail-64.png" alt="" className="xl:size-[2.5rem] lg:size-[2rem] size-[1.5rem] "/>
                <p className="text-white md:text-sm lg:text-base">
                    Email : BisaBersama@gmail.com
                </p>
            </Link>
            <Link className="flex gap-[0.938rem] mt-[0.625rem] items-center">
                <img src="/assets/icons/telepon.png" alt="" className="xl:size-[2.5rem] lg:size-[1.5rem] size-[1.5rem]"/>
                <p className="text-white md:text-sm lg:text-base">
                    Telp : +62 12341289675
                </p>
            </Link>
        </div>
        <div className="md:w-[33%] flex flex-col   items-center">
            <h1 className="text-[2rem] text-white"> Sosial Media</h1>
            <div className="flex mt-[0.813rem] gap-[2rem] items-center">
                <img src="/assets/icons/instagram.png" alt="" className="xl:size-[3.625rem] lg:size-[3rem] size-[2rem]"/>
                <img src="/assets/icons/facebook.png" alt="" className="xl:size-[3.625rem] lg:size-[3rem] size-[2rem]"/>
                <img src="/assets/icons/x.png" alt="" className="xl:size-[3.625rem] lg:size-[3rem] size-[2rem]"/>
            </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center bg-[#0077B6]">
        <p className="text-white">© 2024 Bisa Bersama. All rights reserved.</p>
      </div>
    </>
  );
}
