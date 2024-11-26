import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return (
        <div className="fixed top-0 left-0 right-0 md:px-[5rem] bg-white md:py-[0.875rem] drop-shadow-md z-50 p-2">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold">Bisa <span className="text-[#0077B6]">Bersama</span></h1>
                <div className="flex gap-[1.625rem] items-center text-sm md:text-base font-semibold">
                    <Link className="text-[#00B4D8]">
                    Masuk
                    </Link>
                    <Link className="bg-[#0077B6] text-white px-[2.375rem] py-[0.313rem] rounded-md">
                        Daftar
                    </Link>
                </div>
            </div>
        </div>
    )
}