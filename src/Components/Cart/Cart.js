import React from 'react'
import Header from '../Home/Header/Header'
import Store_nav from '../Store/Store_nav'
import "./cart.css"

const Cart = () => {
    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <Store_nav title="Cart" />
                    <div className="product_nav d-flex justify-content-between col-lg-10 mx-auto mt-5 mb-3" >
                        <h4 className='ms-5'>Product</h4>
                        <div className='d-flex justify-content-around'>
                            <h4 >Price</h4>
                            <h4 className='ms-5'>Qty</h4>
                            <h4 className='ms-5 me-5'>Unit Price</h4>
                        </div>
                    </div>
                    <hr className='col-lg-10 mx-auto' />
                    <div className='text-center my-5'>
                        Added Products1
                        <hr className='col-lg-10 mx-auto responsive_hr' />
                        Added Products2
                    </div>
                    <hr className='col-lg-10 mx-auto' />
                    <div className='payment_section  d-flex justify-content-between col-lg-10 mx-auto mt-5 mb-3'>
                        <div className='voucher col-lg-5   my-5'>
                            <input type="text" placeholder='Voucher Code' className='py-2 px-2' /><span className='redeem'>Redeem</span>
                        </div>
                        <div className='payment_values col-lg-5 '>
                            <div className='d-flex justify-content-between'>
                                <p>Subtotal</p>
                                <p className='ms-5'>$998</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Shipping Free</p>
                                <p className='ms-5'>$20</p>
                            </div>
                            <div className='d-flex justify-content-between'>
                                <p>Coupon</p>
                                <p className='ms-5'>No</p>
                            </div>
                            <hr className='mt-2 mb-4 responsive_hr' />
                            <div className='d-flex justify-content-between px-4 responsive_1'>
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