import { Image, View, StatusBar as NativeStatusBar } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import NextDaysForecast from "./NextDaysForecast";
import SearchLocation from "./SearchLocation";
import WeatherInfo from "./WeatherInfo";
import { fetchWeatherForecast } from "api/weather";
import * as Progress from "react-native-progress";

export type TObjectType = {
  [key: string]: any;
};

const statusBarHeight = NativeStatusBar.currentHeight;

const HomeScreen = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [locations, setLocations] = useState<TObjectType>({});
  const [weather, setWeather] = useState<TObjectType>({});
  const [loading, setLoading] = useState(true);

  const insets = useSafeAreaInsets();
  const navigationBarHeight = insets.bottom;

  const handleLocation = (location: TObjectType) => {
    setLocations({});
    setShowSearch(false);
    setLoading(true);

    fetchWeatherForecast({ cityName: location.name, days: 7 }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  const fetchMyWeatherData = async () => {
    fetchWeatherForecast({ cityName: "Yerevan", days: 7 }).then((data) => {
      setWeather(data);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchMyWeatherData();
  }, []);

  return (
    <View className="relative flex-1">
      <StatusBar style="light" />

      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute h-full w-full"
      />

      {loading ? (
        <View className="flex-1 flex-row items-center justify-center">
          <Progress.CircleSnail thickness={10} size={160} color="#0bb3b2" />
        </View>
      ) : (
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
            setLocations={setLocations}
            handleLocation={handleLocation}
          />

          <WeatherInfo weather={weather} />

          <NextDaysForecast weather={weather} />
        </View>
      )}
    </View>
  );
};

export default HomeScreen;
