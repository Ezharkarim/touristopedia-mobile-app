import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const mapView = useRef(null);
  console.log(route.params);
  const coordinates = [];
  const details = route.params.searchResults.map((item) => item.properties?.map((prop) => {
      coordinates.push({
          latitude:Number(prop.latitude),
          longitude:Number(prop.longitude)
      })
  }));
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates,{
        edgePadding:{
            top:190,
            left:190,
            bottom:190,
            right:190,
        }
    });
  },[])
   useLayoutEffect(() => {
     navigation.setOptions({
       headerShown: true,
       title: "Map",
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
  return (
    <View>
      <MapView ref={mapView} style={{ width: "100%", height: "100%" }}>
        {route.params.searchResults.map((item) =>
          item.properties.map((property) => (
            <Marker
              title={property.name}
              coordinate={{
                latitude: Number(property.latitude),
                longitude: Number(property.longitude),
              }}
            >
              <Pressable
                style={{
                  backgroundColor: "#003580",
                  paddingHorizontal: 7,
                  paddingVertical: 4,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  {property.newPrice}
                </Text>
              </Pressable>
            </Marker>
          ))
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
