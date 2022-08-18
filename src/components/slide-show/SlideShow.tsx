import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/effect-fade"
import "swiper/css/autoplay"
import Slide from './slide/Slide'
import { Pagination, EffectFade, Autoplay } from 'swiper'
import "./SlideShow.css"
import slides from './slides'

function SlideShow() {
    
  return (
    <div className='slider'>
      <Swiper 
        modules={[Pagination, EffectFade, Autoplay]}
        pagination={{clickable: true}}
        spaceBetween={50}
        slidesPerView={1}
        effect={'fade'}
        autoplay={{
          delay: 5000
        }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {slides.map(slide => (
          <SwiperSlide>
            <Slide {...slide}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default SlideShow