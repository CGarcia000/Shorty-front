import { postUrl } from "../../services/urlApi";

import styled from "styled-components";

export function ButtonSubmit({
    url,
    setSuccess,
    setHasError,
    setNewUrl
}) {
    function handleUrlSubmit() {
        const body = {
            url
        }

        postUrl(body).then(res => {
            setSuccess(current => true);
            setHasError(current => false);
            setNewUrl(current => res.url);
        }).catch(e => {
            setHasError(current => true);
            console.log(e);
        })
    }

    return (
        <Container>
            <button type="button" onClick={handleUrlSubmit}>Criar url</button>
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