import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Switch } from "react-native-paper";
import appColors from "@/constants/colors";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";
import { BottomButton, DropDownElement, IconButton } from "@/components";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

export default function componentName() {
  const [trashType, setTrashType] = useState<string>("Mixed");
  const [deviceLocation, setDeviceLocation] = useState<boolean>(false);
  // const []

  const router = useRouter();

  const handleUploadImage = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "transparent",
        }}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Immediate" />
      </Appbar.Header>
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity
          style={styles.ImageSection}
          onPress={handleUploadImage}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <MaterialIcons
              name="image"
              size={120}
              color={appColors.outlineVariant}
            />
            <Text style={{ ...textFontStyles.titleMediumRegular }}>
              Upload Trash Image
            </Text>
          </View>
          <IconButton
            icon={
              <MaterialCommunityIcons
                name="camera"
                size={24}
                color={appColors.onSurface}
              />
            }
            bgColor={appColors.onPrimaryColor}
            btnAction={() => {}}
            appStyles={{
              elevation: 5,
              position: "absolute",
              bottom: 21,
              right: 16,
            }}
          />
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <TrashSizeInput />
          <View style={styles.trashTypeStyles}>
            <Text
              style={{
                ...textFontStyles.bodyLargeRegular,
                color: appColors.onSurface,
              }}
            >
              Trash type
            </Text>
            <DropDownElement
              dropDownItems={[
                { label: "Mixed", value: "mixed" },
                { label: "Paper", value: "paper" },
                { label: "Electronics", value: "e-waste" },
                { label: "Plastic", value: "plastic" },
                { label: "Glass", value: "glass" },
                { label: "Metal", value: "metal" },
                { label: "Organic", value: "organic" },
              ]}
              dropDownValue={trashType}
              onValueChange={(value) => setTrashType(value)}
            />
          </View>
          <View style={styles.locatorStyles}>
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Pickup Location
            </Text>
            <View
              style={{
                width: "100%",
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <MaterialCommunityIcons
                  name="home-map-marker"
                  size={24}
                  color={appColors.onSurface}
                />
                <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                  Device locaton
                </Text>
              </View>
              <Switch
                value={deviceLocation}
                onValueChange={() => setDeviceLocation((previous) => !previous)}
                style={{
                  padding: 5,
                  borderWidth: 1,
                  borderColor: "black",
                }}
                trackColor={{
                  false: appColors.primaryContainerColor,
                  true: appColors.primaryColor,
                }}
                thumbColor={
                  deviceLocation
                    ? appColors.primaryContainerColor
                    : appColors.primaryColor
                }
                ios_backgroundColor={appColors.primaryContainerColor}
              />
            </View>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "90%", marginTop: 50 }}>
            <BottomButton name="Set pickup" onPressAction={() => {}} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function TrashSizeInput() {
  const [trashSize, setTrashSize] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [trashSizeUnit, setTrashSizeUnit] = useState<string>("Bags");

  const handlePressUnit = (unit: string) => {
    setVisible(false);
    setTrashSizeUnit(unit);
  };

  return (
    <>
      <Pressable style={styles.trashInputStyle}>
        <TextInput
          placeholder="Trash Size"
          style={{ ...textFontStyles.bodyLargeRegular, width: "70%" }}
          keyboardType="numeric"
          value={trashSize}
          onChangeText={(text) => setTrashSize(text)}
        />
        <Pressable
          onPress={() => setVisible(!visible)}
          style={(innerPressed) => [
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 20,
              width:
                trashSizeUnit == "Buckets"
                  ? "30%"
                  : trashSizeUnit == "Bags"
                  ? "25%"
                  : "20%",
              backgroundColor: innerPressed.pressed
                ? appColors.surfaceContainerHighest
                : appColors.surfaceContainer,
            },
          ]}
        >
          <Text>{trashSizeUnit}</Text>
          <Entypo name="chevron-small-down" size={24} color="black" />
        </Pressable>
      </Pressable>
      {visible && (
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 10,
            borderRadius: 10,
            backgroundColor: appColors.surfaceContainer,
            paddingHorizontal: 30,
            paddingVertical: 10,
            elevation: 2,
            position: "absolute",
            top: 45,
            right: 16,
          }}
        >
          {["Bags", "Buckets"].map((unit, index) => (
            <TouchableOpacity key={index} onPress={() => handlePressUnit(unit)}>
              <Text style={{ ...textFontStyles.bodyMediumRegular }}>
                {unit}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceContainerLowest,
    flex: 1,
  },
  scrollContainer: {
    marginTop: 50,
  },
  ImageSection: {
    height: 250,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  trashInputStyle: {
    flexDirection: "row",
    backgroundColor: appColors.surfaceContainerLow,
    borderRadius: 5,
    height: 54,
    width: "90%",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    position: "relative",
  },
  trashTypeStyles: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 20,
  },
  locatorStyles: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingVertical: 10,
  },
});
