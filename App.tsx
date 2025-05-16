import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "components/HomeScreen";

import "./global.css";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={["left", "right"]}>
        <HomeScreen />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
