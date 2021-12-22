import react from "react"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

const GlobalStyle = createGlobalStyle `
    input::placeholder{
        color: black;
        margin: 0;
        font-weight: 300;
    }
`

const Form = styled.form `
    padding: 15px;
    width: 90%;
    margin: auto;
`

const Title = styled.h2 `
    color: #E20593;
    font-size: 1rem;
`

const Input = styled.input `
    display: block;
    width: 100%;
    border-radius: 0;
    background-color: #E2E1E1;
    box-shadow: none;
    margin: auto;
    margin: 10px 0px;
`

const InputArchivo = styled.div `
    background-color: #E5E1E1;
    height: 130px;
    text-align: center;
`
const AgregarArchivo = styled.input `
    height: 130px;
    border-radius: 0;
    width: 70%;
    opacity: 0;
    position: relative;
    bottom: 75px;
`

const Text = styled.p`
    padding-top: 35px;
    
`

const Agregar = styled.button`
    width: 100%;
    background-color: #FF00E5;
    border: none;
    border-radius: 15px;
    height: 30px;
    width: 80%;
`

const Container = styled.div `
    display: flex;
    width: 100%;
    align-items: center;
    cursor: pointer;
    position: absolute;
`



const AgregarProducto = () => {
    return(
        <div className="agregar-producto">
            <GlobalStyle/>
            <Form>
                <Title>Agregar producto</Title>
                <Input type="text" placeholder="Nombre del producto"/>
                <Input type ="text" placeholder="Precio del producto"/>
                <Container>
                    <InputArchivo>
                        <Text>AGREGAR IMAGEN</Text> 
                        <AgregarArchivo type="file" placeholder="Precio del producto"/>
                    </InputArchivo>
                        <Agregar placeholder="Agregar producto">Agregar producto</Agregar>  
                </Container>
                
            </Form>
        </div>
    )
}

export default AgregarProducto;
