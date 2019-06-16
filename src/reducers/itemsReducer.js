import { FETCH_ITEMS } from '../constants/types';

export default (state=[], action) => {
    switch(action.type) {
        case FETCH_ITEMS:
            const { items } = action;
            return items;    
        default:
            return state;
    }
}