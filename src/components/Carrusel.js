import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image2 from '../assets/imgPromociones/maxresdefault (1).jpg'
import image3 from '../assets/imgPromociones/novar2.jpg'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Carrusel() {
    return(
            <Carousel interval={5000} autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false}>
                <div>
                    <img src={image3}/>
                </div>
                <div>
                    <img src={image2}/>
                </div>
            </Carousel>
    )
}

export default Carrusel;