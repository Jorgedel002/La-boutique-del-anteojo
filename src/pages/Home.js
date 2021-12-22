import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Carrusel from '../components/Carrusel.js';
import CarruselDestacado from '../components/CarruselDestacado.js';
import ProductosHome from '../components/ProductosHome.js'
import ModoPago from '../components/ModoPago.js'
import Footer from '../components/Footer'
import imageHombre from '../assets/img/lentes-hombre.jpg'
import imageMujer from '../assets/img/mujer-lentes.jpeg'
import imageLentesSol from '../assets/img/1.jpg'
import image4 from '../assets/imgPromociones/usual.jpeg'
import image5 from '../assets/imgPromociones/bluelight-fotocromatico.jpeg'
import '../css/App.css';

const GlobalStyle = createGlobalStyle `
  body{
    margin: 0;
    font-family: 'Sunflower', sans-serif;
  }
  .image{
    width: 100%;
    height: 200px;
    filter: blur(.8px);
  }
  .image3{
    grid-column-start: 1;
    grid-column-end: 3;
  }

  .image-promocion{
    width: 100%;
  }

  @media(min-width: 800px){
    .image-promocion{
      width: 30%;
      max-width: 800px;
      min-width: 362px;
      margin-left: 40px;
      margin-right: 40px;
    }
  }

  @media(min-width: 762px){
    .image{
      height: 300px;
    }
  }

  @media(min-width: 879px){
    .image{
      height: 400px;
    }
  }

  @media(min-width:1010px){
    .image3{
      grid-column-start: none;
    }
  }

  @media(min-width: 1324px){
    .image{
      height: 500px;
    }
  }
`

const ImagesContainer = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 80px;
  @media(min-width:1010px){
    grid-template-columns: 1fr 1fr 1fr;
  } 
`

const NombreSpan = styled.span `
  position: absolute;
  bottom: 12px;
  right: 10px;
  color: white;
  font-size: 19px;
  letter-spacing: 1px;
  @media(min-width: 882px){
    font-size: 1.5rem;
  } 
`

const ProductosDestacadosContainer = styled.div `

`

const More = styled.a `
  display: block;
  margin-top: 50px;
  text-align: center;
  color: #E20593;
  font-size: 22px;
`

const Title = styled.h2 `
  text-align: center;
  color: #E20593;
  font-weight: 400;
  margin-top: 50px;
  @media(min-width: 948px){
    font-size: 2em;
    margin-top: 100px;
    margin-bottom: 80px;
  } 
`

const ImgPromociones = styled.div `
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  @media(min-width: 800px){
    flex-direction: row;
  }
`

function Home() {
    return(
        <div className="home">
            <GlobalStyle/>
            <Carrusel/>
            {/* <ImagesContainer>
                <div className="image-container">
                    <img src={imageHombre} className="image"/>
                    <NombreSpan>HOMBRE</NombreSpan>
                </div>
                <div className="image-container">
                    <img src={imageMujer} className="image"/>
                    <NombreSpan>MUJER</NombreSpan>  
                </div>
                <div className="image-container image3">
                    <img src={imageLentesSol} className="image"/>
                    <NombreSpan>LENTES DE SOL</NombreSpan>
                </div>
            </ImagesContainer> */}
            <ImgPromociones>
                <img src={image4} className="image-promocion"/>
                <img src={image5} className="image-promocion" />
            </ImgPromociones>
            {/* <Title>DESTACADO</Title>
            <CarruselDestacado/>
            <Title>PRODUCTOS</Title>
            <ProductosHome/>
            <More>VER MAS</More> */}
            <ModoPago/>
            <Footer/>
        </div>
    )
}

export default Home;