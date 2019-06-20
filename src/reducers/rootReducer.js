import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import { reducer as reduxFormReducer } from 'redux-form';
import items from './itemsReducer';
import cart from './cartReducer';

// const rootReducer = combineReducers({
//     form: reduxFormReducer, // mounted under "form"
//     items,
//     cart
// });

export default (history) => combineReducers({
    router: connectRouter(history),
    form: reduxFormReducer, // mounted under "form"
    items,
    cart
})
  
