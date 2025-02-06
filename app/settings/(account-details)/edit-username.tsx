import { BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const [username, setUsername] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const handleSave = () => {
    if (username === "") {
      setError(true);
    } else {
      // do something
    }
  };

  useEffect(() => {
    if (error && username !== "") {
      setError(false);
    }
  }, [error, username]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flexDirection: "column", gap: 5 }}>
        <Text
          style={{
            ...textFontStyles.bodyLargeRegular,
            color: appColors.onSurface,
          }}
        >
          Name
        </Text>
        <TextInputElement
          value={username}
          onChangeValue={setUsername}
          keyboardType="default"
          placeholder="Username"
          type="auth-input"
          required
          error={error}
          errorMessage="This field is required"
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
          right: "5%",
        }}
      >
        <BottomButton name="Save" onPressAction={handleSave} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
    paddingHorizontal: 20,
  },
});
