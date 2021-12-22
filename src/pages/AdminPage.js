import React from 'react';
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import AgregarProducto from '../components/AgregarProductos';

const GlobalStyle = createGlobalStyle `
    body{
        
    }
`

const AdminPage = () => {
    return (
        <div className="admin-page">
            <GlobalStyle/>
            <AgregarProducto/>
        </div>
    )
}

export default AdminPage;
