import { ActiveButton, BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import DateTimePicker from "@react-native-community/datetimepicker";

const { width } = Dimensions.get("window");

export default function componentName() {
  // goal details
  const [goalName, setGoalName] = useState<string>("");
  const [goalAmount, setGoalAmount] = useState<string>("");
  const [goalDescription, setGoalDescription] = useState<string>("");
  const router = useRouter();
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedSchedule, setSelectedSchedule] = useState<Date | null>(
    new Date()
  );
  const [dateIsSelected, setDateIsSelected] = useState<boolean>(false);

  const onChange = (event: any, selectedDate?: Date) => {
    if (selectedDate) {
      setSelectedSchedule(selectedDate);
    }
    setDateIsSelected(true);
    setShowDatePicker(false); // Hide picker after selection
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceContainerLow}
      />
      <Appbar.Header
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outlineVariant,
        }}
        statusBarHeight={0}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title="Goal details"
          titleStyle={{ ...textFontStyles.titleLargeMedium }}
        />
      </Appbar.Header>
      <ScrollView>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 16,
            marginTop: 42,
            gap: 20,
          }}
        >
          <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
            <Text
              style={{
                ...textFontStyles.bodyLargeRegular,
                color: appColors.onSurface,
              }}
            >
              Name of goal
            </Text>
            <TextInputElement
              type="single-line"
              keyboardType="default"
              placeholder="Name of goal"
              value={goalName}
              onChangeValue={setGoalName}
              required
            />
          </View>
          <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
            <Text
              style={{
                ...textFontStyles.bodyLargeRegular,
                color: appColors.onSurface,
              }}
            >
              Amount
            </Text>
            <TextInputElement
              type="single-line"
              keyboardType="default"
              placeholder="Amount"
              value={goalAmount}
              onChangeValue={setGoalAmount}
              required
            />
          </View>
          <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
            <Text
              style={{
                ...textFontStyles.bodyLargeRegular,
                color: appColors.onSurface,
              }}
            >
              Description
            </Text>
            <TextInputElement
              type="multiline"
              keyboardType="default"
              placeholder="Description"
              value={goalDescription}
              onChangeValue={setGoalDescription}
              required
              multiline
              numberOfLines={10}
            />
          </View>
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              gap: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                justifyContent: "space-between",
                paddingHorizontal: 20,
              }}
            >
              <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                Goal deadline:
              </Text>
              <ActiveButton
                icon={
                  <>
                    <MaterialIcons
                      name="calendar-month"
                      size={24}
                      color={appColors.onTertiaryContainerColor}
                    />
                  </>
                }
                name="Add deadline"
                onPressAction={() => setShowDatePicker(true)}
                bgColor={appColors.tertiaryContainerColor}
                color={appColors.onTertiaryContainerColor}
                focusedColor=""
              />
            </View>
            {dateIsSelected && (
              <Text
                style={{
                  ...textFontStyles.bodyLargeRegular,
                  color: appColors.onSurface,
                }}
              >
                Selected date: {selectedSchedule?.toLocaleDateString()}
              </Text>
            )}
          </View>
          <View style={{ width: "100%", marginTop: 20 }}>
            <BottomButton name="Set Goal" onPressAction={() => {}} />
          </View>
        </View>
      </ScrollView>
      {showDatePicker && (
        <DateTimePicker
          value={selectedSchedule!}
          mode={"date"}
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
