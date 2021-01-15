import React, { useMemo, useState } from 'react';
import photo from './assets/photo-1.jpg';
import Footer from './components/footer';
import Header from './components/header';
import PropertyCard from './components/PropertyCard';
import data from './data';


function App() {

  const [term, setTerm] = useState("")
  const [focus, setFocus] = useState(false)
  const [search, setSearch] = useState("")

  const filteredData = useMemo(() =>
  {
  if(!term) return data;
  return data.filter(item => item.location.toLowerCase().includes(term.toLowerCase()))
}, [term, data])


 

const [filterDrawer, setFilterDrawer] = useState(
  {
      location: false,
      guest: false
  }
)
const {location, guest}= filterDrawer
  const inputFocusHandle = (e) =>{
     
      const {name} = e.target
      setFocus(true)

    //start logic filterDrawer
    if(name === "location"){
      setFilterDrawer(
          {
              location: true,
              guest: false
          }
      )
      
    }
    else if(name ==="guest"){
  
      setFilterDrawer(
          {
              location: false,
              guest: true
          }
      )
    }else{
       
        setFilterDrawer(
          {
              location: false,
              guest: false
          }
      )
    }
     //end logic filterDrawer

  }


  const inputOnBlurHandle = () => {
      setFocus(false)

      setFilterDrawer(
          {
              location: false,
              guest: false
          }
      )

  }


  const submitHandle = (e) => {
    setSearch(term)
    setTerm("")
    setFocus(false)
    setFilterDrawer(
      {
          location: false,
          guest: false
      }
  )
    e.preventDefault()
  }

  const handleOnchange = (e) => {
    setTerm(e.target.value)
    console.log(e.target.value)
  }

  const filterSearch =useMemo(()=>{
    if(!search) return data
  
    return data.filter(item => item.location.toLowerCase().includes(search.toLowerCase()))
  })
  
  const clickList = (e)=>{
    setTerm(e.currentTarget.getAttribute("value"))
 
    setFilterDrawer(
      {
          location: false,
          guest: false
      }
  )

  }


  const handleClose = () =>{
   
    setFocus(false)
    setFilterDrawer(
      {
          location: false,
          guest: false
      }
    )
  }


 
  return (
    <div>
    <div className="main">

        <div className="container" onMouseOver={console.log("container mouse over is true")}>
           
   
        <Header sumbitOnClick={submitHandle}
        handleOnchange={handleOnchange}
         term={term}
          focus={focus} 
         filteredData={filteredData}
          filterDrawer={filterDrawer}
           inputFocusHandle={inputFocusHandle}
           guest={guest}
           location={location}
           clickList={clickList}
           handleClose={handleClose}
           
           
           />
      

             <div className="property">

          
                 <div className="property-header">
                    <h1 className="title">Stays in Finland</h1>
                    <span>{filterSearch.length}+ stays</span>
                 </div>
              

                 <div className="property-grid">
                    {filterSearch.map((eachData) =>{

                      return (
                        <PropertyCard 
                       
                        key={eachData.id} 
                        images={photo}
                        superHost={eachData.superHost}
                        type={eachData.type}
                        rating={eachData.rating}
                        name={eachData.name}
                        
                        />

                      )
                    })}
                      
                      
                 </div>
             </div>
        </div>
       
       <Footer/>
        
        </div>
        </div>
  );
}

export default App;
