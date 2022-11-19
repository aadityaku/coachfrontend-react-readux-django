import React from 'react'

const Company = () => {
    const company = "assets/images/company.webp"
  return (
    <div className="container  mt-28">
        <div className="text-center px-28 text-gray-900 text-2xl font-semibold tracking-normal">CWS  STUDENTS  WORK   AT  TOP  COMPANIES</div>
           <img src= {company} alt="company" className='px-24 h-4/5' />
    </div>
  )
}

export default Company