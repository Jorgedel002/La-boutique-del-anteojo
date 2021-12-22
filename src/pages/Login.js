import styled from "styled-components";
import { createGlobalStyle } from "styled-components"
import Logo from "../assets/img/logoLBA.png"
import RegisterCss from "../css/Registro.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons"
import { BrowserRouter as Router, Link, useHistory} from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const GlobalStyles = createGlobalStyle `
    body{
        margin: 0;
        font-family: "Sunflower", sans-serif;
        background-color: rgb(223,223,223);
    }
`

const Form = styled.form`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
`

const Background = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom, rgb(226,5,151), rgb(255,46,184));
    height: 300px;
    border-bottom-left-radius: 40%;
`
const TitleRegistro = styled.h2 `
    color: white;
    font-size: 22px;
    margin-top: 60px;
    letter-spacing: .5px;
    margin-left: 230px;
    font-weight: 300;
`
const Title = styled.h1`
    color: white;
    margin-top: 20px;
    letter-spacing: 1px;
`

const Registrado = styled.p`
    text-align: center;
    color: rgb(81,81,81);
    margin-top: 40px;
`

const BottomCard = styled.div`
    
`

function Register() {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory()

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await login(email,password)
            history.push('/AdminPage')
        }catch(error){
            setError('Email o Contraseña incorrectas')
        }
    }
    return(
        <div className="register">
            <GlobalStyles/>
            <Background>
                <Title>Logeate</Title>
                <img src={Logo} className="logo" alt="Logo La Boutique Del Anteojo"/>
                <TitleRegistro>Login</TitleRegistro>
            </Background>
            <Form onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" className="email" onChange={handleEmail}></input>
                <input type="password" placeholder="Contraseña" className="contraseña" onChange={handlePassword}></input>
                <BottomCard>
                    {error && <p className='error' >{error}</p>}
                </BottomCard>
                <input type="submit" value="Login" className="registrarme"></input>
            </Form>
            <Registrado>No estas registrado? <Link to="/registro" className="login">Registrate</Link></Registrado>
        </div>
    )
}

export default Register;