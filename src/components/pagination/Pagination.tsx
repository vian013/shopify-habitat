import React from 'react'
import "./Pagination.css"

type Props = {
  currentPage: number,
  navigate: number,
  setCurrentPage: React.Dispatch<number>,
  setNavigate: React.Dispatch<number>,
  hasNextPage: boolean,
  hasPreviousPage: boolean
}

function Pagination({currentPage, navigate, setCurrentPage, setNavigate, hasNextPage, hasPreviousPage}: Props) {
  const goToPrevPage = () => {
    if (hasPreviousPage) {
      setNavigate(navigate-1)
      setCurrentPage(currentPage-1)
    }
  }
  
  const goToNextPage = () => {
    if (hasNextPage) {
      setNavigate(navigate+1)
      setCurrentPage(currentPage+1)
    } 
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