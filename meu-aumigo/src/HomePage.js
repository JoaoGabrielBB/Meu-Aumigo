import styled from "styled-components";
import Cardapio from "./componentes/Cardapio";
import { useEffect } from "react";
import axios from "axios";


const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000
    color: #000


`



function HomePage() {
      useEffect(() => {
    axios.get("http://localhost:8000/cachorros")
      .then(res => {
        console.log("API respondeu:", res.data);
      })
      .catch(err => {
        console.error("Erro ao conectar com a API:", err);
      });
  }, []);
    return(
        <AppContainer>
            <h1>Testando conexão React + API</h1>
            <Cardapio/>

        </AppContainer>


    )
  
}

export default HomePage;
