import styled from 'styled-components'

export const Container = styled.form`
    margin: 15px 0;
    display: grid;
    place-content: center;

    & input {
        display: flex;
        align-items: center;
        justify-items: center;
        justify-content: center;
        background-color: white;
        border: solid white;
        width: 500px;
        padding: 10px;
        margin: 0%;
        font-size: 14px;
        border-radius: 15px;
        color: white;
    }
`;