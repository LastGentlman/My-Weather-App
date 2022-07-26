import styled from 'styled-components'

export const MainContainer = styled.div`
    margin-left: 0;

    @media only screen and (min-width:768px) {
        margin-left: 6rem;
        display: flex;
        border: none;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
`;

export const Title = styled.h1`
    color: skyblue;
    text-align: center;
    font-size: 35px;
    margin-top: 4px;
    margin-bottom: 3px;
    text-shadow: black 0.1em 0.1em 0.2em;
    font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

    @media only screen and (min-width: 768px) {
        font-size: 50px;
        margin-top: 4px;
        margin-bottom: 19px;
    }
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