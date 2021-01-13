import {createStore , applyMiddleware , compose} from 'redux' ;
import combineReducer from '../reducers/index'
import thunk from 'redux-thunk';

/*const middleware =[thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE|| compose ;
const initialState = {} ;
const store = createStore(
    combineReducer ,
    initialState , 
    composeEnhancer(applyMiddleware(...middleware))
);*/

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
    combineReducer,
  compose(applyMiddleware(thunk), devTools)
);

export default store ;

