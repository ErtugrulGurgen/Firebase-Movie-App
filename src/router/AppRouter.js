import React, { useContext } from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'
import { AuthContext } from '../context/AuthContext'

const AppRouter = () => {
  const {currentUser} = useContext(AuthContext);
  return (
   <Router>
     <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/details/:id' element={<MovieDetail/>}/>
    </Routes>
   </Router>
    )
}

export default AppRouter;