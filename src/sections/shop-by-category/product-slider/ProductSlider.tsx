import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import productSlides from '../../../messages/product-slides'
import ProductSlide from '../product-slide/ProductSlide'
import "./ProductSlider.css"

function ProductSlider() {
  return (
    <div className={"product-slider"}>
        <Swiper 
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
        >
            {productSlides.map(slide => (
                <SwiperSlide>
                    <Link to={slide.link}><ProductSlide {...slide}/></Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ProductSlider