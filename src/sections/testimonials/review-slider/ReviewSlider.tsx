import React, { CSSProperties } from 'react'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import reviews from '../reviews'
import "./ReviewSlider.css"

function ReviewSlider() {
  return (
    <div className='review-slider custom-pagination-slider'>
        <Swiper
        modules={[Pagination]}
            slidesPerView={2}
            loop
            pagination={{clickable: true}}
        >
            {reviews.map(({rating, author, content}) => (
                <SwiperSlide>
                    <div className="review-wrapper">
                        <div className="rating" style={{"--review-rating": rating} as CSSProperties}></div>
                        <h1 className='content'>{content}</h1>
                        <p className='author'>{author}</p>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  )
}

export default ReviewSlider