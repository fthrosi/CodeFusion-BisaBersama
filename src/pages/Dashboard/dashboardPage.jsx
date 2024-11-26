import { Link } from "react-router-dom";
import {
  proyekYangSedangBerlangsung,
  rekomendasiProjek,
  proyekTerbaru,
  skills,
} from "../../utils/dashboardDummy";

const DashboardPage = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-screen">
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-6 p-5">
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-[18px]">
            <div className="flex flex-col gap-y-[18px]">
              <h1 className="text-[28px] font-semibold">Akses Cepat</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-3 gap-y-3">
                <div className="bg-white drop-shadow p-2.5 rounded-xl flex flex-col gap-y-[22px] w-[160px] h-[150px]">
                  <div className="flex items-center gap-x-2.5">
                    <img
                      src={"../project-management_121486814.png"}
                      alt=""
                    />
                    <p className="font-semibold text-xs">Jumlah Proyek</p>
                  </div>
                  <p className="font-semibold text-[36px] text-[#0077B6]">
                    100
                  </p>
                  <hr className="border border-[#0077B6] w-1/2" />
                </div>
                <div className="bg-white drop-shadow p-2.5 rounded-xl flex flex-col gap-y-[22px] w-[160px] h-[150px]">
                  <div className="flex items-center gap-x-2.5">
                    <img src={"../team_11575725.png"} alt="" />
                    <p className="font-semibold text-xs">Jumlah Kontribusi</p>
                  </div>
                  <p className="font-semibold text-[36px] text-[#0077B6]">
                    100
                  </p>
                  <hr className="border border-[#0077B6] w-1/2" />
                </div>
                <div className="bg-white drop-shadow p-2.5 rounded-xl flex flex-col gap-y-[22px] w-[160px] h-[150px]">
                  <div className="flex items-center gap-x-2.5">
                    <img src={"../services_7461826.png"} alt="" />
                    <p className="font-semibold text-xs">Jumlah Skillset</p>
                  </div>
                  <p className="font-semibold text-[36px] text-[#0077B6]">
                    100
                  </p>
                  <hr className="border border-[#0077B6] w-1/2" />
                </div>
                <div className="bg-white drop-shadow p-2.5 rounded-xl flex flex-col gap-y-[22px] w-[160px] h-[150px]">
                  <div className="flex items-center gap-x-2.5">
                    <img
                      src={"../project-management_121486814.png"}
                      alt=""
                    />
                    <p className="font-semibold text-xs">Jumlah Proyek</p>
                  </div>
                  <p className="font-semibold text-[36px] text-[#0077B6]">
                    100
                  </p>
                  <hr className="border border-[#0077B6] w-1/2" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-y-[18px]">
              <h1 className="text-[28px] font-semibold">
                Proyek Yang Sedang Berlangsung
              </h1>
              <div className="bg-white p-2.5 drop-shadow rounded-xl">
                <table className="w-full table-auto">
                  <thead>
                    <tr>
                      <th className="text-start">Nama Proyek</th>
                      <th className="text-start">Proses Proyek</th>
                      <th className="text-start max-sm:hidden">
                        Batas Waktu Proyek
                      </th>
                      <th className="text-start max-sm:hidden">
                        Jumlah Kolaborator
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {proyekYangSedangBerlangsung.map((proyek, index) => {
                      return (
                        <tr key={index}>
                          <td className="flex gap-x-2.5 font-semibold">
                            <img
                              src={
                                "../programming-background-collage.png"
                              }
                              alt=""
                            />
                            {proyek.namaProyek}
                          </td>
                          <td className="font-semibold">
                            {proyek.prosesProyek}
                          </td>
                          <td className="font-semibold max-sm:hidden">
                            {proyek.batasWaktu}
                          </td>
                          <td className="font-semibold max-sm:hidden">
                            {proyek.kolaborator}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col gap-y-[18px]">
              <h1 className="text-[28px] font-semibold">Rekomendasi Proyek</h1>
              <div className="flex flex-col md:flex-row lg:flex-row xl:flex-row gap-y-[18px] md:justify-between lg:justify-between xl:justify-between">
                {rekomendasiProjek.map((rekomProjek, index) => {
                  return (
                    <Link
                      to={"/proyek"}
                      key={index}
                      className="bg-white p-2.5 drop-shadow flex flex-col gap-y-4 rounded-xl transition-colors hover:bg-gray-100"
                    >
                      <img
                        src={
                          "../programming-background-collage-gede.png"
                        }
                        alt=""
                      />
                      <div className="w-fit text-white py-1 px-2 rounded-md bg-[#33C3E0]">
                        {rekomProjek.platform}
                      </div>
                      <h1 className="font-semibold text-xl">
                        {rekomProjek.title}
                      </h1>
                      <div className="flex flex-col gap-y-2">
                        <div className="flex gap-x-3">
                          <img src={"../calendar_4111880.png"} alt="" />
                          <span>{rekomProjek.duration}</span>
                        </div>
                        <div className="flex gap-x-3">
                          <img src={"../services_7461826.png"} alt="" />
                          <span>{rekomProjek.skills.join(", ")}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <div className="flex flex-col bg-white drop-shadow rounded-xl p-3 w-full">
              <h1 className="text-3xl font-semibold mb-4">Proyek Terbaru</h1>
              <div className="flex flex-col gap-y-5">
                {proyekTerbaru.map((proyekTerbaru, index) => {
                  return (
                    <Link to={"/proyek"} key={index} className="flex flex-col gap-y-2 bg-white hover:bg-gray-100 p-2 transition-colors rounded-xl">
                      <div className="flex gap-x-3">
                        <img
                          src={
                            "../programming-background-collage-sedang.png"
                          }
                          alt=""
                        />
                        <div className="flex flex-col gap-y-1">
                          <span>{proyekTerbaru.title}</span>
                          <p>Batas Waktu <span className="text-[#0077B6]">{proyekTerbaru.deadline}</span></p>
                        </div>
                      </div>
                      <div className="flex justify-between">
                        <div className="flex w-full">
                          <img
                            className="me-1"
                            src={"../services_7461826.png"}
                            alt=""
                          />
                          <span>{proyekTerbaru.skills.join(", ")}</span>
                        </div>
                        <div className="flex justify-end w-full">
                          <img
                            className="me-1"
                            src={"../team_3839469.png"}
                            alt=""
                          />
                          <span>Maks {proyekTerbaru.max}</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col bg-white drop-shadow rounded-xl p-3 w-full">
              <h1 className="text-3xl font-semibold mb-4">Tambah Keahlian</h1>
              <div className="flex flex-col gap-y-5">
                {skills.map((skill, index) => {
                  return (
                    <div key={index} className="flex flex-col gap-y-2">
                      <div className="flex gap-x-3">
                        <img src={"../20945805.png"} alt="" />
                        <div className="flex flex-col gap-y-1 w-full">
                          <div className="flex flex-row justify-between">
                            <p>{skill.tech}</p>
                            <p>Estimasi {skill.eta}</p>
                          </div>
                          <Link to={"/test"} className="transition-colors bg-[#33C3E0] hover:bg-[#33A4BA] rounded-lg w-fit py-1 px-10 text-white font-semibold">
                            Ambil
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
