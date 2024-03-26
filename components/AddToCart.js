import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function AddToCart() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleAddToCart = () => {
    // Logika untuk menambahkan produk ke keranjang
    // Misalnya menggunakan Context atau Redux
    navigate('/cart');
  };

  return (
    <Container>
      {product ? (
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src={product.image} />
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Card.Text>{product.description}</Card.Text>
                <Form>
                  <Form.Group controlId="formQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    onClick={handleAddToCart}
                    disabled={quantity <= 0}
                  >
                    Add to Cart
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

export default AddToCart;