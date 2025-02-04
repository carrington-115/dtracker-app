import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import {
  ActiveButton,
  BottomButton,
  DropDownElement,
  IconButton,
  LocatorSection,
  SizeDropDown,
  TextInputElement,
} from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { locationPropsType } from "@/constants/types";
import DateTimePicker from "@react-native-community/datetimepicker";
import * as Location from "expo-location";
import { useDispatch } from "react-redux";
import {
  setTrashType as addTrashType,
  setTrashWeight,
  setPickupTime,
  setPickupDate,
  setPickupLocation,
} from "@/redux/features/trashDetailSlice";

export default function componentName() {
  const router = useRouter();
  const [trashSize, setTrashSize] = useState<string>("");
  const [trashType, setTrashType] = useState<string>("");
  const [deviceLocation, setDeviceLocation] =
    useState<locationPropsType | null>(null);
  const [locationSwitchState, setLocationSwitchState] =
    useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Date | null>(
    new Date()
  );
  const [mode, setMode] = useState<"date" | "time">("date");
  const [datePickerSelected, setDatePickerSelected] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleGetDeviceLocation = async () => {
    setLocationSwitchState((previous) => !previous);
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setDeviceLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      accuracy: location.coords.accuracy,
    });
  };

  const handleShowDatePicker = () => {
    setMode("date");
    setShowDatePicker(true);
  };

  const handleShowTimePicker = () => {
    setMode("time");
    setShowDatePicker(true);
  };

  const onChange = (event: any, selectedDate?: Date) => {
    if (mode === "date" || mode === "time") {
      if (selectedDate) {
        setSelectedSchedule(selectedDate);
      }
    }
    setDatePickerSelected(true);
    setShowDatePicker(false); // Hide picker after selection
  };

  const handleSubmitForm = () => {
    if (trashSize === "" || trashType === "none") {
      console.error("Please fill all required fields");
      return;
    }
    // add data to state
    dispatch(setTrashWeight(trashSize));
    dispatch(addTrashType(trashType));
    dispatch(
      setPickupTime(datePickerSelected && selectedSchedule!.toTimeString())
    );
    dispatch(
      setPickupDate(datePickerSelected && selectedSchedule!.toDateString())
    );
    dispatch(setPickupLocation(deviceLocation));
    router.push("./reserve-details");
  };

  /*
    useEffect(() => {
      console.log("Device location:", deviceLocation);
    }, [deviceLocation]);
  */

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
      />
      <Appbar.Header
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(242, 242, 242, 0.40)",
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outline,
        }}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Pickup reservation" />
      </Appbar.Header>
      <ScrollView style={styles.formContainer}>
        <View style={styles.sectionOneStyle}>
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onSurface,
            }}
          >
            Expected trash size
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: "45%" }}>
              <TextInputElement
                placeholder="Size"
                value={trashSize}
                onChangeValue={setTrashSize}
                keyboardType="default"
                type="single-line"
                required
              />
            </View>
            <View style={{ width: "45%" }}>
              <SizeDropDown />
            </View>
          </View>
        </View>
        <View style={styles.scheduleSection}>
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onSurface,
            }}
          >
            Pickup schedule
          </Text>
          {datePickerSelected && (
            <>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
              >
                <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                  {selectedSchedule?.toLocaleDateString()}
                </Text>
                <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                  {selectedSchedule?.toLocaleTimeString()}
                </Text>
              </View>
            </>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <ActiveButton
              name="Select date"
              icon={
                <>
                  <MaterialIcons
                    name="date-range"
                    size={24}
                    color={appColors.onPrimaryContainerColor}
                  />
                </>
              }
              onPressAction={handleShowDatePicker}
              color={appColors.onPrimaryContainerColor}
              bgColor="rgba(215, 236, 227, 0.50)"
              focusedColor={appColors.primaryContainerColor}
            />
            <IconButton
              icon={
                <>
                  <MaterialCommunityIcons
                    name="timer-outline"
                    size={24}
                    color={appColors.onPrimaryContainerColor}
                  />
                </>
              }
              btnAction={handleShowTimePicker}
              bgColor="rgba(215, 236, 227, 0.50)"
              pressedColor={appColors.primaryContainerColor}
            />
          </View>
        </View>
        <View style={styles.sectionOneStyle}>
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
            onValueChange={(value) => setTrashType(value)}
          />
        </View>
        <View style={styles.sectionOneStyle}>
          <LocatorSection
            switchPosition={locationSwitchState}
            handleGetDeviceLocation={handleGetDeviceLocation}
          />
        </View>
        <View style={{ ...styles.sectionOneStyle, borderBottomWidth: 0 }}>
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onSurface,
            }}
          >
            Payment method
          </Text>
          <DropDownElement
            dropDownItems={[{ label: "Cash payment", value: "cash" }]}
            dropDownValue={paymentMethod}
            onValueChange={(value) => setPaymentMethod(value)}
          />
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View style={{ width: "90%", marginVertical: 30 }}>
            <BottomButton name="Set pickup" onPressAction={handleSubmitForm} />
          </View>
        </View>
      </ScrollView>
      {showDatePicker && (
        <DateTimePicker
          value={selectedSchedule!}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
  },
  formContainer: {
    marginTop: 70,
    width: width,
    paddingHorizontal: 16,
    flex: 1,
  },
  sectionOneStyle: {
    gap: 10,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: appColors.outline,
    marginBottom: 20,
  },
  scheduleSection: {
    flexDirection: "column",
    gap: 10,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: appColors.outline,
    marginBottom: 20,
  },
});
