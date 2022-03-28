import React from 'react'
import Section_3 from '../Home/Section 3/Section_3'
import Header from './Header/Header'
import Section_1 from './Section_1/Section_1'
import Section_2 from './Section_2/Section_2'
import { section_3 } from '../Api'
import "../styles//home.css"
import Section_4 from './Section_4/Section_4'

const Home = () => {
    return (
        <>
            <Header />
            <Section_1 />
            <Section_2 />

            <div className='card_group container-fluid'>{
                section_3.map(section3 => {
                    return (
                        <Section_3 title={section3.title} imgurl={section3.imgurl} content={section3.content} />
                    )
                })


            }
            </div>
            <Section_4 />

        </>
    )
}

export default Home