import React from "react";
import { StatusBar } from "react-native";
import styled from "styled-components/native";
import CardsWrapper from "./src/components/CardsWrapper";

export default function App() {
    return (
        <Container>
            <StatusBar barStyle="light-content" />
            <Header>
                <Title>Breweries</Title>
                <Subtitle>around the world</Subtitle>
            </Header>

            <Content>
                <CardsWrapper />
            </Content>
        </Container>
    );
}

const Container = styled.ScrollView`
    flex: 1;
    background-color: #efc9ad;
`;

const Header = styled.View`
  padding: 60px 20px 30px;
  background-color: #F2A900;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: #2D1B08;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  color: #5E3A11;
  font-style: italic;
  margin-top: -5px;
`;

const Content = styled.View`
  padding: 20px;
  margin-top: 10px;
`;