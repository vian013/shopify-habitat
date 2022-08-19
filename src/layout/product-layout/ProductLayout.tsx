import React, { FormEvent, FunctionComponent, PropsWithChildren, ReactElement, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { AppContext, CartContext } from '../../App'
import ColorSelect from '../../components/select/color/ColorSelect'
import QuantitySelect from '../../components/select/quantity/QuantitySelect'
import Select from '../../components/select/Select'
import SizeSelect from '../../components/select/size/SizeSelect'
import { AppActions } from '../../store/actions/actions'
import { CartActions } from '../../store/actions/cartActions'
import { ProductType } from '../../type/product'
import styles from "./ProductLayout.module.css"
import "./ProductLayout.css"
import "swiper/css"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper'

function ProductLayout({productHandle, children}: {productHandle: string, children: any}) {
  const [product, setProduct] = useState<ProductType | null>(null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const [quantity, setQuantity] = useState(1)
  const {cartState: {cartId}, cartDispatch} = useContext(CartContext)!
  const {dispatch} = useContext(AppContext)!
  const [loading, setLoading] = useState<boolean>(false)
  let hasReview: ReactElement|null = null
  if (children.length) {
    hasReview = children.find((child: {type: {name: string}}) => child.type.name === "Review")
  }
  hasReview = children.type.name === "Review" && children

  useEffect(() => {
    const bullets = document.querySelectorAll(".bullet-img")
    if (!bullets) return
    const renderBullets = () => {
      if (product) {
        const images = product.images
        bullets.forEach((bullet, index) => {
        bullet.setAttribute("src", images![index].url)
      })
      } 
    } 
    if(bullets.length){
        renderBullets()
    }
    else {
      const observer = new MutationObserver((mutations, observer)=> {
          const bullets = document.querySelectorAll(".bullet-img")
          if(bullets.length){
              renderBullets()
              observer.disconnect()
          }
      })
      observer.observe(document, {subtree: true, childList: true})
    }
  }, [product])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/products/${productHandle}`)
      const data = await res.json()
      setProduct(data)
    }

    fetchData()
    
  }, [productHandle])
  
  const fetchVariantID = async (options: Object) => {
    const res = await fetch(`http://localhost:4000/products/${productHandle}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(options)
    })
    const data = await res.json()
    return data
  }
  
  const getOptions = (): {[key: string] : string} => {
    const form = formRef.current!
    const formElements: HTMLFormControlsCollection = form.elements
    
    let _options: {[key: string] : string} = {}
    
    for (const {name} of options) {
      
      const element = formElements.namedItem(name) as HTMLInputElement
      
      if (!element.value) throw new Error("Not selected!")
      _options[name] = element.value
    }

    return _options
  }

  const handleDecrease = useCallback(() => {
    setQuantity(quantity => quantity-1)
  }, [quantity]) 

  const handleIncrease = useCallback(() => {
    setQuantity(quantity => quantity+1)
  }, [quantity])

  if (!product) return <h1>...Loading</h1>
  const {
    featuredImage,
    handle,
    title,
    variants,
    vendor,
    images,
    options
  } = product
  const price = variants[0].price

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!loading) setLoading(true)
    
    try {
      const options = getOptions()
      const variantId = (await fetchVariantID(options)).variantId
      await handleAddToCart(variantId, quantity)
      cartDispatch({type: CartActions.OPEN_CART})
      dispatch({type: AppActions.OPEN_SIDEBAR})
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = async (variantId: string, quantity: number) => {
    try {
      const res = await fetch("http://localhost:4000/cart-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({variantId, quantity, cartId}),
        credentials: "include"
      })
      if (!cartId) {
        const {id, items} = await res.json()
        cartDispatch({type: CartActions.CREATE_CART, payload: {id, items}})
      } else {
        const {items, outOfStockError} = await res.json()
        cartDispatch({type: CartActions.UPDATE_OUT_OF_STOCK, payload: {lineId: outOfStockError?outOfStockError.id:""}})
        
        cartDispatch({type: CartActions.ADD_TO_CART, payload: {items}})
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setLoading(false)
    }
  }

  
  return (
    <div className={`${styles["product-container"]} product-container`}>
      <div className={styles["img-slider"]}>
          <Swiper 
              modules={[Pagination, Navigation]} 
              pagination={{clickable: true,
                  renderBullet(index, className) {
                      return `<div class="${className}">
                                  <img class="bullet-img ${styles["bullet-img"]}"/>
                              </div>`
                  },
              }}
              navigation
          >
              {images.map(({ url }, index) => (
                  <SwiperSlide key={index}>
                      <div className="slide-wrapper">
                          <div className={styles["img-wrapper"]} key={index}>
                          <img src={url} alt={`${title}-image-${index + 1}`} />
                          </div>
                      </div>
                  </SwiperSlide>
              ))}
          </Swiper>
      </div>

      <div className={styles["content-wrapper"]}>
        <p>{vendor}</p>
        <h1>{title}</h1>
        <p>${price}</p> 
        {hasReview && children.props.children}

        <form ref={formRef} onSubmit={handleSubmit}>
          <>
            {options.map(({ name, values }) => {
              switch (name) {
                case "Color":
                  return <ColorSelect key={name} values={values}/>
                case "Size":
                  return <SizeSelect key={name} values={values}/>
                default:
                  return (
                    <Select key={name} title={name} currentValue={values[0]}>
                      <>
                        {values.map(value => (
                            <React.Fragment key={value}>
                            <br />
                            {value}<input type="radio" name={name} value={value}/>
                            </React.Fragment>
                        ))}
                      </>
                    </Select>
                  ) 
              }
            })}
          </>
          <div className="quantity-and-add-to-cart">
            <QuantitySelect handleDecrease={handleDecrease} handleIncrease={handleIncrease} quantity={quantity}/>
            <button className={"btn-add-to-cart"} onClick={handleSubmit}>Add To Cart</button>
            {loading && <p>Loading...</p>}
          </div>
        </form>
      </div>
    </div>
  )
}

type Props = {
    children: ReactElement
}

const Review: FunctionComponent<Props> = ({children}): ReactElement => children

ProductLayout.Review = Review
ProductLayout.SizingGuide = ()=>{}
ProductLayout.ProductDetails = ()=>{}

export default ProductLayout