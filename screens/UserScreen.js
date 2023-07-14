import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2)
    .max(25)
    .required("Please enter your first name"),
  lastName: Yup.string().min(2).max(25).required("Please enter your last name"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
  phoneNo: Yup.string().min(2).max(25).required("Please enter your country")
});

const UserScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "User Details",
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
        headerShown:"false"
      },
    });
  }, []);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNo, setPhoneNo] = useState("");
  // const finalStep = () => {
  //   if (!firstName || !lastName || !email || !phoneNo) {
  //     Alert.alert(
  //       "Invalid Details",
  //       "Please fill all fields",
  //       [
  //         {
  //           text: "Cancel",
  //           onPress: () => console.log("Cancel Pressed"),
  //           style: "cancel",
  //         },
  //         { text: "OK", onPress: () => console.log("OK Pressed") },
  //       ],
  //       { cancelable: false }
  //     );
  //   }
  //   if (firstName && lastName && email && phoneNo) {
     
  //   }
  // };
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        oldPrice: route.params.oldPrice,
        newPrice: route.params.newPrice,
        name: route.params.name,
        children: route.params.children,
        adults: route.params.adults,
        rating: route.params.rating,
        startDate: route.params.startDate,
        endDate: route.params.endDate
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, action) => {
        const { cpassword, ...data } = values;
        console.log(data);
        const resp = axios
          .put("http://192.168.2.110:8800/api/confirmb/create", data)
          .catch((err) => {
            console.log(data);
            if (err && err.resp) console.log("error", err);
            Alert.alert("Registration", "Something wrong", [
              {
                text: "Cancel",
                onPress: () => navigation.navigate("Register"),
                style: "cancel"
              },
              { text: "OK", onPress: () => navigation.navigate("Register") }
            ]);
          });
        if (resp) {
          // Alert.alert("Registration", "Sign up Successfully!", [
          //   {
          //     text: "Cancel",
          //     onPress: () => console.log("ok"),
          //     style: "cancel"
          //   },
          //   { text: "OK", onPress: () => navigation.navigate("Login") }
          // ]);
          navigation.navigate("Confirmation", {
            oldPrice: route.params.oldPrice,
            newPrice: route.params.newPrice,
            name: route.params.name,
            children: route.params.children,
            adults: route.params.adults,
            rating: route.params.rating,
            startDate: route.params.startDate,
            endDate: route.params.endDate
          });
        }
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldTouched,
        handleSubmit,
        handleBlur
      }) => (
        <ScrollView>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "column", gap: 10 }}>
              <Text>First Name</Text>
              <TextInput
                style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
                placeholder="First Name"
                value={values.firstName}
                onChangeText={handleChange("firstName")}
                onBlur={() => setFieldTouched("firstName")}
              />
              {touched.firstName && errors.firstName && (
                <Text style={{ fontSize: 12, color: "red" }}>
                  {errors.firstName}
                </Text>
              )}
            </View>

            <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
              <Text>Last Name</Text>
              <TextInput
                style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
                placeholder="Last Name"
                value={values.lastName}
                onChangeText={handleChange("lastName")}
                onBlur={() => setFieldTouched("lastName")}
              />
              {touched.lastName && errors.lastName && (
                <Text style={{ fontSize: 12, color: "red" }}>
                  {errors.lastName}
                </Text>
              )}
            </View>

            <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
              <Text>Email</Text>
              <TextInput
                style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
              />
              {touched.email && errors.email && (
                <Text style={{ fontSize: 12, color: "red" }}>
                  {errors.email}
                </Text>
              )}
            </View>

            <View style={{ flexDirection: "column", gap: 10, marginTop: 10 }}>
              <Text>Phone no</Text>
              <TextInput
                style={{ padding: 10, borderColor: "gray", borderWidth: 1 }}
                placeholder="Phone Number"
                value={values.phoneNo}
                onChangeText={handleChange("phoneNo")}
                onBlur={() => setFieldTouched("phoneNo")}
              />
              {touched.phoneNo && errors.phoneNo && (
                <Text style={{ fontSize: 12, color: "red" }}>
                  {errors.phoneNo}
                </Text>
              )}
            </View>
          </View>

          <Pressable
            style={{
              backgroundColor: "white",
              marginTop: 200,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",

                  marginTop: 4,
                  gap: 8
                }}
              >
                <Text
                  style={{
                    color: "red",
                    fontSize: 20,
                    textDecorationLine: "line-through"
                  }}
                >
                  {route.params.oldPrice * route.params.adults}
                </Text>
                <Text style={{ fontSize: 20 }}>
                  Rs {route.params.newPrice * route.params.adults}
                </Text>
              </View>
              <Text>
                You Saved {route.params.oldPrice - route.params.newPrice} rupees
              </Text>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={{
                backgroundColor: "#007FFF",
                padding: 10,
                borderRadius: 5
              }}
            >
              <Text
                style={{ textAlign: "center", color: "white", fontSize: 15 }}
              >
                Final Step
              </Text>
            </TouchableOpacity>
          </Pressable>
        </ScrollView>
      )}
    </Formik>
  );
};

export default UserScreen;

const styles = StyleSheet.create({});
