import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-direction: column;
`;

export const Title = styled.h1`
    color: skyblue;
    text-align: center;
    font-size: 50px;
    margin-top: 19px;
    margin-bottom: 19px;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
    height: 40px;
    margin: 30px;
    margin-top: 0%;
    margin-bottom: 2%;
`;

export const Weather = styled.div`
    display: grid;
    place-content: center;
`;