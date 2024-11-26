import React from "react";

export default function Test() {
  return (
    <div className="p-4">
      <h1 className="text-4xl mb-2">Judul</h1>
      <p className="text-sm opacity-60 mb-2">
        {" "}
        <a href="/detail-test">Detail Test</a> / Test
      </p>
      <hr />
      <div className="grid md:grid-cols-1 lg:grid-cols-3 my-4 gap-3">
        <div className="border border-[#D9D9D9] rounded-md col-span-2 p-4 ">
          <p className="mb-4">1. Lorem ipsum </p>
          <p>A. Lorem Ipsum</p>
          <p>B. Lorem Ipsum</p>
          <p>C. Lorem Ipsum</p>
          <p>D. Lorem Ipsum</p>
        </div>
        <div className="rounded-md border lg:grid grid-cols-1 border-[#D9D9D9] p-2 hidden">
          <div className="flex item-center h-8 gap-2">
            {[1, 2, 3, 4].map((value) => (
              <button className="border w-7 text-sm rounded-md border-[#D9D9D9] hover:bg-[#D9D9D9] flex justify-center items-center p-2">
                {value}
              </button>
            ))}
          </div>
          <div className="flex justify-end items-end">
            <button className="border rounded-md h-10 border-[#D9D9D9] p-2 hover:bg-[#D9D9D9]">
              Selesai
            </button>
          </div>
        </div>
        {[2, 3, 4, 5].map((value) => (
          <div className="border border-[#D9D9D9] rounded-md col-span-2 p-4 ">
            <p className="mb-4">{value}. Lorem ipsum </p>
            <p>A. Lorem Ipsum</p>
            <p>B. Lorem Ipsum</p>
            <p>C. Lorem Ipsum</p>
            <p>D. Lorem Ipsum</p>
          </div>
        ))}
      </div>
    </div>
  );
}
