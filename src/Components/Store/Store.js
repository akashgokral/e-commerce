import React from 'react'
import Header from '../Home/Header/Header'
import Store_nav from './Store_nav'
import Section_2 from '../Home/Section_2/Section_2'
import Allproducts from './Allproducts'
import Footer from "../Home/Footer"


const Store = () => {
    return (
        <>
            <Header />
            <Store_nav />

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 filter_section'>

                    </div>

                    <div className='col-lg-9'>
                        <Section_2 />

                        <Allproducts />
                    </div>
                    <Footer />






                </div>
            </div>



        </>
    )
}

export default Store