import { useState } from "react";
import {
    Input,
    InputWrapper,
    ErrorMessage,
    SuccessMessage,
} from "./styled";
import Title from "../Title";



export function UrlInput() {
    const [success, setSuccess] = useState(true);
    const [hasError, setHasError] = useState(true);

    return (
        <>
            <Title>Entre com uma URL</Title>
            <InputWrapper success={success}>
                <Input></Input>
                {
                    success ?
                    <SuccessMessage>
                        <span>Url criada com sucesso!</span>
                        <span>Sua nova url: exemplo.com/ajdskajs</span>
                    </SuccessMessage>: ""
                }
                {
                    hasError && !success?
                    <ErrorMessage>Ocorreu algum erro! Tente novamente.</ErrorMessage> : ""
                }
            </InputWrapper>
        </>
    );
}

