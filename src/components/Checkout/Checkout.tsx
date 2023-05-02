import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Checkout = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Shopping card</Card.Title>
        <Card.Text>
          Please use this form to check out the details about the products
        </Card.Text>
        <Button variant="primary">Checkout</Button>
      </Card.Body>
    </Card>
  );
}

export default Checkout