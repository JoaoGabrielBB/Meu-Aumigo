import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Card = styled.div`
  width: 132px;
  height: 99px;
  position: relative;
  overflow: hidden;
  border: 2px solid #000;
  border-radius: 8px;
  margin: 1em 1em 0 0;
  cursor: pointer;
`;

const FotoCachoro = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7); /* faixa preta com transparência */
  color: white;
  text-align: center;
  padding: 5px;
  font-weight: bold;
  font-size: 1rem;
`;

function CardCachoro({ nome, foto, id }) {
  const navigate = useNavigate();

  const irParaPerfil = () => {
    navigate(`/amigo/${id}`)
  };


  return (
    <Card onClick={irParaPerfil}>
      <FotoCachoro src={foto} alt={nome} />
      <Overlay>{nome}</Overlay>
    </Card>
  );
}

export default CardCachoro;