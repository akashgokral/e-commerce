import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Header from '../Home/Header/Header'
import Store_nav from '../Store/Store_nav'
import "./cart.css"
import cross from "../../Images/cross.svg"
import { REMOVE } from "../Redux/Reducer"

const Cart = () => {

    const dispatch = useDispatch();

    const cartproducts = useSelector((state) => state.cart);
    const handleRemove = (productid) => {
        dispatch(REMOVE(productid))
    }

    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <Store_nav title="Cart" />
                    <div className="product_nav d-flex justify-content-between col-lg-10 mx-auto  mt-5 mb-3" >
                        <div className='col-lg-8'> <h4 className='ms-5'>Product</h4></div>
                        <div className='d-flex justify-content-around col-lg-4'>
                            <h4 >Price</h4>
                            <h4 className='ms-5'>Qty</h4>
                            <h4 className='ms-5 '>Unit Price</h4>
                        </div>
                    </div>
                    <hr className='col-lg-10 mx-auto' />
                    {
                        cartproducts.map(cartproducts => (

                            <div className="cartcard d-flex col-lg-12  justify-content-between  mt-3 mb-5" >
                                <div className='d-flex align-items-center col-lg-7 me-3'>
                                    <div><img src={cross} onClick={() => handleRemove(cartproducts.id)} /></div>
                                    <img src={cartproducts.imgurl} alt="..." className='ms-4' />
                                    <h3 className='ms-4'>{cartproducts.title}</h3>
                                </div>

                                <div className='d-flex  justify-content-around align-items-center col-lg-5 me-5'>
                                    <h4>{cartproducts.price}</h4>
                                    <h4 className='ms-2'>1</h4>
                                    <h4 className='me-5'>Unit Price</h4>
                                </div>

                            </div>


                        ))}
                    <hr className='col-lg-10 mx-auto' />
                    <div className='payment_section  d-flex justify-content-between col-lg-10 mx-auto mt-5 mb-3'>
                        <div className='voucher col-lg-5   my-5'>
                            <input type="text" placeholder='Voucher Code' className='py-2 px-2' /><span className='redeem'>Redeem</span>
                        </div>
                        <div className='payment_values col-lg-5 '>
                            <div className='d-flex justify-content-around'>
                                <p>Subtotal</p>
                                <p className='ms-5'>$998</p>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <p>Shipping Free</p>
                                <p className='ms-2'>$20</p>
                            </div>
                            <div className='d-flex justify-content-around'>
                                <p className='me-3'>Coupon</p>
                                <p className='ms-4'>No</p>
                            </div>
                            <hr className='mt-2 mb-4 responsive_hr' />
                            <div className='d-flex justify-content-around px-4 responsive_1'>
                                <h4>Total</h4>
                                <h4>$1018</h4>
                            </div>
                            <div class="d-grid mt-4 px-4">
                                <button className="btn btn-primary" type="button">Checkout</button>
                            </div>


                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Cart