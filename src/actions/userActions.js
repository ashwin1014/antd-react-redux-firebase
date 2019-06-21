import { LOG_USER } from '../constants/types';

export const logUser = (signedInUser) => (dispatch) => {
    return dispatch({
        type: LOG_USER,
        signedInUser
    })
}