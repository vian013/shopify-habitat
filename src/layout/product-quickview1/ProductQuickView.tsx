import React, { useContext, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AppContext, BASE_URL } from '../../App'
import { ProductType } from '../../type/product'
import "./ProductQuickView.css"
import "swiper/css"
import "swiper/css/scrollbar"
import { Scrollbar } from 'swiper'
import ProductContent from '../../components/product-content1/ProductContent'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { QuickViewState } from '../../redux/quickview/types'

function ProductQuickView() {
  const [product, setProduct] = useState<ProductType | null>(null)
  const {handle} = useSelector<RootState>(state => state.quickView) as QuickViewState


  useEffect(()=>{
    const fetchProduct = async() => {
      try {
        const res = await fetch(`${BASE_URL}/products/${handle}`)
        const product = await res.json()
        setProduct(product)
      } catch (error) {
        console.log(error);
      }
    }

    fetchProduct()
  }, [handle])
  
  if (!product) return (
    <h1>Loading...</h1>
  )
  else {
    const {images, title, options, variants, handle} = product
    const price = variants[0].price
    
    return (
        <div className={`product-quickview-container`}>
            <div className="product-quickview-wrapper">
              <div className="img-slider">
                <Swiper
                  modules={[Scrollbar]}
                  slidesPerView={2}
                  scrollbar
                >
                  {images.map(({url}, index) => (
                    <SwiperSlide key={index}>
                      <div className="img-wrapper" key={index}>
                        <img src={url} alt={`${handle}-${index}`} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
              <ProductContent 
                title={title}
                productHandle={handle}
                price={price}
                options={options}
              />
            </div>
        </div>
      )
  }
}

export default ProductQuickView