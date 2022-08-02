let initialState={
    productList:[]
}

function productRducer(state=initialState, action){
    let {type, payload} = action
    switch(type){
        case "GET_PRODUCT_SUCCESS" :
            return{...state, productList:payload.data}
        default : //기본값 설정.
            return {...state} 
    }
}

export default productRducer;