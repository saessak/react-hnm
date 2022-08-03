import {productActions} from '../reducers/productReducer';

function getProducts(searchQuery){ //미들웨어는 함수를 리턴한다.
    return async(dispatch) =>{
        let url = `https://my-json-server.typicode.com/saessak/noona_hnm_DB/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}}); //이전문법
        dispatch(productActions.getAllProducts({data})) 
    };
}

function getProductDetail(id){
    return async(dispatch) =>{
        let url = `https://my-json-server.typicode.com/saessak/noona_hnm_DB/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        // dispatch({type:"GET_PRODUCT_DETAIL",payload:{data}}); //이전문법
        dispatch(productActions.getProductDetail({data})); //해당 reducer에 data값 전달.
    }
}

export const productAction={getProducts, getProductDetail}