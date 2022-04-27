import React, { useRef } from 'react'

const Pagination = ({ totalPosts, cardPerPage, paginate }) => {

    const pagenumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / cardPerPage); i++) {
        pagenumber.push(i);
    }

    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        <>
            <nav className='d-flex justify-content-center' ref={myRef}>
                <ul className="pagination d-flex">
                    {pagenumber.map(number => (
                        <li className="page-item" key={number}>
                            <a onClick={() => { paginate(number); { executeScroll } }} className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </>
    )
}

export default Pagination