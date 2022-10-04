import React, { Dispatch, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import ShopBtn from '../../components/shop-btn/ShopBtn'
import useFetchCart from '../../custom-hooks/useFetchCart'
import CartItems from '../../layout/header/minicart/cart-items/CartItems'
import messages from '../../messages/messages'
import "./Cart.css"
import styles from "./Cart.module.css"

function Cart() {
  const {
    cartItems,
    cartId,
    subTotal,
    fetchCartItems
  } = useFetchCart()
  const [loading, setLoading] = useState<boolean>(false)
  const {register, handleSubmit} = useForm<{note: string}>({
    defaultValues: {
      note: ""
    }
  })
  
  useEffect(()=>{
    fetchCartItems(loading, setLoading)
  }, [cartId])

  const {cart, orderSummary} = messages.pages.cart
  
  return (
    <div id='cart-page'>
      <div className="page-width">
        {loading ? <h1>Loading...</h1>
        : cartItems.length === 0 ? <h1>Cart is empty</h1>
        : <div className={`${styles["content-wrapper"]}`}>
            <div className="cart-wrapper">
              <h1 className={`${styles["title"]}`}>{cart.title}</h1>
              <div className="cart-headers">
                <p className="product-header">product</p>
                <div className="left-headers">
                  <p className="quantity-header">quantity</p>
                  <p className="total-header">total</p>
                </div>
              </div>
              <CartItems fetchCartItems={fetchCartItems} cartItems={cartItems} showCost/>
            </div>
            <div className="order-summary">
              <h1 className={`${styles["title"]}`}>{orderSummary.title}</h1>
              <form onSubmit={handleSubmit(()=>{})}>
                <p className='add-note'>Add nodes</p>
                <textarea {...register("note")}></textarea>
                <div className="sub-total">
                  <p>Subtotal</p>
                  <strong>${subTotal}</strong>
                </div>
                <button className='submit-btn' type='submit'>
                  <ShopBtn link='/' title='Checkout'/>
                </button>
              </form>
            </div>
          </div>
        }
        <Link className='shop-link shop-btn'  to={"/products"}>Continue shopping</Link>
      </div>
    </div>
  )
}

export default Cart