import {
  AuthButton,
  AuthCheckElement,
  TextInputElement,
  BottomButton,
} from "@/components";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./register-with-email";
import { textFontStyles } from "@/constants/fonts";

export default function componentName() {
  const [username, setUsername] = useState<string>("");
  const [termsCheck, setTermsCheck] = useState<boolean>(false);
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [inputError, setInputError] = useState({
    nameError: false,
    phoneError: false,
    termsError: false,
  });

  const router = useRouter();

  const handleSubmitForm = () => {
    if (username === "") {
      setInputError((inputError) => {
        return { ...inputError, nameError: true };
      });
    }
    if (phonenumber === "") {
      setInputError((inputError) => {
        return { ...inputError, phoneError: true };
      });
    }
    if (!termsCheck) {
      setInputError((inputError) => {
        return { ...inputError, termsError: true };
      });
    } else {
      router.push("./verify-phone");
    }
  };

  useEffect(() => {
    const formChecker = () => {
      if (username !== "") {
        setInputError((inputError) => {
          return { ...inputError, nameError: false };
        });
      }
      if (phonenumber !== "") {
        setInputError((inputError) => {
          return { ...inputError, phoneError: false };
        });
      }
      if (termsCheck) {
        setInputError((inputError) => {
          return { ...inputError, termsError: false };
        });
      }
    };
    formChecker();
  }, [username, phonenumber, termsCheck]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthButton type="back-icon-btn" onPressAction={() => router.back()} />
      <View style={styles.innerContainerStyles}>
        <Text style={[textFontStyles.titleLargeBold, { textAlign: "center" }]}>
          Register with Phone Number
        </Text>
        <KeyboardAvoidingView style={styles.formContainer}>
          <TextInputElement
            value={username}
            onChangeValue={setUsername}
            keyboardType="default"
            placeholder="Name"
            type="auth-input"
            required
            error={inputError.nameError}
          />
          <TextInputElement
            value={phonenumber}
            onChangeValue={setPhonenumber}
            keyboardType="phone-pad"
            placeholder="Phone Number"
            type="auth-input"
            required
            error={inputError.phoneError}
          />
        </KeyboardAvoidingView>
        <AuthCheckElement
          label="Agree to our terms and conditions"
          check={termsCheck}
          checkAction={() => setTermsCheck(!termsCheck)}
          error={inputError.termsError}
        />
        <View style={{ width: "100%", marginTop: 100 }}>
          <BottomButton name="Register" onPressAction={handleSubmitForm} />
        </View>
      </View>
    </SafeAreaView>
  );
}
