import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  Form
} from "react-native";
import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigation, navigate } from "@react-navigation/native";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import { ScrollView } from "react-native-gesture-handler";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required")
});

const LoginScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerTitleStyle: {
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "white",
        height: 110,
        borderBottomColor: "transparent",
        shadowColor: "transparent"
      }
    });
  }, []);
  const { loading, dispatch } = useContext(AuthContext);

  const handleFormSubmit = async (values) => {
    console.log(values);
    // Perform your login logic here
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post(
        "http://172.20.10.3:8800/api/auth/login",
        values
      );
      Alert.alert("LOGIN", "Login Successfully", [
        {
          text: "Cancel",
          onPress: () => navigation.navigate("Home"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("Home") }
      ]);

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    } catch (err) {
      Alert.alert("LOGIN", "Wrong Credintails", [
        {
          text: "Cancel",
          onPress: () => navigation.navigate("Login"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate("Login") }
      ]);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, handleChange, handleSubmit, errors, touched }) => (
        <ScrollView>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: "white",
              padding: 10,
              alignItems: "center"
            }}
          >
            <KeyboardAvoidingView>
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50
                }}
              >
                <Text
                  style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}
                >
                  Sign In
                </Text>

                <Text
                  style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}
                >
                  Sign In to Your Account
                </Text>
              </View>
              <View style={{ marginTop: 50 }}>
                <View>
                  <Text
                    style={{ fontSize: 18, fontWeight: "600", color: "gray" }}
                  >
                    Username
                  </Text>

                  <TextInput
                    onChangeText={handleChange("username")}
                    value={values.username}
                    placeholder="Enter your Username"
                    placeholderTextColor={"black"}
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                      width: 300
                    }}
                  />
                  {errors.username && touched.username && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.username}
                    </Text>
                  )}
                </View>

                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "600", color: "gray" }}
                  >
                    Password
                  </Text>

                  <TextInput
                    onChangeText={handleChange("password")}
                    value={values.password}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor={"black"}
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                      width: 300
                    }}
                  />
                  {errors.password && touched.password && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                </View>
              </View>

              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  width: 200,
                  backgroundColor: "#003580",
                  padding: 15,
                  borderRadius: 7,
                  marginTop: 50,
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 17,
                    fontWeight: "bold"
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>

              <Pressable
                onPress={() => navigation.navigate("Register")}
                style={{ marginTop: 20 }}
              >
                <Text
                  style={{ textAlign: "center", color: "gray", fontSize: 17 }}
                >
                  Don't have an account? Sign up
                </Text>
              </Pressable>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </ScrollView>
      )}
    </Formik>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
