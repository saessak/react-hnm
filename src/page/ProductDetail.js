import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import {productAction} from '../redux/actions/productAction';
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const product = useSelector((state) => state.product.selectedItem); //product 리듀서에서 selectedItem의 state값 가져오기
  const [loading, setLoading] = useState(false);
  const { id } = useParams(); //현재 url의 파라미터값
  const dispatch = useDispatch();
  const getProductDetail = () => {
    setLoading(true);
    dispatch(productAction.getProductDetail(id)); //productAction.getProductDetail에 id값 전달
    setLoading(false);
  };
  useEffect(() => {
    getProductDetail();
  }, []); //해당 컴포넌트로 올때마다 실행
  
  if (loading || product == null) return <h1>Loading</h1>; //현재 loding이거나 제품이 없는경우 Loading 노출
  return (
    <Container className="product-detail-card">
      <Row>
        <Col className="product-detail-img">
          <img src={product.img} />
        </Col>
        <Col>
          <div className="product-info">{product.title}</div>
          <div className="product-info">₩ {product.price}</div>
          <div className="choice">
            {product.choice ? "Conscious choice" : ""}
          </div>
          <Dropdown className="drop-down">
            <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {product?.size.length > 0 &&
                product.size.map((item) => (
                  <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="dark" className="add-button">
            추가
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
