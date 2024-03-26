import { Container, Row, Col, Card, Button } from 'react-bootstrap';

function ShoppingCart() {
  const cartItems = [
    // Data produk yang ditambahkan ke keranjang
    // Misalnya menggunakan Context atau Redux
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Container>
      <Row>
        <Col md={8}>
          {cartItems.map((item) => (
            <Card key={item.id} style={{ marginBottom: '1rem' }}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Price: ${item.price} x Quantity: {item.quantity}
                </Card.Text>
                <Button variant="danger">Remove</Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Cart Summary</Card.Title>
              <Card.Text>Total Price: ${totalPrice}</Card.Text>
              <Button variant="primary">Checkout</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ShoppingCart;