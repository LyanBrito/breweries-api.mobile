import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components/native";

import Card from "./Card";

export default function CardsWrapper({favorites, toggleFavorite}) {
    const [page, setPage] = useState(1);
    const [brew, setBrew] = useState([]);

    const ITEMS_PER_PAGE = 5;

    useEffect(() => {
        axios.get("https://api.openbrewerydb.org/v1/breweries")
            .then(res => setBrew(res.data))
            .catch(err => console.log(err));
    }, []);

    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const currentItems = brew.slice(start, end);

    return (
        <MainScroll>

            <TitlePage>Breweries Around the World</TitlePage>

            {currentItems.map((item) => (
                <Card
                    key={item.id}
                    brew={item}
                    isFavorite={(favorites ?? []).some(f => f.id === item.id)}
                    onToggleFavorite={toggleFavorite}
                />
            ))}

            <ButtonWrapper>
                <NavButton onPress={() => setPage(p => Math.max(p - 1, 1))}>
                    <ButtonText>Prev</ButtonText>
                </NavButton>

                <PageIndicator>Page {page}</PageIndicator>

                <NavButton onPress={() => setPage(p => p + 1)}>
                    <ButtonText>Next</ButtonText>
                </NavButton>
            </ButtonWrapper>

        </MainScroll>
    );
}

const MainScroll = styled.ScrollView.attrs({
    contentContainerStyle: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 20,
        gap: 20,
    }
})`
    flex: 1;
    background-color: #fdf5f3;
`;

const TitlePage = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #1a1a1a;
    text-align: center;
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