import styled from "styled-components";
import Footer from "../components/Footer";
import { createGlobalStyle } from "styled-components"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { Link } from "react-router-dom";
import faq from "../css/faq.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const options = [
    'one', 'two', 'three'
  ];
  const defaultOption = options[0];
  

const GlobalStyle = createGlobalStyle `
    body{
        margin: 0;
        font-family: 'Sunflower', sans-serif;
    }
`

const Title = styled.h2 `
    color: #E20597;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 40px;
    @media(min-width: 1194px){
        font-size: 1.8rem;
    }
`

const MasDudas = styled.div`
    width: 90%;
    max-width: 479px;
    margin: 130px auto;
    text-align: center;
`

const Text = styled.p`
    padding-left: 15px;
    padding-right: 15px;
    font-size: 20px;
`

const WhatsappContainer = styled.a`
    display: flex;
    background-color: #34C700;
    align-items: center;
`

const Number = styled.p`
    color: white;
    font-size: 20px;
`
function Faq() {
    return(
        <div className="FAQ">
            <GlobalStyle/>
            <Title>Preguntas Frecuentes</Title>
            <Accordion className="acordion-container">
            <AccordionItem className="acordion-item">
                <AccordionItemHeading className="acordion-heading">
                    <AccordionItemButton className="acordion-button">
                        <b>1.</b> Quienes somos?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Somos la boutique del anteojo una  optica
                    que te ofrece los mejores productos al 
                    mejor precio.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                       <b>2.</b> Trabajan con obras sociales?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                        No trabajamos con ninguna obra social, pero nuestros precios
                        son muy bajos y competitivos
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                        <b>3.</b> Hacen el test visual?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Hacemos el test visual totalmente gratuito.
                    No hacemos test visual a menores de 16 años ya que de esto
                    se debe encargar un oftalmologo pediatra.
                    Mayores de 16 hacemos el test totalmente gratuito con la condicion
                    de comprar en el local.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                        <b>4.</b> Cuanto tardan en hacer los lentes?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Depende de muchos factores, en general tarda de 2 a 3 dias desde que lo mandamos 
                    a hacer. Pero puede tardar semanas hasta un mes dependiendo de la graduacion.
                    en casos especiales se manda a laboratorio lo cual tarda semanas o un mes.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                    <b>5.</b> Trabajan con mercadopago?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Si, trabajamos con mercadopago.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                    <b>6.</b> Puedo dejar una seña?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Si, podes dejar un seña de la mitad o parecido al precio total de compra.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                    <b>7.</b> Venden lentes de contacto?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    No tenemos en stock lentes de contacto, solamente lo hacemos con encargo.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                    <b>8.</b> Puedo pagar con tarjeta?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Si trabajamos con tarjetas bancarias. en 3,6 y hasta 12 cuotas.
                    La compra en un solo pago tiene un interes del 10%, en 3 y 6 cuotas
                    se agrega un 18% de interes y en 12 cuotas con 27% de interes
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                    <b>9.</b> Puedo comprar por la pagina?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Actualmente no se puede comprar por la pagina, pero
                    mas adelante implementaremos nuevas funciones para comprar
                    de manera online con la pagina.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem className="acordion-item">
                <AccordionItemHeading>
                    <AccordionItemButton className="acordion-button">
                    <b>10.</b> Donde estan ubicados?
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className="acordion-panel">
                    <p className="acordion-text">
                    Estamos ubicados en Av.Francisco Beiro 5665 a una cuadra
                    de la General Paz. Te dejamos el link de google maps para que 
                    puedas guiarte mejor <a href="https://g.page/LaBoutiquedelanteojo?share" target="_blank">https://g.page/LaBoutiquedelanteojo?share</a>
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        <MasDudas>
            <FontAwesomeIcon icon={ faQuestion } className="icon-question"/>
            <Text>Tenes mas dudas? consultanos por nuestro Whatsapp y estaremos atentos a contestarte en la brevedad</Text>
            <a href="">
                <WhatsappContainer href="https://wa.me/5491134200053" target="_blank">
                    <FontAwesomeIcon icon={ faWhatsapp } className="icon-whatsapp"/>
                    <Number>+54 9 11 7364-8325</Number>
                </WhatsappContainer>
            </a>
        </MasDudas>
            <Footer/>
        </div>
    )
}

export default Faq;