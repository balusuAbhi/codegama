import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Filter from '../../components/filter/Filter' 
import Allproducts from '../../components/allProducts/Allproducts'


 

function Home({local_variabel,IncAction,DecAction}) {
  return (
   <>
   <Navbar/>
   <div className='homeBody-container'>
    <Filter />
    <Allproducts/>
   </div>
   </>
  )
}

export default Home