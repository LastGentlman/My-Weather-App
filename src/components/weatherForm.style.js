import styled from 'styled-components'

export const Container = styled.form`
        & input {
        border-radius: 15px;
        border: solid white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 250px;
        padding: 0;
        margin: 0;
        font-size: 14px;
    }
    
@media only screen and (min-width: 768px){
    margin: 15px 0;
    display: grid;
    place-content: center;

    & input {
        display: flex;
        align-items: center;
        justify-content: center;
        border: solid white;
        width: 500px;
        padding: 10px;
        margin: 0%;
        font-size: 14px;
        border-radius: 15px;
    }
}
`;