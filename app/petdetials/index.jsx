import { View, Text, Image } from "react-native";
import React, { useEffect, useLayoutEffect } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";

const PetDetail = () => {
  const data = useLocalSearchParams();
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  return (
    <View>
      <Image
        source={{ uri: data?.image }}
        style={{ width: "100%", height: 500 }}
      />
    </View>
  );
};

export default PetDetail;
