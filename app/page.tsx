import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CourseOverview from '../components/CourseOverview'
import WhatYouGet from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatYouGet />
      <CourseOverview />
      <Footer />
    </main>
  )
} 