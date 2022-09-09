import React from 'react'
import './FunctionListsStyles.css'
import {Link } from 'react-router-dom'
import { dashboardData, users,} from '../assets/dummyData'

const CardPiece = (props) => {
  const { sectionName,
          operation,
          noOnCampus,
          noOfDepartments,
          upcomingEvents,
          broadcastedMessage,
          isDisabled } = props.value
  const userType = props.userType
  return(
    <div className="card">
        <h3>- {sectionName} -</h3>
        <span className="bar"></span>
        <p className="btc">{operation}</p>
        <p>- {noOnCampus} -</p>
        <p>- {noOfDepartments} -</p>
        <p>- {upcomingEvents} -</p>
        <p>- {broadcastedMessage} -</p>
        <Link 
          to = {userType === users.faculty ? "/function-faculty" : "/function"} 
          className= {isDisabled ? "btn" : "disable-link"}
        >Enter</Link>
    </div>

  )
}

export const FunctionLists = (props) => {
  let intelArray, userType;
  
  userType = props.userType;
  intelArray = dashboardData[userType]

  return (
    <div className="pricing">
        <div className="card-container">
            {
              intelArray.map((value, index) => {
                return <CardPiece value = {value} userType = {userType}/>
              })
            }
        </div>
    </div>
  )
}

export default FunctionLists