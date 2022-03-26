import React from 'react'

const Card = ({ title, id, imgurl, price }) => {
    return (
        <>
            <div className='col-md-3 mb-4'>
                <div className="card h-100 text-center p-4 " key={id}>
                    <span className="badge bg-danger mx-2">Hot</span>
                    <img src={imgurl} className="card-img-top" alt={title} height="180px"></img>
                    <div className="card-body ">
                        <h5 className="card-title mb-0">{title}...</h5>
                        <p className="card-text fw-bold m-2">${price}</p>
                        <a href="#" className="btn btn-outline-dark  m-2">Buy Now</a>
                    </div>
                </div>


            </div>



        </>
    )
}

export default Card