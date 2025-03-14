import { AuthCheckElement, BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { appCredentials, databases, id } from "@/appwrite/config.appwrite";
import {
  createUserSession,
  isUserSignIn,
  signUpUser,
} from "@/appwrite/actions";
import { useDispatch } from "react-redux";
import { addUserDocId } from "@/redux/features/authSlice";

export default function componentName() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsCheck, setTermsCheck] = useState<boolean>(false);
  const [errorCheck, setErrorCheck] = useState({
    emailError: false,
    nameError: false,
    passwordError: false,
    confirmPasswordError: false,
    termsError: false,
    errorMessage: "",
  });
  const dispatch = useDispatch();

  const router = useRouter();

  const handleVerifications = () => {
    if (email === "") {
      setErrorCheck((errorCheck) => {
        return {
          ...errorCheck,
          emailError: true,
          errorMessage: "This field is required",
        };
      });
    }
    if (username === "") {
      setErrorCheck((errorCheck) => {
        return {
          ...errorCheck,
          nameError: true,
          errorMessage: "This field is required",
        };
      });
    }
    if (password === "") {
      setErrorCheck((errorCheck) => {
        return {
          ...errorCheck,
          passwordError: true,
          errorMessage: "This field is required",
        };
      });
    }
    if (confirmPassword === "") {
      setErrorCheck((errorCheck) => {
        return {
          ...errorCheck,
          confirmPasswordError: true,
          errorMessage: "This field is required",
        };
      });
    }
    if (!termsCheck) {
      setErrorCheck((errorCheck) => {
        return {
          ...errorCheck,
          termsError: true,
          errorMessage: "This field is required",
        };
      });
    }
    if (
      password !== "" &&
      confirmPassword !== "" &&
      password !== confirmPassword
    ) {
      setErrorCheck((errorCheck) => {
        return {
          ...errorCheck,
          passwordError: true,
          confirmPasswordError: true,
          errorMessage: "Passwords do not match",
        };
      });
    }
  };

  const handleOnSubmit = async () => {
    handleVerifications();
    await signUpUser(email, password);
    setLoading(true);
    await createUserSession(email, password);
    const userExist = await isUserSignIn();
    if (userExist) {
      const response = await databases.createDocument(
        appCredentials.appwriteDb,
        appCredentials.usersCollection,
        id.unique(),
        {
          email: email,
          name: username,
        }
      );
      dispatch(addUserDocId(response?.$id));
    }
    router.push("./user-category");
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
    <SafeAreaView
      style={[
        styles.container,
        {
          justifyContent: loading ? "center" : "flex-start",
          alignItems: loading ? "center" : "flex-start",
        },
      ]}
    >
      {!loading && (
        <Appbar.Header statusBarHeight={0}>
          <Appbar.BackAction onPress={() => router.back()} />
        </Appbar.Header>
      )}
      {loading ? (
        <ActivityIndicator size={48} color={appColors.primaryColor} />
      ) : (
        <>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.innerContainerStyles}>
              <Text
                style={[textFontStyles.titleLargeBold, { textAlign: "center" }]}
              >
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
                  errorMessage={errorCheck.errorMessage}
                />
                <TextInputElement
                  error={errorCheck.emailError}
                  required
                  value={email}
                  onChangeValue={setEmail}
                  keyboardType="email-address"
                  placeholder="Email"
                  type="auth-input"
                  errorMessage={errorCheck.errorMessage}
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
                  errorMessage={errorCheck.errorMessage}
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
                  errorMessage={errorCheck.errorMessage}
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
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    flexDirection: "column",
  },
  scrollViewContainer: {
    paddingHorizontal: 20,
    paddingTop: 50,
    gap: 20,
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
