import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import Colors from "../../constants/Colors";

const Home = () => {
  return (
    <View style={{ marginTop: 30, padding: 10 }}>
      <Header />
      <Slider />
      <Category />
      <TouchableOpacity style={styles.button}>
        <Text style={{ fontFamily: "outfitbold", fontSize: 15 }}>
          Add New Pet
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.PRIMARY,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});
