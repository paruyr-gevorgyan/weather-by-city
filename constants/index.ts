export type WeatherConditionKey = keyof typeof weatherImages;

export const apiKey = "cd8e083d3a7e4ede989114920251705";

export const weatherImages: { [key: string]: number } = {
  "Partly cloudy": require("../assets/images/partlycloudy.png"),
  "Moderate rain": require("../assets/images/moderaterain.png"),
  "Patchy rain possible": require("../assets/images/moderaterain.png"),
  Sunny: require("../assets/images/sun.png"),
  Clear: require("../assets/images/sun.png"),
  Overcast: require("../assets/images/cloud.png"),
  Cloudy: require("../assets/images/cloud.png"),
  "Light rain": require("../assets/images/moderaterain.png"),
  "Moderate rain at times": require("../assets/images/moderaterain.png"),
  "Heavy rain": require("../assets/images/heavyrain.png"),
  "Heavy rain at times": require("../assets/images/heavyrain.png"),
  "Moderate or heavy freezing rain": require("../assets/images/heavyrain.png"),
  "Moderate or heavy rain shower": require("../assets/images/heavyrain.png"),
  "Moderate or heavy rain with thunder": require("../assets/images/heavyrain.png"),
  Mist: require("../assets/images/mist.png"),
  other: require("../assets/images/moderaterain.png"),
};

export const getWeatherImage = (condition: string): number => {
  const words = condition.split(" ");

  for (let i = 1; i <= words.length; i++) {
    const prefix = words.slice(0, i).join(" ");

    if (prefix in weatherImages) {
      return weatherImages[prefix];
    }
  }

  return weatherImages["other"];
};
