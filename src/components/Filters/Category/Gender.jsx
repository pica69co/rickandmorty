import React from 'react'
import FilterBtn from '../FilterBtn/FilterBtn'

 const Gender = ({ setPage, setGender }) => {
  const gender = [ 'female', 'male', 'genderless', 'unknown' ]

  return (
    <div className="accordion-item">
    
    <h2 className="accordion-header" id='headinOne'>
      <button 
          className="accordion-button collapsed" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#collapseOne" 
          aria-expanded="false" 
          aria-controls="collapseOne">
        Gender
      </button>
    </h2>
    
    <div 
        id="collapseOne" 
        className="accordion-collapse collapse" 
        data-bs-parent="#accordionExample">
      
      <div className="accordion-body">
        {gender?.map((items, index) => (
          <FilterBtn 
            task={setGender}
            setPage={setPage}
            key={index} 
            name='gender' 
            index={index} 
            items={items}  />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Gender