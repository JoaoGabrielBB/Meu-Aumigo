import styled from "styled-components";
import Logo from "../Logo";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header` 
    background-color: #FFFF00;
    color: #000; /* garante que o texto fique visível */
    display: flex;
    justify-content: center;
`

const Titulo = styled.h2`
    margin: 1.5em 1em 1em 0.5em;
    font-size: 20px;


`


function Header(){


    return(
    <HeaderContainer>
        <Link to={`/`}>
                <Logo/>
        </Link>

        <Titulo>ADOTE UM AMIGO!</Titulo>
    </HeaderContainer>
    );
};

export default Header