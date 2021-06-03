import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getAccessToken} from "../services/tokenService";
import {checkAuthentication} from "../services/authService";

export const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                checkAuthentication().then(res => {})

                // console.log("In private route!")
                return getAccessToken()
                    ? (<Component/>)
                    : (<Redirect to={{
                        pathname: '/',
                        state: {from: props.location}
                    }}/>)
            }}
        />
    );
}