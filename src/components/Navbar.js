import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const menuList = [
        "여성",
        "Divided",
        "남성",
        "신생아/유아",
        "Sale"
    ];

    const navigate = useNavigate();
    const gotoLogin=()=>{
      navigate('/login');
    }

    const search =(event) =>{
      if(event.key === "Enter"){
        //입력한 검색어를 읽어와서
        let keyword = event.target.value //react에서는 값을 event.target을 통해 읽어올 수있음.
         
        //url을 변경해준다.
        navigate(`/?q=${keyword}`);
        
      }
    }
  return (
    <div>
      <div>
        <div className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <button type="button" onClick={gotoLogin}>로그인</button>
        </div>
      </div>
      <div className="nav-section">
        <img width={100} src="https://3dwarehouse.sketchup.com/warehouse/v1.0/publiccontent/3e17273b-330d-4466-b158-d302aaa27d43" />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
            {menuList.map((menu) => (
                <li>{menu}</li>
            ))}
        </ul>
        <div className="input-search">
            <FontAwesomeIcon icon={faSearch}/>
            <input type="text" onKeyPress={(event)=>search(event)} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
