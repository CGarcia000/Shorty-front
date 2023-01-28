import styled from "styled-components";

export function Header() {
    return (
        <Container>
            <Title>Shorty</Title>

        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #ffffff;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

const Title = styled.div`
    padding: 0 3rem;
    font-size: 1.5rem;
`;