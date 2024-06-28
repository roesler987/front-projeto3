import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components'
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';
import livroImg from '../imagens/livro.png'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;  /* Espaçamento entre os itens */
    padding: 20px;
`

const Resultado = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px;
    cursor: pointer;
    text-align: center;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    
    p {
        width: 200px;
        color: #FFF;
        margin: 10px 0;
    }
    img {
        width: 100px;
        margin-bottom: 10px;
    }
    &:hover {
        border: 1px solid white;
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px;
    margin-bottom: 20px;
`


function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const response = await getFavoritos()
    setFavoritos(response)
  }

  async function deletaFavorito(id) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Você deletou o livro de id: ${id}`)
  }

  return (
    <AppContainer>
      <div>
        <Titulo>Aqui estão seus livros favoritos:</Titulo>
        <ResultadoContainer>
          {
            favoritos.length !== 0 ? favoritos.map(favorito => (
              <Resultado onClick={() => deletaFavorito(favorito.id)}>
                <p>{favorito.nome}</p>
                <img src={livroImg}
                alt =''
                />
              </Resultado>
            )) : null
          }
        </ResultadoContainer>
      </div>
    </AppContainer>
  );
}

export default Favoritos