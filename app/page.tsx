import React from 'react'
import Header from './components/Home/header'
import ImgShowComp from './components/Home/imgShowComp'
// import HomeVideos from './components/Home/Hero'

const page = () => {
  return (
    <div className='overflow-hidden'>
        <Header />
        <ImgShowComp />
    </div>
  )
}

export default page;