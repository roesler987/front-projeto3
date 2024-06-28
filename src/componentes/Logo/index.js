import logo from '../../imagens/logo2.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 30px;
    gap: 10px; /* Espaçamento entre o logo e o texto */
`

const LogoImg = styled.img`
    margin-right: 10px;
    width: 40px; 
    height: auto; 
`


function Logo(){
    return(
        <LogoContainer>
            <LogoImg
            src={logo} 
            alt='logo'>
            </LogoImg>
            <p><strong>Entre</strong> Paginas</p>
        </LogoContainer>
    )
}

export default Logo;