import { View, Text } from "react-native";

// icons
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Card() {
  return (
    <View
      style={{
        backgroundColor: "#2f7e79",
        borderRadius: 15,
        marginHorizontal: "auto",
        padding: 20,
        minWidth: "90%",
        marginVertical: 30,
        gap: 50,
      }}
    >
      {/* upper container */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* left half */}
        <View>
          <Text style={{ color: "white", fontSize: 16 }}>Total Balance</Text>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 28 }}>
            &#8377;7,84,587
          </Text>
        </View>

        {/* right half */}
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </View>

      {/* lower container */}
      <View>
        {/* left half */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="arrowdown" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 16 }}>Income</Text>
            </View>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              &#8377;1,00,000
            </Text>
          </View>

          {/* right half */}
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="arrowup" size={24} color="white" />
              <Text style={{ color: "white", fontSize: 16 }}>Expenses</Text>
            </View>
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
              &#8377;15,000
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
