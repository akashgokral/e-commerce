import React, { useEffect, useRef, useState } from 'react'
import Header from '../Home/Header/Header'
import Store_nav from './Store_nav'
import Section_2 from '../Home/Section_2/Section_2'
import Allproducts from './Allproducts'
import Footer from "../Home/Footer"
import '../styles/store.css'
import { allproducts } from '../Api'
import Pagination from '../Pagination/Pagination'

const Store = () => {



    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const [allProducts] = useState(allproducts);
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
    console.log(gotoTop)
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
                        <div className="brand_div py-3 px-3 mt-4">
                            <h1>BRAND</h1>
                            <ul className='accessories_ul'>
                                <li>Apple </li>
                                <li>LG</li>
                                <li>SAMSUNG</li>
                                <li>XIAOMI</li>
                            </ul>
                        </div>
                        <div className="d-grid mx-auto mt-4">
                            <button className="btn btn-light" type="button">More</button>
                        </div>
                    </div>

                    <div className='col-lg-9'  >
                        <Section_2 />

                        <div ref={TopSection} >   <Allproducts allproducts={currentCards} /></div>

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




                        {/* <Pagination cardPerPage={cardPerPage} totalPosts={allProducts.length} paginate={paginate} /> */}
                    </div>

                </div>
                <Footer />
            </div>



        </>
    )
}

export default Store


