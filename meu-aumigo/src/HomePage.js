import styled from "styled-components";
import Cardapio from "./componentes/Cardapio";


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000
    color: #000


`



function HomePage() {
    return(
        <AppContainer>
            <Cardapio/>

        </AppContainer>


    )
  
}

export default HomePage;
