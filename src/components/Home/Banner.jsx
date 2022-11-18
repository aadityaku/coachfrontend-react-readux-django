

import React, { useState, useEffect } from 'react'
import Fotter from './Fotter';

const Banner = () => {
    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
    
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])

      const styles = {
        paperContainer: {
            // height: 512,
            height: screenSize.dynamicHeight,
            backgroundImage: 'url(/images/banner2.jpg)',
            backgroundRepeat:"no-repeat",
            // backgroundSize:"contain",
            width:screenSize.dynamicWidth,
            // width:313,
            backgroundSize: 'cover',
        },
    };
    
  return (
     
    <div className="" style={styles.paperContainer} >
        {/* <Fotter/> */}
    </div>
        
    
  )
}

export default Banner