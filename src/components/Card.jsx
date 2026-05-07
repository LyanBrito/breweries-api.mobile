import React from "react";
import {Linking} from "react-native";
import styled from "styled-components/native";

export default function Card({brew, isFavorite, onToggleFavorite}) {
    return (
        <CardContainer>

            <Header>
                <BreweryName>{brew.name}</BreweryName>

                <RightHeader>
                    <TypeTag>
                        <TypeText>Type: {brew.brewery_type}</TypeText>
                    </TypeTag>

                    <FavoriteButton onPress={() => onToggleFavorite(brew)}>
                        <FavoriteText>
                            {isFavorite ? "❤️" : "🤍"}
                        </FavoriteText>
                    </FavoriteButton>
                </RightHeader>
            </Header>

            <InfoSection>
                <InfoRow>
                    <Label>Address</Label>
                    <Value>{brew.address_1 || "Not available"}</Value>
                </InfoRow>

                <InfoRow>
                    <Label>Location</Label>
                    <Value>{brew.city}, {brew.state}</Value>
                </InfoRow>

                <InfoRow>
                    <Label>Country</Label>
                    <Value>{brew.country}</Value>
                </InfoRow>
            </InfoSection>

            {brew.website_url && (
                <StyledButton onPress={() => Linking.openURL(brew.website_url)}>
                    <ButtonText>VISIT WEBSITE</ButtonText>
                </StyledButton>
            )}

        </CardContainer>
    );
}

const CardContainer = styled.View`
    width: 90%;
    background-color: #fff;
    border-radius: 16px;
    padding: 20px;
    elevation: 5;
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 15px;
`;

const RightHeader = styled.View`
    flex-direction: row;
    align-items: center;
`;

const BreweryName = styled.Text`
    flex: 1;
    font-size: 20px;
    font-weight: 800;
`;

const TypeTag = styled.View`
    background-color: #eee;
    padding: 4px 10px;
    border-radius: 8px;
`;

const TypeText = styled.Text`
    font-size: 11px;
    font-weight: bold;
`;

const FavoriteButton = styled.TouchableOpacity`
    margin-left: 10px;
`;

const FavoriteText = styled.Text`
    font-size: 20px;
`;

const InfoSection = styled.View`
    gap: 12px;
`;

const InfoRow = styled.View`
    border-left-width: 3px;
    border-left-color: #007AFF;
    padding-left: 10px;
`;

const Label = styled.Text`
    font-size: 12px;
    color: #999;
`;

const Value = styled.Text`
    font-size: 15px;
    color: #444;
`;

const StyledButton = styled.TouchableOpacity`
    background-color: #007AFF;
    margin-top: 20px;
    padding: 14px;
    border-radius: 10px;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: white;
    font-weight: bold;
`;