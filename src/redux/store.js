import authenticateReducer from "./reducers/authenticateReducer";
import productReducer from "./reducers/productReducer";

import {configureStore} from '@reduxjs/toolkit'

    //이전 문법
    /*
        let store = createStore(//store에 productReducer적용, 미들웨어로는 thunk 적용.
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))//applyMiddleware(thunk)미들웨어에 composeWithDevTools에 적용
        );
    */ 

    const store = configureStore({
        reducer:{
            auth : authenticateReducer, //key : reducer
            product : productReducer,
        }
    })

export default store; 

