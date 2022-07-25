import styled from 'styled-components'

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background-color: none;
    border-radius: 5px;
    margin-top: 10%;
`;

export const Loader = styled.div`
    width: 70px;
    height: 70px;
    box-sizing: border-box;
    padding: 10px;
    background: rgb(2, 0, 36);
    background: linear-gradient(43deg, rgba(2, 0, 36, 1) 0%, rgba(0,0,255,1) 35%, rgba(135,206,235,1) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    animation: rotation 0.5s linear infinite;

    & div {
    background-color: darkblue;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
    border-radius: 50%;
    }

    @keyframes rotation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(358deg);
        }
    }
`;