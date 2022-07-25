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
    background: linear-gradient(43deg, rgba(2, 0, 36, 1) 0%, rgb(97, 9, 121) 35%, rgb(245, 119, 207) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    animation: rotation 0.5s linear infinite;

    & div {
    background-color: rgb(59, 15, 99);
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