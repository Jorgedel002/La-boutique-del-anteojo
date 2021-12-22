import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import logo from "../assets/img/logoLBA.png"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import App from "../css/App.css";


const GlobalStyle = createGlobalStyle`
    .link-menu{
    display: block;
    color: white;
    text-decoration: none;
    margin-top: 20px;
    font-size: 20px;
    }
`

const FooterContainer = styled.div `
    background-color: #E20593;
    text-align: center;
    margin-top: 120px;
`

const FooterList = styled.ul `
    padding: 0;
    margin-top: 50px;
    margin-bottom: 0;
    list-style: none;
`

const UbicacionContainer = styled.div `
    color: white;
    margin-top: 10px;
`

const Ubicacion = styled.span`
    margin-left: 10px;
`

const UbicacionFlex = styled.div `

`

const HorarioContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 40px;
`

const Horario = styled.span `
    margin-top: 10px;
    font-size: 20px;
`

const SocialContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin: 60px auto 0px;
    padding-bottom: 20px;
    color: white;
    font-size: 30px;
    width: 50%;
    @media(min-width: 861px){
        max-width: 600px ;
        grid-column-start: 1;
        grid-column-end: 5;
    }
`

const SocialLink = styled.a `
    text-decoration: none;
    color: white;
`

const GridContainer = styled.div`
    @media(min-width: 861px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: center;
        max-width: 1201px;
        margin-right: auto;
        margin-left: auto;
        align-items: center;
    }
`

function Footer(){
    return(
        <FooterContainer>
            <GlobalStyle/>
            <img src={logo} className="logo-footer"/>
            <GridContainer>
                <FooterList>
                    <Link to="/" className="link-menu">HOME</Link>
                    <Link to="/cristales" className="link-menu">CRISTALES</Link>
                    <Link to="/sobrenosotros" className="link-menu">SOBRE NOSOTROS</Link>
                    {/* <ItemList><Link to="/productos">PRODUCTOS</Link></ItemList> */}
                    <Link to="/preguntasfrecuentes" className="link-menu">PREGUNTAS FRECUENTES</Link>
                </FooterList>
                <UbicacionContainer>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.498253025648!2d-58.53129008476997!3d-34.616847080456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7df1896ffe9%3A0xb6b46398b2571d55!2sLa%20Boutique%20del%20Anteojo!5e0!3m2!1ses-419!2sar!4v1631297203047!5m2!1ses-419!2sar" width="600" height="450"  loading="lazy"></iframe>
                    <UbicacionFlex>
                        <FontAwesomeIcon icon={ faMapMarkerAlt } className="icon faMapMarkerAlt"/>
                        <Ubicacion>AV.FRANCISCO BEIRO 5665</Ubicacion>
                    </UbicacionFlex>
                </UbicacionContainer>
                <HorarioContainer>
                    <FontAwesomeIcon icon={ faClock } className="icon faClock"/>
                    <Horario><b>Lunes a Sabados</b> <br/> de 10hs a 17hs</Horario>
                </HorarioContainer>
                <SocialContainer>
                    <SocialLink href="" target="_blank">
                        <FontAwesomeIcon icon={ faInstagram }/>
                    </SocialLink>
                    <SocialLink href="" target="_blank">
                        <FontAwesomeIcon icon={ faFacebookF }/> 
                    </SocialLink>
                    <SocialLink href="https://wa.me/5491134200053" target="_blank">
                        <FontAwesomeIcon icon={ faWhatsapp }/>
                    </SocialLink>
                </SocialContainer>
            </GridContainer>
        </FooterContainer>
    )
}

export default Footer;