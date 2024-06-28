import styled from "styled-components"

const Input = styled.input`
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 30px;
    outline: none;
    transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }

    &:focus {
        border-color: #326589;
        box-shadow: 0 0 10px rgba(50, 101, 137, 0.5);
    }
`


export default Input