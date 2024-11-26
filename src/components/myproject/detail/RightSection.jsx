import React, { useState } from 'react'

const RightSection = ({data}) => {
    return (
        <div id="detail_proyek">
            <div className="title-header">
                <h2 className="text-5xl font-semibold">Tugas Mingguan</h2>
            </div>

            { data.detail_proyek.tugas.map((tugas, index) => {
                return (
                    <div className="tugas-proyek mt-5" key={index}>
                        <h2 className="title-week text-3xl font-semibold">
                            Minggu ke-{index+1}
                        </h2>
                        <h2 className="title-proyek text-2xl font-semibold mt-3">
                            {tugas.judul}
                        </h2>
                        <div className="task mt-3">
                            {tugas.task.map((task, index) => {
                                const [changeTask, setChange] = useState(false);
                                return (
                                    <div className="rounded-xl shadow-md mb-2 p-2" key={index}>
                                        <div className="flex flex-row justify-between">
                                            <p className="self-center w-80 md:w-full">{task}</p>
                                            { changeTask ? 
                                                <div className="rounded-full w-8 h-8 bg-green-300 cursor-pointer" onClick={() => setChange(false)} />
                                            :
                                                <div className="rounded-full w-8 h-8 bg-slate-300 cursor-pointer" onClick={() => setChange(true)} />
                                            }
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RightSection