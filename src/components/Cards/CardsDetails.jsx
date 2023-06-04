import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './CardDetail.module.css'

const CardsDetails = () => {
    const { id } = useParams()
    const [fetchedData, setFetchedData] = useState([])
    const {name, image, location, gender, origin, species, status, type } = fetchedData
    const url = 'https://rickandmortyapi.com/api/character/'
  let api = `${url}${id}`
  console.log('datos api',fetchedData);
  useEffect(()=>{
    (async function(){
      const data = await fetch(api)
                  .then(res=>res.json())
                  setFetchedData(data)
    })()
  },[api])

    return (
    <div className={`${styles.cardDetail} container d-flex justify-content-center`}>
        <div className='d-flex flex-column gap-3'>
            <h1 className='text-center'>{name}</h1>
            <img src={image} alt="" className='img-fluid' />
            {
               status === 'Dead' ? <div className='badge bg-danger fs-5'>{status}
               </div> :
              status === 'Alive' ? <div className= 'bg-success text-white fs-5 fw-bold'>{status}
               </div> : status === 'unknown' && <div className=' badge bg-secondary fs-5' >{status}
               </div> 
                        }

        <div className="content">
            <div className="">
              <span className="fw-bold">Gender: {gender}</span>          
            </div>
            <div className="">
              <span className="fw-bold">Species: {species}</span>          
            </div>
            <div className="">
              <span className="fw-bold">Type: { type === '' ? 'Unknown' : type }</span>          
            </div>
            <div className="">
              <span className="fw-bold">Location: {location?.name}</span>          
            </div>
            <div className="">
              <span className="fw-bold">origin: {origin?.name}</span>          
            </div>
            
            </div>
        
        </div>

    </div>
  )
}

export default CardsDetails