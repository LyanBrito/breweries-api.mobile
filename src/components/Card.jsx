import {Button, Linking, Text, View} from "react-native";
import styled from "styled-components/native";

export default function Card({brew}){

    return (
        <CardContainer>
            <CardText>Name: {brew.name}</CardText>
            <CardText>Type: {brew.brewery_type}</CardText>
            <CardText>Adress: {brew.address_1}</CardText>
            <CardText>City: {brew.city}</CardText>
            <CardText>State: {brew.state}</CardText>
            <CardText>Country: {brew.country}</CardText>
            <Button title="Website" onPress={() => Linking.openURL(brew.website_url)}/>
        </CardContainer>
    )
}

const CardContainer = styled.View`
    display: flex;
    width: 80%;
    gap: 8px;
    background-color: crimson;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

const CardText = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`