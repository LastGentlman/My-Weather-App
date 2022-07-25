import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 5px;
    margin-top:0px;
    border: 1px solid green;
`;

export const Info = styled.div`
    float: left;
    background-color: transparent;
    padding: 20px;
    border-radius: 18px;
    border: solid white;
    width: 500px;
    height: 400px;
    margin-top: 0%;
    margin-bottom: 10%;
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
`;

export const ForeCast = styled.div`
    float: left;
    background-color: transparent;
    padding: 20px;
    border-radius: 18px;
    border: solid white;
    width: 500px;
    height: 400px;
    margin-top: 0%;
    margin-bottom: 10%;
    margin-left: 0%;
    margin-right: 30px;
`;

export const Next = styled.h1`
    color: blueviolet;
    font-size: 30px;
    text-shadow: black 0.1em 0.1em 0.2em;
    margin-left: 30px;
    margin-top: 10px;
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
    padding-left: 20%;
    padding-right: 10%;
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