import { Divider } from '@mui/material'
import React from 'react'

const Fotter = () => {
  
  const logo = <svg viewBox="0 0 248 31" ><path fill-rule="evenodd" clip-rule="evenodd" d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z" fill="#38bdf8"></path></svg>
  return (
    <div className="container mt-5 bg-black py-5  ">
      <div className="grid grid-cols-4 px-28  justify-center mt-3">
          <div className="container  px-16 ">
            
            <p className="text-2xl text-start ml-5 text-white">CWS</p>
          </div>
          <div className="container  px-12 flex flex-col ">


            <p className="text-xl text-start ml-5 text-white ">Courses</p>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Full Stack Development -Flexible Certificate Course
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            MS in Computer Science
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            MS in Data Science
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
              Full Stack Development - Pay After Placement
            </a>

          </div>
          <div className="container px-16 flex flex-col ">
         




            <p className="text-xl text-start ml-5 text-white">Company</p>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            About Us
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Blog
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Hire From Us
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Careers
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Contact
            </a>
          </div>
          <div className="container  px-16 flex flex-col ">
            <p className="text-xl text-start ml-5 text-white">More</p>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            CWS Coding Contest
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Launchpad
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Sign In
            </a>
            <a href="" className="hover:text-white text-xl mt-2 text-gray-400">
            Create Account
            </a>
          </div>
          
      </div>
      <div className="flex-col flex justify-center">
        <div className="text-center text-white font-bold text-3xl mt-5 hover:underline cursor-pointer hover:text-gray-400">Follow Us</div>
          <div className="flex gap-3">
            <div className="l1">{}</div>
            <div className="l1">{}</div>
            <div className="l1">{}</div>
            <div className="l1">{}</div>
        </div>
        <Divider  light/>
        <div className="flex mt-10 justify-center gap-4">
          <a href="" className="hover:text-white text-xl mt-2 text-gray-400">© 2022 Incanus Technologies Pvt Ltd.</a>
          <a href="" className="hover:text-white text-xl mt-2 text-gray-400">Terms & Conditions</a>
          <a href="" className="hover:text-white text-xl mt-2 text-gray-400">Privacy Policy</a>
          <a href="" className="hover:text-white text-xl mt-2 text-gray-400">Grievance Redressal</a>
        </div>
      </div>
      
    </div>
  )
}

export default Fotter