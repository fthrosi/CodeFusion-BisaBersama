import React from 'react'
import Header from '../../components/myproject/Header'
import ListMyProject from '../../components/myproject/ListMyProject'

const MyProjectLayout = () => {
    return (
        <div className="px-3">
            <Header />
            <section id="proyek" className="mt-4">
                <ListMyProject />
            </section>
            <div className="h-20" />
        </div>
    )
}

export default MyProjectLayout