import React from 'react'

const InputGroup = ({ total, name, changeID, location }) => {
  //console.log([...Array(total).keys()]);
  
    return (
    <div className="input-group mb-3">
  
  <select className="form-select" id={name}
    onChange={e=>changeID(e.target.value)}>
    <option selected>Choose...</option>
    {[...Array(total).keys()].map(x=>{
        return <option value={ x + 1 }>{name}-{ x + 1 }</option>
    })}
   
  </select>
</div>

  )
}

export default InputGroup