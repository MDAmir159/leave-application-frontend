
import { ObjectToBeSavedInBrowser } from "./assets/models";

export const browserKeyValue = "LEAVE_APPLICATION_FRONTEND"

export const isLoggedIn = () =>{
    let value = localStorage.getItem(browserKeyValue);
    const obj = JSON.parse(value);
    // console.log(obj.loggedIn);
    return obj.loggedIn;
}

export const getloggedInUsersInfo = () =>{
    let value = localStorage.getItem(browserKeyValue);
    const obj = JSON.parse(value);
    // console.log(obj.userDetails);
    return obj.userDetails;
}
export const getLoggedIn = (key , value) =>{
    localStorage.setItem(key,value);
}

export const getLoggedOut = (key,value) =>{
    localStorage.setItem(key,value);
}

export const setUserInfoKeyToBrowser = (key) => {
    localStorage.setItem(key, (JSON.stringify(new ObjectToBeSavedInBrowser(false, null))))
}

export const BACKEND_PORT_NO = 3000
export const BACKEND_LINK = `http://localhost:${BACKEND_PORT_NO}`
export const HEADERS = {
    headers: {
        'Content-Type': 'application/json'
    }
  }