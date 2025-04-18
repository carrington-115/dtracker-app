import appColors from "@/constants/colors";
import React from "react";
import { View, StyleSheet, Dimensions, Text, Pressable } from "react-native";
import {
  LocatorSection,
  DropDownElement,
  TextInputElement,
  ActiveButton,
} from "..";
import { textFontStyles } from "@/constants/fonts";
import LocationSet from "../atoms/LocationSet";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import { AddExchangeElementProps } from "@/constants/types";

const { width } = Dimensions.get("window");

const AddExchangeElement = ({
  action,
  trashType,
  setTrashType,
  trashSize,
  setTrashSize,
  price,
  setPrice,
  locationSwitchState,
  deviceLocationState,
  isBusinessLocationAvailable,
  handleGetDeviceLocation,
}: AddExchangeElementProps) => {
  /*
    There are 2 options for locations
    - From the device
    - From the saved business location
    - There should be a part of the program that check if a business location has be created or not
  */

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          gap: 10,
        }}
      >
        <DropDownElement
          dropDownItems={[
            { label: "Selected", value: "none" },
            { label: "Mixed", value: "mixed" },
            { label: "Paper", value: "paper" },
            { label: "Electronics", value: "e-waste" },
            { label: "Plastic", value: "plastic" },
            { label: "Glass", value: "glass" },
            { label: "Metal", value: "metal" },
            { label: "Organic", value: "organic" },
          ]}
          dropDownValue={trashType}
          onValueChange={(value: string) => setTrashType(value)}
          bgColor={appColors.surfaceContainerLow}
        />
        <InputElement
          inputTitle={"Trash size"}
          value={trashSize}
          onChangeValue={setTrashSize}
          placeholder={"Kg"}
        />
        <InputElement
          inputTitle={"Amount paid"}
          value={price}
          onChangeValue={setPrice}
          placeholder={"XAF"}
        />
      </View>
      <View style={{ width: "100%", flexDirection: "column" }}>
        <LocatorSection
          switchPosition={deviceLocationState}
          handleGetDeviceLocation={handleGetDeviceLocation}
          locationTitle={"Exchange point Location"}
        />
        {isBusinessLocationAvailable ? (
          <LocationSet
            switchPosition={locationSwitchState}
            handleGetDeviceLocation={() => {}}
            title={"Use your Business Location"}
          />
        ) : (
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginBottom: 20,
            }}
          >
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Set your business location:{" "}
            </Text>
            <ActiveButton
              icon={
                <MaterialIcons
                  name="add"
                  color={appColors.onPrimaryContainerColor}
                  size={24}
                />
              }
              name={"Add Location"}
              color={appColors.onPrimaryContainerColor}
              bgColor={appColors.primaryContainerColor}
              onPressAction={() => router.push("/navigation/business_location")}
              focusedColor={appColors.primaryContainerColor}
            />
          </View>
        )}
      </View>
      <View style={{ width: "100%", alignItems: "center" }}>
        <Pressable
          style={{
            flexDirection: "row",
            gap: 12,
            justifyContent: "center",
            alignItems: "center",
            width: "90%",
            backgroundColor: appColors.primaryColor,
            borderRadius: 40,
            paddingHorizontal: 20,
            paddingVertical: 10,
          }}
          onPress={action}
        >
          <MaterialIcons
            name="recycling"
            size={24}
            color={appColors.onPrimaryColor}
          />
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onPrimaryColor,
            }}
          >
            Submit
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const InputElement = ({
  value,
  onChangeValue,
  placeholder,
  inputTitle,
}: {
  value: number;
  onChangeValue: (value: number) => void;
  placeholder: string;
  inputTitle: string;
}) => {
  return (
    <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
      <Text style={{ ...textFontStyles.bodyLargeRegular }}>{inputTitle}</Text>
      <TextInputElement
        value={value}
        onChangeValue={onChangeValue}
        placeholder={placeholder}
        keyboardType={"numeric"}
        required
        type={"single-line"}
      />
    </View>
  );
};

export default AddExchangeElement;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: width,
    bottom: 0,
    backgroundColor: appColors.surfaceBright,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingTop: 30,
    paddingBottom: 100,
    paddingHorizontal: 16,
    elevation: 10,
    flexDirection: "column",
    alignItems: "center",
  },
});
