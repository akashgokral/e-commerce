import React from 'react'

const Card = ({ title, id, imgurl, price }) => {
    return (
        <>
            <div className='col-md-4 col-6 mb-4 pt-5'>
                <div className="card h-100 w-100 text-center p-4 " key={id}>
                    <span className="badge bg-danger ">Hot</span>
                    <div className='card_img_div mt-3'>     <img src={imgurl} className="card-img-top img-fluid" alt={title} ></img></div>
                    <div className="card-body ">
                        <h5 className="card-title mb-0">{title}...</h5>
                        <p className="card-text fw-bold m-2">${price}</p>
                        <a href="#" className="btn btn-outline-dark">Buy Now</a>
                    </div>
                </div>


            </div>



        </>
    )
}

export default Card