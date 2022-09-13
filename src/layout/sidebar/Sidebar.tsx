import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { AppContext, CartContext } from '../../App'
import { AppActions } from '../../store/actions/actions'
import { CartActions } from '../../store/actions/cartActions'
import MiniCart from '../header/minicart/MiniCart'
import ProductQuickView from '../product-quickview/ProductQuickView'
import "./Sidebar.css"

const Sidebar = forwardRef<HTMLDivElement, {}>((props, ref) => {
    const {state: {isSidebarOpen, isQuickViewOpen}, dispatch} = useContext(AppContext)!
    const {cartState: {isCartOpen}, cartDispatch} = useContext(CartContext)!
    const [content, setContent] = useState<string>("") 
    
  const handleCloseSidebar = () => {
    dispatch({type: AppActions.SET_UNBLURRED})
    dispatch({type: AppActions.CLOSE_SIDEBAR})
    dispatch({type: AppActions.CLOSE_QUICKVIEW})
    dispatch({type: AppActions.SET_QUICKVIEW_HANDLE, payload: ""})
    cartDispatch({type: CartActions.CLOSE_CART})
    setContent("")
  }

  useEffect(()=>{
    if (isCartOpen && !isQuickViewOpen) setContent("cart")
    if (isQuickViewOpen && !isCartOpen) setContent("quickview")
  }, [isSidebarOpen, isCartOpen, isQuickViewOpen],
  )

    return (
      <div className={`sidebar-container ${isSidebarOpen?"open":""}`}>
          <div className={`overlay ${isSidebarOpen?"open":""}`} onClick={handleCloseSidebar}></div>
          <div className={`sidebar-wrapper ${isSidebarOpen?"open":""}`} ref={ref}>
            <div className="sidebar-header">
              <h3 className='title'>
                {content==="cart" && "Cart"}
                {content==="quickview" && "Select options"}
              </h3>
              <button className='close-btn' onClick={handleCloseSidebar}>Close</button>
            </div>
            {content==="cart" && <MiniCart />}
            {content==="quickview" && <ProductQuickView />}
          </div>
      </div>
    )

})

export default Sidebar