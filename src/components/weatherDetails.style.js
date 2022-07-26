import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    flex-wrap: wrap;
    grid-gap: 5px;
    margin-top:0px;
    
    @media only screen and (min-width:768px) {
        grid-gap: 15px;
    }
`;

export const Info = styled.div`
    border-radius: 18px;
    border: solid white;
    padding: 0.5em;
    width: 87%;

    @media only screen and (min-width: 768px) {
        float: left;
        background-color: transparent;
        padding: 20px;
        width: 500px;
        height: 400px;
        margin-top: 0%;
        margin-bottom: 10%;
        background-color: rgba(4, 19, 127, 0.408);
    }
`;

export const City = styled.div`
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
    margin-top: 0;
    color: Orange;
    text-shadow: black 0.1em 0.1em 0.2em;
`;

export const Country = styled.div`
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    color: white;
`;

export const Date = styled.div`
    text-align: center;
    color: white;
    font-size: 16px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 20%;
    padding-right: 20%;
`;

export const Icon = styled.img`
    height: 70px;
`;

export const Text = styled.div`
    color: white;
    font-size: 16px;
`;

export const Condition = styled.div`
    font-size: 20px;
    color: white;
`;

export const Current = styled.div`
    font-size: 35px;
    font-weight: bold;
    color: white;
`;

export const Map = styled.div`
    margin-top: 3%;
    margin-bottom: 0;
`;

export const ForeCast = styled.div`
    border-radius: 18px;
    border: solid white;
    width: 90%;
    
    @media only screen and (min-width: 768px) {
        background-color: rgba(4, 19, 127, 0.408);
        width: 500px;
        height: 400px;
        margin-top: 0;
        margin-bottom: 10%;
        margin-left: 0;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0;
    }
`;

export const Next = styled.h1`
    color: orange;
    text-align: center;
    font-weight: bolder;
    font-size: 30px;
    text-shadow: black 0.1em 0.1em 0.2em;
`;

export const Day = styled.div`
    color: white;
    font-size: 20px;
    margin-left: 30px;
    margin-top: 25px;
`;

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0;
`;

export const Icons = styled.div`
    margin-right: 15px;
`;

export const Temp = styled.div`
    font-size: 24px;
    color: white;
    font-weight: bold;
    margin-left: 15px;
`;

export const More = styled.div`
    color: white;
    font-size: 16px;
    margin-left: 15px;
`;