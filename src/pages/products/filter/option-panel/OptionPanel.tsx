import React, { useEffect, useState } from 'react'
import "./OptionPanel.css"

function OptionPanel({children, selectedCount, handleReset, open, option}: {children: JSX.Element, selectedCount: number, handleReset: ()=>void, open: boolean, option: string}) {
  const [isOpen, setIsOpen] = useState<boolean>(open)

  useEffect(()=>{
    setIsOpen(open)
  }, [open])
  
  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: Event) => {
      const target = e.target as HTMLElement

      if (!target.classList.contains("option-label") && !target.closest(".option-panel") || target.classList.contains("option-label") && !target.classList.contains(option) ) {
        setIsOpen(false)
        removeClickOutside()
      }
    }
    const removeClickOutside = () => {
      document.removeEventListener("click", handleClickOutside)
    }

    document.addEventListener("click", handleClickOutside)
    
    return () => {
      removeClickOutside()
    }
  }, [open])
  
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