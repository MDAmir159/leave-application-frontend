import axios from 'axios';
import React, {useState} from 'react'
import { currentUser, dummyUser } from '../assets/dummyData'
import { ObjectToBeSavedInBrowser } from '../assets/models';
import { BACKEND_LINK, browserKeyValue, getLoggedIn, getloggedInUsersInfo, HEADERS } from '../utils';
import './FacultyApplicationStyle.css'

const FacultyApplication = () => {
    const user = getloggedInUsersInfo();

    const isLeaveApplicationRejected = user.isLeaveApplicationRejected;
    const [application, setApplication] = useState({
        requestedDaysVacation : 0,
        reasonForLeave : ""
    })

    const saveToBrowserStorage = (value) => {
        const objectToBeSaved = new ObjectToBeSavedInBrowser(true, value)
        getLoggedIn(browserKeyValue, JSON.stringify(objectToBeSaved))
    }

    const onSubmitHandler =  async (e) => {
        e.preventDefault();
        let axiosConfig = HEADERS
        const tempApplication = {
            name :user.name,
            userId : user._id,
            reasonForLeave : application.reasonForLeave,
            userType: user.userType,
            designation :user.designation,
            Department: user.Department,
            requestedDaysVacation : application.requestedDaysVacation,
            totalAvailableVacations : user.totalAvailableVacations,
            isAcceptedByHR : false,
            isAcceptedByRegistrar : false,
            isAcceptedByVC : false
        }
        try {
            const response = await axios.post(BACKEND_LINK + "/application", tempApplication, axiosConfig)
            if (response.status === 201) {
                alert('Application submitted')
            }
        } catch (error) {
            console.log(error);
            alert('Please do it again')
        }

        const newUpdatedUserInfo = {
            ...user,
            isLeaveApplicationRejected: false
          };

          saveToBrowserStorage(newUpdatedUserInfo)

        window.location.reload()
    }

  return (
    <div className='about'>
        <div className='left'>
            <h1>About Me</h1>
            <p><b>{user.name}</b></p>
            <p>{user.designation},</p>
            <p>{user.Department},</p>
            <p>{user.university}</p>
            <p><b>E-mail: </b>{user.email}</p>
            <p><b>Total available leave days: </b>{user.totalAvailableVacations}</p>
        </div>
        {
            (isLeaveApplicationRejected === true) ? (
                <div className='right'>
                    <div className='img-container'>
                        <div className='form' >
                            <form onSubmit={onSubmitHandler}>
                                <label>Requested days for leave</label>
                                <input 
                                    type="number" 
                                    defaultValue={0}
                                    onChange={(e) => {
                                        setApplication({...application, requestedDaysVacation : e.target.value})
                                    }}/>
                                <label>Cause</label>
                                <textarea 
                                    rows="6" 
                                    placeholder="Type your reason here..." 
                                    onChange={(e) => {
                                        setApplication({...application, reasonForLeave : e.target.value})
                                    }}
                                />
                                <button
                                    className='btn'
                                    type = 'submit'
                                >Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='left'>
                    <h1>Your Application is pending</h1>
                    {/* <p><b>{user.name}</b></p>
                    <p>{user.designation},</p>
                    <p>{user.Department},</p>
                    <p>{user.university}</p>
                    <p><b>E-mail: </b>{user.email}</p>
                    <p><b>Total available leave days: </b>{user.totalAvailableVacations}</p> */}
                </div>
            )
        }
        
    </div>
  )
}

export default FacultyApplication