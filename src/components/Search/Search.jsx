import React from 'react'
import styles from './Search.module.scss'

const Search = ({ setSearch, setPage }) => {
  return (
    <form className='d-flex flex-sm-row flex-column align-item-center justify-content-center gap-4 mb-5' >
        <input 
          className={styles.input} 
          type="text" 
          placeholder='Search for Characters'
          onChange={e=>{
            setPage(1)
            setSearch(e.target.value)
          }}
           
        />    
        <button 
          onClick={e=>{e.preventDefault()}} 
          className={`${styles.btn} btn btn-primary fs-5`}
        >Search</button>
    </form>
  )
}

export default Search