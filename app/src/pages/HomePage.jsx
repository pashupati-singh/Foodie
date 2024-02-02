import React from 'react'
import { FristPage } from './FristPage'
import { NavBar1 } from './NavBar1'
import { Locationpage } from './Locationpage'
import { Footer } from './Footer'

export const HomePage = () => {
  return (
    <div>
         <FristPage />
     <NavBar1 />
     <Locationpage />
     <Footer />
    </div>
  )
}
