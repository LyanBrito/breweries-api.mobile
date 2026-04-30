import {Text} from "react-native";
import styled from "styled-components/native";

export default function App() {

    return (
        <Container>
            <Text>Hello World</Text>
        </Container>
    );
}

const Container = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: chocolate;
    width: 100%;
    height: 100%;
`

