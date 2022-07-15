import React from 'react'
import { useContext } from 'react'
import { forwardRef } from 'react'
import shopList from '../../../messages/shop-list'
import { shopContext } from '../Header'
import "./ShopPanel.css"

const ShopPanel = forwardRef<HTMLDivElement>((props, ref) => {
    const {openShopPanel, closeShopPanel} = useContext(shopContext)!

    return (
      <div style={{position: "relative"}}>
          <div className='shop-panel' ref={ref} onMouseOver={openShopPanel} onMouseLeave={closeShopPanel}>
              <div className="shop-list-wrapper">
                  {shopList.map(({name, link, list}) => (
                      <div key={name} className='list-column'>
                          <a className='list-title' href={link}>{name}</a>
                          <div className="list-wrapper">
                              {list.map(({name, link}) => (
                                  <a className='link-wrapper' key={name} href={link}>{name}</a>
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>
    )
})

export default ShopPanel