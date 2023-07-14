import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState,useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import PropertyCard from "../components/PropertyCard";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../firebase";

const PlacesScreen = () => {
  const route = useRoute();

const data = [
        {
          id: "0",
          place: "Hunza",
          placeImage:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/pyyqtylt3beoobpwxxtf.jpg",
          shortDescription: "City in Gilgit, Pakistan",
          properties: [
            {
              id: "10",
              name: "Luxus Hotel",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/pyyqtylt3beoobpwxxtf.jpg",
              rating: 4.6,
              address:
                "Luxus Hunza, Ainabad, Hunza, Valley ",
              oldPrice: 35000,
              newPrice: 30000,
              latitude: "36.32205",
              longitude: "74.87308",
              photos: [
                {
                  id: "100",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/pyyqtylt3beoobpwxxtf.jpg",
                },
                {
                  id: "101",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/ukjlur7odozsfvpmmfh0.jpg",
                },
                {
                  id: "102",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/btsywbnds54pdpc2vzto.jpg",
                },
                {
                  id: "103",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/vtmkyrqzqqigph0xwqq8.jpg",
                },
                {
                  id: "104",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/iuoqrgg56phd6wpnik1s.jpg",
                },
                {
                  id: "105",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/pyyqtylt3beoobpwxxtf.jpg",
                },
                {
                  id: "106",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/ukjlur7odozsfvpmmfh0.jpg",
                },
                {
                  id: "107",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/btsywbnds54pdpc2vzto.jpg",
                },
                {
                  id: "108",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512604/upload/vtmkyrqzqqigph0xwqq8.jpg",
                },
                {
                  id: "109",
                  image:
                    "2",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                  oldPrice: 19000,
                  newPrice: 17000,
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                  oldPrice: 28000,
                  newPrice: 23000,
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                  oldPrice: 35000,
                  newPrice: 30000,
                },
              ],
            },
            {
              id: "11",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/yd4lgzncep2qi1qzifrj.jpg",
              name: "Karakorum View Hotel, Hunza",
              rating: 4,
              address:
                " Sain Water Mill, Karim Abad Road, Hunza",
              oldPrice: 27000,
              newPrice: 20000,
              latitude: "36.3167",
              longitude: "74.6500",
              photos: [
                {
                  id: "110",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/yd4lgzncep2qi1qzifrj.jpg",
                },
                {
                  id: "111",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/gc329zg9vsbbyxdjf3eq.jpg",
                },
                {
                  id: "112",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/uuzetj7ohxp1hkf1qej8.jpg",
                },
                {
                  id: "113",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/dtugc7gwipp4joxjywgf.jpg",
                },
                {
                  id: "114",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/lol4rtftgijpqucl2i8t.jpg",
                },
                {
                  id: "115",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/yd4lgzncep2qi1qzifrj.jpg",
                },
                {
                  id: "116",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/gc329zg9vsbbyxdjf3eq.jpg",
                },
                {
                  id: "117",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/uuzetj7ohxp1hkf1qej8.jpg",
                },
                {
                  id: "118",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/dtugc7gwipp4joxjywgf.jpg",
                },
                {
                  id: "119",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512696/upload/lol4rtftgijpqucl2i8t.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "12",
              name: "Fairy Land Hotel, Hunza",
              rating: 4.2,
              address:
                "Duikar Valley, Hunza",
              oldPrice: 30000,
              newPrice: 25000,
              latitude: "36.3254447",
              longitude: "74.6902265",
              image:
                "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/l2av8npvbii7uxrdg51g.jpg",
              photos: [
                {
                  id: "120",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/l2av8npvbii7uxrdg51g.jpg",
                },
                {
                  id: "121",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/bg72bsvsy5tycy0ffxj3.jpg",
                },
                {
                  id: "122",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/txilwlaxtdf7cjctjnkx.jpg",
                },
                {
                  id: "123",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/dwcfkomyfgcghpmx7zt9.jpg",
                },
                {
                  id: "124",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/cil3hoqsblajqhh4hcfc.jpg",
                },
                {
                  id: "125",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/l2av8npvbii7uxrdg51g.jpg",
                },
                {
                  id: "126",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/bg72bsvsy5tycy0ffxj3.jpg",
                },
                {
                  id: "128",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/txilwlaxtdf7cjctjnkx.jpg",
                },
                {
                  id: "129",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512792/upload/dwcfkomyfgcghpmx7zt9.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
          ],
        },
        {
          id: "2",
          place: "Gilgit",
          placeImage:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/kglvok3iiw5fnq2ps6rd.jpg",
          shortDescription: "City in Gilgit, Pakistan",
          properties: [
            {
              id: "20",
              name: "Serena Hotel, Gilgit",
              rating: 3.5,
              address:
                "Jutial, Gilgit, Gilgit-Baltistan",
              oldPrice: 25000,
              newPrice: 20000,
              photos: [
                {
                  id: "140",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/kglvok3iiw5fnq2ps6rd.jpg",
                },
                {
                  id: "141",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511520/upload/qcj5egzarejd4te1ng3w.jpg",
                },
                {
                  id: "142",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511520/upload/xuygldj60gnonenghka0.jpg",
                },
                {
                  id: "143",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/dvmcpxt8iiotshgzplbs.jpg",
                },
                {
                  id: "144",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/mnode9mi1ajm6l6cr0jr.jpg",
                },
                {
                  id: "145",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/kglvok3iiw5fnq2ps6rd.jpg",
                },
                {
                  id: "146",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511520/upload/qcj5egzarejd4te1ng3w.jpg",
                },
                {
                  id: "147",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511520/upload/xuygldj60gnonenghka0.jpg",
                },
                {
                  id: "148",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/dvmcpxt8iiotshgzplbs.jpg",
                },
                {
                  id: "149",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511519/upload/mnode9mi1ajm6l6cr0jr.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "22",
              name: "Madina Hotel, Gilgit",
              rating: 4.5,
              address:
                "Goal Rd, Near Airport, Gilgit, Gilgit-Baltistan",
              oldPrice: 20000,
              newPrice: 15000,
              photos: [
                {
                  id: "160",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/f9rxnctejclcjgm9wgp5.jpg",
                },
                {
                  id: "161",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/fbezndbcdyibbjbzgahk.jpg",
                },
                {
                  id: "162",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/pmbxco994jjxwccsyltl.jpg",
                },
                {
                  id: "163",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/jojzawdmnvrh27vi6vfz.jpg",
                },
                {
                  id: "164",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/e5aqxx99gcacczuwhdkb.jpg",
                },
                {
                  id: "165",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/f9rxnctejclcjgm9wgp5.jpg",
                },
                {
                  id: "166",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/fbezndbcdyibbjbzgahk.jpg",
                },
                {
                  id: "167",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/pmbxco994jjxwccsyltl.jpg",
                },
                {
                  id: "168",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/jojzawdmnvrh27vi6vfz.jpg",
                },
                {
                  id: "169",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511623/upload/e5aqxx99gcacczuwhdkb.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "23",
              name: "Oak Residency, Gilgit",
              rating: 4.5,
              address:
                "Street 2, Aminabad, Jutial, Gilgit",
              oldPrice: 22000,
              newPrice: 15000,
              photos: [
                {
                  id: "160",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511735/upload/vqg0rwp2pcjwh2f5dl5u.jpg",
                },
                {
                  id: "161",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/ilkygtvyai3g8fyxfuz8.jpg",
                },
                {
                  id: "162",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/lwt0l9lmp4zkew47qiew.jpg",
                },
                {
                  id: "163",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/tv3soixpupjgkcbuvagy.jpg",
                },
                {
                  id: "164",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/jwnnswlnjmde19jeanf5.jpg",
                },
                {
                  id: "165",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511735/upload/vqg0rwp2pcjwh2f5dl5u.jpg",
                },
                {
                  id: "166",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/ilkygtvyai3g8fyxfuz8.jpg",
                },
                {
                  id: "167",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/lwt0l9lmp4zkew47qiew.jpg",
                },
                {
                  id: "168",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/tv3soixpupjgkcbuvagy.jpg",
                },
                {
                  id: "169",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511734/upload/jwnnswlnjmde19jeanf5.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
          ],
        },
        {
          id: "4",
          place: "Skardu",
          placeImage:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/menthtg1zet9uasq0tw1.jpg",
          shortDescription: "City in Gilgit, Pakistan",
          properties: [
            {
              id: "40",
              name: "Mulberry Continental Hotel, Skardu",
              rating: 3.5,
              address:
                "Airport Rd, Khuda Buksh Colony Gamba Skardu",
              oldPrice: 18000,
              newPrice: 15000,
              photos: [
                {
                  id: "180",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/menthtg1zet9uasq0tw1.jpg",
                },
                {
                  id: "181",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/q59tkaifn7qvocdwx83n.jpg",
                },
                {
                  id: "182",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/tbb727omqm27kxipeh6t.jpg",
                },
                {
                  id: "183",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/dr9ibkws8lzkupiqknwd.jpg",
                },
                {
                  id: "184",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/c6xfq742ouqlg2f9wxv5.jpg",
                },
                {
                  id: "185",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/menthtg1zet9uasq0tw1.jpg",
                },
                {
                  id: "186",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/q59tkaifn7qvocdwx83n.jpg",
                },
                {
                  id: "187",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/tbb727omqm27kxipeh6t.jpg",
                },
                {
                  id: "188",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/dr9ibkws8lzkupiqknwd.jpg",
                },
                {
                  id: "189",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675511913/upload/c6xfq742ouqlg2f9wxv5.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "42",
              name: "Eat and Read Hotel, Skardu",
              rating: 4.5,
              address:
                "Airport road Hoto, Gamba, Hoto, Skardu, Gilgit-Baltistan",
              oldPrice: 20000,
              newPrice: 15000,
              photos: [
                {
                  id: "190",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/fgm9v9rhavb4nu6iymwf.jpg",
                },
                {
                  id: "191",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/e95wjcnfzwlngotdydvp.jpg",
                },
                {
                  id: "192",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/i4sym3tja3lyrbpgocms.jpg",
                },
                {
                  id: "193",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/d89drmpwedsw0dorp0bl.jpg",
                },
                {
                  id: "194",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/xru1swlf0vbwckxwh09i.jpg",
                },
                {
                  id: "195",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/fgm9v9rhavb4nu6iymwf.jpg",
                },
                {
                  id: "196",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/e95wjcnfzwlngotdydvp.jpg",
                },
                {
                  id: "197",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/i4sym3tja3lyrbpgocms.jpg",
                },
                {
                  id: "198",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/d89drmpwedsw0dorp0bl.jpg",
                },
                {
                  id: "199",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512069/upload/xru1swlf0vbwckxwh09i.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "44",
              name: "Local x, Skardu",
              rating: 4.5,
              address:
                "Airport road, Hoto, near Gamba, Skardu",
              oldPrice: 25000,
              newPrice: 20000,
              photos: [
                {
                  id: "200",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/wk0e6hoprpjgl8wuejpf.jpg",
                },
                {
                  id: "201",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/tkz637m97thxmau3abnj.jpg",
                },
                {
                  id: "202",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/xzr3piml1a9puobb2dso.jpg",
                },
                {
                  id: "203",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/n7aaqe0hekoqcdkss3ni.jpg",
                },
                {
                  id: "204",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/lqwvbqgqdzdtgesob3rl.jpg",
                },
                {
                  id: "205",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/wk0e6hoprpjgl8wuejpf.jpg",
                },
                {
                  id: "206",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/tkz637m97thxmau3abnj.jpg",
                },
                {
                  id: "207",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/xzr3piml1a9puobb2dso.jpg",
                },
                {
                  id: "208",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/n7aaqe0hekoqcdkss3ni.jpg",
                },
                {
                  id: "209",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512162/upload/lqwvbqgqdzdtgesob3rl.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
          ],
        },
        {
          id: "6",
          place: "Aliabad",
          placeImage:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/hfms6kvumljdfcpy0rpk.jpg",
          shortDescription: "City in Gilgit, Pakistan",
          properties: [
            {
              id: "60",
              name: "Golden Bite Hotel, Aliabad",
              rating: 3.5,
              address:
                "N-35, Aliabad, Ali Abad",
              oldPrice: 15000,
              newPrice: 10000,
              photos: [
                {
                  id: "220",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/hfms6kvumljdfcpy0rpk.jpg",
                },
                {
                  id: "221",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/zeus7web9qpfnb6mcuvv.jpg",
                },
                {
                  id: "222",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/iovzhhf9wplpus38k4c0.jpg",
                },
                {
                  id: "223",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/u5rxddslvwnmwilwszvh.jpg",
                },
                {
                  id: "224",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/woevssd5qzb3wcmlv9ws.jpg",
                },
                {
                  id: "225",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/hfms6kvumljdfcpy0rpk.jpg",
                },
                {
                  id: "226",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/zeus7web9qpfnb6mcuvv.jpg",
                },
                {
                  id: "227",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/iovzhhf9wplpus38k4c0.jpg",
                },
                {
                  id: "228",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/u5rxddslvwnmwilwszvh.jpg",
                },
                {
                  id: "229",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512263/upload/woevssd5qzb3wcmlv9ws.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "62",
              name: "Fairy Garden And Resort, Aliabad",
              rating: 4.5,
              address:
                "Sagi Ali Basi, Aliabad, Old Silk Road",
              oldPrice: 17000,
              newPrice: 15000,
              photos: [
                {
                  id: "230",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/bfggixcba5kcbpq75pwq.jpg",
                },
                {
                  id: "231",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/sktpwjd1wu2syxjk6ohi.jpg",
                },
                {
                  id: "232",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/x7e3llzvmsxuhtngpdge.jpg",
                },
                {
                  id: "233",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/t47vwnqetwwl5zy4tyz6.jpg",
                },
                {
                  id: "234",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/qe5x130tmvpegjymdqpd.jpg",
                },
                {
                  id: "235",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/bfggixcba5kcbpq75pwq.jpg",
                },
                {
                  id: "236",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/sktpwjd1wu2syxjk6ohi.jpg",
                },
                {
                  id: "237",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/x7e3llzvmsxuhtngpdge.jpg",
                },
                {
                  id: "238",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/t47vwnqetwwl5zy4tyz6.jpg",
                },
                {
                  id: "239",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512376/upload/qe5x130tmvpegjymdqpd.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "64",
              name: "Baig's Paradise Guest House, Aliabad",
              rating: 4.5,
              address:
                "N-35, Aliabad, Ali Abad, Gilgit-Baltistan",
              oldPrice: 20000,
              newPrice: 15000,
              photos: [
                {
                  id: "240",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/pm3usx29dh6devrcli85.jpg",
                },
                {
                  id: "241",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/rdt0t5smfgf3bd733mlp.jpg",
                },
                {
                  id: "242",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/d1bjbg8gehvf5b0nltai.jpg",
                },
                {
                  id: "243",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/nlr1egqoywzmn1yjqfv4.jpg",
                },
                {
                  id: "244",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/klba4eu4v3mhhyhj3zoc.jpg",
                },
                {
                  id: "245",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/pm3usx29dh6devrcli85.jpg",
                },
                {
                  id: "246",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/rdt0t5smfgf3bd733mlp.jpg",
                },
                {
                  id: "247",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/d1bjbg8gehvf5b0nltai.jpg",
                },
                {
                  id: "248",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/nlr1egqoywzmn1yjqfv4.jpg",
                },
                {
                  id: "249",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512490/upload/klba4eu4v3mhhyhj3zoc.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
          ],
        },
        {
          id: "8",
          place: "Shigar",
          placeImage:
            "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/eyafjaag6qksjkxroqip.jpg",
          shortDescription: "City in Gilgit, Pakistan",
          properties: [
            {
              id: "80",
              name: "Serena Shigar Fort, Shigar",
              rating: 3.5,
              address:
                "Serena Shigar Hotel, Shigar, Baltistan",
              oldPrice: 25000,
              newPrice: 20000,
              photos: [
                {
                  id: "260",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/eyafjaag6qksjkxroqip.jpg",
                },
                {
                  id: "261",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/rpcrrrhq1wiuztm0wpfg.jpg",
                },
                {
                  id: "262",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/fvpkgfmbyezmv90usxt4.jpg",
                },
                {
                  id: "263",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/nvhd4fy8dnqwv1xwngjj.jpg",
                },
                {
                  id: "264",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/zngunb9t0yadbmjsec06.jpg",
                },
                {
                  id: "265",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/eyafjaag6qksjkxroqip.jpg",
                },
                {
                  id: "266",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/rpcrrrhq1wiuztm0wpfg.jpg",
                },
                {
                  id: "267",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/fvpkgfmbyezmv90usxt4.jpg",
                },
                {
                  id: "268",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/nvhd4fy8dnqwv1xwngjj.jpg",
                },
                {
                  id: "269",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512903/upload/zngunb9t0yadbmjsec06.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "82",
              name: "Space Hotel, Shigar",
              rating: 4.5,
              address:
                "Shigar river, Kiahong Bridge, Near inter college road shigar",
              oldPrice: 20000,
              newPrice: 15000,
              photos: [
                {
                  id: "270",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/mwycmhon0eifbotubjva.jpg",
                },
                {
                  id: "271",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/kt4hd89aauoucht3hgjh.jpg",
                },
                {
                  id: "272",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/idxwgotzqzcec9dk1ozc.jpg",
                },
                {
                  id: "273",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/kjbvnq3ir7syick02ssu.jpg",
                },
                {
                  id: "274",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/bnbsvvysdqqngf5qx8qw.jpg",
                },
                {
                  id: "275",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/mwycmhon0eifbotubjva.jpg",
                },
                {
                  id: "276",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/kt4hd89aauoucht3hgjh.jpg",
                },
                {
                  id: "277",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/idxwgotzqzcec9dk1ozc.jpg",
                },
                {
                  id: "278",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/kjbvnq3ir7syick02ssu.jpg",
                },
                {
                  id: "279",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675512982/upload/bnbsvvysdqqngf5qx8qw.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
            {
              id: "84",
              name: "Baltistan Lodge, Shigar",
              rating: 4.5,
              address:
                "Baltistan Lodge near abdullah hospital,Shigar",
              oldPrice: 18000,
              newPrice: 15000,
              photos: [
                {
                  id: "280",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/mipmktvpridondmosdsd.jpg",
                },
                {
                  id: "281",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/azxj7kbx5pj1atbsqxnk.jpg",
                },
                {
                  id: "282",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/lfjer4piycwhqyuqtvwq.jpg",
                },
                {
                  id: "283",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/oyrvdk6y5ag466dflf0i.jpg",
                },
                {
                  id: "284",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/o1pvmk5byj8nspmd2bex.jpg",
                },
                {
                  id: "285",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/mipmktvpridondmosdsd.jpg",
                },
                {
                  id: "286",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/azxj7kbx5pj1atbsqxnk.jpg",
                },
                {
                  id: "287",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/lfjer4piycwhqyuqtvwq.jpg",
                },
                {
                  id: "288",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/oyrvdk6y5ag466dflf0i.jpg",
                },
                {
                  id: "289",
                  image:
                    "http://res.cloudinary.com/de1e0fspk/image/upload/v1675513203/upload/o1pvmk5byj8nspmd2bex.jpg",
                },
              ],
              rooms: [
                {
                  id: "202",
                  name: "Standard Room",
                  size: 419,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "Couple Room, 1 Washroom",
                },
                {
                  id: "203",
                  name: "Master Bedroom",
                  size: 440,
                  refundable: "non refundable",
                  payment: "Pay online",
                  bed: "king size bed, 1 bathroom",
                },
                {
                  id: "205",
                  name: "Twin Room",
                  size: 490,
                  refundable: "refundable",
                  payment: "Pay online",
                  bed: "2 Couple Bed,1 Washroom",
                },
              ],
            },
          ],
        },
      ];
  const navigation = useNavigation();
  const [modalVisibile, setModalVisibile] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Popular Places",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "#003580",
        marginLeft:100,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);
  const filters = [
    {
      id: "0",
      filter: "cost:Low to High",
    },
    {
      id: "1",
      filter: "cost:High to Low",
    },
  ];

  const searchPlaces = data?.filter((item) => item.place === route.params.place);
  const [sortedData,setSortedData] = useState(data);
  console.log(searchPlaces)

  const compare = (a,b) => {
    if(a.newPrice > b.newPrice){
      return -1;
    }
    if(a.newPrice < b.newPrice){
      return 1;
    }
    return 0;
  }

  const comparision = (a,b) => {
    if(a.newPrice < b.newPrice){
      return -1;
    }
    if(a.newPrice > b.newPrice){
      return 1;
    }
    return 0;
  }

  const applyFilter = (filter) => {
    setModalVisibile(false)
    switch(filter){
      case "cost:High to Low":
        searchPlaces.map((val) => val.properties.sort(compare));
        setSortedData(searchPlaces);
        break;
      case "cost:Low to High":
        searchPlaces.map((val) => val.properties.sort(comparision));
        setSortedData(searchPlaces);
        break;
    }
  }

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
              <PropertyCard
                key={index}
                rooms={route.params.rooms}
                children={route.params.children}
                adults={route.params.adults}
                selectedDates={route.params.selectedDates}
                property={property}
                availableRooms={property.rooms}
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

export default PlacesScreen;

const styles = StyleSheet.create({});
