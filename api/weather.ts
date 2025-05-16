import axios from "axios";
import { apiKey } from "../constants";

type TForecastFetchType = {
  cityName: string;
  days?: number;
};

const forecastEndpoint = (params: TForecastFetchType) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`;

const locationsEndpoint = (params: TForecastFetchType) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint: string) => {
  const options = {
    method: "GET",
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const fetchWeatherForecast = (params: TForecastFetchType) => {
  return apiCall(forecastEndpoint(params));
};

export const fetchLocations = (params: TForecastFetchType) => {
  return apiCall(locationsEndpoint(params));
};
