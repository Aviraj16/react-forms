import Card from 'react-bootstrap/Card';

const Checkout = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="/Home">Home</Card.Link>
        <Card.Link href="/login">login</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Checkout