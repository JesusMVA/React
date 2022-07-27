
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function GroupExample() {
  return (
    <CardGroup>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://assets.reedpopcdn.com/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg/BROK/thumbnail/1200x1200/quality/100/how-hollow-knights-community-crafted-gibberish-into-a-real-language-1567781461548.jpg" />
      <Card.Body>
        <Card.Title>Hollow Knight</Card.Title>
        <Card.Text>
        ¡Forja tu propio camino en Hollow Knight! Una aventura épica a través de un vasto reino de insectos y héroes que se encuentra en ruinas. Explora cavernas tortuosas, combate contra criaturas corrompidas y entabla amistad con extraños insectos, todo en un estilo clásico en 2D dibujado
        </Card.Text>
        <Button variant="success">Ver mas</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://play-lh.googleusercontent.com/WjXoRzJKWHJ_x52qWYA6ECM70bq3x0vwwYiBhzLXdOIHCo-obdUTztPbskEn0K8_wBs" />
      <Card.Body>
        <Card.Title>Call of Duty</Card.Title>
        <Card.Text>
        Call of Duty es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision
        </Card.Text>
        <Button variant="success">Ver mas</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://seeklogo.com/images/A/apex-logo-F74B0C9FCD-seeklogo.com.png" />
      <Card.Body>
        <Card.Title>Apex Legends</Card.Title>
        <Card.Text>
        Apex Legends es un videojuego gratuito perteneciente a los géneros battle royale y hero shooter en primera persona, desarrollado por Respawn Entertainment y publicado por Electronic Arts. Fue lanzado para Microsoft Windows,
        </Card.Text>
        <Button variant="success">Ver mas</Button>
      </Card.Body>
    </Card>
    </CardGroup>
  );
}

export default GroupExample;