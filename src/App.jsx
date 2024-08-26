import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import landingPageData from '../src/constant/data'
import { data } from 'autoprefixer'
import Header from '../src/component/header'
import Hero from '../src/component/hero'
import Features from '../src/component/features'
import Testimonials from '../src/component/test'
import Footer from '../src/component/foooter'
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
