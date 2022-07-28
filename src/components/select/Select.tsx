import React from 'react'
import { JsxAttribute } from 'typescript'

function Select({title, children} : {title: string, children?: JSX.Element}) {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  )
}

export default Select