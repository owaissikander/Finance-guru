import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import landingPageData from '../constant/data'
import { data } from 'autoprefixer'
import Header from '../component/header'
import Hero from '../component/hero'
import Features from '../component/features'
import Test from '../component/test'
import Testimonials from '../component/test'
import Footer from '../component/foooter'
function App() {

  console.log('landingPageData--->', landingPageData);
  const { header, hero, testimonials, features } = landingPageData

  return (
    <>
      {/* header */}
      <Header header={header} />
      {/* hero section */}
      <Hero hero={hero} />
      {/* features section */}

      <Features features={features} />
      {/* testimonials section */}
      <Testimonials testimonials={testimonials} />
      {/* footer */}
      <Footer header={header}/>


    </>
  )
}

export default App
