import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
  ImageBackground
} from "react-native";
import React, { useLayoutEffect, useState, useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Header from "../components/Header";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import {
  BottomModal,
  ModalFooter,
  ModalButton,
  ModalTitle,
  SlideAnimation,
  ModalContent
} from "react-native-modals";
// import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

import axios from "axios";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  
  const [selectedDates, setSelectedDates] = useState();
  const route = useRoute();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);
  const [isEditable, setisEditable] = useState(false);

  const image1 = require("../images/1.jpg");
  const image2 = require("../images/2.jpg");
  const image3 = require("../images/3.jpg");
  const image = require("../images/2.jpg");   


  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "TouristOpedia",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 150,
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
    if (!route.params || !selectedDates) {
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
      navigation.navigate("Places", {
        rooms: rooms,
        adults: adults,
        children: children,
        selectedDates: selectedDates,
        place: place
      });
    }
  };
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    // Fetch hotel data when component mounts
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await axios.get("/hotels");
      setHotels(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <View>
        <Header />
        <ScrollView>
          {/* <View>
            <Text>Hotel List</Text>
            {hotels.map((hotel) => (
              <View key={hotel.id}>
                <Text>{hotel.place}</Text>
                <Text>{hotel.address}</Text>
              </View>
            ))}
          </View> */}

          <View
            style={{
              margin: 20,
              borderColor: "#FFC72C",
              borderWidth: 1,
              borderRadius: 6
            }}
          >
            {/* Destination */}
            <Pressable
              onPress={() => navigation.navigate("Search")}
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

            {/* Rooms and Guests */}
            <Pressable
              onPress={() => setModalVisibile(!modalVisibile)}
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
              <Ionicons name="person-outline" size={24} color="black" />
              <TextInput
                onPress={() => setModalVisibile(!modalVisibile)}
                placeholderTextColor="black"
                placeholder={
                  isEditable
                    ? `error`
                    : `${rooms} room - ${adults} adults - ${children} Children`
                }
                editable={isEditable}
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

          {/* Recommended places */}
          <Text
            style={{ marginHorizontal: 20, fontSize: 17, fontWeight: "500" }}
          >
            Recommended places
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Pressable onPress={() => navigation.navigate("Tourguide")}>
              <ImageBackground
                source={image}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Gilgit
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Tourguide")}>
              <ImageBackground
                source={image}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Hunza
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Tourguide")}>
              <ImageBackground
                source={image}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Aliabad
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>
          </ScrollView>

          {/* Recommended Hotels */}
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 17,
              fontWeight: "500",
              marginTop: 30
            }}
          >
            Hotels for you...
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10, marginRight: 10 }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Hotels");
              }}
            >
              <ImageBackground
                source={image1}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Serena Hotel
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("Hotels");
              }}
            >
              <ImageBackground
                onPress={() => {
                  navigation.navigate("Places");
                }}
                source={image2}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Hunza Inn
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("Hotels");
              }}
            >
              <ImageBackground
                onPress={() => {
                  navigation.navigate("Places");
                }}
                source={image3}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Eagle Nest
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>
          </ScrollView>

          {/* Recommended cars */}
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 17,
              fontWeight: "500",
              marginTop: 30
            }}
          >
            Recommended Cars
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 10, marginRight: 10, marginBottom: 70 }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Cars");
              }}
            >
              <ImageBackground
                onPress={() => {
                  navigation.navigate("Places");
                }}
                source={image}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Gilgit
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("Cars");
              }}
            >
              <ImageBackground
                source={image}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Hunza
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>

            <Pressable
              onPress={() => {
                navigation.navigate("Cars");
              }}
            >
              <ImageBackground
                source={image}
                style={{
                  width: 200,
                  height: 150,
                  marginTop: 10,
                  borderRadius: 20,
                  padding: 20,
                  marginHorizontal: 10,
                  overflow: "hidden"
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    fontWeight: "bold",
                    marginVertical: 7
                  }}
                >
                  Skardu
                </Text>
                <Text
                  style={{ color: "white", fontSize: 15, fontWeight: "500" }}
                >
                  Destination for you...
                </Text>
              </ImageBackground>
            </Pressable>

          </ScrollView>
        </ScrollView>
      </View>

      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                margin: 20,
                borderRadius: 5,
                color: "white",
                backgroundColor: "#003580"
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={
          <ModalTitle
            title="Select rooms and guests"
            style={{ backgroundColor: "white" }}
          />
        }
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom"
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 200, borderRadius: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                borderRadius: 5,
                padding: 5
              }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                borderRadius: 5,
                padding: 5
              }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                borderColor: "#FFC72C",
                borderWidth: 2,
                borderRadius: 5,
                padding: 5
              }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
