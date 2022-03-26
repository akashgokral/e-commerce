
import React from 'react'
import { useState } from 'react';
import products from "../../Api"
import "../../styles/section_1.css"
import { products_1 } from '../../Api';

const Section_1 = () => {
    const [data, setData] = useState(products);
    const [data_1, setData_1] = useState(products_1);

    const filterProduct = (cat) => {
        const updatedList = products.filter((x) => x.cat === cat);

        setData(updatedList);
        console.log(updatedList)
    }




    const ShowProducts = () => {
       return (
          <>

        const Load = () => {
            {
                data_1.map((products_1) => {
                    return (
                        <>
                            <div className='col-md-3 mb-4'>
                                <div className="card h-100 text-center p-4 " key={products_1.id}>
                                    <img src={products_1.imgurl} className="card-img-top" alt={products_1.title} height="180px"></img>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{products_1.title}...</h5>
                                        <p className="card-text fw-bold m-2">${products_1.price}</p>
                                        <a href="#" className="btn btn-outline-dark  m-2">Buy Now</a>
                                    </div>
                                </div>


                            </div>

                        </>
                    )
                })
            }
        }

                <div className='buttons d-flex justify-content-center mb-5 pb-5 '>
                    <button className='btn btn-outline-none me-2 fs-5' onClick={() => setData(products)}>All</button>
                    <button className='btn btn-outline-none me-2 fs-5' onClick={() => filterProduct("macbook")}>Mac</button>
                    <button className='btn btn-outline-none me-2 fs-5' onClick={() => filterProduct("iphone")}>iPhone</button>
                    <button className='btn btn-outline-none me-2 fs-5' onClick={() => filterProduct("ipad")}>iPad</button>
                    <button className='btn btn-outline-none me-2 fs-5' onClick={() => filterProduct("accessories")}>Accessories</button>
                </div>
                {
                    data.map((products) => {
                        return (
                            <>
                                <div className='col-md-3 mb-4'>
                                    <div className="card h-100 text-center p-4 " key={products.id}>
                                        <span className="badge bg-danger mx-2">Hot</span>
                                        <img src={products.imgurl} className="card-img-top" alt={products.title} height="180px"></img>
                                        <div className="card-body ">
                                            <h5 className="card-title mb-0">{products.title}...</h5>
                                            <p className="card-text fw-bold m-2">${products.price}</p>
                                            <a href="#" className="btn btn-outline-dark  m-2">Buy Now</a>
                                        </div>
                                    </div>


                                </div>

                            </>
                        )
                    })
                }




                <button type="button" className="btn btn-link" onClick={Load}>Load More</button>






            </>
        )
    }

    return (
        <>
            <div className='container my-2 py-5'>
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


















