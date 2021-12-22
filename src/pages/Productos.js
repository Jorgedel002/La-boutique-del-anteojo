import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer"
import ProductosPage from "../components/ProductosPage"
import productosCss from "../css/productos.css"
import Filter from "../components/Filter";
import PaginationTable from "../components/PaginationTable";

const GlobalStyle = createGlobalStyle `
    body{
        margin: 0;
        font-family: 'Sunflower', sans-serif;
    }
`

function Productos(){
    return(
        <div className="productos">
            <GlobalStyle/>
            <Filter/>
            <ProductosPage/>
            <PaginationTable/>
            <Footer/>
        </div>
    )
}

export default Productos;