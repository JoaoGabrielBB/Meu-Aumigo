import pet from "../../assents/logo/pet.png"
import styled from "styled-components";




const LogoContainer = styled.div`
    display: flex;
  

`


const LogoImagem = styled.img` 
    height: 80px;
    

`


function Logo(){
    return(
        <LogoContainer>
            <LogoImagem 
                src={pet}
                alt='logo'
            />
        </ LogoContainer>
    );
};

export default Logo