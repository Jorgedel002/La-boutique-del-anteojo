import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import image9 from '../assets/imgLentes/acetato azul_adobespark.png'
import image10 from '../assets/imgLentes/acetato red_adobespark.png'
import image11 from '../assets/imgLentes/acetato_adobespark.png'
import image12 from '../assets/imgLentes/acetato2_adobespark.png'
import image13 from '../assets/imgLentes/Anteojos-de-Sol-Lentes_adobespark.png'
import image14 from '../assets/imgLentes/clip-on_adobespark.png'
import image15 from '../assets/imgLentes/lentes sol 2_adobespark.png'
import image16 from '../assets/imgLentes/lentes sol_adobespark.png'
import image17 from '../assets/imgLentes/sol-lacoste 2_adobespark.png'
import image18 from '../assets/imgLentes/sol-lacoste_adobespark.png'
import ProductosHomeCss from '../css/ProductosHome.css'
import { useState } from "react";

const ProductosContainer = styled.div `
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    justify-items: center;
    align-items: center;
    margin-top: 40px;
    @media(min-width: 610px){
        grid-template-columns: 1fr 1fr 1fr ;
    }
    @media(min-width:1325px){
        margin-left: auto;
        margin-right: auto;
        max-width: 1325px;
    }
`

const CardContainer = styled.div `
    width: 100%;
    margin-top: 40px;
    justify-content: center;
    justify-items: center;
    @media(min-width: 400px){
        max-width: 201px;
    }
    @media(min-width: 610px){
        max-width: 290px;
    }
    @media(min-width: 1191px){
        max-width: 350px;
    }
`

const NombreProducto = styled.p `
    width: 120px;
    font-size: 20px;
`

const Container = styled.div `
    display: flex;
    justify-content: space-between;
    width: 80%;
`

const PrecioProducto = styled.span `
    font-size: 20px;
`

function ProductosHome() {
    let like = document.getElementById("faHeart")
    like = useState(false)
    return(
        <ProductosContainer>
            <CardContainer>
                <img src={image9} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart" id="faHeart" onClick={like ? "like" : ""}/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image10} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image11} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image12} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image13} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image14} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image15} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image16} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image17} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
            <CardContainer>
                <img src={image18} className="producto-home"/>
                <NombreProducto className="nombre-producto">Lentes de sol Lacoste</NombreProducto>
                <Container>
                    <PrecioProducto>$7000</PrecioProducto>
                    <FontAwesomeIcon icon={ faHeart } className="faHeart"/>
                </Container>
            </CardContainer>
        </ProductosContainer>
    )
}

export default ProductosHome;