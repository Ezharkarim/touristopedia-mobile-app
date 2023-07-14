import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TextInput,
  Button,
  Alert
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Ionicons, Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";

const CarsScreen = () => {
  const navigation = useNavigation();
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  const [isEditable, setisEditable] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Rent a Cars",
      headerTitleStyle: {
        fontSize: 20,
        marginLeft: 100,
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#003580",
        borderBottomColor: "transparent",
        shadowColor: "transparent"
      }
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <View style={{ height: 200, width: "80%" }}>
        <Button
          onPress={onConfirm}
          style={{
            height: 100,
            container: { width: "80%", marginHorizontal: "3%" },
            text: { fontSize: 50 }
          }}
          primary
          title="Submit"
        />
      </View>
    );
  };
  console.log(route.params);

  const searchPlaces = (place) => {
    if (!route.params.input || !selectedDates) {
      Alert.alert(
        "Invalid Details",
        "Please enter all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],
        { cancelable: false }
      );
    }

    if (route.params && selectedDates) {
      navigation.navigate("Carslist", {
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place
      });
    }
  };

  return (
    <View
      style={{
        margin: 20,
        borderColor: "#FFC72C",
        borderWidth: 1,
        borderRadius: 6,
        marginTop: 30
      }}
    >
      {/* Destination */}
      <Pressable
        onPress={() => navigation.navigate("Searchcar")}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 10,
          borderColor: "#FFC72C",
          borderWidth: 1,
          paddingVertical: 10
        }}
      >
        <Feather name="search" size={24} color="black" />
        <TextInput
          placeholderTextColor="black"
          placeholder={
            isEditable
              ? "error"
              : route?.params
              ? route.params.input
              : "Enter Your Destination"
          }
          editable={isEditable}
        />
      </Pressable>

      {/* Selected Dates */}
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
          paddingHorizontal: 10,
          borderColor: "#FFC72C",
          borderWidth: 1,
          paddingVertical: 10
        }}
      >
        <Feather name="calendar" size={24} color="black" />
        <DatePicker
          style={{
            width: 350,
            height: 30,
            borderRadius: 0,
            borderWidth: 0,
            borderColor: "transparent"
          }}
          customStyles={{
            placeholderText: {
              fontSize: 15,
              flexDirection: "row",
              alignItems: "center",
              marginRight: "auto"
            },
            headerStyle: {
              backgroundColor: "#003580"
            },
            contentText: {
              fontSize: 15,
              flexDirection: "row",
              alignItems: "center",
              marginRight: "auto"
            }
          }}
          selectedBgColor="#0047AB"
          customButton={(onConfirm) => customButton(onConfirm)}
          onConfirm={(startDate, endDate) =>
            setSelectedDates(startDate, endDate)
          }
          allowFontScaling={false}
          placeholder={"Select Your Dates"}
          mode={"range"}
        />
      </Pressable>

      {/* Search Button */}
      <Pressable
        onPress={() => searchPlaces(route?.params.input)}
        style={{
          paddingHorizontal: 10,
          borderColor: "#FFC72C",
          borderWidth: 1,
          paddingVertical: 15,
          backgroundColor: "#2a52be"
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 15,
            fontWeight: "500",
            color: "white"
          }}
        >
          Search
        </Text>
      </Pressable>
    </View>
  );
};

export default CarsScreen;

const styles = StyleSheet.create({});
