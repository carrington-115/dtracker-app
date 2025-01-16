import {
  AuthButton,
  AuthCheckElement,
  BottomButton,
  TextInputElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function componentName() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsCheck, setTermsCheck] = useState<boolean>(false);
  const [errorCheck, setErrorCheck] = useState({
    emailError: false,
    nameError: false,
    passwordError: false,
    confirmPasswordError: false,
    termsError: false,
  });

  const router = useRouter();

  const handleOnSubmit = () => {
    if (email === "") {
      setErrorCheck((errorCheck) => {
        return { ...errorCheck, emailError: true };
      });
    }
    if (username === "") {
      setErrorCheck((errorCheck) => {
        return { ...errorCheck, nameError: true };
      });
    }
    if (password === "") {
      setErrorCheck((errorCheck) => {
        return { ...errorCheck, passwordError: true };
      });
    }
    if (confirmPassword === "") {
      setErrorCheck((errorCheck) => {
        return { ...errorCheck, confirmPasswordError: true };
      });
    }
    if (!termsCheck) {
      setErrorCheck((errorCheck) => {
        return { ...errorCheck, termsError: true };
      });
    }
  };

  useEffect(() => {
    const handleErrorCheck = () => {
      if (email !== "") {
        setErrorCheck((errorCheck) => {
          return { ...errorCheck, emailError: false };
        });
      }
      if (username !== "") {
        setErrorCheck((errorCheck) => {
          return { ...errorCheck, nameError: false };
        });
      }
      if (password !== "") {
        setErrorCheck((errorCheck) => {
          return { ...errorCheck, passwordError: false };
        });
      }
      if (confirmPassword !== "") {
        setErrorCheck((errorCheck) => {
          return { ...errorCheck, confirmPasswordError: false };
        });
      }
      if (termsCheck) {
        setErrorCheck((errorCheck) => {
          return { ...errorCheck, termsError: false };
        });
      }
    };

    handleErrorCheck();
  }, [username, email, password, confirmPassword, termsCheck]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthButton type="back-icon-btn" onPressAction={() => router.back()} />
      <View style={styles.innerContainerStyles}>
        <Text style={[textFontStyles.titleLargeBold, { textAlign: "center" }]}>
          Register with Email
        </Text>
        <KeyboardAvoidingView style={styles.formContainer}>
          <TextInputElement
            error={errorCheck.nameError}
            required
            value={username}
            onChangeValue={setUsername}
            keyboardType="default"
            placeholder="Name"
            type="auth-input"
          />
          <TextInputElement
            error={errorCheck.emailError}
            required
            value={email}
            onChangeValue={setEmail}
            keyboardType="email-address"
            placeholder="Email"
            type="auth-input"
          />
          <TextInputElement
            error={errorCheck.passwordError}
            required
            value={password}
            onChangeValue={setPassword}
            keyboardType="default"
            placeholder="Password"
            type="auth-input"
            password
          />
          <TextInputElement
            error={errorCheck.confirmPasswordError}
            required
            value={confirmPassword}
            onChangeValue={setConfirmPassword}
            keyboardType="default"
            placeholder="Confirm Password"
            type="auth-input"
            password
          />
        </KeyboardAvoidingView>
        <AuthCheckElement
          label="Agree to our terms and conditions"
          check={termsCheck}
          checkAction={() => setTermsCheck(!termsCheck)}
          error={errorCheck.termsError}
        />
        <View style={{ width: "100%", marginTop: 100 }}>
          <BottomButton name="Register" onPressAction={handleOnSubmit} />
        </View>
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

export { styles };
