import { View, Text, TouchableOpacity, Image } from "react-native";

export default function Transaction() {
  return (
    <TouchableOpacity
      style={{
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "#f0f6f5",
            padding: 5,
            width: 75,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 40, height: 40, borderRadius: 50 }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 20 }}>Upwork</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>Today</Text>
        </View>
      </View>

      <Text style={{ color: "green", fontSize: 18 }}>-$100</Text>
    </TouchableOpacity>
  );
}
