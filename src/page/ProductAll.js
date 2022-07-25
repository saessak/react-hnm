import React, {useEffect, useState} from "react";
import ProductCard from '../components/ProductCard';
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async ()=>{
    let searchQuery = query.get("q") || ""; //q쿼리값이 없으면 빈값 호출
    console.log("쿼리값은?", searchQuery);
    let url = `https://my-json-server.typicode.com/saessak/noona_hnm_DB/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    
  };

  useEffect(() => {
    getProducts();
  }, [query]); 
  //useEffect의 배열값이
  //[] 비어있으면 : 프로젝트 시작후 딱 한번실행해라.
  //[query] : query가 바뀌면 useEffect도 다시 호출해줘라.

  return (
    <div className="container">
      <ul className="item-list">
        {productList.map((menu) => (
          <ProductCard item={menu}/>
        ))}
      </ul>
    </div>
  )
}

export default ProductAll
