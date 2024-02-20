import { Container } from "@mui/material";
import { Header } from "../components/Header";

export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <h1>Hello world</h1>
                <h5>This is the home page</h5>
            </Container>
        </>
    );
};
