import React from 'react'
import FilterBtn from '../FilterBtn/FilterBtn'

const Status = ({ setStatus, setPage }) => {
  const status = ['Alive', 'Dead', 'Unknown']

  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button 
          className="accordion-button" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseThree" 
          aria-expanded="true" 
          aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div 
        id="collapseThree" 
        className="accordion-collapse collapse" 
        data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3"> 
        {status?.map((items, index)=>(
        <FilterBtn 
          setPage={setPage}
          task={setStatus}
          key={index} 
          name={'status'} 
          index={index} 
          items={items} />
        
        ))}
        
      </div>
    </div>
  </div>
  )
}

export default Status

//2:18 joy