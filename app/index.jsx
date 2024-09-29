import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { Redirect, useRootNavigationState, useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";

const Index = () => {
  const { user } = useUser();

  const rootNavigation = useRootNavigationState();

  const checkNavLoaded = () => {
    if (!rootNavigation?.key) {
      return null;
    }
  };
  useEffect(() => {
    checkNavLoaded();
  }, []);
  return (
    user && (
      <View>
        {user ? (
          <Redirect href={"/(tabs)/home"} />
        ) : (
          <Redirect href={"/login"} />
        )}
      </View>
    )
  );
};

export default Index;
