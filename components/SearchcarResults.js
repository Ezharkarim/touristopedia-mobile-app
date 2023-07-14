import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Image
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

const SearchcarResults = ({ data, input, setInput }) => {
  const navigation = useNavigation();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Fetch hotel data when component mounts
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await axios.get("/rentacars");
      setCars(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          if (item.place.toLowerCase().includes(input.toLowerCase())) {
            if (input === "") {
              return null;
            }
            return (
              <Pressable
                onPress={() => {
                  setInput(item.place);
                  navigation.navigate("Cars", {
                    input: item.place
                  });
                }}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginVertical: 10
                }}
              >
                {cars.map((car) => (
                  <View key={car.id}>
                    <Text>{car.name}</Text>
                    <Text>{car.address}</Text>
                  </View>
                ))}
                <View>
                  <Image
                    style={{ width: 70, height: 70 }}
                    source={{ uri: item.placeImage }}
                  />
                </View>
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 15, fontWeight: "500" }}>
                    {item.place}
                  </Text>
                  <Text style={{ marginVertical: 4 }}>
                    {item.shortDescription}
                  </Text>
                  <Text style={{ color: "gray", fontSize: 15 }}>
                    {item.properties.length} Properties
                  </Text>
                </View>
              </Pressable>
            );
          }
        }}
      />
    </View>
  );
};

export default SearchcarResults;

const styles = StyleSheet.create({});
