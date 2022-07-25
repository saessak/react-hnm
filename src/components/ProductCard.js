import React from 'react';
import {useNavigate} from "react-router-dom"

const ProductCard = ({item}) => {
    const navigate=useNavigate()
    const showDetail=()=>{
        navigate(`/product/${item.id}`)
    }
  return (
    <li onClick={showDetail}>
         <img src={item?.img} /> {/*아이템이 있으면 img 호출 */}
        {item?.choice == true? <div> Counscious Chois</div> : " "}
        <div>{item?.title}</div>
        <div>{item?.price}원</div>
        {item?.new == true? <div>신제품</div> :" "}
    </li>
  )
}

export default ProductCard