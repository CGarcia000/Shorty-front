import styled from "styled-components";

export function ButtonSubmit() {
    return (
        <Container>
            <button type="submit">Criar url</button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;

    button {
        padding: 1rem;
        background-color: red;
        border-radius: 5px;
        border: none;
        margin-top: .5rem;
        cursor: pointer;
    }

`;