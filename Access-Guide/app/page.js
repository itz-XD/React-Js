"use client"

import Cards from '@/Components/Cards'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import Home from '@/Components/Home'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <Home />
      <Cards />
      <Footer />
    </>
  )
}

export default page
