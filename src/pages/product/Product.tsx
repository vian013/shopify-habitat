import React, { FormEvent, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ColorSelect from '../../components/select/color/ColorSelect'
import Select from '../../components/select/Select'
import { ProductType } from '../../type/product'
import styles from "./Product.module.css"

function Product() {
  const [product, setProduct] = useState<ProductType | null>(null)
  const params = useParams<{ handle: string }>()
  const productHandle = params.handle
  const formRef = useRef<HTMLFormElement | null>(null)
  
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
    console.log(formElements);
    
    let _options: {[key: string] : string} = {}
    
    for (const {name} of options) {
      console.log(name);
      
      const element = formElements.namedItem(name) as HTMLInputElement
      console.dir(element);
      
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

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const options = getOptions()
      console.log(options);
      
      const variantId = (await fetchVariantID(options)).variantId
      console.log(variantId);
    } catch (error) {
      console.log(error);
    }
    
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
                  default:
                    return (
                      <Select key={name} title={name}>
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
            <br />
            <button type="submit">Add To Cart</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Product