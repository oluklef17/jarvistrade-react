import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import "../styles/style.css";

function Product({ product }) {
  return (
    <div className="product-item">
      <Card
        style={{
          width: "25rem",
          border: "5px solid black",
          backgroundColor: "gray",
        }}
      >
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>${product.price}</Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Product;
