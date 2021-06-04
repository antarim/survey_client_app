import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                console.log(`in route ${isAuthenticated}`);
                return isAuthenticated
                    ? (<Component/>)
                    : (<Redirect to={{
                        pathname: '/',
                        state: {from: props.location}
                    }}/>)
            }}
        />
    );
}