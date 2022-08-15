import React, { FormEvent, useCallback, useContext, useEffect, useRef, useState } from 'react'
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
  const {cartState: {cartId}, cartDispatch} = useContext(CartContext)!
  const [loading, setLoading] = useState<boolean>(false)
  
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
    <div className={styles['product-page']}>
      <div className={styles["product-container"]}>
        <div className={styles["detail-images"]}>
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
              <button className={"btn-add-to-cart"} onClick={handleSubmit}>Add To Cart</button>
              {loading && <p>Loading...</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default React.memo(Product)