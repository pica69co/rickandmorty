import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Cards.module.scss'

const Cards = ({results, page }) => {
  
    let display
    
    if(results){
        display = results?.map(x=>{
            const { id, name, image, status, location } = x
            return (  
            <Link 
                style={{ textDecoration: 'none'}}
                to={`${page}${id}`} 
                key={id} 
                className="col-lg-4 col-12 mb-4 position-relative text-dark" 
            >
            
            <div className= {`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img className={`${styles.img} img-fluid`} src={image} alt={name}  />
                
                    <div style={{padding:"10px"}} className="content">
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                    </div>
                        <div className="content">
                            <div className="fs-6">Last Location</div>
                            <div className="fs-5">{location?.name}</div> 
                        </div>
                        </div>
                        {
                            status === 'Dead' ? <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}
                            </div> :
                            status === 'Alive' ? <div className={`${styles.badge} position-absolute badge bg-success`}>{status}
                            </div> : status === 'unknown' && <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}
                            </div> 
                        }
                        
            </Link>
                )
        })
    } else{
        display='No characters found'
    }
    
  
    return (
    <>{display}</>
  )
}

export default Cards