import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { textInputElementProps } from "@/constants/types";
import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function componentName({
  value,
  onChangeValue,
  placeholder,
  keyboardType,
  multiline,
  numberOfLines,
  type,
  password,
  error,
  required,
  errorMessage,
}: textInputElementProps) {
  const [hide, setHide] = useState<boolean>(true);
  const [press, setPress] = useState<boolean>(false);

  if (type === "auth-input") {
    return (
      <View style={styles.container}>
        {password ? (
          <View
            style={[
              styles.passwordElementStyle,
              {
                borderColor: press
                  ? appColors.outline
                  : error && required
                  ? appColors.errorColor
                  : "transparent",

                borderWidth: press || (error && required) ? 1 : 0,
                backgroundColor: press
                  ? appColors.surfaceContainer
                  : appColors.surfaceContainerLow,
              },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onChangeValue}
              placeholder={placeholder}
              keyboardType={keyboardType}
              secureTextEntry={hide}
              onFocus={() => setPress(true)}
              onBlur={() => setPress(false)}
              style={[
                textFontStyles.bodyLargeRegular,
                { color: appColors.onSurface },
              ]}
            />
            <TouchableOpacity onPress={() => setHide(!hide)}>
              <MaterialCommunityIcons
                name={hide ? "eye-off" : "eye"}
                size={24}
                color={appColors.onSurface}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TextInput
            value={value}
            onChangeText={onChangeValue}
            placeholder={placeholder}
            keyboardType={keyboardType}
            style={[
              styles.elementStyle,
              textFontStyles.bodyLargeRegular,
              {
                borderColor: press
                  ? appColors.outline
                  : error && required
                  ? appColors.errorColor
                  : "transparent",

                borderWidth: press || (error && required) ? 1 : 0,
                backgroundColor: press
                  ? appColors.surfaceContainer
                  : appColors.surfaceContainerLow,
              },
            ]}
            onFocus={() => setPress(true)}
            onBlur={() => setPress(false)}
          />
        )}
        {error && required && (
          <View style={styles.errorElementStyle}>
            <MaterialCommunityIcons
              name="information-outline"
              size={16}
              color={appColors.errorColor}
            />
            <Text
              style={[
                textFontStyles.bodySmallMedium,
                { color: appColors.errorColor },
              ]}
            >
              {errorMessage}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  elementStyle: {
    width: "100%",
    padding: 20,
    borderRadius: 10,
    color: appColors.onSurface,
    outline: appColors.outline,
  },
  passwordElementStyle: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "auto",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    outline: appColors.outline,
  },
  errorElementStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2.5,
    marginTop: 10,
  },
});
