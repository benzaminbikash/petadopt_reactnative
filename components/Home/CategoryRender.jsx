import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";

const CategoryRender = ({ item, setSelectCategory, selectCategory }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setSelectCategory(item.name);
        }}
        style={{
          backgroundColor:
            selectCategory == item.name ? "blue" : Colors.PRIMARY,
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderColor: Colors.ORANGE,
          borderRadius: 10,
          borderWidth: 2,
        }}
      >
        <Image
          source={{ uri: item?.image }}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>
      <Text style={{ textAlign: "center", textTransform: "capitalize" }}>
        {item?.name}
      </Text>
    </View>
  );
};

export default CategoryRender;
