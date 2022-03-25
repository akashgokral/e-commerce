import React from 'react'
import "../styles//section_3.css"

const Section_3 = ({ title, content, imgurl }) => {
    return (
        <>

            <div className="card m-2 p-3 d-flex justify-content-center align-items-center">
                <img src={imgurl} className="card-img-top section3_img"></img>
                <div className="card-body text-items-center">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{content}</p>

                </div>
            </div>




        </>
    )
}

export default Section_3