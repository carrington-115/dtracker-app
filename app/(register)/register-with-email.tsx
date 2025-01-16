import { AuthButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <AuthButton type="back-icon-btn" onPressAction={() => router.back()} />
      <View style={styles.innerContainerStyles}>
        <Text style={[textFontStyles.titleLargeBold, { textAlign: "center" }]}>
          Register with Email
        </Text>
        <KeyboardAvoidingView style={styles.formContainer}>
          <TextInputElement
            value={username}
            onChangeValue={setUsername}
            keyboardType="default"
            placeholder="Name"
            type="auth-input"
          />
          <TextInputElement
            value={email}
            onChangeValue={setEmail}
            keyboardType="default"
            placeholder="Email"
            type="auth-input"
          />
          <TextInputElement
            value={password}
            onChangeValue={setPassword}
            keyboardType="default"
            placeholder="Password"
            type="auth-input"
            password
          />
          <TextInputElement
            value={confirmPassword}
            onChangeValue={setConfirmPassword}
            keyboardType="default"
            placeholder="Confirm Password"
            type="auth-input"
            password
          />
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 20,
    justifyContent: "center",
    gap: 20,
    alignItems: "flex-start",
    backgroundColor: appColors.surfaceBright,
  },
  innerContainerStyles: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
  },
  formContainer: {
    width: "100%",
    paddingHorizontal: 10.5,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
});
