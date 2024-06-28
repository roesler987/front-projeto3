import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Option = styled.li`
    min-width: 120px;
    font-size: 16px;
    height: 100%;
    padding: 0 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        background-color: #002F52;
        color: #FFF;
        transform: scale(1.05);
    }
`

const Options = styled.ul`
    display: flex;
    gap: 10px;  /* Espaçamento entre as opções */
    padding: 0;
    list-style: none;  /* Remove os marcadores de lista */
`


const textOptions = ['CATEGORIAS','FAVORITOS','ESTANTE'];

function OptionsHeader (){
    return(
        <Options>
            {textOptions.map( (text) => (
                <Link to={`/${text.toLocaleLowerCase()}`} ><Option><p>{text}</p></Option></Link>
        ) ) }
      </Options>
    )
}

export default OptionsHeader;