import { RadioComponent } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const [userrole, setUserrole] = useState("User");
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View>
          <Text
            style={{
              ...textFontStyles.titleLargeBold,
              color: appColors.onSurface,
            }}
          >
            How would you like to continue?
          </Text>
          <RadioComponent
            label="I want to enjoy waste management solutions"
            value="User"
            checked={userrole}
            checkedAction={() => setUserrole("User")}
          />
          <RadioComponent
            label="I want to leverage waste management solutions"
            value="Agent"
            checked={userrole}
            checkedAction={() => setUserrole("Agent")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: appColors.surfaceBright,
  },
});
