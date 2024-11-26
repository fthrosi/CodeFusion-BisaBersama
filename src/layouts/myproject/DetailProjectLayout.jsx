import React from 'react'
import RightSection from '../../components/myproject/detail/RightSection'
import LeftSection from '../../components/myproject/detail/LeftSection'

const DetailProjectLayout = ({data}) => {
    return  (
        <div className="px-3">
            <div className="grid grid-cols sm:grid-cols-2 gap-12">
                <LeftSection data={data} />
                <RightSection data={data} />
            </div>
            <div className="h-20" />
        </div>
    )
}

export default DetailProjectLayout