import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const PerfilContainer = styled.div`
    display: flex
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    text-align: center;

`
const NomeCachorro = styled.h1`
   font-size: 24px
`

const FotoPerfil = styled.img`
    height: 100%;
    width: 50%;

`

const ListaDescricao = styled.ul`
    background-color: #C0C0C0;
    border: 1px solid #000;
    border-radius: 8px;

`

const ListaBotoes = styled.ul`
    display: flex;
    margin: 1em


`

const Botoes = styled.li`
    color: #000;
    margin: 1em;
    width: 210px;
    background-color: #ADD8E6;
    border: 1px solid #000;
    border-radius: 18px;
`




function Perfil() {
    const {id} = useParams();
    const [pet, setPet] = useState(null);

    useEffect(() =>{
        fetch(`http://localhost:8000/animais/${id}`)
        .then(res => res.json())
        .then(data => setPet(data))
        .catch(erro => console.error(erro))
    }, [id]);

    if(!pet) return <p>Carregando...</p>
    return(
    <PerfilContainer>
      <NomeCachorro>{pet.nome}</NomeCachorro>
        <FotoPerfil src={pet.foto ? `http://localhost:8000${pet.foto}` : undefined} alt={pet.nome} />
        <ListaDescricao>
        <p>Idade: {pet.idade}</p>
        <p>Raça: {pet.raca}</p>
        <p>Histórico: {pet.historico}</p>
        <p>Vacinas: {pet.vacinas}</p>
      </ListaDescricao>
      <ListaBotoes>
        <Botoes>
            <p>ADOTAR</p>
        </Botoes>
        <Botoes>
            <p>AGENDAR VISITA</p>
        </Botoes>
      </ListaBotoes>
    </PerfilContainer>
    )



}

export default Perfil