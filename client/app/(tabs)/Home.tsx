import { SafeAreaView } from "react-native-safe-area-context";

// components
import { Header, Transactions } from "@/components/home";

export default function Home() {
  return (
    <SafeAreaView>
      <Header />

      <Transactions />
    </SafeAreaView>
  );
}
