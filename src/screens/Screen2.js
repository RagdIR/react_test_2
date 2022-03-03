import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Text, View} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Container } from "../components/Container";

export const Screen2 = () => {
    const navigation = useNavigation();

    return (
        <Container>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Text>Screen2</Text>
            </TouchableOpacity>
        </Container>
    )
}