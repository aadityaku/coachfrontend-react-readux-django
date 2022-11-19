import React from 'react'
import Banner from '../components/Home/Banner'
import CardCourse from '../components/Home/CardCourse'

import Company from '../components/Home/Company'
import Fotter from '../components/Home/Fotter'
import { getToken } from '../services/LocalStorageService'
import { getSession } from '../services/SessionStorageservice'

const HomePage = () => {
  
  return (
    <>
    <Banner/>
    <CardCourse/>
     <Company />
    <Fotter/>
    </>
    
  )
}

export default HomePage