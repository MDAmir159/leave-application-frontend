import React from 'react'
import { Function } from './routes/Function'
import { LogIn } from './routes/LogIn'
import {Routes, Route} from 'react-router-dom'
import FacultyApplication from './components/FacultyApplication'
import { Home } from './routes/Home'
// import PublicRoute from './RoutingModules/PublicRoute'
// import PrivateRoute from './RoutingModules/PrivateRoute'

export const LeaveApplication = () => {
  
  return (
    <>
        <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/function" element = {<Function />} />
            <Route path = "/function-faculty" element = {<FacultyApplication />} />
            <Route path = "/login" element = {<LogIn />} />
        </Routes>
    </>
  )
}
