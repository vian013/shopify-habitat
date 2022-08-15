import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import Slide from './slide/Slide'
import { Pagination, EffectFade } from 'swiper'
import "./SlideShow.css"

function SlideShow() {
    
  return (
    <div className='slider'>
      <Swiper 
          modules={[Pagination, EffectFade]}
          pagination={{clickable: true}}
          spaceBetween={50}
          slidesPerView={1}
          effect={'fade'}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          >
          <SwiperSlide>
            <Slide 
              imgSrc='https://cdn.shopify.com/s/files/1/0605/2616/6208/files/slide-01_2560x867_crop_center.webp?v=1652267956'
              imgAlt='slide-01'
              subTitle='make your home stylish'
              title='every design has a story'
              btnLink='/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide 
              imgSrc='https://cdn.shopify.com/s/files/1/0605/2616/6208/files/slide-02_2560x867_crop_center.webp?v=1652268557'
              imgAlt='slide-01'
              subTitle='for your dream home'
              title='make a room comfortable'
              btnLink='/'
            />
          </SwiperSlide>
          <SwiperSlide>
            <Slide 
              imgSrc='https://cdn.shopify.com/s/files/1/0605/2616/6208/files/slide-01_2560x867_crop_center.webp?v=1652267956'
              imgAlt='slide-02'
              subTitle='you want it, we build it'
              title='we serve your dream furniture'
              btnLink='/'
            />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SlideShow