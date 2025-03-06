import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { ChatInputElementProps } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";

const { width } = Dimensions.get("window");

export default function componentName({
  text,
  setText,
  submitAction,
}: ChatInputElementProps) {
  const [inputFocused, setInputFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <TextInput
          value={text}
          onChangeText={setText}
          keyboardType="default"
          multiline
          placeholder="Message"
          style={[
            styles.textInputStyle,
            {
              backgroundColor: inputFocused
                ? appColors.surfaceContainer
                : appColors.surfaceContainerLow,
            },
          ]}
          onFocus={() => setInputFocused(true)}
        />
        <SubmitButton submitAction={submitAction} />
      </View>
    </View>
  );
}

const SubmitButton = ({ submitAction }: { submitAction: () => void }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.submitButtonStyles,
        {
          backgroundColor: pressed
            ? appColors.surfaceContainer
            : appColors.surfaceContainerLow,
        },
      ]}
      onPress={submitAction}
    >
      <MaterialIcons name="send" size={24} color={appColors.onSurface} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    paddingHorizontal: 21,
    marginBottom: 30,
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    right: 0,
    left: 0,
  },
  textInputStyle: {
    width: "80%",
    borderRadius: 20,
    ...textFontStyles.bodyLargeRegular,
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  submitButtonStyles: {
    padding: 12,
    borderRadius: 100,
  },
});
