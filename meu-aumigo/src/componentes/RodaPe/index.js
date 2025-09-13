import styled from "styled-components";

const RodaPeContainer = styled.footer`
    background-color: #C0B350;
    color: #fff; 
    display: flex;
    justify-content: center;
`
const Adotando = styled.p`
    font-size: 8px;


`


function RodaPe(){
    return(
        <RodaPeContainer>
        <Adotando>Ai Ai.. Vou Adotar..... Ai Ai... To Adotando....</Adotando>
        </RodaPeContainer>


    )
}


export default RodaPe