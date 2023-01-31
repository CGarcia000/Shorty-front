import { UrlInput } from "../../Components/UrlInput";
import { UserLinks } from "../../Components/UserLinks";
import { Container } from "./styled";

export function Homepage() {
    return (
        <Container>
            <UrlInput />
            <UserLinks />
        </Container>


    );
}
