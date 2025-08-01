import React from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import RowList from '../../Components/Rows/RowsList/RowList'
function Home() {
  return (
    <div className='app'>
        <Header/>
        <Banner/>
        <RowList/> 
        <Footer/>
    </div>
  )
}

export default Home