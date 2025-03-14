import {
  AuthButton,
  AuthCheckElement,
  TextInputElement,
  BottomButton,
} from "@/components";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./register-with-email";
import { textFontStyles } from "@/constants/fonts";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { account, id } from "@/appwrite/config.appwrite";
import {
  addAuthName,
  setPhoneAuth,
  addUserId,
} from "@/redux/features/authSlice";

export default function componentName() {
  const [username, setUsername] = useState<string>("");
  const [termsCheck, setTermsCheck] = useState<boolean>(false);
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [inputError, setInputError] = useState({
    nameError: false,
    phoneError: false,
    termsError: false,
  });

  const router = useRouter();
  const dispatch = useDispatch();

  const userVerification = () => {
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
    }
  };

  const handleRegisterWithPhone = async () => {
    try {
      userVerification();
      const user = await account.createPhoneToken(id.unique(), phonenumber);
      dispatch(setPhoneAuth(phonenumber));
      dispatch(addAuthName(username));
      if (user) dispatch(addUserId(user.userId));
      router.push("/verify-phone");
    } catch (error) {
      console.log(error);
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
    <SafeAreaView
      style={[
        styles.container,
        {
          justifyContent: loading ? "center" : "flex-start",
          alignItems: loading ? "center" : "flex-start",
        },
      ]}
    >
      {loading ? (
        <>
          <ActivityIndicator size={48} color={appColors.primaryColor} />
        </>
      ) : (
        <>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => router.back()} />
          </Appbar.Header>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.innerContainerStyles}>
              <Text
                style={[textFontStyles.titleLargeBold, { textAlign: "center" }]}
              >
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
                  errorMessage="This field is required"
                />
                <TextInputElement
                  value={phonenumber}
                  onChangeValue={setPhonenumber}
                  keyboardType="phone-pad"
                  placeholder="Phone Number"
                  type="auth-input"
                  required
                  error={inputError.phoneError}
                  errorMessage="This field id required"
                />
              </KeyboardAvoidingView>
              <AuthCheckElement
                label="Agree to our terms and conditions"
                check={termsCheck}
                checkAction={() => setTermsCheck(!termsCheck)}
                error={inputError.termsError}
              />
              <View style={{ width: "100%", marginTop: 200 }}>
                <BottomButton
                  name="Register"
                  onPressAction={handleRegisterWithPhone}
                />
              </View>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}
