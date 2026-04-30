"use client"

import {Button, ScrollView, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
import styled from "styled-components/native";

export default function CardsWrapper() {
    const [page, setPage] = useState(1);
    const [brew, setBrew] = useState([]);

    const ITEMS_PER_PAGE = 20;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const currentItems = brew.slice(start, end);

    useEffect(() => {
        axios.get("https://api.openbrewerydb.org/v1/breweries")
            .then(res => {
                setBrew(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <Container>
            {currentItems.map((item) => (
                <Card key={item.id} brew={item}/>
            ))}
            <ButtonWrapper>
                <Button title="Prev" onPress={() => setPage(p => Math.max(p - 1, 1))}/>
                <Button title="Next" onPress={() => setPage(p => p + 1)}/>
            </ButtonWrapper> </Container>
    )
}

const Container = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`
const ButtonWrapper = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    padding-bottom: 60px;
`