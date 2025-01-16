import { ActiveButton, BottomButton, RadioComponent } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const [userrole, setUserrole] = useState("User");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.formContainer}>
          <Text
            style={{
              ...textFontStyles.titleLargeBold,
              color: appColors.onSurface,
              textAlign: "center",
            }}
          >
            How would you like to continue?
          </Text>
          <RadioComponent
            label="User: I want to enjoy waste management solutions"
            value="User"
            checked={userrole}
            checkedAction={() => setUserrole("User")}
          />
          <RadioComponent
            label="Agent: For individuals or businesses looking to earn by becoming waste collection or recycling agents."
            value="Agent"
            checked={userrole}
            checkedAction={() => setUserrole("Agent")}
          />
        </View>
        <View style={styles.infoContainer}>
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color={appColors.onTertiaryContainerColor}
          />
          <Text
            style={{
              width: "40%",
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onTertiaryContainerColor,
            }}
          >
            Learn more about DTRACKER user roles
          </Text>
          <ActiveButton
            name="Learn more"
            color={appColors.onTertiaryContainerColor}
            bgColor={appColors.tertiaryContainerColor}
            focusedColor={appColors.tertiaryContainerColor}
            onPressAction={() => {}}
          />
        </View>
      </View>
      <View style={{ width: "100%", marginTop: 200 }}>
        <BottomButton name="Complete" onPressAction={() => {}} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: appColors.surfaceBright,
    paddingHorizontal: 16,
    paddingTop: 190,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 40,
  },

  formContainer: {
    width: "80%",
    flexDirection: "column",
    gap: 20,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#EFEDE34D",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});
