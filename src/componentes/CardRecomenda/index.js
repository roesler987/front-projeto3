import styled from "styled-components"
import { Titulo } from "../Titulo"

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px auto;
    max-width: 600px;
    padding: 25px 20px;
    width: 100%;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
`

const Botao = styled.a`
    background-color: #EB9B00;
    color: #FFF;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        cursor: pointer;
        background-color: #C97A00;
        transform: scale(1.05);
    }
`

const Descricao = styled.p`
    max-width: 300px;
    font-size: 14px;
    line-height: 1.5;
    color: #666;
    text-align: center;
    margin-bottom: 20px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const ImgLivro = styled.img`
    width: 150px;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`


function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="#EB9B00" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Botao href="https://www.amazon.com.br/Java-Pr%C3%A1tico-Lambdas-recursos-linguagem-ebook/dp/B00VAB1VP6" target="_blank">Saiba mais</Botao>
            </div>
        </Card>  
    )
}

export default CardRecomenda