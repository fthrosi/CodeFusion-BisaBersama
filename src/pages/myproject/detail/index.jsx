import React from 'react'
import { useParams } from 'react-router-dom'
import DetailProjectLayout from '../../../layouts/myproject/DetailProjectLayout';
import { ListProyek } from '../../../utils/dummy';

const DetailProject = () => {
    const { id } = useParams();
    const data = ListProyek.filter((proyek) => proyek.id == id)[0];

    return (
        <div className="container mx-auto">
            <DetailProjectLayout data={data} />
        </div>
    )
}

export default DetailProject