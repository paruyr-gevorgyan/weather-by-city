import { Image, ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { theme } from "theme";
import { TObjectType } from "./HomeScreen";
import { getWeatherImage } from "../constants";

type TType = {
  weather: TObjectType;
};

const NextDaysForecast = ({ weather }: TType) => {
  return (
    <View className="mb-5 space-y-3">
      <View className="mx-5 mb-4 flex-row items-center gap-2">
        <CalendarDaysIcon size={22} color="white" />
        <Text className="text-base text-white">Daily forecast</Text>
      </View>

      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {weather?.forecast?.forecastday?.map(
          (forecastData: TObjectType, index: number) => {
            const date = new Date(forecastData.date);
            const options: Intl.DateTimeFormatOptions = { weekday: "long" };
            const dayName = date
              .toLocaleDateString("en-US", options)
              .split(" , ")[0];

            return (
              <View
                key={index}
                className="mr-4 flex w-24 items-center justify-center space-y-10 rounded-3xl py-3"
                style={{ backgroundColor: theme.bgWhite(0.15) }}
              >
                <Image
                  source={getWeatherImage(forecastData?.day?.condition?.text)}
                  className="h-11 w-11"
                />
                <Text className="text-base text-white">{dayName}</Text>
                <Text className="text-xl font-semibold text-white">
                  {forecastData?.day?.avgtemp_c}&#176;
                </Text>
              </View>
            );
          },
        )}
      </ScrollView>
    </View>
  );
};

export default NextDaysForecast;
