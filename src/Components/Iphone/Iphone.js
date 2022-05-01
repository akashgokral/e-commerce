import React from 'react'
import { iphone } from '../Api'
import Header from '../Home/Header/Header'
import Card from '../Home/Section_1/Card'

const Iphone = () => {
    return (
        <>
            <Header />

            <div className='container'>
                <div className='row justify-content-center pt-5'>

                    {
                        iphone.map((item) => {
                            return (
                                <>
                                    <Card key={item.id} title={item.title} imgurl={item.imgurl} price={item.price} />
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Iphone