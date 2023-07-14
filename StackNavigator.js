import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import ConfirmationScreen from "./screens/ConfirmationScreen";
import HomeScreen from "./screens/HomeScreen";
import BookingScreen from "./screens/BookingScreen";
import SavedScreen from "./screens/SavedScreen";
import SearchScreen from "./screens/SearchScreen";
import SearchcarScreen from "./screens/SearchcarScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PlacesScreen from "./screens/PlacesScreen";
import MapScreen from "./screens/MapScreen";
import PropertyInfoScreen from "./screens/PropertyInfoScreen";
import RoomsScreen from "./screens/RoomsScreen";
import UserScreen from "./screens/UserScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegistrationScreen";
import HotelsScreen from "./screens/HotelsScreen";
import CarsScreen from "./screens/CarsScreen";
import AboutusScreen from "./screens/AboutusScreen";
import TermsScreen from "./screens/TermsScreen";
import ContactusScreen from "./screens/ContactusScreen";
import SettingScreen from "./screens/SettingScreen";
import { TailwindProvider } from "tailwindcss-react-native";
import DiscoverScreen from "./screens/DiscoverScreen";
import TourguideScreen from "./screens/TourguideScreen";
import ItemScreen from "./screens/ItemScreen";
import EditProfileScreen from "./screens/EditProfileScreen";
import CarslistScreen from "./screens/CarslistScreen";
import PropertyInfocarScreen from "./screens/PropertyInfocarScreen"
import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {Avatar} from "react-native-paper";
const StackNavigator = () => {
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function ButtonTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="#ffb300" />
              ) : (
                <AntDesign name="home" size={24} color="black" />
              )
          }}
        />

        <Tab.Screen
          name="Saved"
          component={SavedScreen}
          options={{
            tabBarLabel: "Saved",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="heart" size={24} color="#ffb300" />
              ) : (
                <AntDesign name="hearto" size={24} color="black" />
              )
          }}
        />

        <Tab.Screen
          name="Bookings"
          component={BookingScreen}
          options={{
            tabBarLabel: "Bookings",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="notifications" size={24} color="#ffb300" />
              ) : (
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="black"
                />
              )
          }}
        />

        {user ? (
          <Tab.Screen
            styles={{ marginTop: 5 }}
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              headerShown: false,
              tabBarIcon: ({ focused }) => (
                <Avatar.Image
                  icon={{ name: "home" }}
                  source={{
                    uri: ""
                  }}
                  size={40}
                />
              )
            }}
          />
        ) : (
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Profile",
              headerShown: false,
              tabBarIcon: ({ focused }) =>
                focused ? (
                  <Ionicons name="person" size={24} color="#ffb300" />
                ) : (
                  <Ionicons name="person-outline" size={24} color="black" />
                )
            }}
          />
        )}
      </Tab.Navigator>
    );
  }
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={ButtonTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Searchcar"
            component={SearchcarScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Places" component={PlacesScreen} />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Info" component={PropertyInfoScreen} />
          <Stack.Screen name="CarsInfo" component={PropertyInfocarScreen} />
          <Stack.Screen name="Rooms" component={RoomsScreen} />
          <Stack.Screen name="User" component={UserScreen} />
          <Stack.Screen name="Confirmation" component={ConfirmationScreen} />
          <Stack.Screen name="Hotels" component={HotelsScreen} />
          <Stack.Screen name="Cars" component={CarsScreen} />
          <Stack.Screen name="Carslist" component={CarslistScreen} />
          <Stack.Screen name="Saved" component={SavedScreen} />
          <Stack.Screen name="Aboutus" component={AboutusScreen} />
          <Stack.Screen name="Terms" component={TermsScreen} />
          <Stack.Screen name="Contactus" component={ContactusScreen} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Discover" component={DiscoverScreen} />
          <Stack.Screen name="Tourguide" component={TourguideScreen} />
          <Stack.Screen name="Item" component={ItemScreen} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
