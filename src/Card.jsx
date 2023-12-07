
import Card from 'react-bootstrap/Card';

const Cards = ({ data }) => {
    const { email, username, firstname, lastname, image, password } = data;
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{username}</Card.Title>
      <Card.Title>{firstname} {lastname}</Card.Title>
      <Card.Text>
        {email}
      </Card.Text>
   
    </Card.Body>
  </Card>
  )
}

export default Cards
