import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image4 from '../assets/imgLentes/sol-lacoste 2_adobespark.png'
import image5 from '../assets/imgLentes/lentes sol_adobespark.png'
import image6 from '../assets/imgLentes/clip-on_adobespark.png'
import image7 from '../assets/imgLentes/acetato2_adobespark.png'
import image8 from '../assets/imgLentes/acetato red_adobespark.png'
import image9 from '../assets/imgLentes/Anteojos-de-Sol-Lentes_adobespark.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import CarruselStyle from '../css/CarruselStyle.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const NombreProducto = styled.p `
    @media(max-height:1340px){
        width: 180px;
        font-size: 1.3rem;
    }
    width: 90px;
`

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    width: 60%;
`

const PrecioProducto = styled.span `
    @media(min-height:1340px){
        font-size: 1.7rem;
    }
    font-size: 20px;
`

function CarruselDestacado() {
    return(
        <Carousel 

        responsive={responsive}
        infinite={true}
        draggable={false}
        containerClass="react-multi-carousel-list"
        sliderClass="react-multi-carousel-track"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        centerMode={true}
                  >
            <div className="card-container">
                <img src={image4} className="destacado-image"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </div>
            <div className="card-container">
                <img src={image5} className="destacado-image"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>                
            </div>
            <div className="card-container">
                <img src={image6} className="destacado-image"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>                
            </div>
            <div className="card-container">
                <img src={image7} className="destacado-image"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>                
            </div>
        </Carousel>
    )
}

export default CarruselDestacado;

<div className="card-producto">
    <img src={image4} />
    
</div>

