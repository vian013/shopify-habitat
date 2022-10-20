import React, { FormEvent, useCallback, useContext, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AppContext, BASE_URL, CartContext } from '../../App'
import { addToCart, createCart } from '../../redux/cart/actions'
import { CartState } from '../../redux/cart/types'
import { RootState } from '../../redux/store'
import { AppActions } from '../../store/actions/actions'
import { CartActions } from '../../store/actions/cartActions'
import { Option } from '../../type/product'
import ColorSelect from '../select/color/ColorSelect'
import QuantitySelect from '../select/quantity/QuantitySelect'
import Select from '../select/Select'
import SizeSelect from '../select/size/SizeSelect'
import "./ProductContent.css"

type Props = {
    productHandle: string,
    vendor?: string,
    title: string,
    price: number,
    options: Option[]
}

function ProductContent({productHandle, vendor, title, price, options}: Props) {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const cartState = useSelector<RootState>(state => state.cart) as CartState
  const {cart, loading} = cartState

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

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    handleAddToCart(productHandle, quantity)
  }

  const handleAddToCart = async (productHandle: string, quantity: number) => {
    const options = getOptions()
    if (!cart) dispatch(createCart({productHandle, options, quantity})) 
    else {
      const cartId = cart.id
      dispatch(addToCart({productHandle, options, quantity, cartId}))
    } 
  }

  const handleDecrease = useCallback(() => {
    setQuantity(quantity => quantity-1)
  }, [quantity]) 

  const handleIncrease = useCallback(() => {
    setQuantity(quantity => quantity+1)
  }, [quantity])
    
      
    
  return (
    <div className={"product-content"}>
          {vendor&&<p>{vendor}</p>}
          <Link to={`/products/${productHandle}`}>
            <h1 className='title'>{title}</h1>
          </Link>
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
              <button className={"btn btn-add-to-cart"} onClick={handleSubmit}>{loading ? <p>Loading...</p> : <p>Add To Cart</p>}</button>
              
            </div>
          </form>
        </div>
  )
}

export default ProductContent