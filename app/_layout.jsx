import * as SecureStore from "expo-secure-store";
import React from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { ClerkProvider } from "@clerk/clerk-expo";

const tokenCache = {
  async getToken(key) {
    try {
      const item = await SecureStore.getItemAsync(key);
      return item;
    } catch (error) {
      console.error("SecureStore get item error: ", error);
      await SecureStore.deleteItemAsync(key);
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;
const RootLayout = () => {
  useFonts({
    outfit: require("../assets/fonts/OpenSans-Regular.ttf"),
    outfitbold: require("../assets/fonts/OpenSans-Bold.ttf"),
  });
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
      <Stack screenOptions={{}}>
        <Stack.Screen
          name="index"
          options={{
            headerTitle: "Home",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="petdetials/index"
          options={{
            headerTintColor: "gray",
          }}
        />
        <Stack.Screen
          name="login/index"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </ClerkProvider>
  );
};

export default RootLayout;
