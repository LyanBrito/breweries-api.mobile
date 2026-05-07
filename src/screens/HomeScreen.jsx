import React from "react";
import styled from "styled-components/native";
import CardsWrapper from "../components/CardsWrapper";

export default function HomeScreen({navigation, favorites, toggleFavorite}) {
    return (
        <Container>
            <Header>
                <Title>Breweries</Title>
                <Subtitle>around the world</Subtitle>
            </Header>

            <GoButton onPress={() => navigation.navigate("Favorites")}>
                <GoButtonText>Ver Favoritos</GoButtonText>
            </GoButton>

            <CardsWrapper
                favorites={favorites}
                toggleFavorite={toggleFavorite}
            />
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
    align-items: center;
`;

const Title = styled.Text`
    font-size: 32px;
    font-weight: 800;
    color: #2D1B08;
`;

const Subtitle = styled.Text`
    font-size: 16px;
    color: #5E3A11;
`;

const GoButton = styled.TouchableOpacity`
    background-color: #2D1B08;
    padding: 15px;
    margin: 10px 20px;
    border-radius: 8px;
    align-items: center;
`;

const GoButtonText = styled.Text`
    color: white;
    font-weight: bold;
`;