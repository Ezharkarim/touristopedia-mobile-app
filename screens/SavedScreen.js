import { StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect } from "react";
import { useNavigation} from "@react-navigation/native";
const SavedScreen = () => {
    const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Confirmation",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  return (
    <View>
      <Text>SavedScreen</Text>
    </View>
  )
}

export default SavedScreen

const styles = StyleSheet.create({})