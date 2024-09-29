import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const Header = () => {
  const user = useUser();
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View>
        <Text style={{ fontFamily: "outfit", fontSize: 15 }}>Welcome,</Text>
        <Text style={{ fontFamily: "outfitbold", fontSize: 19 }}>
          {user?.user?.fullName}
        </Text>
      </View>
      <Image
        source={{ uri: user?.user?.imageUrl }}
        style={{ width: 40, height: 40, borderRadius: 40 }}
      />
    </View>
  );
};

export default Header;
