import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Colors from "../../constants/Colors";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <Ionicons name="home-sharp" size={24} color={Colors.PRIMARY} />
            ) : (
              <Ionicons name="home-outline" size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialIcons name="favorite" size={24} color={Colors.PRIMARY} />
            ) : (
              <MaterialIcons name="favorite-border" size={24} />
            ),
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="message-processing"
                size={24}
                color={Colors.PRIMARY}
              />
            ) : (
              <MaterialCommunityIcons
                name="message-processing-outline"
                size={24}
              />
            ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, focused }) =>
            focused ? (
              <FontAwesome5 name="user-alt" size={24} color={Colors.PRIMARY} />
            ) : (
              <FontAwesome5 name="user" size={24} />
            ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
