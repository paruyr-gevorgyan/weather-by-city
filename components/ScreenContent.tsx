import {
  Image,
  TextInput,
  View,
  StatusBar as NativeStatusBar,
  useWindowDimensions,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { theme } from "theme";

const statusBarHeight = NativeStatusBar.currentHeight;
const { height: screenHeight } = Dimensions.get("screen");

const ScreenContent = () => {
  const { height: windowHeight } = useWindowDimensions();
  const navigationBarHeight = screenHeight - windowHeight;

  return (
    <View className="relative flex-1">
      <StatusBar style="light" />

      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute h-full w-full"
      />

      <View
        className="flex flex-1 pt-[16px]"
        style={{
          marginTop: statusBarHeight,
          marginBottom: navigationBarHeight,
          borderColor: "green",
          borderWidth: 10,
        }}
      >
        <View style={{ height: "7%" }} className="relative z-50 mx-4">
          <View
            className="flew-row  items-center justify-end rounded-full"
            style={{ backgroundColor: theme.bgWhite(0.2) }}
          >
            <TextInput
              placeholder="Search city"
              placeholderTextColor="lightgray"
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ScreenContent;
