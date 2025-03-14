import { BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { useDispatch } from "react-redux";
import { isUserSignIn } from "@/appwrite/actions";
import { setSignedInState } from "@/redux/features/authSlice";
import { account, appCredentials, databases } from "@/appwrite/config.appwrite";
import { Query } from "react-native-appwrite";

export default function componentName() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({
    nameError: false,
    passwordError: false,
  });
  const dispatch = useDispatch();

  const router = useRouter();

  const userVerification = () => {
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

  const handleSignInWithEmail = async () => {
    try {
      userVerification();
      const user: any = await account.createEmailPasswordSession(
        email,
        password
      );
      const userCategory = await databases.listDocuments(
        appCredentials.appwriteDb,
        appCredentials.usersCollection,
        [
          Query.or([Query.equal("email", user?.email)]),
          Query.equal("phone", user?.phone),
        ]
      );
      if (userCategory)
        router.push(
          userCategory?.documents[0]?.category === "user"
            ? "/(user)"
            : "/(agent)"
        );
    } catch (error) {
      console.error(error);
    }
  };

  const authorizeAddUserAuthState = async () => {
    try {
      const user: any = await isUserSignIn(); // user sign in state
      if (user?.email || user?.phone) {
        dispatch(setSignedInState(user.email));
        const userCategory = await databases.listDocuments(
          appCredentials.appwriteDb,
          appCredentials.usersCollection,
          [
            Query.or([
              Query.equal("email", user.email),
              Query.equal("phone", user.phone),
            ]),
          ]
        );
        if (userCategory?.documents[0]?.category) {
          router.push(
            userCategory?.documents[0]?.category === "user"
              ? "/(user)"
              : "/(agent)"
          );
        }
      }
    } catch (error) {
      console.error(error);
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

    const fetchData = async () => {
      await authorizeAddUserAuthState();
    };

    fetchData();
    handleErrorCheck();
  }, [email, password]);

  return (
    <SafeAreaView
      style={
        loading
          ? {
              flex: 1,
              backgroundColor: appColors.surfaceBright,
              justifyContent: "center",
              alignItems: "center",
            }
          : styles.container
      }
    >
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceBright}
      />
      {loading ? (
        <>
          <ActivityIndicator size={48} color={appColors.primaryColor} />
        </>
      ) : (
        <>
          <Appbar.Header>
            <Appbar.BackAction onPress={() => router.back()} />
          </Appbar.Header>
          <View style={styles.innerContainer}>
            <Text style={[textFontStyles.titleLargeBold]}>
              Log in with Email
            </Text>
            <TextInputElement
              placeholder="Email"
              keyboardType="email-address"
              value={email}
              onChangeValue={setEmail}
              type="auth-input"
              required
              error={error.nameError}
              errorMessage="This field is required"
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
              errorMessage="This field is required"
            />
          </View>
          <View style={{ width: "100%", marginTop: 200 }}>
            <BottomButton name="Login" onPressAction={handleSignInWithEmail} />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceBright,
    paddingHorizontal: 16,
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
  },

  innerContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 100,
    gap: 20,
  },
});
