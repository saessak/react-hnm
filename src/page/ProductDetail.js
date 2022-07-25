import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let {id}= useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail= async ()=>{
    let url = `https://my-json-server.typicode.com/saessak/noona_hnm_DB/products/${id}`
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail();
  },[])
  
  return (
    <div className="container">
      <div className="item-box">
        <div>
          <img src={product?.img} />
        </div>
        <div>
          <h2>{product?.title}</h2>
          <div>{product?.price}원</div>
          {product?.choice == true? <span>Counscious Chois</span> : ''}
          <select>
            <option value='' selected>사이즈 선택</option>
          </select>
          
          <button type="submit" className="btn-cart">추가</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
