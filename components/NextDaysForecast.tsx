import { Image, ScrollView, Text, View } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/solid";
import { theme } from "theme";

const NextDaysForecast = () => {
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
        <View
          className="mr-4 flex w-24 items-center justify-center space-y-10 rounded-3xl py-3"
          style={{ backgroundColor: theme.bgWhite(0.15) }}
        >
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="h-11 w-11"
          />
          <Text className="text-base text-white">Monday</Text>
          <Text className="text-xl font-semibold text-white">13&#176;</Text>
        </View>

        <View
          className="mr-4 flex w-24 items-center justify-center space-y-10 rounded-3xl py-3"
          style={{ backgroundColor: theme.bgWhite(0.15) }}
        >
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="h-11 w-11"
          />
          <Text className="text-base text-white">Monday</Text>
          <Text className="text-xl font-semibold text-white">13&#176;</Text>
        </View>

        <View
          className="mr-4 flex w-24 items-center justify-center space-y-10 rounded-3xl py-3"
          style={{ backgroundColor: theme.bgWhite(0.15) }}
        >
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="h-11 w-11"
          />
          <Text className="text-base text-white">Monday</Text>
          <Text className="text-xl font-semibold text-white">13&#176;</Text>
        </View>

        <View
          className="mr-4 flex w-24 items-center justify-center space-y-10 rounded-3xl py-3"
          style={{ backgroundColor: theme.bgWhite(0.15) }}
        >
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="h-11 w-11"
          />
          <Text className="text-base text-white">Monday</Text>
          <Text className="text-xl font-semibold text-white">13&#176;</Text>
        </View>

        <View
          className="mr-4 flex w-24 items-center justify-center space-y-10 rounded-3xl py-3"
          style={{ backgroundColor: theme.bgWhite(0.15) }}
        >
          <Image
            source={require("../assets/images/heavyrain.png")}
            className="h-11 w-11"
          />
          <Text className="text-base text-white">Monday</Text>
          <Text className="text-xl font-semibold text-white">13&#176;</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default NextDaysForecast;
