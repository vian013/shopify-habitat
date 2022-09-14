import React from 'react'
import "./Pagination.css"

type Props = {
  currentPage: number,
  setCurrentPage: React.Dispatch<number>,
  hasNextPage: boolean,
  hasPreviousPage: boolean
}

function Pagination({currentPage, setCurrentPage, hasNextPage, hasPreviousPage}: Props) {
  const goToPrevPage = () => {
    if (hasPreviousPage) setCurrentPage(currentPage-1)
  }
  
  const goToNextPage = () => {
    if (hasNextPage) setCurrentPage(currentPage+1)
  }

  return (
    <div className="pagination">
        <span className='pagination-btn prev' onClick={goToPrevPage}>←</span>
        <span className='pagination-btn current-page' onClick={()=>{}}>{currentPage}</span>
        <span className='pagination-btn next' onClick={goToNextPage}>→</span>
    </div>
  )
}

export default Pagination