import { LOG_USER } from '../constants/types';

let user = {
    signedInUser: null,
    isAuthenticated: false,
    isAdmin: false,
    uid: null  
}

export default (state=user, action) => {
    switch (action.type) {
        case LOG_USER:
            const { signedInUser } = action;
            user = { 
                signedInUser
            }
            return user;
    
        default:
            return state;
    }
}