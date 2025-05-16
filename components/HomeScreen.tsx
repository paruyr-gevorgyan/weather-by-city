import { Image, View, StatusBar as NativeStatusBar } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useState } from "react";
import NextDaysForecast from "./NextDaysForecast";
import SearchLocation from "./SearchLocation";
import WeatherInfo from "./WeatherInfo";

const statusBarHeight = NativeStatusBar.currentHeight;

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState<string[]>(["1", "2", "3"]);

  const insets = useSafeAreaInsets();
  const navigationBarHeight = insets.bottom;

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
        }}
      >
        <SearchLocation
          showSearch={showSearch}
          setShowSearch={setShowSearch}
          locations={locations}
        />

        <WeatherInfo />

        <NextDaysForecast />
      </View>
    </View>
  );
};

export default HomeScreen;
