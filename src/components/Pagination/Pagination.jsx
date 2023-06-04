import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, setPage, page }) => {

  const [width, setWidth] = useState(window.innerWidth)
  const updateDimension = ()=>{
    setWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.removeEventListener('resize', updateDimension)
  },[])

    return (
      <> 
        <style jsx>
          {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none
            }
            .pagination {
              font-size: 14px
            } 
          }
          `}
        </style>
          <ReactPaginate
          className='pagination justify-content-center gap-4 my-4'
          forcePage={page === 1 ? 0 : page - 1}
          nextLabel='>'
          previousLabel='<'
          nextclassName='btn btn-primary next'
          previousclassName='btn btn-primary prev'
          pageclassName='page-item'
          pageLinkclassName='page-link'
          marginPagesDisplayed={width < 576 ? 1 : 2}
          pageRangeDisplayed={width < 576 ? 1 : 2}
          activeclassName='active'
          onPageChange={data=>{
            setPage(data.selected+1)
          }}
          pageCount={info?.pages} /> 
  </>
)
}

export default Pagination 

// const next=()=>{
    
  //   setPage(x=>x+1)
  // }
//   const prev=()=>{ 
//     if(page===1)return
//     setPage(x=>x-1)
// }
//   <div classNameName='container d-flex justify-content-center gap-5 my-5'>
  //       <button onClick={prev} classNameName="btn btn-primary" >prev</button>
  //       <button onClick={next} classNameName="btn btn-primary">next</button> 
  //   </div>
  // )