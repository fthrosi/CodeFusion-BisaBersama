import React from "react";
import { useState } from "react";
import ModalDetailProyek from "../../components/Modal/ModalDetailProyek";

export default function Proyek() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const OpenModal = () => setIsOpenModal(true);
  const closeModal = () => setIsOpenModal(false);
  return (
    <>
      <section className="p-4 max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            Proyek
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((index) => (
            <div
              key={index}
              className="w-full shadow-md rounded p-3 hover:cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              onClick={OpenModal}
            >
              <div className="relative pb-[56.25%] overflow-hidden rounded">
                <img
                  src="/image1.png"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col mt-2">
                <p className="bg-[#33C3E0] rounded-lg w-fit text-white px-3 py-1 text-sm mb-2">
                  Web Development
                </p>
                <p className="font-semibold text-base md:text-lg mb-2">
                  Market Place Untuk Bengkel
                </p>
                <div className="flex flex-wrap gap-3 text-xs mb-2">
                  <div className="flex items-center">
                    <img
                      src="/calendar_4111880.svg"
                      alt="Calendar Icon"
                      className="mr-1 w-4 h-4"
                    />
                    <p className="font-normal text-sm">Durasi: 1 Bulan</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/team_3839469.svg"
                      alt="Tim Icon"
                      className="mr-1 w-4 h-4"
                    />
                    <p className="font-normal text-sm">Team: 2/3</p>
                  </div>
                </div>

                <div className="flex items-center text-xs">
                  <img
                    src="/services_7461826.svg"
                    alt="Skill Icon"
                    className="mr-1 w-4 h-4"
                  />
                  Skills: ReactJS, Tailwind CSS, Express.js, +9more
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ModalDetailProyek isOpen={isOpenModal} onClose={closeModal} />
    </>
  );
}
