import { AuthButton, BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [phoneError, setPhoneError] = useState<boolean>(false);

  const router = useRouter();

  const handleSubmitForm = () => {
    if (phonenumber === "") {
      setPhoneError(true);
    } else {
      router.push("./verify-phone");
    }
  };

  useEffect(() => {
    if (phonenumber !== "") {
      setPhoneError(false);
    }
  }, [phonenumber]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthButton type="back-icon-btn" onPressAction={() => router.back()} />
      <View style={styles.innerContainer}>
        <Text
          style={[
            textFontStyles.titleLargeBold,
            { color: appColors.onSurface, textAlign: "center" },
          ]}
        >
          Log in with Phone
        </Text>
        <TextInputElement
          value={phonenumber}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          type="auth-input"
          required
          error={phoneError}
          onChangeValue={setPhonenumber}
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
    width: "100%",
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    paddingHorizontal: 16,
    paddingTop: 100,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  innerContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
  },
});
