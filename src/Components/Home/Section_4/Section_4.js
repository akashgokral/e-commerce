import React from 'react'
import Card from '../Section_4/Card'
import '../../styles//section_4.css'
import { featured, featured_1 } from '../../Api'


const Section_4 = () => {
    return (
        <>
            <div className='section_4_heading'><h1>Featured Products</h1></div><hr></hr>

            <div id="carouselExampleControls" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-inner ">

                    <div className="carousel-item active ">
                        <div className='carousel_main d-flex justify-content-center '>
                            {featured.map((feature) => {
                                return (
                                    <>
                                        < Card title={feature.title} imgurl={feature.imgurl} price={feature.price} />
                                    </>
                                )

                            })}
                        </div>
                    </div>

                    <div className="carousel-item  ">
                        <div className='carousel_main d-flex justify-content-center'>
                            {featured_1.map((feature_1) => {
                                return (
                                    <>
                                        < Card title={feature_1.title} imgurl={feature_1.imgurl} price={feature_1.price} />
                                    </>
                                )

                            })}


                        </div>
                    </div>
                </div>


                <button className="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


            <hr></hr>
        </>
    )
}

export default Section_4