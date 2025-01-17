import { AuthButton, BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState({
    nameError: false,
    passwordError: false,
  });

  const router = useRouter();

  const handleSubmitForm = () => {
    if (email === "") {
      setError((error) => {
        return { ...error, nameError: true };
      });
    }
    if (password === "") {
      setError((error) => {
        return { ...error, passwordError: true };
      });
    }
  };

  useEffect(() => {
    const handleErrorCheck = () => {
      if (email !== "") {
        setError((error) => {
          return { ...error, nameError: false };
        });
      }
      if (password !== "") {
        setError((error) => {
          return { ...error, passwordError: false };
        });
      }
    };

    handleErrorCheck();
  }, [email, password]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthButton type="back-icon-btn" onPressAction={() => router.back()} />
      <View style={styles.innerContainer}>
        <Text style={[textFontStyles.titleLargeBold]}>Log in with Email</Text>
        <TextInputElement
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeValue={setEmail}
          type="auth-input"
          required
          error={error.nameError}
        />
        <TextInputElement
          placeholder="Password"
          keyboardType="default"
          value={password}
          onChangeValue={setPassword}
          type="auth-input"
          password
          required
          error={error.passwordError}
        />
      </View>
      <View style={{ width: "100%", marginTop: 200 }}>
        <BottomButton name="Login" onPressAction={handleSubmitForm} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceBright,
    paddingHorizontal: 16,
    paddingTop: 190,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  innerContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
  },
});
