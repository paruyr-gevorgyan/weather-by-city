import { Dispatch, Fragment, SetStateAction, useCallback } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { theme } from "theme";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { MapPinIcon } from "react-native-heroicons/solid";
import { debounce } from "lodash";
import { fetchLocations } from "api/weather";
import { TObjectType } from "./HomeScreen";

type TType = {
  showSearch: boolean;
  setShowSearch: Dispatch<SetStateAction<boolean>>;
  locations: TObjectType;
  setLocations: Dispatch<SetStateAction<TObjectType>>;
  handleLocation: (location: TObjectType) => void;
};

const SearchLocation = ({
  showSearch,
  setShowSearch,
  locations,
  setLocations,
  handleLocation,
}: TType) => {
  const handleSearch = (value: string) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        setLocations(data);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);

  return (
    <View style={{ height: "7%" }} className="relative z-50 mx-4">
      <View
        className="flex-row items-center justify-end"
        style={{
          ...(showSearch && {
            backgroundColor: theme.bgWhite(0.2),
            borderRadius: 100,
          }),
        }}
      >
        {showSearch && (
          <TextInput
            placeholder="Search city"
            placeholderTextColor="lightgray"
            placeholderClassName="text-base"
            className="flex-1 pl-6 text-base text-white"
            onChangeText={handleTextDebounce}
          />
        )}

        <TouchableOpacity
          onPress={() => setShowSearch((prevShowSearch) => !prevShowSearch)}
          style={{ backgroundColor: theme.bgWhite(0.3) }}
          className="m-1 rounded-full p-3"
        >
          <MagnifyingGlassIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {locations.length > 0 && showSearch && (
        <View className="absolute top-16 w-full rounded-3xl bg-gray-300">
          {locations.map((location: any, index: number) => {
            const showBorder = index + 1 !== locations.length;

            return (
              <Fragment key={index}>
                <TouchableOpacity
                  className="flex-row items-center border-0 p-3 px-4"
                  onPress={() => handleLocation(location)}
                >
                  <MapPinIcon size={20} color="grey" />
                  <Text className="ml-2 text-lg text-black">
                    {location?.name}, {location?.country}
                  </Text>
                </TouchableOpacity>

                {showBorder && <View className="h-[1px] bg-gray-400" />}
              </Fragment>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SearchLocation;
