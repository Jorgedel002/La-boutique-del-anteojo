import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom"
import paginationCss from "../css/pagination.css"

const PaginationContainer = styled.div`
    display: flex;
    width: 90%;
`

const Pagination = styled.ul`
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
    margin-bottom: 80px;
    margin-left: auto;
`

function PaginationTable(){

    return(
        <div className="PaginationTable">
            <PaginationContainer>
                <Pagination>
                    <FontAwesomeIcon icon={ faChevronLeft } className="icon previous-icon"/>
                    <Link to="/productos" className="number-link" >1</Link>
                    <Link to="/productos" className="number-link" id="button">2</Link>
                    <Link to="/productos" className="number-link" id="button">3</Link>
                    <Link to="/productos" className="number-link" id="button">4</Link>
                    <Link to="/productos" className="number-link" id="button">5</Link>
                    <Link to="/productos" className="number-link" id="button">6</Link>
                    <FontAwesomeIcon icon={ faChevronRight } className="icon next-icon"/>
                </Pagination>
            </PaginationContainer>
        </div>
        
    )
}

export default PaginationTable;