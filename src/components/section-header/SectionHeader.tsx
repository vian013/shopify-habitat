import React from 'react'

function SectionHeader({title, subTitle}: {title: string, subTitle: string}) {
  return (
    <>
        <h1 className={"title"}>{title}</h1>
        <p className={"sub-title"}>{subTitle}</p>
    </>
  )
}

export default SectionHeader