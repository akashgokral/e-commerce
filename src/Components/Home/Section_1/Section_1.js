
import React from 'react'
import { useState } from 'react';
import products from "../../Api"

const Section_1 = () => {
    const [data, setData] = useState(products);

    const ShowProducts = () => {
        return (
            <>
                <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                    <button className='btn btn-outline-dark me-2 '>All</button>
                    <button className='btn btn-outline-dark me-2 '>Mac</button>
                    <button className='btn btn-outline-dark me-2 '>iPhone</button>
                    <button className='btn btn-outline-dark me-2 '>iPad</button>
                    <button className='btn btn-outline-dark me-2 '>Accessories</button>
                </div>
                {
                    data.map((products) => {
                        return (
                            <>
                                <div className='col-md-3 mb-4'>
                                    <div class="card h-100 text-center p-4" key={products.id}>
                                        <img src={products.imgurl} class="card-img-top" alt={products.title} height="180px"></img>
                                        <div class="card-body">
                                            <h5 class="card-title mb-0">{products.title}...</h5>
                                            <p class="card-text fw-bold m-2">${products.price}</p>
                                            <a href="#" class="btn btn-outline-dark  m-2">Buy Now</a>
                                        </div>
                                    </div>


                                </div>

                            </>
                        )
                    })
                }





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






















// import React, { useEffect } from 'react'
// import "../styles/section_1.css"
// import { useState } from 'react'
// import products from "../Api.js"







// const Section_1 = () => {


//     const ShowProducts = () => {
//         return (
//             <>
//                 <div className='buttons d-flex justify-content-center mb-5 pb-5'>
//                     <button className='btn btn-outline-dark me-2 '>All</button>
//                     <button className='btn btn-outline-dark me-2 '>Mac</button>
//                     <button className='btn btn-outline-dark me-2 '>iPhone</button>
//                     <button className='btn btn-outline-dark me-2 '>iPad</button>
//                     <button className='btn btn-outline-dark me-2 '>Accessories</button>
//                 </div>
// {
//     filter.map((products) => {
//         return (
//             <>
//                 <div className='col-md-3'>
//                     <div class="card">
//                         <img src={products.imgurl} class="card-img-top" alt={products.title}></img>
//                         <div class="card-body">
//                             <h5 class="card-title">{products.title}</h5>
//                             <p class="card-text">${products.price}</p>
//                             <a href="#" class="btn btn-primary">Buy Now</a>
//                         </div>
//                     </div>


//                 </div>

//             </>
//         )
//     })
//               }





//             </>
//         )
//     }





//     return (
//         <>
//             <div>
//                 <div className='container my-5 py-5'>

//                     <div className='row'>
//                         <div className='col-12 mb-5'>
//                             <h1 className='display-6 fw-bolder text-center'>BEST SELLER</h1><hr />
//                         </div>
//                     </div>

//                     <div className='row justify-content-center'>
//                         {<ShowProducts />}
//                         {/* {loading ? <Loading /> : <ShowProducts />} */}

//                     </div>


//                 </div>

//             </div>

//         </>
//     )
// }

// export default Section_1