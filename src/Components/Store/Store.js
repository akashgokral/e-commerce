import React from 'react'
import Header from '../Home/Header/Header'
import Store_nav from './Store_nav'
import Section_2 from '../Home/Section_2/Section_2'
import Allproducts from './Allproducts'
import Footer from "../Home/Footer"
import '../styles/store.css'


const Store = () => {
    return (
        <>
            <Header />
            <Store_nav />

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-3 filter_section '>
                        <div className="accessories_div py-3 px-3">
                            <h1>Accessories</h1>
                            <ul className='accessories_ul'>
                                <li>Apple Car</li>
                                <li>Air port & wireless</li>
                                <li>Cables & Docks</li>
                                <li>Cases & Films</li>
                                <li>Charging Devices</li>
                                <li>Connected home</li>
                                <li>Headphones</li>
                            </ul>
                        </div>
                        <div className="prices mt-4 px-3">
                            <h1>Prices</h1>
                            <div className="range d-flex justify-content-between ">
                                <p>Ranger:</p>
                                <p>$13.99 - $25.99</p>
                            </div>
                            <input type="range" className='w-100 my-3' />
                        </div>
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


