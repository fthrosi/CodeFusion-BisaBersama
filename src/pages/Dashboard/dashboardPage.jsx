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
      {/* Sidebar */}
      <div className="w-[400px] min-h-screen pt-6 bg-white drop-shadow hidden lg:block xl:block">
        <div className="flex h-full flex-col justify-between">
          <div>
            <Link to={""}>
              <h1 className="font-bold text-3xl mb-6 ms-7">
                Bisa <span className="text-[#0077B6]">Bersama</span>
              </h1>
            </Link>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-y-6 ms-7">
                <Link className="flex gap-x-[18px]" to={""}>
                  <img src={"../chart_85071601.png"} alt="" />
                  <span className="font-semibold text-xl">Dashboard</span>
                </Link>
                <Link className="flex gap-x-[18px]" to={""}>
                  <img
                    src={"../project-management_121486814.png"}
                    alt=""
                  />
                  <span className="font-semibold text-xl">Proyek</span>
                </Link>
                <Link className="flex gap-x-[18px]" to={""}>
                  <img src={"../settings_64591711.png"} alt="" />
                  <span className="font-semibold text-xl">Proyek Saya</span>
                </Link>
                <Link className="flex gap-x-[18px]" to={""}>
                  <img src={"../clipboard_55443891.png"} alt="" />
                  <span className="font-semibold text-xl">Test Skill</span>
                </Link>
              </div>
            </div>
          </div>
          <button className="w-full bg-[#0077B6] text-white font-bold text-3xl py-2">
            Keluar
          </button>
        </div>
      </div>
      {/* Sidebar */}
      <div className="flex flex-col w-screen">
        <div className="flex flex-col">
          {/* Navbar */}
          <div className="w-full bg-white py-[18px] px-[18px] drop-shadow flex">
            <button className="lg:hidden xl:hidden">
              <svg
                className="me-10 size-4 fill-[#33C3E0]"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="100"
                height="100"
                viewBox="0 0 30 30"
              >
                <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
              </svg>
            </button>
            <div className="w-full flex justify-end md:justify-between lg:justify-between xl:justify-between">
              <input
                className="border border-gray-300 p-1 w-[300px] rounded-xl hidden md:block lg:block xl:block"
                type="text"
                placeholder="Search"
              />
              <div className="flex gap-x-2.5 items-center">
                <img src={"../user_10904350.png"} alt="" />
                <span className="font-semibold text-xs">John Doe</span>
              </div>
            </div>
          </div>
        </div>
        {/* Navbar */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-y-4 gap-x-6 p-5">
          <div className="col-span-1 lg:col-span-2 flex flex-col gap-y-[18px]">
            <div className="flex flex-col gap-y-[18px]">
              <h1 className="text-[28px] font-semibold">Akses Cepat</h1>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-x-3 gap-y-3">
                {/* Akses Cepat */}
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
                      to={""}
                      key={index}
                      className="bg-white p-2.5 drop-shadow flex flex-col gap-y-4 rounded-xl"
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
                    <Link to={""} key={index} className="flex flex-col gap-y-2">
                      <div className="flex gap-x-3">
                        <img
                          src={
                            "../programming-background-collage-sedang.png"
                          }
                          alt=""
                        />
                        <div className="flex flex-col gap-y-1">
                          <span>{proyekTerbaru.title}</span>
                          <p>Batas Waktu {proyekTerbaru.deadline}</p>
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
                          <button className="bg-[#33C3E0] rounded-lg w-fit py-1 px-10 text-white font-semibold">
                            Ambil
                          </button>
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
