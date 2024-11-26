import React from 'react'
import { color } from '../../../utils/constants'
import Calendar from '../../../assets/icon/calendar.png'
import Team from '../../../assets/icon/team.png'
import Skillset from '../../../assets/icon/skillset.png'

const LeftSection = ({data}) => {
    return (
        <div id="detail_proyek">
            <div className="image-header">
                <img src={data.gambar} className="w-full rounded-xl" />
            </div>

            <div className="rounded shadow-md mt-4 p-4">
                <div className="content">
                    <h2 className="title text-2xl font-semibold">
                        {data.nama_proyek}
                    </h2>
                    <div className={`bg-[${color.secondayColor}] w-52 text-center text-white text-sm rounded-md text-xl p-3 mt-4`}>{data.kategori}</div>
                    <div className="flex justify-between md:justify-start md:gap-12 gap-4 mt-4">
                        <p className="flex text-1xl font-normal">
                            <img src={Calendar} className="mr-2 w-8 h-8" />
                            <span className="self-center">Durasi : {data.durasi_proyek}</span>
                        </p>
                        <p className="flex text-1xl font-normal">
                            <img src={Team} className="mr-2 w-8 h-8" />
                            <span className="self-center">Tim : {data.jumlah_tim}</span>
                        </p>
                    </div>
                    <p className="flex mt-5">
                        <img src={Skillset} className="mr-2 w-8 h-8" />
                        <span className="self-center">Skill yang dibutuhkan</span>
                    </p>
                    <div className="flex mt-4 gap-2">
                        {data.skillset.map((skill, index) => {
                            return (
                                <div key={index} className={`rounded-xl bg-[${color.secondayColor}] text-white px-3`}>
                                    {skill}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="rounded shadow-md mt-4 p-4">
                <div className="content">
                    <div className="deskripsi-proyek">
                        <h2 className="title text-2xl font-semibold">
                            Deskripsi Proyek
                        </h2>
                        <p className="text-md mt-2">
                            {data.detail_proyek.deskripsi}
                        </p>
                    </div>
                    <div className="tujuan-proyek mt-2">
                        <p className="text-md">
                            Tujuan Pengerjaan Proyek:
                        </p>
                        <div className="list-decimal">
                            {data.detail_proyek.tujuan.map((detail, index) => <li key={index}>{detail}</li>)}
                        </div>
                    </div>
                    <div className="tujuan-proyek mt-2">
                        <p className="text-md">
                            Fitur yang akan dikembangkan:
                        </p>
                        <div className="list-decimal">
                            {data.detail_proyek.fitur.map((fitur, index) => <li key={index}>{fitur}</li>)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeftSection