import React from 'react'
 

const FilterBtn = ({ name, index, items, setPage, task }) => {
  return (
    <div>
        <style jsx>
            {`
                .x:checked + label {
                    background-color: #0b5ed7;
                    color: #fff;
                }
                input[type='radio']{
                    display:none;
                }    
            `}
        </style>
        <div className="form-check">
    <input className="form-check-input x" 
            type="radio" 
            name={name} 
            id={`${name}-${index}`}
            onClick={()=>{
                setPage(1)
                task(items)
                
            }}
            />
    <label className="btn btn-outline-primary" for={`${name}-${index}`}>
      {items}
    </label>
  </div>

    </div>
  )
} 

export default FilterBtn