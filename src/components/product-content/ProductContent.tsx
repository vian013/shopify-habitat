import React, { FormEvent, useCallback, useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext, CartContext } from '../../App'
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
    const [loading, setLoading] = useState<boolean>(false)
    const [quantity, setQuantity] = useState(1)
    const {cartState: {cartId, isCartOpen}, cartDispatch} = useContext(CartContext)!
    const {state: {isSidebarOpen, isQuickViewOpen}, dispatch} = useContext(AppContext)!

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
    
      const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
    
        if (!loading) setLoading(true)
        
        try {
          const options = getOptions()
          const variantId = (await fetchVariantID(options)).variantId
          await handleAddToCart(variantId, quantity)
          if (isQuickViewOpen) dispatch({type: AppActions.CLOSE_QUICKVIEW})
          if (!isCartOpen) cartDispatch({type: CartActions.OPEN_CART})
          if (!isSidebarOpen) dispatch({type: AppActions.OPEN_SIDEBAR})
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