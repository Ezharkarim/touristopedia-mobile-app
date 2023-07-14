import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import SearchcarResults from "../components/SearchcarResults";
import axios from "axios";

const SearchcarScreen = () => {
  const [input, setInput] = useState("");
 
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
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/q3xcwgp2kcdbgqrjepux.jpg",
                },
                {
                  id: "101",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/gyksqktzwf9rjrz36w7h.jpg",
                },
                {
                  id: "102",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/iv4zaghgpgc6jm3kvjd8.jpg",
                },
                {
                  id: "103",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/oqzym2bd8p0tn91indzo.jpg",
                },
                {
                  id: "104",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/gecrfjtgmfnofvbt8lne.jpg",
                },
                {
                  id: "105",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/xms1z0qcybyfkxwmhcza.jpg",
                },
                {
                  id: "106",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708226/upload/z79ooshbwv3tndpe8pgi.jpg",
                },
                {
                  id: "107",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708226/upload/cp9lgaolhokum6ta7ui6.jpg",
                },
                {
                  id: "108",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/q3xcwgp2kcdbgqrjepux.jpg",
                },
                {
                  id: "109",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708225/upload/gyksqktzwf9rjrz36w7h.jpg",
                },
              ],
            },
            {
              id: "11",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg",
              name: "Eagle Safe Tours & Travels rent A car PVT",
              rating: 4,
              address:
                " Shahr-e-Quaid - e - Azam, Gilgit, Gilgit-Baltistan",
              oldPrice: 6000,
              newPrice: 4000,
              latitude: "35.920834",
              longitude: "74.308334",
              photos: [
                {
                  id: "110",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg",
                },
                {
                  id: "111",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/bdc8zkguunfvra7a19xz.jpg",
                },
                {
                  id: "112",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/mqncfzejhyw8onlnyeki.jpg",
                },
                {
                  id: "113",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/d7vlece3v2utyw0f8pkr.jpg",
                },
                {
                  id: "114",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg",
                },   
                {
                  id: "115",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/bdc8zkguunfvra7a19xz.jpg",
                },
                {
                  id: "116",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/mqncfzejhyw8onlnyeki.jpg",
                },
                {
                  id: "117",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/d7vlece3v2utyw0f8pkr.jpg",
                },
                {
                  id: "118",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/yrbcermeg53enfr9kwt9.jpg",
                },
                {
                  id: "119",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708306/upload/bdc8zkguunfvra7a19xz.jpg",
                },
              ],
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
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/gneia4d34uvv42nyp1t5.jpg",
                },
                {
                  id: "121",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/npy4a12ecpm0242eidik.jpg",
                },
                {
                  id: "122",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/hcsucfqfl98e9ugjlxah.jpg",
                },
                {
                  id: "123",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/ww4z4zgrrmdzg3ruhqh0.jpg",
                },
                {
                  id: "124",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/gneia4d34uvv42nyp1t5.jpg",
                },
                {
                  id: "125",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/npy4a12ecpm0242eidik.jpg",
                },
                {
                  id: "126",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/hcsucfqfl98e9ugjlxah.jpg",
                },
                {
                  id: "128",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/ww4z4zgrrmdzg3ruhqh0.jpg",
                },
                {
                  id: "129",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708377/upload/gneia4d34uvv42nyp1t5.jpg",
                },
              ],
            },
            {
              id: "13",
              name: "City Exclusive tours",
              rating: 4.2,
              address:
                "W938+92W, Jan market, near GB Assembly, Gilgit-Baltistan",
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
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/pqukqehcurybicgnc7sy.jpg",
                },
                {
                  id: "131",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/njvhecic13k9sq7bbh4s.jpg",
                },
                {
                  id: "132",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/oalzbbjbvrqiqonwfxw8.jpg",
                },
                {
                  id: "133",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/mlgqosfg8bqajiqzusqf.jpg",
                },
                {
                  id: "134",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/pqukqehcurybicgnc7sy.jpg",
                },
                {
                  id: "135",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/njvhecic13k9sq7bbh4s.jpg",
                },
                {
                  id: "136",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/oalzbbjbvrqiqonwfxw8.jpg",
                },
                {
                  id: "138",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/mlgqosfg8bqajiqzusqf.jpg",
                },
                {
                  id: "139",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708458/upload/pqukqehcurybicgnc7sy.jpg",
                },
              ],
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
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/fjh6eyls5uyw8gpgniqy.jpg",
                },
                {
                  id: "141",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/agnrxlay5xfhkdqrvteq.jpg",
                },
                {
                  id: "142",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/ue81s6we948uhqlxc2no.jpg",
                },
                {
                  id: "143",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/qitm4ffmxfp8ncyox8ou.jpg",
                },
                {
                  id: "144",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/fjh6eyls5uyw8gpgniqy.jpg",
                },
                {
                  id: "145",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/agnrxlay5xfhkdqrvteq.jpg",
                },
                {
                  id: "146",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/ue81s6we948uhqlxc2no.jpg",
                },
                {
                  id: "148",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/qitm4ffmxfp8ncyox8ou.jpg",
                },
                {
                  id: "149",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1673708518/upload/fjh6eyls5uyw8gpgniqy.jpg",
                },
              ],
            },
          ],
        },
      ];
   
  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          margin: 10,
          marginTop: 60,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderColor: "#FFC72C",
          borderWidth: 2,
          borderRadius: 10
        }}
      >
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Enter Your Destination for Car"
        />
        <Feather name="search" size={22} color="black" />
      </View>

      <SearchcarResults data={data} input={input} setInput={setInput} />
    </SafeAreaView>
  );
};

export default SearchcarScreen;

const styles = StyleSheet.create({});
