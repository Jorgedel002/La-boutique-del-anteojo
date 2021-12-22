import Home from "./pages/Home"
import Productos from "./pages/Productos"
import Faq from "./pages/Faq"
import Register from "./pages/Register";
import Login from "./pages/Login"
import AdminPage from "./pages/AdminPage"
import Header from "./components/Header"
import Cristales from "./pages/Cristales";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider, useAuth } from './context/AuthContext';
import { PrivateRoute } from './components/PrivateRoute';
import styled from "styled-components";
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  .none{
    display: none;
  }
`

function App() {

  return (
    <div className="App">
      <GlobalStyle/>
      <AuthProvider>
        <Router>
          {window.location.pathname === "/login" || window.location.pathname === "/registro"  ? (
            <></>
          ):(
            <Header/> 
          )
          }
          <Switch>
            <Route path="/" exact>            
              <Home/>
            </Route>
            <PrivateRoute path='/adminpage'>
                <AdminPage/>
            </PrivateRoute>
            <Route path="/productos" exact>
              <Productos/>
            </Route>
            <Route path="/preguntasfrecuentes" exact>
              <Faq/>
            </Route>
            <Route path="/registro" exact>
              <Register/>
            </Route>
            <Route path="/login" exact>
              <Login/>
            </Route>
            <Route path="/cristales" exact>
              <Cristales/>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
