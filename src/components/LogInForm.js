import React, { useState } from 'react'
import './LogInFormStyles.css'
import {useNavigate} from 'react-router-dom'
import { users } from '../assets/dummyData'
import axios from 'axios'
import { ObjectToBeSavedInBrowser, ObjectToBeSentServerFacultyLogIn } from '../assets/models'
import { BACKEND_LINK, browserKeyValue, getLoggedIn, HEADERS } from '../utils'
function LogInForm() {

    const[user, setUser] = useState({
        email : "",
        password : "",
        userType : ""
    })
    const history = useNavigate()

    const saveToBrowserStorage = (value) => {
        const objectToBeSaved = new ObjectToBeSavedInBrowser(true, value)
        getLoggedIn(browserKeyValue, JSON.stringify(objectToBeSaved))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        let axiosConfig = HEADERS;
        const tempUser = new ObjectToBeSentServerFacultyLogIn(user)
        
        if(user.email && user.password && user.userType){
            try {
                const response = await axios.post(BACKEND_LINK+"/faculty/login", tempUser , axiosConfig)
                // console.log(response.data.data);
                if(response.status === 201) {
                    saveToBrowserStorage(response.data.data)
                    history('/', {
                        state : {
                            userType : user.userType,
                            data : response.data.data
                        }
                    })
                } else {
                    alert('Wrong information provided. Please do it corretly')
                }
            } catch (error) {
                if(error.response.status === 401){
                    alert('Wrong information provided. Please do it corretly')
                }
            }
            
        } else {
            alert('Insufficient information')
        }
    }
    
  return (
    <div className='container'>
        <div className='form'>
            <form onSubmit={onSubmitHandler}>
                <label>Email</label>
                <input 
                    type={'email'}
                    onChange = {(e) => setUser({...user, email: e.target.value})} 
                />
                <label>Password</label>
                <input 
                    type={'password'} 
                    onChange = {(e) => setUser({...user, password: e.target.value})} 
                />
                <label>Enter category</label>
                <select 
                    id="cars" 
                    name="carlist" 
                    form="carform" 
                    className='select' 
                    onChange = {(e) => setUser({...user, userType: e.target.value})} 
                >
                    <option value="">Choose option</option>
                    <option value={users.faculty}>Faculty</option>
                    <option value={users.faculty}>Office Staff</option>
                    <option value={users.registrar}>Registrar</option>
                    <option value={users.vc}>Vice Chanceller</option>
                    <option value={users.hr}>HR</option>
                </select>
                <button 
                    className='btn' 
                    type = 'submit'
                >
                    <label>LOG IN</label>
                </button>
            </form>
        </div>
    </div>
        
  )
}

export default LogInForm