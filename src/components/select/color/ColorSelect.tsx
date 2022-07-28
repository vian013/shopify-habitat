import React from 'react'
import Select from '../Select'

function ColorSelect({values}: {values: string[]}) {
  return (
    <Select title='color'>
        <div className='color-panel'>
            {values.map(value => (
                <React.Fragment key={value}>
                <div className="color-option">
                    {value}<input type="radio" name={'Color'} value={value}/>
                </div>
                </React.Fragment>
            ))}
        </div>
    </Select>
  )
}

export default ColorSelect