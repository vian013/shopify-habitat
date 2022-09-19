import React, { useEffect, useState } from 'react'
import "./OptionPanel.css"

type Props = {
  children: JSX.Element, 
  selectedCount: number, 
  handleReset: ()=>void, 
  open: boolean, 
  option: string,
  resetOptionPanel: ()=>void
}

function OptionPanel({children, selectedCount, handleReset, open, option, resetOptionPanel}: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(open)

  useEffect(() => {
    if (open) setIsOpen(open)

    const handleClickOutside = (e: Event) => {
      if (!isOpen) return
      const target = e.target as HTMLElement

      if (!target.classList.contains("option-label") && !target.closest(".option-panel") || target.classList.contains("option-label") && !target.classList.contains(option) ) {
        setIsOpen(false)
        resetOptionPanel()
        removeClickOutside()
      }
    }
    const removeClickOutside = () => {
      document.removeEventListener("click", handleClickOutside)
    }

    if (isOpen) document.addEventListener("click", handleClickOutside)
    
    return () => {
      removeClickOutside()
    }
  }, [isOpen, open])
  
  return (
    <div className={`option-panel ${isOpen?"open":""}`}>
        <div className="option-content">
            {children}
        </div>
        <div className="footer">
            <p>{selectedCount} selected</p>
            <button className='reset-btn' onClick={handleReset}>Reset</button>
        </div>
    </div>
  )
}

export default OptionPanel