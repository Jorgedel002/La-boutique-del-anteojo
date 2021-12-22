import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
import { faCcMastercard } from "@fortawesome/free-brands-svg-icons";
import App from "../css/App.css"

const ModoPagoContainer = styled.div `
    text-align: center;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;
    width: 90%;
    max-width: 337px;
    @media(min-width:1209px){
        display: flex;
        justify-content: center;
        max-width: 900px;
        justify-content: space-between;
    } 
`

const TitlePago = styled.h2 `
    font-size: 22px;
`
const TextPago = styled.p `
    padding-left: 10px;
    padding-right: 10px;
`

const Pago = styled.div`
    @media(min-width: 1209px){
        width: 300px;
    } 
`


function ModoPago() {
    return(
        <ModoPagoContainer>
            <Pago>
                <FontAwesomeIcon icon={ faMoneyBillWave } className="faMoneyBillWave icon-pago"/>
                <TitlePago>Paga en efectivo</TitlePago>
                <TextPago className="text-pago">Podes pagar en efectivo tambien dejar seña y terminar de pagar cuand retires</TextPago>
            </Pago>
            <Pago>
                <FontAwesomeIcon icon={ faCcMastercard } className="faCcMastercard icon-pago"/>
                <TitlePago>Paga con tarjeta bancaria</TitlePago>
                <TextPago>Si pagas en un pago es 10% de interes, paga en 3 y 6 cuotas con 18% de interes y hasta 12 cuotas con 27% de interes</TextPago>
            </Pago>
        </ModoPagoContainer>
    )
}

export default ModoPago;