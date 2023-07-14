import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PropertycarCard from "../components/PropertycarCard";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";

const CarslistScreen = () => {
  const route = useRoute();
//connect cars data here
  const data = [
    {
      id: "0",
      place: "Gilgit",
      placeImage:
        "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/kglvok3iiw5fnq2ps6rd.jpg",
      shortDescription: "City in Pakistan",
      properties: [
        {
          id: "10",
          name: "GILGIT BALTISTAN TOURS",
          image:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/q3xcwgp2kcdbgqrjepux.jpg",
          rating: 3.6,
          address:
            "5, Jan Alam Market, Main Karakoram Hwy, Danyor, Gilgit-Baltistan ",
          oldPrice: 7000,
          newPrice: 5000,
          latitude: "35.920834",
          longitude: "74.308334",
          photos: [
            {
              id: "100",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/q3xcwgp2kcdbgqrjepux.jpg"
            },
            {
              id: "101",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/gyksqktzwf9rjrz36w7h.jpg"
            },
            {
              id: "102",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/iv4zaghgpgc6jm3kvjd8.jpg"
            },
            {
              id: "103",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/oqzym2bd8p0tn91indzo.jpg"
            },
            {
              id: "104",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/gecrfjtgmfnofvbt8lne.jpg"
            },
            {
              id: "105",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/xms1z0qcybyfkxwmhcza.jpg"
            },
            {
              id: "106",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708226/upload/z79ooshbwv3tndpe8pgi.jpg"
            },
            {
              id: "107",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708226/upload/cp9lgaolhokum6ta7ui6.jpg"
            },
            {
              id: "108",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/q3xcwgp2kcdbgqrjepux.jpg"
            },
            {
              id: "109",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/gyksqktzwf9rjrz36w7h.jpg"
            }
          ]
        },
        {
          id: "11",
          image:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg",
          name: "Eagle Safe Tours & Travels rent A car PVT",
          rating: 4,
          address: " Shahr-e-Quaid - e - Azam, Gilgit, Gilgit-Baltistan",
          oldPrice: 6000,
          newPrice: 4000,
          latitude: "35.920834",
          longitude: "74.308334",
          photos: [
            {
              id: "110",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg"
            },
            {
              id: "111",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/bdc8zkguunfvra7a19xz.jpg"
            },
            {
              id: "112",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/mqncfzejhyw8onlnyeki.jpg"
            },
            {
              id: "113",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/d7vlece3v2utyw0f8pkr.jpg"
            },
            {
              id: "114",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg"
            },
            {
              id: "115",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/bdc8zkguunfvra7a19xz.jpg"
            },
            {
              id: "116",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/mqncfzejhyw8onlnyeki.jpg"
            },
            {
              id: "117",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/d7vlece3v2utyw0f8pkr.jpg"
            },
            {
              id: "118",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg"
            },
            {
              id: "119",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/bdc8zkguunfvra7a19xz.jpg"
            }
          ]
        },
        {
          id: "12",
          name: " North Cruisers",
          rating: 4.2,
          address:
            "W923+9FH, Sherullah Baig Rd, opposite Serena Hotel, Jutial, Gilgit",
          oldPrice: 7000,
          newPrice: 5000,
          latitude: "35.920834",
          longitude: "74.308334",
          image:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/ww4z4zgrrmdzg3ruhqh0.jpg",
          photos: [
            {
              id: "120",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/gneia4d34uvv42nyp1t5.jpg"
            },
            {
              id: "121",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/npy4a12ecpm0242eidik.jpg"
            },
            {
              id: "122",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/hcsucfqfl98e9ugjlxah.jpg"
            },
            {
              id: "123",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/ww4z4zgrrmdzg3ruhqh0.jpg"
            },
            {
              id: "124",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/gneia4d34uvv42nyp1t5.jpg"
            },
            {
              id: "125",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/npy4a12ecpm0242eidik.jpg"
            },
            {
              id: "126",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/hcsucfqfl98e9ugjlxah.jpg"
            },
            {
              id: "128",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/ww4z4zgrrmdzg3ruhqh0.jpg"
            },
            {
              id: "129",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/gneia4d34uvv42nyp1t5.jpg"
            }
          ]
        },
        {
          id: "13",
          name: "City Exclusive tours",
          rating: 4.2,
          address: "W938+92W, Jan market, near GB Assembly, Gilgit-Baltistan",
          oldPrice: 4000,
          newPrice: 3000,
          latitude: "35.920834",
          longitude: "74.308334",
          image:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/pqukqehcurybicgnc7sy.jpg",
          photos: [
            {
              id: "130",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/pqukqehcurybicgnc7sy.jpg"
            },
            {
              id: "131",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/njvhecic13k9sq7bbh4s.jpg"
            },
            {
              id: "132",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/oalzbbjbvrqiqonwfxw8.jpg"
            },
            {
              id: "133",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/mlgqosfg8bqajiqzusqf.jpg"
            },
            {
              id: "134",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/pqukqehcurybicgnc7sy.jpg"
            },
            {
              id: "135",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/njvhecic13k9sq7bbh4s.jpg"
            },
            {
              id: "136",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/oalzbbjbvrqiqonwfxw8.jpg"
            },
            {
              id: "138",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/mlgqosfg8bqajiqzusqf.jpg"
            },
            {
              id: "139",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/pqukqehcurybicgnc7sy.jpg"
            }
          ]
        },
        {
          id: "14",
          name: "Aladin Tours & Services Rent A Car",
          rating: 4.2,
          address:
            "Dar Plaza, Airport Rd, Nabi Bazar, Gilgit, Gilgit-Baltistan",
          oldPrice: 7000,
          newPrice: 5000,
          latitude: "35.920834",
          longitude: "74.308334",
          image:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/fjh6eyls5uyw8gpgniqy.jpg",
          photos: [
            {
              id: "140",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/fjh6eyls5uyw8gpgniqy.jpg"
            },
            {
              id: "141",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/agnrxlay5xfhkdqrvteq.jpg"
            },
            {
              id: "142",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/ue81s6we948uhqlxc2no.jpg"
            },
            {
              id: "143",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/qitm4ffmxfp8ncyox8ou.jpg"
            },
            {
              id: "144",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/fjh6eyls5uyw8gpgniqy.jpg"
            },
            {
              id: "145",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/agnrxlay5xfhkdqrvteq.jpg"
            },
            {
              id: "146",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/ue81s6we948uhqlxc2no.jpg"
            },
            {
              id: "148",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/qitm4ffmxfp8ncyox8ou.jpg"
            },
            {
              id: "149",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/fjh6eyls5uyw8gpgniqy.jpg"
            }
          ]
        }
      ]
    }
  ];
   
  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Rent a Cars ",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
      },
      headerStyle: {
        backgroundColor: "#003580",
        marginLeft: 100,
        borderBottomColor: "transparent",
        shadowColor: "transparent"
      }
    });
  }, []);
  const filters = [
    {
      id: "0",
      filter: "cost:Low to High"
    },
    {
      id: "1",
      filter: "cost:High to Low"
    }
  ];

  const searchPlaces = data?.filter(
    (item) => item.place === route.params.place
  );
  const [sortedData, setSortedData] = useState(data);
  console.log(searchPlaces);

  const compare = (a, b) => {
    if (a.newPrice > b.newPrice) {
      return -1;
    }
    if (a.newPrice < b.newPrice) {
      return 1;
    }
    return 0;
  };

  const comparision = (a, b) => {
    if (a.newPrice < b.newPrice) {
      return -1;
    }
    if (a.newPrice > b.newPrice) {
      return 1;
    }
    return 0;
  };

  const applyFilter = (filter) => {
    setModalVisibile(false);
    switch (filter) {
      case "cost:High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "cost:Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  };

  console.log(route.params);

  return (
    <View>
      <Pressable
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          padding: 12,
          backgroundColor: "white"
        }}
      >
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <Octicons name="arrow-switch" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Sort
          </Text>
        </Pressable>

        <Pressable style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="filter" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Filter
          </Text>
        </Pressable>

        <Pressable
          onPress={() =>
            navigation.navigate("Map", {
              searchResults: searchPlaces
            })
          }
          style={{ flexDirection: "row", alignItems: "center" }}
        >
          <FontAwesome5 name="map-marker-alt" size={22} color="gray" />
          <Text style={{ fontSize: 15, fontWeight: "500", marginLeft: 8 }}>
            Map
          </Text>
        </Pressable>
      </Pressable>

      {/* {loading ? (
        <Text>Fetching places....</Text>
      ) : ( */}
      <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
        {sortedData
          ?.filter((item) => item.place === route.params.place)
          .map((item) =>
            item.properties.map((property, index) => (
              <PropertycarCard
                key={index}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
              />
            ))
          )}
      </ScrollView>
      {/* )} */}

      <BottomModal
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        footer={
          <ModalFooter>
            <Pressable
              onPress={() => applyFilter(selectedFilter)}
              style={{
                paddingRight: 10,
                marginLeft: "auto",
                marginRight: "auto",
                marginVertical: 10,
                marginBottom: 30
              }}
            >
              <Text>Apply</Text>
            </Pressable>
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Sort and Filter" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom"
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                marginVertical: 10,
                flex: 2,
                height: 280,
                borderRightWidth: 1,
                borderColor: "#E0E0E0"
              }}
            >
              <Text style={{ textAlign: "center" }}>Sort </Text>
            </View>

            <View style={{ flex: 3, margin: 10 }}>
              {filters.map((item, index) => (
                <Pressable
                  onPress={() => setSelectedFilter(item.filter)}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10
                  }}
                  key={index}
                >
                  {selectedFilter.includes(item.filter) ? (
                    <FontAwesome name="circle" size={18} color="green" />
                  ) : (
                    <Entypo name="circle" size={18} color="black" />
                  )}

                  <Text
                    style={{ fontSize: 16, fontWeight: "500", marginLeft: 6 }}
                  >
                    {item.filter}
                  </Text>
                </Pressable>
              ))}
            </View>
          </View>
        </ModalContent>
      </BottomModal>
    </View>
  );
};

export default CarslistScreen;

const styles = StyleSheet.create({});
