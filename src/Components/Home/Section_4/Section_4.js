import React from 'react'
import Card from '../Section_4/Card'
import '../../styles//section_4.css'
import { featured, featured_1 } from '../../Api'

const Section_4 = () => {
    return (
        <>
            <div className='section_4_heading'><h1>Featured Products</h1></div><hr></hr>

            <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel">
                <div class="carousel-inner ">

                    <div class="carousel-item active ">
                        <div className='carousel_main d-flex justify-content-center'>
                            {featured.map((feature) => {
                                return (
                                    <>
                                        < Card title={feature.title} imgurl={feature.imgurl} price={feature.price} />
                                    </>
                                )

                            })}
                        </div>
                    </div>

                    <div class="carousel-item  ">
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


                <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>



        </>
    )
}

export default Section_4