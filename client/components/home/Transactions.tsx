import { Transaction } from "@/templates";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Transactions() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Transactions History
        </Text>
        <TouchableOpacity>
          <Text style={{ fontSize: 16, color: "gray" }}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={{ gap: 20, marginVertical: 20 }}>
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
        <Transaction />
      </View>
    </ScrollView>
  );
}
