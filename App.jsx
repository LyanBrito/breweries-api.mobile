import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

// Screens
import HomeScreen from "./src/screens/HomeScreen";
import FavoritesScreen from "./src/screens/FavoritesScreen";

const Stack = createStackNavigator();

export default function App() {
    const [favorites, setFavorites] = React.useState([]);

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

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}} id="1">
                {/*Não estou chamando component aqui pq tenho que chamar as propriedades deles dessa forma*/}
                <Stack.Screen name="Home">
                    {(props) => (
                        <HomeScreen
                            {...props}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                        />
                    )}
                </Stack.Screen>

                <Stack.Screen name="Favorites">
                    {(props) => (
                        <FavoritesScreen
                            {...props}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}