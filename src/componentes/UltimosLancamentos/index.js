import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo as TituloComponente } from '../Titulo'; 
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../imagens/livro2.png'

const UltimosLancamentosContainer = styled.section`
    --bg-color: #EBECEE;
    --padding-bottom: 20px;
    --flex-direction: column;

    background-color: var(--bg-color);
    padding-bottom: var(--padding-bottom);
    display: flex;
    flex-direction: var(--flex-direction);
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
`

const Titulo = styled.h2`
    --padding: 30px 0;
    --bg-color: #FFF;
    --color: #EB9B00;
    --font-size: 36px;

    width: 100%;
    padding: var(--padding);
    background-color: var(--bg-color);
    color: var(--color);
    font-size: var(--font-size);
    text-align: center;
    margin: 0;
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
    font-family: 'Roboto', sans-serif;
`

const NovosLivrosContainer = styled.div`
    --margin-top: 30px;

    margin-top: var(--margin-top);
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`


function UltimosLancamentos(){
    return(
        <UltimosLancamentosContainer>
            <TituloComponente
                cor="#EB9B00"
                tamanhoFonte="36px"
            >
                Ultimos Lançamentos
            </TituloComponente>
            <NovosLivrosContainer>
                {livros.map ( livro => (
                    <img src={livro.src}/>
                ) )}
            </NovosLivrosContainer>
           <CardRecomenda 
                titulo= "Talvez você se interesse por"
                subtitulo = "Python"
                descricao = "Construindo uma aplicação"
                img = {imagemLivro}
           />
        </UltimosLancamentosContainer>
    )

}

export default UltimosLancamentos
