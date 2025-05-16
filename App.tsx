import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ScreenContent from "components/ScreenContent";

import "./global.css";

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1" edges={["left", "right"]}>
        <ScreenContent />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
