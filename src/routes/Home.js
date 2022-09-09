import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { headerMappedValue } from '../assets/dummyData'
import FunctionLists from '../components/FunctionLists'
import Header from '../components/Header'
import { browserKeyValue, getloggedInUsersInfo, isLoggedIn, setUserInfoKeyToBrowser } from '../utils'

export const Home = () => {
  const navigate = useNavigate()
  const location = useLocation()
  // const [loggedInUser, setLoggedInUser] = useState({})
  
  // let loggedInUser;
  // setUserInfoKeyToBrowser(browserKeyValue)

  // if(isLoggedIn() === true){
  //   loggedInUser = getloggedInUsersInfo()
  // } else {
  //   console.log("inside");
  //   navigate('/login')
  // }
  
  // const userType = loggedInUser.userType
  const userType = location.state.userType
  const headerValue = headerMappedValue[userType]

  return (
    <div>
      <Header header = {headerValue}/>
      <FunctionLists userType = {userType}/>
    </div>
  )
}
