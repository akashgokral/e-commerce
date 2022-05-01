import React from 'react'
import { watches } from '../Api'
import Header from '../Home/Header/Header'
import Card from '../Home/Section_1/Card'

const Watches = () => {
    return (
        <>
            <Header />
            <div className='container'>
                <div className='row justify-content-center pt-5'>

                    {
                        watches.map((item) => {
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

export default Watches