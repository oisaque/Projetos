import React from "react";
import {
    Image,
    TouchableOpacity
} from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Onboarding, DestinationDetail, Flighter, Bus, Train, Taxi, Hotel, Eats, Adventure, Events } from './screens';
import Tabs from "./navigation/tabs";
import { icons, COLORS, SIZES } from './constants';
import { useFonts } from 'expo-font';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: "transparent",
    },
};

const Stack = createStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        "Roboto-Black" : require('./assets/fonts/Roboto-Black.ttf'),
        "Roboto-Bold" : require('./assets/fonts/Roboto-Bold.ttf'),
        "Roboto-Regular" : require('./assets/fonts/Roboto-Regular.ttf'),

    })
    
    if(!loaded){
    return null;
    }
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={'Onboarding'}
            >
                {}
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: null,
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Pressed")}
                            >
                                <Image
                                    source={icons.barMenu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />

                <Stack.Screen
                    name="DestinationDetail"
                    component={DestinationDetail}
                    options={{ headerShown: false }}
                />

                {}

                <Stack.Screen
                    name="Flighter"
                    component={Flighter}
                    options={{ headerShown: false }}
                />

                {}
                <Stack.Screen
                    name="Bus"
                    component={Bus}
                    options={{ headerShown: false }}
                />

                {}
                <Stack.Screen
                    name="Train"
                    component={Train}
                    options={{ headerShown: false }}
                />

                {}
                <Stack.Screen
                    name="Taxi"
                    component={Taxi}
                    options={{ headerShown: false }}
                />

                {}
                <Stack.Screen
                    name="Hotel"
                    component={Hotel}
                    options={{ headerShown: false }}
                />

                {}
                <Stack.Screen
                    name="Eats"
                    component={Eats}
                    options={{ headerShown: false }}
                />

              {}

              <Stack.Screen
                    name="Adventure"
                    component={Adventure}
                    options={{ headerShown: false }}
                />

              {}
              <Stack.Screen
                    name="Events"
                    component={Events}
                    options={{ headerShown: false }}
                />

              {}                                                                                            
                < Stack.Screen
                    name="Home"
                    component={Tabs}
                    options={{
                        title: null,
                        headerStyle: {
                            backgroundColor: COLORS.white
                        },
                        headerLeft: ({ onPress }) => (
                            <TouchableOpacity
                                style={{ marginLeft: SIZES.padding }}
                                onPress={onPress}
                            >
                                <Image
                                    source={icons.back}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                        headerRight: () => (
                            <TouchableOpacity
                                style={{ marginRight: SIZES.padding }}
                                onPress={() => console.log("Menu")}
                            >
                                <Image
                                    source={icons.menu}
                                    resizeMode="contain"
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            </TouchableOpacity>
                        ),
                    }}
                />


            </Stack.Navigator>
        </NavigationContainer >
    );
};

export default () => {
    return <App />;
};
