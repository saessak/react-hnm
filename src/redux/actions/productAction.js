function getProducts(searchQuery){ //미들웨어는 함수를 리턴한다.
    return async(dispatch, getState) =>{
        let url = `https://my-json-server.typicode.com/saessak/noona_hnm_DB/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}});
    };
}

function getProductDtail(){}

export const productAction={getProducts}