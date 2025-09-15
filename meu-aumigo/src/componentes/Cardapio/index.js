import styled from "styled-components";
import CardCachoro from "../../CardCachorros";
import { useEffect, useState } from "react";

const CardapioContainer = styled.div`
    display: flex;

`

const OpcaoCardapio = styled.ul`
    display: flex;
    margin-right: 1em; 
`

const OpcoesCachorros = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;

`



function Cardapio(){
    const [pets, setPets] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/animais")
            .then(res => res.json())
            .then(data => setPets(data))
            .catch(erro => console.error(`Erro Ao vuscar pets: ${erro}`));
    }, []);

    return(
    <CardapioContainer>
        <OpcaoCardapio>
            <OpcoesCachorros>
                {pets.map((pet, index) =>                
                 <CardCachoro key={index}

                    nome={pet.nome}
                    foto={pet.foto ? `http://localhost:8000${pet.foto}` : undefined} alt={pet.nome}
                    
    />)}
            </OpcoesCachorros>
        </OpcaoCardapio>
    </CardapioContainer>

    
    )
    
}

export default Cardapio