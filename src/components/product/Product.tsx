import React, { useContext } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
import { openQuickView } from '../../redux/quickview/actions'
import { AppActions } from '../../store/actions/actions'
import {ProductType} from "../../type/product"
import "./Product.css"

function Product({product} : {product: ProductType}) {
  // const {dispatch} = useContext(AppContext)!
  const dispatch = useDispatch()
  
  const {
      featuredImage,
      handle,
      title,
      variants,
      vendor, 
      price,
      images
  } = product

  const secondImage = images[1].url
  
  const handleOpenQuickView = () => {
    // dispatch({type: AppActions.OPEN_QUICKVIEW})
    // dispatch({type: AppActions.SET_QUICKVIEW_HANDLE, payload: handle})
    // dispatch({type: AppActions.OPEN_SIDEBAR})
    dispatch(openQuickView(handle))
  }
    
  return (
    <div className={'product-wrapper'}>
        <div className={"img-wrapper"}>
          <div className="quick-view-wrapper" onClick={handleOpenQuickView}>
            <div className="quick-view">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="quick-view-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.96205 9.96248L12.9996 13M11.4999 6.24997C11.4999 9.14945 9.14945 11.4999 6.24997 11.4999C3.35049 11.4999 1 9.14945 1 6.24997C1 3.35049 3.35049 1 6.24997 1C9.14945 1 11.4999 3.35049 11.4999 6.24997Z" stroke="var(--background-color--1)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </div>
            <div className="quick-view-hover">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="quick-view-icon-hover" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.96205 9.96248L12.9996 13M11.4999 6.24997C11.4999 9.14945 9.14945 11.4999 6.24997 11.4999C3.35049 11.4999 1 9.14945 1 6.24997C1 3.35049 3.35049 1 6.24997 1C9.14945 1 11.4999 3.35049 11.4999 6.24997Z" stroke="var(--background-color--2)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span>quick view</span>
            </div>
          </div>
          <Link to={`/products/${handle}`}>
              <img className="lazyload" src={featuredImage} alt={handle} />
              <img className="lazyload second-img" src={secondImage} alt={`${handle}-2`} />
          </Link>
        </div>
        <div className={"content-wrapper"}>
          <p className={'vendor'}>{vendor}</p>
          <Link className={'title'} to={`/products/${handle}`}>
            {title}
          </Link>
          <p className={'price'}>${price}.00</p>
          <div className={"colors"}></div>
          <div className={"review"}></div>
        </div>

    </div>
  )
}

export default Product