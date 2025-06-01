import React from 'react'
import MainBanner from '../Components/MainBanner'
import Categories from '../Components/Categories'
import BestSeller from '../Components/BestSeller'
import BottomBanner from '../Components/BottomBanner'
import NewsLatter from '../Components/NewsLatter'
// import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='mt-10'>
            <MainBanner />
            <Categories />
                        <BestSeller />
                        <BottomBanner />
                        <NewsLatter/>
                        {/* <Footer/> */}


    </div>
  )
}

export default Home
