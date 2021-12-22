
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/img/logoLBA.png';
import { Sling as Hamburger } from 'hamburger-react'
import HeaderCss from '../css/header.css'
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import firebase from "../firebase";

const GlobalStyle = createGlobalStyle `
    body{
        margin: 0;
        font-family: 'Sunflower', sans-serif;
    }
`

const HeaderContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px 20px;
`
const NavBar = styled.nav `
    position: fixed;
    top: 0;
    width: 70%;
    background: linear-gradient(to left top, rgb(226,5,147), rgb(188,0,191));
    height: 100vh;
    z-index: 100;
    transform: translateX(-101%);
    transition: all 1s ease;
    @media(min-width: 583px){
        width: 50%;
    }
    @media(min-width: 820px){
        width: 40%;
    }
    @media(min-width: 1020px){
        max-width: 360px;
    }
`

const Menu = styled.ul `
    padding: 0;
    margin-left: 15px;
    margin-top: 120px;
`

function Header() {
    const [isOpen, setOpen] = useState(false)
    const [error, setError] = useState('')
    const { currentUser, signOut } = useAuth();
    const handleLogout = async () => {
        firebase.auth.signOut()
        setTimeout(function(){
            window.location.replace("/login")
        }, 500)
        try{
            await signOut()
        }catch(error){
            setError('Server error')
        }
    }
    return(
        <HeaderContainer className="header">
            <GlobalStyle/>
            <Hamburger color={isOpen ? "#FFF" : "#E20593"}  duration={0.9} toggled={isOpen} toggle={setOpen} className="hamburger-react"/>
            <NavBar className={isOpen ? "active" : ""} id="nav-bar">
                <img src={Logo} className="logo-header"/>
                <Menu className="menu">
                    <Link to="/" className="link-menu">Home</Link>
                    {/* <Link to="/productos" className="link-menu">Productos</Link> */}
                    <Link to="/cristales" className="link-menu">Cristales</Link>
                    <Link to="/sobre-nosotros" className="link-menu">Sobre Nosotros</Link>
                    <Link to="/preguntasfrecuentes" className="link-menu">Preguntas Frecuentes</Link>
                    {currentUser ? <Link to="/adminpage" className="link-menu">Admin Page</Link> : ""}
                </Menu>
            </NavBar>
            <img src={Logo} className="logo-home"/>
            <div className="userIcons">
            <Link to="/registro">
                {currentUser ? <FontAwesomeIcon icon={faSignOutAlt} className="faSignOutAlt faIcon" onClick={handleLogout}/> : <FontAwesomeIcon icon={faUserCircle} className="faUser faIcon"/> }
            </Link>
             {/* <FontAwesomeIcon icon={faHeart} className="faHeart faIcon"/> */}
            </div>
        </HeaderContainer>
    )
}

export default Header;