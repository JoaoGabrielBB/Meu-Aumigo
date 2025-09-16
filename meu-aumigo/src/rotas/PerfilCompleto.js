import styled from "styled-components";
import Perfil from "../componentes/Perfil";



const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000
    color: #000


`


function PerfilCompleto() {
    return(
        <AppContainer>
            <Perfil/>
            
        </AppContainer>




    )




}

export default PerfilCompleto