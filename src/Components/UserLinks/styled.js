import styled from "styled-components";

const LinkContainer = styled.div`
    width: 60%;
    background-color: rgba(42,202,234, .3);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 20rem;
    padding-bottom: 1.5rem;
    margin-bottom: 3rem;

    @media (max-width: 900px) {
        width: 75%;
    }
`;

const LinkWrapper = styled.div`
    width: 90%;
    min-height: 5rem;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 5px 5px 3px rgba(0, 0, 0, 0.3);
    margin-top: 1.5rem;
    display: flex;
    // mudar para deixar spans como divs de tamanho cte
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
`;

const LinkSpan = styled.span`

`;

export {
    LinkContainer,
    LinkWrapper,
    LinkSpan,
}