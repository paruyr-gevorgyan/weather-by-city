import { Image, Text, View } from "react-native";
import { TObjectType } from "./HomeScreen";
import { getWeatherImage } from "../constants";

type TType = {
  weather: TObjectType;
};

const WeatherInfo = ({ weather }: TType) => {
  const { current, location, forecast } = weather;

  return (
    <View className="mx-4 mb-2 flex flex-1 justify-around">
      <Text className="text-center text-2xl font-bold text-white">
        {location?.name},&nbsp;
        <Text className="text-semibold text-lg text-gray-300">
          {location?.country}
        </Text>
      </Text>

      <View className="flex-row justify-center">
        <Image
          source={getWeatherImage(current?.condition?.text)}
          className="h-52 w-52"
        />
      </View>

      <View className="space-y-2">
        <Text className="ml-5 text-center text-6xl font-bold text-white">
          {current?.temp_c}&#176;
        </Text>

        <Text className="text-center text-xl tracking-widest text-white">
          {current?.condition?.text}
        </Text>
      </View>

      <View className="mx-4 flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/icons/wind.png")}
            className="h-6 w-6"
          />

          <Text className="text-base font-semibold text-white">
            {(current?.wind_kph / 3.6).toFixed(1)} m/s
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/icons/drop.png")}
            className="h-6 w-6"
          />

          <Text className="text-base font-semibold text-white">
            {current?.humidity}%
          </Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/icons/sun.png")}
            className="h-6 w-6"
          />

          <Text className="text-base font-semibold text-white">
            {forecast?.forecastday?.at(0)?.astro?.sunrise}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfo;
