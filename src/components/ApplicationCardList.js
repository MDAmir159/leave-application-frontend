import React, { useEffect } from 'react'
import {users } from '../assets/dummyData'
import './ApplicationCardListStyles.css'
import { useState } from 'react'
import { BACKEND_LINK, getloggedInUsersInfo, HEADERS } from '../utils'
import axios from 'axios'

const CardPiece = ({value, onClickHandlerAccept, onClickHandlerReject}) => {
  const { 
    _id,
    name,
    Department,
    totalAvailableVacations,
    requestedDaysVacation ,
    reasonForLeave
   } = value

   console.log(value);
  return(
    <div className="app-card">
        <h3> {name} </h3>
        <p>- {Department} -</p>
        <p>- <b>{requestedDaysVacation}</b> days are requested -</p>
        <p>- <b>{totalAvailableVacations}</b> days are available -</p>
        <h2>- Cause -</h2>
        <p>{reasonForLeave}</p>
        <button name={_id} className='btn' onClick={onClickHandlerAccept}>ACCEPT</button>
        <button name={_id} className='btn'onClick={onClickHandlerReject}>REJECT</button>
    </div>

  )
}

export const ApplicationCardList = () => {
  const [intelArray, setIntelArray] = useState([])
  let axiosConfig = HEADERS;
  let userDetails = getloggedInUsersInfo()
  let userType = userDetails.userType
  let link = BACKEND_LINK + "/application/" + userType.toString()
  let paramsToBeSentOnPressingCard = {
    userType : userType,
    isRejected : null
  }

  useEffect(async () => {
    try {
      let response = await axios.get(link)
      setIntelArray(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }, []) 

  const onClickHandlerAccept = async (e) => {
    const clickedCardId = e.target.name
    let arr = intelArray.filter(item => item._id !== clickedCardId)
    paramsToBeSentOnPressingCard.isRejected = false
    let apiLink = BACKEND_LINK+"/application/"+clickedCardId.toString()
    // console.log(apiLink);
    try {
      const response = await axios.patch(apiLink, paramsToBeSentOnPressingCard, axiosConfig)
    } catch (error) {
      console.log(error);
    }
    setIntelArray(arr)
  }
  const onClickHandlerReject = async(e) => {
    const clickedCardId = e.target.name
    let arr = intelArray.filter(item => item._id !== clickedCardId)
    paramsToBeSentOnPressingCard.isRejected = true
    let apiLink = BACKEND_LINK+"/application/"+clickedCardId.toString()
    try {
      const response1 = await axios.patch(apiLink, paramsToBeSentOnPressingCard, axiosConfig)
    } catch (error) {
      console.log(error);
    }
    setIntelArray(arr)
  }

  return (
    <div className="app-pricing">
        <div className="app-card-container">
            {
              intelArray.map((value) => {
                return <CardPiece 
                          key = {value._id}
                          value = {value} 
                          setIntelArray = {setIntelArray}
                          onClickHandlerAccept = {onClickHandlerAccept}
                          onClickHandlerReject = {onClickHandlerReject}
                        />
              })
            }
        </div>
    </div>
  )
}

export default ApplicationCardList