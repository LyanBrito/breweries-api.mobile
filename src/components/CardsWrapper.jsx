"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components/native";

export default function CardsWrapper() {
    const [page, setPage] = useState(1);
    const [brew, setBrew] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    const ITEMS_PER_PAGE = 5;

    const filteredItems = showOnlyFavorites ? favorites : brew;

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const currentItems = filteredItems.slice(start, end);

    useEffect(() => {
        axios.get("https://api.openbrewerydb.org/v1/breweries")
            .then(res => setBrew(res.data))
            .catch(err => console.log(err))
    }, [])

    const toggleFavorite = (brewery) => {
        setFavorites(prev => {
            const exists = prev.find(item => item.id === brewery.id);

            if (exists) {
                return prev.filter(item => item.id !== brewery.id);
            } else {
                return [...prev, brewery];
            }
        });
    };

    const handleToggleFilter = () => {
        setPage(1);
        setShowOnlyFavorites(prev => !prev);
    };

    return (
        <MainScroll>
            <TitlePage>Breweries Around the World</TitlePage>

            <FilterButton onPress={handleToggleFilter}>
                <FilterButtonText>
                    {showOnlyFavorites
                        ? "Mostrar Todas"
                        : "Mostrar Favoritos"}
                </FilterButtonText>
            </FilterButton>

            {currentItems.map((item) => (
                <Card
                    key={item.id}
                    brew={item}
                    isFavorite={favorites.some(fav => fav.id === item.id)}
                    onToggleFavorite={toggleFavorite}
                />
            ))}

            <ButtonWrapper>
                <NavButton
                    onPress={() => setPage(p => Math.max(p - 1, 1))}
                >
                    <ButtonText>Prev</ButtonText>
                </NavButton>

                <PageIndicator>Page {page}</PageIndicator>

                <NavButton
                    onPress={() => setPage(p => p + 1)}
                >
                    <ButtonText>Next</ButtonText>
                </NavButton>
            </ButtonWrapper>
        </MainScroll>
    )
}

const MainScroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
        gap: 20,

    }
})`
    flex: 1;
    background-color: #fdf5f3;
    border-radius: 15px;
`;

const TitlePage = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #1a1a1a;
    text-align: center;
    margin-bottom: 20px;
`;

const FilterButton = styled.TouchableOpacity`
    background-color: #ff9500;
    padding: 12px 20px;
    border-radius: 10px;
    margin-bottom: 20px;
`;

const FilterButtonText = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 14px;
`;

const ButtonWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 20px 0 60px 0;
`;

const NavButton = styled.TouchableOpacity`
    background-color: #007AFF;
    padding: 10px 20px;
    border-radius: 8px;
`;

const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
`;

const PageIndicator = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #444;
`;