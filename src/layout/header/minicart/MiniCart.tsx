import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../App'
import { CartActions } from '../../../store/actions/cartActions'
import CartItems from './cart-items/CartItems'
import "./MiniCart.css"

export type CartItems = {
  imgUrl: string,
  title: string, 
  options: string, 
  price: number,
  quantity: number, 
  variantId: string, 
  lineId: string
}[]

const MiniCart = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const [cartItems, setCartItems] = useState<CartItems>([])
  const {cartState: {cartId, isCartOpen}, cartDispatch} = useContext(CartContext)!
  const [loading, setLoading] = useState<boolean>(false)
  const [subTotal, setSubTotal] = useState<number>(0)

  const fetchCartItems = async(loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>>)=> {
    
    if (!loading) setLoading(true)
    try {
      const data = await fetch(`http://localhost:4000/cart-items?cartId=${cartId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
      })
      const {totalQuantity, subTotal, items}: {totalQuantity: number, subTotal: number, items: CartItems} = await data.json()
      // console.log(items);
      console.log(subTotal);
      
      
      if (totalQuantity >= 0) cartDispatch({type: CartActions.UPDATE_TOTAL_QUANTITY, payload: totalQuantity})
      if (items) setCartItems(items)
      if (subTotal) setSubTotal(subTotal)
    } catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    isCartOpen && fetchCartItems(loading, setLoading)
    
  }, [isCartOpen])
  
  return (
          <>
            {loading ? (
              <h1>Loading...</h1>
            ) : (
              cartItems.length <= 0 ? (
                <h1>Cart is empty</h1>
              ) : (
                <div className="mini-cart">
                  <CartItems fetchCartItems={fetchCartItems} cartItems={cartItems}/>
                  <div className="cart-footer">
                    <div className="subtotal-wrapper">
                      <p>Subtotal </p>
                      <p>${subTotal}</p>
                    </div>
                    <div className="footer-buttons-wrapper">
                      <button className='btn btn-view-cart'>view cart</button>
                      <button className='btn btn-checkout'>checkout</button>
                    </div>
                  </div>
                </div>
              ) 
            )}
          </>
  )

})

export default React.memo(MiniCart)