import { FETCH_ITEMS } from '../constants/types';

export const fetchItems = (items) => (dispatch) => {
    return dispatch({
        type: FETCH_ITEMS,
        items
    })
}