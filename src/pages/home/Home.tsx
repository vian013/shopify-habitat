import React from 'react'
import AnnouncementSlider from '../../components/announcement-slider/AnnouncementSlider'
import SlideShow from '../../components/slide-show/SlideShow'
import BrandLogos from '../../sections/brand-logos/BrandLogos'
import ShopByCategory from '../../sections/shop-by-category/ShopByCategory'
import ShopNewArrivals from '../../sections/shop-new-arrivals/ShopNewArrivals'

function Home() {
  return (
    <div className='homepage'>
        <SlideShow />
        <AnnouncementSlider />
        <ShopByCategory />
        <BrandLogos />
        <ShopNewArrivals />
    </div>
  )
}

export default Home