import React from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import CristalesIMG from ".././assets/img/cristales.jpg"
import BlueCut from ".././assets/img/bluelightcut.jpg"
import GeoNovar from ".././assets/img/geoNovar.jpg"
import Antireflex from ".././assets/img/sirve-los-lentes-antireflex.jpg"
import BlueLight from ".././assets/img/Blue-Light-Cut.png"
import Interiores from ".././assets/img/lentes-fotocromaticos-interiores.jpg"
import Proceso from ".././assets/img/lentes-fotocromaticos-proceso.jpg"
import Exteriores from ".././assets/img/lentes-fotocromaticos-exteriores.jpg"
import Antiage from ".././assets/img/antiage.jpg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from ".././components/Footer"


const GlobalStyle = createGlobalStyle`
    .img-cristales{
        display: block;
        width: 100%;
        margin-top: 50px;
    }

    .img-blue{

    }

    @media(min-width:988px){
        .inicio{
        height: 600px;
        object-fit: cover;
        object-position: bottom;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
      }

      .img-blue{
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
      }
    }

    .cristal-name::before{
        content: '';
        position: absolute;
        z-index: -1;
        margin-top: 18px;
        width: 100px;
        height: 7px;
        background-color: rgba(255,0,205, .5);
    }

    .carousel{
        margin-top: 50px;
    }
`

const Info = styled.p`
    text-align: center;
    font-size: 17px;
`

const CristalesContainer = styled.div`
    text-align: left;
    margin-left: 2rem;
    max-width: 772px;
    margin-left: auto;
    margin-right: auto;
`

const Cristal = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`

const CristalName = styled.h3`
    margin-left: 1.4rem;
    font-size: 22px;
`

const CristalInf = styled.p`
    padding: 5px 19px;
    letter-spacing: 1px;
`


function  Cristales(){
    return(
        <div>
            <GlobalStyle/>
            <img src={CristalesIMG} className="img-cristales inicio"/>
            <Info>Encontra tus cristales ideales acomodado a tu bolsillo y necesidades</Info>
            <img src={BlueCut} className="img-cristales img-blue"/>
            <CristalesContainer>
                <Cristal>
                    <CristalName className="cristal-name">Organico Blanco</CristalName>
                    <CristalInf>
                        Los cristales organicos blancos son los comunes, siendo los mas economicos.Los organicos no ofrecen ningun tipo de proteccion contra rayos UV o antireflex 
                    </CristalInf> 
                </Cristal>
                <Cristal>
                    <CristalName className="cristal-name">Antireflex</CristalName>
                    <CristalInf>
                        Los Cristales antireflex ofrecen una protección contra los reflejos los cuales son comunes al dia a dia, estos pueden resultar molestos para muchas personas.
                    </CristalInf> 
                    <img src={Antireflex} className="img-cristales"/>

                </Cristal>
                <Cristal>
                    <CristalName className="cristal-name">Blue Light Cut</CristalName>
                    <CristalInf>
                        Como indica su propio nombre en ingles Blue Light Cut(Corta luz azul) la luz azul es emitida por celulares televisores,computadoras y otros dispositivos electronicos lo cual es perjudicial para la salud de nuestros ojos. Con este cristal vas a poder usar estos dispositivos sin comprometer la salud de tus ojos. 
                    </CristalInf>
                    <img src={BlueLight} className="img-cristales"/> 
                </Cristal>
                <Cristal>
                    <CristalName className="cristal-name">Fotocromatico</CristalName>
                    <CristalInf>
                        Los cristales Fotocromaticos ofrecen protección en exterios contra la luz de las lamparas,celulares,televisores etc. Funciona como un cristal noramal, pero al salir a exteriores y ante la exposicion al sol este se obscurece brindando asi una protección a los cambios bruscos entre interiores y exteriores. 
                    </CristalInf>
                    <Carousel interval={5000} autoPlay={true} infiniteLoop={true} showIndicators={false} showStatus={false} showThumbs={false} className="carousel">
                        <div>
                            <img src={Interiores}/>
                        </div>
                        <div>
                            <img src={Proceso}/>
                        </div>
                        <div>
                            <img src={Exteriores}/>
                        </div>
                    </Carousel>
                </Cristal>
                <Cristal>
                    <CristalName className="cristal-name">Antiage</CristalName>
                    <CristalInf>
                         Los cristales Majestic Antiage te ofrecen triple protección, ofrece protección contra la luz UV,Antireflex y contra la luz Infraroja, la cual adelanta el envejecimiento en el contorno de tus ojos. Ademas son mucho mas livianos que cualquier cristal común, no se raya con facilidad, repele el agua, repele la suciedad y es antiestatica. 
                    </CristalInf>
                     <img src={Antiage} className="img-cristales"/>
                </Cristal>
            </CristalesContainer>
            <Footer/>
        </div>
    )
}

export default Cristales;