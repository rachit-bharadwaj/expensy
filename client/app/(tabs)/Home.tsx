import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import { Card, Header, Transactions } from "@/components/home";

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView>
        <Header />

        <Card />

        <Transactions />
      </ScrollView>
    </SafeAreaView>
  );
}
