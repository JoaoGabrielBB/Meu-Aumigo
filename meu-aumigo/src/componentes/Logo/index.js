import logo from "../../assents/logo/logo.png"
import styled from "styled-components";




const LogoContainer = styled.div`
    display: flex;
  

`


const LogoImagem = styled.img` 
    height: 85px;
    

`


function Logo(){
    return(
        <LogoContainer>
            <LogoImagem 
                src={logo}
                alt='logo'
            />
        </ LogoContainer>
    );
};

export default Logo