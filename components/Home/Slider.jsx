import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../configure/FirebaseConfigure";
import Dimension from "../../constants/Dimension";

const Slider = () => {
  const [data, setData] = useState([]);
  const getSlider = async () => {
    const snapshot = await getDocs(collection(db, "Sliders"));
    const sliders = snapshot.docs.map((item) => item.data());
    setData(sliders);
  };
  useEffect(() => {
    getSlider();
  }, []);

  return (
    <View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal={true}
        pagingEnabled={true}
        renderItem={({ item, index }) => {
          return (
            <Image
              source={{ uri: item?.image }}
              style={{
                width: Dimension.width - 20,
                height: 160,
                borderRadius: 10,
                marginVertical: 5,
              }}
            />
          );
        }}
      />
    </View>
  );
};

export default Slider;
