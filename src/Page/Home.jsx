import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Feed from '../components/Feed'
import Review from '../components/Review'
import Spin from "../components/Spin"
import Carousel from '../components/Carousel'
import Card from "../components/Card"
import Heading from '../components/Heading'

const Home = () => {
  return (
    <div>
        <Header/>
        <Feed/>
        <Carousel/>
        <Review/>
        <Heading/>
        <Card/>
        <Spin/>
        <Footer/>
    </div>
  )
}

export default Home