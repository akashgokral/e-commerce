
import React from 'react'
import { useState } from 'react';
import products from "../../Api"
import "../../styles/section_1.css"
import { products_1 } from '../../Api';
import Card from './Card';

const Section_1 = () => {
    const [data, setData] = useState(products);
    const [data_1, setData_1] = useState(products_1);
    const [load, setLoad] = useState(false);

    const filterProduct = (cat) => {
        const updatedList = products.filter((x) => x.cat === cat);
        const updatedList2 = products_1.filter((x) => x.cat === cat);
        setData(updatedList);
        setData_1(updatedList2);




    }

    const Load = () => {

        setLoad(true);
    }


    const ShowProducts = () => {




        return (
            <>
                <div className='buttons d-flex justify-content-center mb-2 pb-3 '>
                    <button className='btn btn-outline-none nav-link active  fs-5 filter-btn' onClick={() => { setData(products); setData_1(products_1); }}>All</button>
                    <button className='btn btn-outline-none me-1 fs-5 filter-btn' onClick={() => filterProduct("macbook")}>Mac</button>
                    <button className='btn btn-outline-none me-1 fs-5 filter-btn' onClick={() => filterProduct("iphone")}>iPhone</button>
                    <button className='btn btn-outline-none me-1 fs-5 filter-btn' onClick={() => filterProduct("ipad")}>iPad</button>
                    <button className='btn btn-outline-none me-1 fs-5 filter-btn' onClick={() => filterProduct("accessories")}>Accessories</button>

                </div>
                {
                    data.map((products) => {
                        return (
                            <>
                                <Card key={products.id} title={products.title} imgurl={products.imgurl} price={products.price} />
                            </>
                        )
                    })
                }





                {
                    load &&
                    data_1.map((products_1) => {
                        return (
                            <>
                                <Card key={products_1.id} title={products_1.title} imgurl={products_1.imgurl} price={products_1.price} />

                            </>
                        )
                    })
                }


                <div className='btn_div justify-content-center d-flex'>
                    {load === false ? (<button type="button" className="btn btn-link" onClick={Load}>Load More</button>)
                        : (<button type="button" className="btn btn-link" onClick={() => { setLoad(!load) }}>Show Less</button>)}
                </div>

            </>
        )
    }

    return (
        <>
            <div className='container my-2 py-5 '>
                <div className='row'>
                    <div className='col-12 mb-5'>
                        <h1 className='display-6 fw-bolder text-center'>BEST SELLER</h1><hr />
                    </div>
                </div>
                <div className='row justify-content-center'>
                    {<ShowProducts />}
                </div>


            </div>




        </>
    )
}

export default Section_1


















