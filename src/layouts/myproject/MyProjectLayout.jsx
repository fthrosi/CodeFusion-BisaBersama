import React from 'react'
import Header from '../../components/myproject/Header'
import ListMyProject from '../../components/myproject/ListMyProject'

const MyProjectLayout = () => {
    return (
        <>
            <Header />
            <section id="proyek" className="mt-4">
                <ListMyProject />
            </section>
            <div className="h-20" />
        </>
    )
}

export default MyProjectLayout