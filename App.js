import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import HotelView from "./screens/HotelView/HotelView";
import Profile from "./screens/ProfileView/Profile";
import { Fontisto, MaterialIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "./styles";

export default function App() {
  const TabStack = createBottomTabNavigator();

  const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: "#1e1e1e",
      borderTopColor: "#1e1e1e",
      paddingBottom: 10,
    },
  };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let icon = "";
      const color = focused ? "#559dff" : "#828282";
      const size = 24;

      switch (route.name) {
        case "hotel":
          icon = "local-hotel";
          break;

        case "profile":
          icon = "person";
          break;

        default:
          icon = "dashboard";
      }

      return <MaterialIcons name={icon} size={size} color={color} />;
    },
  });

  return (
    <NavigationContainer>
      <TabStack.Navigator
        headerMode="none"
        tabBarOptions={tabBarOptions}
        screenOptions={screenOptions}
      >
        <TabStack.Screen
          name="hotel"
          component={HotelView}
          options={{ title: "View hotel" }}
        />
        <TabStack.Screen
          name="profile"
          component={Profile}
          options={{ title: "View profiles" }}
        />
      </TabStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
