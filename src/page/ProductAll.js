import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { Row, Col, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import {productAction} from '../redux/actions/productAction';
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  const productList = useSelector((state) => state.product.productList); //store 에서 product리듀서에 있는 State를 읽어옴.
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    dispatch(productAction.getProducts(searchQuery));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container>
      <Row>
      {productList.map((item) => (
        <Col md={3} sm={12} key={item.id}>
          <ProductCard item={item} />
        </Col>
      ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
