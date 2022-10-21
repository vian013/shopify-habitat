import React, { forwardRef, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { AppContext, CartContext } from '../../App'
import { closeSidebar } from '../../redux/sidebar/actions'
import { SidebarState } from '../../redux/sidebar/types'
import { RootState } from '../../redux/store'
import { AppActions } from '../../store/actions/actions'
import { CartActions } from '../../store/actions/cartActions'
import MiniCart from '../header/minicart1/MiniCart'
import ProductQuickView from '../product-quickview/ProductQuickView'
import "./Sidebar.css"

const Sidebar = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const {isSidebarOpen, content} = useSelector<RootState>(state => state.sidebar) as SidebarState  
  const {dispatch} = useContext(AppContext)!
  const _dispatch = useDispatch()
    
  const handleCloseSidebar = () => {
    dispatch({type: AppActions.SET_UNBLURRED})
    _dispatch(closeSidebar())
  }

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