import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Terraria_image1600w.jpg"
          
        />
        <Carousel.Caption>
          <h3>Primera imagen de la pagina</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.blogs.es/637aa5/h2x1_nswitchds_hollowknightsilksong/1366_2000.jpeg"
      
        />

        <Carousel.Caption>
          <h3>Segunda imagen de la pagina</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/vector-gratis/video-juegos-neon-controlador-texto_1262-16218.jpg?w=2000"
        />

        <Carousel.Caption>
          <h3>Tercera imagen</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;