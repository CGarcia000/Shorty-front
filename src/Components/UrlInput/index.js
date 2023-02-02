import { useState } from "react";
import {
    Input,
    InputWrapper,
    ErrorMessage,
    SuccessMessage,
} from "./styled";
import Title from "../Title";
import { ButtonSubmit } from "./ButtonSubmit";

export function UrlInput() {
    const [success, setSuccess] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [urlInput, setUrlInput] = useState('');
    const [newUrl, setNewUrl] = useState('');

    return (
        <>
            <Title>Entre com uma URL</Title>
            <InputWrapper success={success}>
                <Input placeholder='URL' value={urlInput}
                        onChange={e => {
                            setUrlInput(e.target.value);
                            setSuccess(current => false);
                            setHasError(current => false);
                        }}
                />
                {
                    success ?
                    <SuccessMessage>
                        <span>Url criada com sucesso!</span>
                        <span>Sua nova url: <a href={newUrl}>{newUrl}</a></span>
                    </SuccessMessage> : <ButtonSubmit url={urlInput} setSuccess={setSuccess} setHasError={setHasError} setNewUrl={setNewUrl}/>
                }
                {
                    hasError && !success?
                    <ErrorMessage>Ocorreu algum erro! Tente novamente.</ErrorMessage> : ""
                }
            </InputWrapper>
        </>
    );
}

