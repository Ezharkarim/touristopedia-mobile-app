import { StyleSheet, Text, View,
  SafeAreaView,
  KeyboardAvoidingView,
  Pressable,
  TextInput,
  TouchableOpacity,
  Alert } from 'react-native'
import React, {useLayoutEffect } from "react";
import { useNavigation, navigate } from "@react-navigation/native";
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from "formik";
import axios from "axios";
import * as Yup from "yup";
   
 const signUpSchema = Yup.object().shape({
   username: Yup.string().min(2).max(25).required("Please enter your username"),
   email: Yup.string()
     .email("Invalid email")
     .required("Please enter your email"),
   country: Yup.string().min(2).max(25).required("Please enter your country"),
   password: Yup.string().min(6).required("Please enter your password"),
   cpassword: Yup.string()
     .required()
     .oneOf([Yup.ref("password"), null], "Password must match")
 });


const RegistrationScreen = () => {

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

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        country: "",
        password: "",
        cpassword: ""
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, action) => {
        const { cpassword, ...data } = values;
        console.log(data);
        const resp = axios
          .post("http://172.20.10.3:8800/api/auth/register", data)
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
          Alert.alert("Registration", "Sign up Successfully!", [
            {
              text: "Cancel",
              onPress: () => console.log("ok"),
              style: "cancel"
            },
            { text: "OK", onPress: () => navigation.navigate("Login") }
          ]);
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
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    color: "#003580",
                    fontSize: 24,
                    fontWeight: "700"
                  }}
                >
                  Register
                </Text>

                <Text
                  style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}
                >
                  Create an Account
                </Text>
              </View>

              <View style={{ marginTop: 30 }}>
                <View>
                  <Text
                    style={{ fontSize: 18, fontWeight: "600", color: "gray" }}
                  >
                    Username
                  </Text>

                  <TextInput
                    placeholder="Enter your username"
                    placeholderTextColor={"black"}
                    value={values.username}
                    onChangeText={handleChange("username")}
                    onBlur={() => setFieldTouched("username")}
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                      width: 300
                    }}
                  />
                  {touched.username && errors.username && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.username}
                    </Text>
                  )}
                </View>

                <View>
                  <Text
                    style={{ fontSize: 18, fontWeight: "600", color: "gray" }}
                  >
                    Email
                  </Text>

                  <TextInput
                    placeholder="Enter your email id"
                    placeholderTextColor={"black"}
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={() => setFieldTouched("email")}
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                      width: 300
                    }}
                  />
                  {touched.email && errors.email && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.email}
                    </Text>
                  )}
                </View>

                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "600", color: "gray" }}
                  >
                    Country
                  </Text>

                  <TextInput
                    placeholder="Enter your Country"
                    placeholderTextColor={"black"}
                    value={values.country}
                    onChangeText={handleChange("country")}
                    onBlur={() => setFieldTouched("country")}
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                      width: 300
                    }}
                  />
                  {touched.country && errors.country && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.country}
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
                    placeholder="Password"
                    placeholderTextColor={"black"}
                    value={values.password}
                    onChangeText={handleChange("password")}
                    secureTextEntry={true}
                    onBlur={() => setFieldTouched("password")}
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                      width: 300
                    }}
                  />
                  {touched.password && errors.password && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.password}
                    </Text>
                  )}
                </View>

                <View style={{ marginTop: 15 }}>
                  <Text
                    style={{ fontSize: 18, fontWeight: "600", color: "gray" }}
                  >
                    Confirm Password
                  </Text>
                  <TextInput
                    placeholder="Confirm Password"
                    placeholderTextColor={"black"}
                    onBlur={() => setFieldTouched("cpassword")}
                    value={values.cpassword}
                    onChangeText={handleChange("cpassword")}
                    secureTextEntry={true}
                    style={{
                      borderBottomColor: "gray",
                      borderBottomWidth: 1,
                      marginVertical: 10,
                      width: 300
                    }}
                  />
                  {touched.cpassword && errors.cpassword && (
                    <Text style={{ fontSize: 12, color: "red" }}>
                      {errors.cpassword}
                    </Text>
                  )}
                </View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={{
                    width: 200,
                    backgroundColor: "#003580",
                    padding: 15,
                    borderRadius: 7,
                    marginTop: 30,
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
                    Register
                  </Text>
                </TouchableOpacity>
              </View>

              <Pressable
                onPress={() => navigation.goBack()}
                style={{ marginTop: 20 }}
              >
                <Text
                  style={{ textAlign: "center", color: "gray", fontSize: 17 }}
                >
                  Already have an account? Sign In
                </Text>
              </Pressable>
            </KeyboardAvoidingView>
          </SafeAreaView>
        </ScrollView>
      )}
    </Formik>
  );
}

export default RegistrationScreen

const styles = StyleSheet.create({})
