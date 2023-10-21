import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "../styles/style.css";

function Product({ product }) {
  return (
    <div className="product-item">
      <Card className="card-container">
        <Card.Img
          variant="top"
          src={product.image}
          className="product-image card-front"
        />
        <Card.Body className="card-back">
          <Card.Title className="product-name">{product.name}</Card.Title>
          <Card.Text className="product-description">
            {product.description}
          </Card.Text>
          <Card.Text className="product-platform">{product.platform}</Card.Text>
          <Card.Text className="product-price">${product.price}</Card.Text>
          <div className="links">
            <a href={product.demo} target="_blank">
              <button
                style={{
                  backgroundColor: "white",
                  height: "2.5em",
                  textDecoration: "none",
                  margin: "0.5em",
                  borderRadius: "0.75em",
                }}
              >
                Watch demo
              </button>
            </a>
            <a href={product.link} target="_blank">
              <button
                style={{
                  backgroundColor: "blue",
                  height: "2.5em",
                  color: "white",
                  textDecoration: "none",
                  margin: "0.5em",
                  borderRadius: "0.75em",
                }}
              >
                Buy or Rent
              </button>
            </a>
          </div>
        </Card.Body>
      </Card>
      <div className="product-bottom-title">
        <h4>{product.name}</h4>
      </div>
    </div>
  );
}

export default Product;
