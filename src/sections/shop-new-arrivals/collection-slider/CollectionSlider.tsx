import React, { useEffect, useState } from 'react'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import { BASE_URL } from '../../../App'
import Product from '../../../components/product/Product'
import { ProductType } from '../../../type/product'
import "./CollectionSlider.css"

function CollectionSlider({collectionTab}: {collectionTab: string}) {
    const [products, setProducts] = useState<ProductType[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        const fetchProducts = async() => {
            setLoading(true)
            try {
                const res = await fetch(`${BASE_URL}/collections/${collectionTab}`)
                const _products = await res.json()
                
                setProducts(_products)
            } catch (error) {
                
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
        
    }, [collectionTab])
    
    return (
    <div className='collection-slider'>
        {
            loading 
            ? <h1>Loading...</h1>
            : (
                <Swiper 
                    slidesPerView={4}
                    spaceBetween={30}
                    modules={[Navigation]}
                    navigation
                >
                    {products.map((product, index) => (
                        <SwiperSlide key={index}>
                            <Product product={product}/>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )
        }
    </div>
    )
}

export default CollectionSlider