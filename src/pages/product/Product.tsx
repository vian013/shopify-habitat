import React, { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../App'
import ColorSelect from '../../components/select/color/ColorSelect'
import QuantitySelect from '../../components/select/quantity/QuantitySelect'
import Select from '../../components/select/Select'
import SizeSelect from '../../components/select/size/SizeSelect'
import { CartActions } from '../../store/actions/cartActions'
import { ProductType } from '../../type/product'
import styles from "./Product.module.css"

function Product() {
  const [product, setProduct] = useState<ProductType | null>(null)
  const params = useParams<{ handle: string }>()
  const productHandle = params.handle
  const formRef = useRef<HTMLFormElement | null>(null)
  const [quantity, setQuantity] = useState(1)
  const {cartState, cartDispatch} = useContext(CartContext)!
  const {cartId} = cartState
  
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:4000/products/${productHandle}`)
      const data = await res.json()
      setProduct(data)
    }

    fetchData()
    
  }, [])

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

    try {
      const options = getOptions()
      const variantId = (await fetchVariantID(options)).variantId
      handleAddToCart(variantId, quantity)
    } catch (error) {
      console.log(error);
    }
    
  }

  const handleAddToCart = async (variantId: string, quantity: number) => {
    try {
      const res = await fetch("http://localhost:4000/add-to-cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({variantId, quantity, cartId})
      })
      if (!cartId) {
        const {id, items} = await res.json()
        cartDispatch({type: CartActions.CREATE_CART, payload: {id, items}})
      } else {
        const {items} = await res.json()
        cartDispatch({type: CartActions.ADD_TO_CART, payload: {items}})
      }
    } catch (error) {
      console.log(error)
      
    }
  }

  const handleDecrease = () => {
    setQuantity(quantity => quantity-1)
  }

  const handleIncrease = () => {
    setQuantity(quantity => quantity+1)
  }
  
  return (
    <div className={styles['product-page']}>
      <div className={styles["product-container"]}>
        <div className={styles["detail-pictures"]}>
          {images.map(({ url }, index) => (
            <div className={styles["img-wrapper"]} key={index}>
              <img src={url} alt={`${title}-image-${index + 1}`} />
            </div>
          ))}
        </div>
        <div className={styles["img-wrapper"]}>
          <img src={featuredImage} alt={handle} />
        </div>
        <div className={styles["content-wrapper"]}>
          <p>{vendor}</p>
          <h1>{title}</h1>
          <p>${price}</p>

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
              <button className={"btn-add-to-cart"} type="submit">Add To Cart</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Product