import {Text} from "react-native";
import styled from "styled-components/native";
import CardsWrapper from "./src/components/CardsWrapper";

export default function App() {

    return (
        <Container>
            <Text>Breweries throw the World</Text>
            <CardsWrapper />
        </Container>
    );
}

const Container = styled.ScrollView`
    padding-top: 75px;
    display: flex;
    background-color: chocolate;
`

