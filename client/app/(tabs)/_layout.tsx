import { Text, View } from "react-native";
import { Tabs } from "expo-router";

// icons
import {
  AntDesign,
  Entypo,
  FontAwesome6,
  MaterialIcons,
} from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            paddingVertical: 10,
            paddingHorizontal: 5,
          },
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="Home"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: "center" }}>
                <Entypo name="home" size={24} color={color} />
                <Text style={{ color: color, fontSize: 14 }}>Home</Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="Statistics"
          options={{
            title: "Statistics",
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: "center", borderBlockColor: "blue" }}>
                <FontAwesome6 name="chart-simple" size={24} color={color} />
                <Text style={{ color: color, fontSize: 14 }}>Statistics</Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="AddExpense"
          options={{
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome6 name="plus" size={50} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="Wallet"
          options={{
            title: "Wallet",
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: "center", borderBlockColor: "blue" }}>
                <MaterialIcons name="wallet" size={24} color={color} />
                <Text style={{ color: color, fontSize: 14 }}>Wallet</Text>
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="Account"
          options={{
            title: "Account",
            tabBarIcon: ({ color }) => (
              <View style={{ alignItems: "center", borderBlockColor: "blue" }}>
                <AntDesign name="user" size={24} color={color} />
                <Text style={{ color: color, fontSize: 14 }}>Account</Text>
              </View>
            ),
          }}
        />
      </Tabs>
    </>
  );
}
