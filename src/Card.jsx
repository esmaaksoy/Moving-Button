
import Card from 'react-bootstrap/Card';

const Cards = ({ data }) => {
    const { email, username, firstname, lastname, image, password } = data;
  return (
    <Card className='mx-auto mt-2' style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    
      <Card.Title className='mx-auto'>{username}</Card.Title>
      <Card.Title className='mx-auto'>{firstname} {lastname}</Card.Title>
      <Card.Footer className='mx-auto'>
        {email}
      </Card.Footer>
   
   
  </Card>
  )
}

export default Cards
