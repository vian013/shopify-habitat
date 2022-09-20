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
import SectionHeader from '../../components/section-header/SectionHeader'

type Props = {
  slides: Slide[]
}

type Slide = {
  imgUrl: string, 
  title: string, 
  description: string,
  btnLink: string
}

function ImageTextSlider({slides}: Props) {
  return (
    <div className='image-text-slider section custom-pagination-slider'>
      <Swiper 
        modules={[Pagination, EffectFade]}
        pagination={{clickable: true}}
        effect='fade'
      >
        {slides.map(({imgUrl, title, description, btnLink}) => (
          <SwiperSlide key={title}>
            <div className={`${styles["slide-wrapper"]}`}>
              <div className="img-wrapper">
                <img loading='lazy' src={imgUrl} alt={title}/>
              </div>
              <div className={`${styles["content-wrapper"]}`}>
                <SectionHeader title={title} subTitle={description}/>
                {btnLink && (
                  <Link to={btnLink} className="shop-btn">{messages.btn.shopBtn}</Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ImageTextSlider