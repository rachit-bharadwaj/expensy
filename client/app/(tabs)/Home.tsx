import { SafeAreaView } from "react-native-safe-area-context";

// components
import { Card, Header, Transactions } from "@/components/home";

export default function Home() {
  return (
    <SafeAreaView>
      <Header />

      <Card />

      <Transactions />
    </SafeAreaView>
  );
}
