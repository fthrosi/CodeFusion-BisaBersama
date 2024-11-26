import React from 'react';
import { color, statusColor } from '../../../utils/constants';
import Calendar from '../../../assets/icon/calendar.png'
import Team from '../../../assets/icon/team.png'
import Skillset from '../../../assets/icon/skillset.png'
import { Link } from 'react-router-dom';

const ItemProyek = ({proyek}) => {
    return (
        <Link to={`/dashboard/myproject/${proyek.id}`} className="max-w-md rounded shadow-md px-2 py-4">
            <img src={proyek.gambar} className="w-full"/>
            <div className="content py-3">
                <span className={`bg-[${color.secondayColor}] text-white text-sm rounded-md p-1`}>{proyek.kategori}</span>
                <h2 className="text-xl font-medium mt-3">{proyek.nama_proyek}</h2>
                <div className="flex justify-between mt-2">
                    <p className="flex self-center">
                        <img src={Calendar} className="mr-2" />
                        Durasi : {proyek.durasi_proyek}
                    </p>
                    <p className="flex self-center">
                        <img src={Team} className="mr-2" />
                        Tim : {proyek.jumlah_tim}
                    </p>
                </div>
                <p className="flex self-center mt-2">
                    <img src={Skillset} className="mr-2" />
                    Skillset: {proyek.skillset.map((skillset, index) => {
                        if(index != proyek.skillset.length-1) return skillset + ", "

                        return skillset
                    })}
                </p>
            </div>
            <div className="footer flex justify-end">
                <span className={`${statusColor(proyek.status)} rounded-md w-[140px] text-center py-1 text-white font-semibold`}>
                    {proyek.status}
                </span>
            </div>
        </Link>
    )
}

export default ItemProyek