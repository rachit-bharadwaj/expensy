import { View, Image, Text } from "react-native";

// icons
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header() {
  return (
    <View>
      <Image
        source={require("../../assets/graphics/header-bg.png")}
        resizeMode="cover"
        style={{ position: "absolute", width: "100%", marginTop: -300 }}
      />

      <View
        style={{
          padding: 20,
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 17 }}>Good afternoon,</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 25 }}>
            Rachit Bharadwaj
          </Text>
        </View>

        <FontAwesome5 name="bell" size={30} color="white" />
      </View>
    </View>
  );
}
