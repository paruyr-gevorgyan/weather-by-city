export type WeatherConditionKey = keyof typeof weatherImages;

export const apiKey = "3dbaf264dd434bd3b6c163107251605";

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
  other: require("../assets/images/moderaterain.png"),
};

export function getWeatherImage(condition?: string): number {
  if (!condition) {
    return weatherImages["other"];
  }
  const words = condition.split(" ");
  for (let i = 1; i <= words.length; i++) {
    const prefix = words.slice(0, i).join(" ");
    if (prefix in weatherImages) {
      return weatherImages[prefix];
    }
  }
  return weatherImages["other"];
}
