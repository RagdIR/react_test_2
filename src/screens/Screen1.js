import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, View} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../components/Container";

export const Screen1 = () => {

    const navigation = useNavigation()
    const handleNavigateToScreen = () => {
        navigation.navigate('Screen2');
    };

    return (
        <Container>
            <Text>Screen1</Text>
            <TouchableOpacity onPress={() => handleNavigateToScreen()}>
                <Text>Go on screen 2</Text>
            </TouchableOpacity>
        </Container>
    )
}