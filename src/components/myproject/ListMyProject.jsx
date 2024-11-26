import React from 'react'
import { ListProyek } from '../../utils/dummy'
import ItemProyek from './subcomponents/ItemProyek'

const ListMyProject = () => {
    return (
        <>
            <div className="grid grid-cols sm:grid-cols-2 xl:grid-cols-3 gap-4">
                { ListProyek.map((proyek) => <ItemProyek key={proyek.id} proyek={proyek} /> )}
            </div>
        </>
    )
}

export default ListMyProject