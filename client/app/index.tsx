import { View, Text } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

export default function Welcome() {
  return (
    // <View>
    //   <Text>Welcome</Text>
    // </View>

    <Redirect href="/Home" />
  );
}
