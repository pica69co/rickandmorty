import React from 'react'
import Gender from './Category/Gender'
import Status from './Category/Status'
import Species from './Category/Species'

export const Filters = ({ setStatus, setPage, setGender, setSpecies }) => {
  const clear = (e)=>{
    e.preventDefault()
    setStatus('')
    setPage('')
    setGender('')
    setSpecies('')
    window.location.reload(false)
  }

  return (
    <div className='col-lg-3 col-12 mb-5'>
        <div className="text-center fw-bold fs-4 mb-2 ">Filters</div>
        <div 
            onClick={clear}
            style={{cursor:'pointer'}}
             className="text-center text-primary text-decoration-underline">
          Clear Filters
        </div>
        <div className="accordion" id="accordionExample">
          
          <Status setStatus={setStatus} setPage={setPage}/>
          <Species setSpecies={setSpecies} setPage={setPage}/>
          <Gender setGender={setGender} setPage={setPage}/>
        </div>
     
    </div> 
  )
}
