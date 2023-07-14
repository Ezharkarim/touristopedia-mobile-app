import React, { useContext, useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import {
  Avatar,
  Text,
  TouchableRipple
} from "react-native-paper";
import { useLayoutEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthContext } from "../context/AuthContext";
import { useNavigation } from "@react-navigation/native";
import { Button } from "@rneui/themed";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  SimpleLineIcons,
  FontAwesome5
} from "@expo/vector-icons";

const ProfileScreen = () => {
  const [loading, setloading] = useState([]);
  const { user } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const navigation = useNavigation();

const handleClick = (e) => {
  e.preventDefault();
  dispatch({
    type: "LOGOUT"
  });
   navigation.navigate("Main");
};
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Profile",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },

      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          {user ? (
            <MaterialCommunityIcons.Button
              name="account-edit"
              size={25}
              backgroundColor="#003580"
              color="#fff"
              onPress={() => navigation.navigate("EditProfile")}
            />
          ) : (
            <></>
          )}
        </View>
      ),
      headerStyle: {
        backgroundColor: "#003580",
        borderBottomColor: "transparent",
        shadowColor: "transparent"
      }
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <View style={{ marginTop: 10, marginBottom: 30, width: 100 }}>
            {user ? (
              <>
                <Avatar.Image
                  icon={{ name: "home" }}
                  source={{
                    uri: ""
                  }}
                  size={80}
                />
                <Text style={{ color: "white", weight: "bold" }}>
                  Welcome,{user.username}
                </Text>
              </>
            ) : (
              <Button onPress={() => navigation.navigate("Login")} size="md">
                Login
              </Button>
            )}
          </View>
        </View>
      </View>

      {/* <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Karaci, Pakistan
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            +91-900000009
          </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            john_doe@email.com
          </Text>
        </View>
      </View> */}

      <View style={styles.menuWrapper}>
      {user?(<></>):( 
        <TouchableRipple
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <View style={styles.menuItem}>
            <FontAwesome5 name="arrow-circle-right" size={24} color="#ffb300" />
            <Text style={styles.menuItemText}>Create your account</Text>
          </View>
        </TouchableRipple>)}
       
        <TouchableRipple
          onPress={() => {
            navigation.navigate("Aboutus");
          }}
        >
          <View style={styles.menuItem}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#ffb300"
            />
            <Text style={styles.menuItemText}>About us</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => {
            navigation.navigate("Terms");
          }}
        >
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#ffb300" size={25} />
            <Text style={styles.menuItemText}>Terms & Conditions</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => {
            navigation.navigate("Contactus");
          }}
        >
          <View style={styles.menuItem}>
            <MaterialIcons name="contact-support" size={25} color="#ffb300" />
            <Text style={styles.menuItemText}>Contact us</Text>
          </View>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <View style={styles.menuItem}>
            <AntDesign name="setting" size={25} color="#ffb300" />
            <Text style={styles.menuItemText}>Settings</Text>
          </View>
        </TouchableRipple>
        {user ? (
          <TouchableRipple
            onPress={handleClick}      
          >
            <View style={styles.menuItem}>
              <SimpleLineIcons name="logout" size={25} color="#ffb300" />
              <Text style={styles.menuItemText}>Sign out</Text>
            </View>
          </TouchableRipple>
        ) : (
          <TouchableRipple>
            <View style={styles.menuItem}>
              <Text style={styles.menuItemText}></Text>
            </View>
          </TouchableRipple>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
    backgroundColor: "#003580"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "500"
  },
  row: {
    flexDirection: "row",
    marginBottom: 10
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center"
  },
  menuWrapper: {
    marginTop: 10
  },
  menuItem: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 30
  },
  menuItemText: {
    color: "#777777",
    marginLeft: 20,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26
  }
});
