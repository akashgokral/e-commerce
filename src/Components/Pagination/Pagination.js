import React from 'react'

const Pagination = ({ totalPosts, cardPerPage, paginate }) => {

    const pagenumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / cardPerPage); i++) {
        pagenumber.push(i);
    }





    return (
        <>
            <nav className='d-flex justify-content-center'>
                <ul className="pagination d-flex">
                    {pagenumber.map(number => (
                        <li className="page-item" key={number}>
                            <a onClick={() => paginate(number)} className="page-link">
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