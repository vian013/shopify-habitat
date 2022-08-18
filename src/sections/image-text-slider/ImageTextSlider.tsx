import React from 'react'
import { EffectFade, Pagination } from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import styles from "./ImageTextSlider.module.css"
import "./ImageTextSlider.css"
import slides from './slides'
import { Link } from 'react-router-dom'
import messages from '../../messages/messages'

function ImageTextSlider() {
  return (
    <div className='image-text-slider section'>
      <Swiper 
        modules={[Pagination, EffectFade]}
        pagination={{clickable: true}}
        effect='fade'
      >
        {slides.map(({imgUrl, imgWidth, imgHeight, title, description}) => (
          <SwiperSlide key={title}>
            <div className={`${styles["slide-wrapper"]}`}>
              <div className="img-wrapper">
                <img
                 width={imgWidth} height={imgHeight} 
                 loading='lazy' src={imgUrl} alt={title} sizes={"1423px"}/>
              </div>
              <div className={`${styles["content-wrapper"]}`}>
                <h1 className="title">{title}</h1>
                <p className="description">{description}</p>
                <Link to={"/"} className="shop-btn">{messages.btn.shopBtn}</Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageTextSlider