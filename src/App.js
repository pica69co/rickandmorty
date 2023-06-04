import React, { useState, useEffect } from "react";
import Cards from "./components/Cards/Cards";
import { Filters } from "./components/Filters/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import Episodes from './components/Pages/Episodes.jsx'
import Location from './components/Pages/Location.jsx'
import Form from './components/Form/Form.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CardsDetails from "./components/Cards/CardsDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
      </div>

      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/:id'} element={<CardsDetails />} />   
        
        <Route path={'/contact'} element={<Form />} />   
        
        <Route path={'/episodes'} element={<Episodes />} />
        <Route path={'/episodes/:id'} element={<CardsDetails />} />
        <Route path={'/location'} element={<Location/>} />
        <Route path={'/location/:id'} element={<CardsDetails />} />
      </Routes>

    </Router>
  )

}




function Home() {
    
  let [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")
  const [species, setSpecies] = useState("Human")
  let [fetchedData, setfetchedData] = useState([])
  let { info, results } = fetchedData

  const url = 'https://rickandmortyapi.com/api/character/?page='
  let api = `${url}${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`
  useEffect(()=>{
    (async function(){
      const data = await fetch(api)
                  .then(res=>res.json())
                  setfetchedData(data)
    })()
  },[api])
  
  return (
    <div className="App">
    <h1 className="text-center mb-4">Characters</h1>        
    <Search 
      setSearch={setSearch}
      setPage={setPage}/>
    <div className="container">
      <div className="row">
        
    <Filters 
      setStatus={setStatus}
      setPage={setPage}
      setGender={setGender}
      setSpecies={setSpecies}
      />
        
        <div className="col-lg-8 col-12">
          <div className="row">
            <Cards page='/' results={results}/>
               
          </div>
        </div>
      </div>
    </div>
      <Pagination 
        info={info}
        setPage={setPage} 
        page={page}/>
      <Footer/>
    </div>
  );
}

export default App;
