import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';//me importa la Card
import PropTypes from 'prop-types'
import '../css/Tarjetas.css'

function Tarjetas({characters}) {

  return (
    <div className="container-tarjetas" >
    {characters.map((c) => (
      <Card style={{ width: '18rem' }} key={c.id} className='cardStilo'>
        <Card.Img variant="top" src={c.image} />
        <Card.Body>
          <Card.Title>{c.name}</Card.Title>
          <Card.Text>
          </Card.Text>
          <Button variant='primary'>{c.status} </Button>
        </Card.Body>
      </Card>
    ))}
    </div>
  );
}

// PropTypes para validar que los props que paso al componente Tarjetas son del tipo array
Tarjetas.propTypes = {
  characters: PropTypes.array.isRequired
}

export default Tarjetas;