//reducer 지침 파일 여러개를 합치기 위한 파일
import { combineReducers } from 'redux';
import authenticateReducer from './authenticateReducer';
import productRducer from './productReducer';

export default combineReducers({ //객체 형태로 reducer들을 전달.
    auth : authenticateReducer, //key : reducer
    product : productRducer,

})