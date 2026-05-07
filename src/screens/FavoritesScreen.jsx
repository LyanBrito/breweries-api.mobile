import React from "react";
import styled from "styled-components/native";

import Card from "../components/Card";

export default function FavoritesScreen({ navigation, favorites = [], toggleFavorite }) {
    return (
        <Container>

            <Header>
                <BackButton onPress={() => navigation.navigate("Home")}>
                    <BackText>Back</BackText>
                </BackButton>

                <Title>My Favorites</Title>
            </Header>

            {favorites.length === 0 ? (
                <EmptyText>No favorites yet.</EmptyText>
            ) : (
                favorites.map(item => (
                    <Card
                        key={item.id}
                        brew={item}
                        isFavorite={true}
                        onToggleFavorite={toggleFavorite}
                    />
                ))
            )}

        </Container>
    );
}

const Container = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: "center",
        paddingVertical: 20,
        gap: 20
    }
})`
    flex: 1;
    background-color: #fff7f0;
`;

const Header = styled.View`
    width: 100%;
    padding: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 10px;
`;

const BackButton = styled.TouchableOpacity`
    position: absolute;
    left: 20px;
    background-color: #007AFF;
    padding: 10px 20px;
    border-radius: 8px;
`;

const BackText = styled.Text`
    font-size: 16px;
    color: #FFF;
    font-weight: bold;
`;

const Title = styled.Text`
    font-size: 22px;
    font-weight: bold;
    color: #1a1a1a;
`;

const EmptyText = styled.Text`
    text-align: center;
    margin-top: 40px;
    color: #888;
`;