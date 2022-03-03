import { useNavigation } from "@react-navigation/native";
import React, { Children } from "react";
import { View, TouchableOpacity, Text } from "react-native";

export const Container = (props) => {
    const{children} = props;
    const navigation = useNavigation();

    return(
        <View>
            <View>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text>Back</Text>
                </TouchableOpacity>
            </View>
            <View>
                {children}
            </View>
        </View>
    );

}