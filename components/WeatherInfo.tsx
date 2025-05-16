import { Image, Text, View } from "react-native";

const WeatherInfo = () => {
  return (
    <View className="mx-4 mb-2 flex flex-1 justify-around">
      <Text className="text-center text-2xl font-bold text-white">
        London,&nbsp;
        <Text className="text-semibold text-lg text-gray-300">
          United Kingdom
        </Text>
      </Text>

      <View className="flex-row justify-center">
        <Image
          source={require("../assets/images/partlycloudy.png")}
          className="h-52 w-52"
        />
      </View>

      <View className="space-y-2">
        <Text className="ml-5 text-center text-6xl font-bold text-white">
          23&#176;
        </Text>

        <Text className="text-center text-xl tracking-widest text-white">
          Partly cloudy
        </Text>
      </View>

      <View className="mx-4 flex-row justify-between">
        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/icons/wind.png")}
            className="h-6 w-6"
          />

          <Text className="text-base font-semibold text-white">22km</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/icons/drop.png")}
            className="h-6 w-6"
          />

          <Text className="text-base font-semibold text-white">23%</Text>
        </View>

        <View className="flex-row items-center gap-2">
          <Image
            source={require("../assets/icons/sun.png")}
            className="h-6 w-6"
          />

          <Text className="text-base font-semibold text-white">6:05 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default WeatherInfo;
