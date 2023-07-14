import { Pressable, StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            width: 450,
            backgroundColor: "#003580",
            height: 53,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <Pressable
            style={{
              flexDirection: "row",
              borderColor: "white",
              padding: 0,
              borderBottomWidth: 2
            }}
          >
            <Entypo name="home" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 8, fontWeight: "bold" }}>
              Home
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Hotels")}
            style={{ flexDirection: "row", padding: 0 }}
          >
            <FontAwesome name="hotel" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 8, fontWeight: "bold" }}>
              Hotels
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Cars")}
            style={{ flexDirection: "row", padding: 0 }}
          >
            <MaterialIcons name="car-rental" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 8, fontWeight: "bold" }}>
              Rent a car
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate("Tourguide")}
            style={{ flexDirection: "row", padding: 0 }}
          >
            <Fontisto name="world-o" size={24} color="white" />
            <Text style={{ color: "white", marginLeft: 8, fontWeight: "bold" }}>
              Tour guide
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({});
