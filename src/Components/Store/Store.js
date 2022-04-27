import React, { useEffect, useRef, useState } from 'react'
import Header from '../Home/Header/Header'
import Store_nav from './Store_nav'
import Section_2 from '../Home/Section_2/Section_2'
import Allproducts from './Allproducts'
import Footer from "../Home/Footer"
import '../styles/store.css'
import { allproducts } from '../Api'


const Store = () => {



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [allProducts, setallProducts] = useState(allproducts);
    const [currentPage, setCurrentPage] = useState(1);
    const [cardPerPage] = useState(8);


    const indexofLastCard = currentPage * cardPerPage;
    const indexofFirstCard = indexofLastCard - cardPerPage;
    const currentCards = allProducts.slice(indexofFirstCard, indexofLastCard);

    const paginate = (pagenumber) => setCurrentPage(pagenumber);

    const pagenumber = [];

    for (let i = 1; i <= Math.ceil(allProducts.length / cardPerPage); i++) {
        pagenumber.push(i);
    }

    const TopSection = useRef(null);
    const gotoTop = () => {
        window.scrollTo({ top: TopSection.current.offsetTop })
    }

    const filterItem = (brands) => {
        const updatedItems = allProducts.filter((x) => x.brand === brands);
        setallProducts(updatedItems);
    }



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
                                <li>Mobiles </li>
                                <li>Macbook </li>
                                <li>Headphones</li>
                                <li>Watches </li>
                                <li>Charging Devices</li>


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
                        <div className="brand_div py-3 px-3 mt-4">
                            <h1>BRAND</h1>
                            <ul className='accessories_ul'>
                                <li onClick={() => setallProducts(allProducts)}>All </li>
                                <li onClick={() => filterItem('apple')}>Apple </li>
                                <li onClick={() => filterItem('oneplus')}>One Plus</li>
                                <li onClick={() => filterItem('samsung')}>SAMSUNG</li>
                                <li onClick={() => filterItem('xiaomi')}>XIAOMI</li>
                                <li onClick={() => filterItem('oppo')}>OPPO</li>
                            </ul>
                        </div>
                        <div className="d-grid mx-auto mt-4">
                            <button className="btn btn-light" type="button">More</button>
                        </div>
                    </div>

                    <div className='col-lg-9'  >
                        <Section_2 />

                        <div ref={TopSection} >
                            <Allproducts allproducts={currentCards} />
                        </div>


                        <nav className='d-flex justify-content-center'>
                            <ul className="pagination d-flex">
                                {pagenumber.map(number => (
                                    <li className="page-item" key={number} onClick={gotoTop}>
                                        <a onClick={() => paginate(number)} className="page-link">
                                            {number}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                </div>
                <Footer />
            </div>



        </>
    )
}

export default Store


