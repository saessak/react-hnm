import {createSlice} from '@reduxjs/toolkit';

let initialState={
    productList:[], 
    selectedItem:null,
}

// 이전 문법
/*
    function productRducer(state=initialState, action){
        let {type, payload} = action
        switch(type){
            case "GET_PRODUCT_SUCCESS" :
                return{...state, productList:payload.data}

            case "GET_PRODUCT_DETAIL" :
                return{...state,selectedItem:payload.data}

            default : //기본값 설정.
                return {...state} 
        }
    }

    export default productRducer;
*/

// 최신문법(redux toolkit)
const productSlice = createSlice({ //productSlice에 createSlice가 반환하는 값을 저장. createSlice는 객체를 가짐
    name:'product',
    initialState,
    reducers:{ //type을 함수로 만듬.
        getAllProducts(state, action){
            state.productList = action.payload.data; //state에 있는 productList를 action에서 가져온 data값으로 변경.
        },
        getProductDetail(state, action){
            state.selectedItem = action.payload.data;
        }
    }
})

export const productActions = productSlice.actions;
export default productSlice.reducer;
