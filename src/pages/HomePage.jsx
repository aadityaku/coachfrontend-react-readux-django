import React from 'react'
import Banner from '../components/Home/Banner'
import { getToken } from '../services/LocalStorageService'
import { getSession } from '../services/SessionStorageservice'

const HomePage = () => {
  // const {user} = getToken();
  // console.log(user);
  // const {user} = getSession()
  // console.log(user);
  return (
    <>
    <Banner/>
    </>
    
  )
}

export default HomePage