import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { push } from "connected-react-router";

const ProtectedRoute = ({component: Component, authenticated, ...rest}) => {
    // console.log('auth',authenticated)
    return(
        <Route
        {...rest}
        render={props =>
            authenticated === true ? (
            <Component {...props} {...rest} />
          ) : (
            <Redirect to="/"/>
          )
        }
      />
    );
}
const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const { user } = state;
    return {
      user,
      ...ownProps
    }
  }

export default connect(mapStateToProps, {push})(ProtectedRoute)
