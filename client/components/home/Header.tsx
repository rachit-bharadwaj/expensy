import { View, Image, Text } from "react-native";

export default function Header() {
  return (
    <View>
      <Image
        source={require("../../assets/graphics/header-bg.png")}
        resizeMode="cover"
        style={{ position: "absolute", width: "100%", marginTop: -300 }}
      />

      <View>
        <View>
          <Text>Good afternoon,</Text>
          <Text>Rachit Bharadwaj</Text>
          
        </View>
      </View>
    </View>
  );
}
