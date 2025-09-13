import styled from "styled-components";
import johan from "../../assents/cachorros/Johan.jpg"
import CardCachoro from "../../CardCachorros";

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

`



function Cardapio(){
    return(
    <CardapioContainer>
        <OpcaoCardapio>
            <OpcoesCachorros>
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />

                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />

                
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />

                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />
                
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />
                
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />
                
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />
                
                <CardCachoro 
                    nome="Johan"
                    foto={johan}
                />
            </OpcoesCachorros>
        </OpcaoCardapio>
    </CardapioContainer>
    )
}

export default Cardapio