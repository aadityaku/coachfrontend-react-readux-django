import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom"
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Header from './components/Home/Header';
import RegisterPage from './pages/RegisterPage';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, storeToken } from './services/LocalStorageService';
import { setUserSession, setUserToken } from './features/auth/authSlice';
import { useLoginRefreshStudentMutation } from './features/coach/Index';
import OurCourse from './pages/OurCourse';
import StudentDashboard from './pages/StudentDashboard';
function App() {
  const dispatch = useDispatch()
  const [refreshToken,{isLoading}] = useLoginRefreshStudentMutation()
  const  data = useSelector(state => state.auth)

  const handleRefresh = async (e) => {
    let {refresh_token,user} = getToken()
    const actualData = {
      refresh:refresh_token
    }
      const res = await refreshToken(actualData)
      if(isLoading){
        return (
          <div className="h3">Please wait</div>
        )
      }
     if(res.error){
       return (
        <div className="h3">Please login</div>
       )
     }
     if(res.data){
      console.log(res.data)
      let {access} = res.data
      storeToken({access,refresh:refresh_token,user})
     }
    
  }

  useEffect((data) => {
    if(data){
      setInterval(async () => {
        await handleRefresh()
      
        }, 1000 * 60 * 19); //After 19 minutes refresh the tocken
      return clearInterval()
    }
   
    }, [])
  let {access_token,user} = getToken()
  useEffect(() => {
      
      dispatch(setUserToken({access_token:access_token}))
      dispatch(setUserSession({user:user}))
      
  },[access_token,user,dispatch])

  

  return (
    <BrowserRouter>

      <Header data={data}/>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={!data.access_token ? <LoginPage/> : <Navigate to='/' />}/>
        <Route path='/register' element={!data.access_token ? <RegisterPage/> : <Navigate to='/' />}/>
        <Route path='/course' element={data.access_token ? <OurCourse/> : <Navigate to='/login'/>}/>
        <Route path='/dahsboard' element={data.access_token ? <StudentDashboard/> : <Navigate to="/login"/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
