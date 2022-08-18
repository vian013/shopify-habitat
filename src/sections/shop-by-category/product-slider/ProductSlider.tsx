import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import productSlides from './product-slides'
import ProductSlide from '../product-slide/ProductSlide'
import "./ProductSlider.css"

function ProductSlider() {
  return (
    <div className={"product-slider"}>
        <Swiper 
            slidesPerView={4}
            spaceBetween={30}
            loop
        >
            {productSlides.map((slide, index) => (
                <SwiperSlide key={index}>
                    <Link to={slide.link}><ProductSlide {...slide}/></Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ProductSlider