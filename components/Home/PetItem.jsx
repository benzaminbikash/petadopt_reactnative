import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Dimension from "../../constants/Dimension";
import Colors from "../../constants/Colors";
import { useRouter } from "expo-router";

const PetItem = ({ item }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: "/petdetials",
          params: item,
        });
      }}
      activeOpacity={0.7}
      style={styles.card}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={{ fontFamily: "outfitbold", fontSize: 15 }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontFamily: "outfit", fontSize: 12 }}>{item.breed}</Text>
        <Text style={styles.years}>{item.age} YRS</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PetItem;

const styles = StyleSheet.create({
  years: {
    backgroundColor: Colors.PRIMARY,
    paddingHorizontal: 3,
    borderRadius: 5,
    paddingVertical: 1,
    fontFamily: "outfit",
    fontSize: 13,
  },
  card: {
    width: Dimension.width / 2 - 40,
    backgroundColor: "white",
    elevation: 11,
    height: 200,
    borderRadius: 5,
    marginRight: 10,
    padding: 9,
  },
  image: {
    width: "100%",
    height: 150,
    alignSelf: "center",
    borderRadius: 5,
  },
});
