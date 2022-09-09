import React from 'react'
import { Route , Navigate } from 'react-router-dom'
import { isLoggedIn } from '../utils';

export default function PrivateRoute({component : Component , ...rest}) {
    return(
        <Route {...rest} render = {(props) =>(
                    isLoggedIn() ? 
                        <Component props = {props} />
                         : <Navigate to = '/login' />
                )
            }
        />
    );
}