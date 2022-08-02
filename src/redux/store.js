import {createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

let store = createStore(//store에 productReducer적용, 미들웨어로는 thunk 적용.
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))); //applyMiddleware(thunk)미들웨어에 composeWithDevTools에 적용

export default store;

