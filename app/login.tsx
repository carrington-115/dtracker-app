import React, { useEffect } from "react";
import { View, StyleSheet, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import { authButtonPropsType } from "@/constants/types";
import { Image } from "expo-image";
import { AuthButton, AuthSlider } from "@/components";
import { isUserSignIn } from "@/appwrite/actions";
import { useDispatch } from "react-redux";
import { setSignedInState } from "@/redux/features/authSlice";
import { appCredentials, databases } from "@/appwrite/config.appwrite";
import { Query } from "react-native-appwrite";

export default function componentName() {
  const router = useRouter();
  const dispatch = useDispatch();
  const registerButtonData: authButtonPropsType[] = [
    {
      name: "Sign in with Google",
      icon: (
        <AntDesign
          name="google"
          size={24}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      onPressAction: () => {},
      type: "outlined-auth-buttons",
    },
    {
      name: "Sign in with Phone",
      icon: (
        <FontAwesome
          name="phone"
          size={24}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      onPressAction: () => router.push("./(login)/login-with-phone"),
      type: "outlined-auth-buttons",
    },
    {
      name: "Sign in with Email",
      icon: (
        <MaterialCommunityIcons
          name="email"
          size={24}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      onPressAction: () => router.push("./(login)/login-with-email"),
      type: "outlined-auth-buttons",
    },
    {
      name: "Sign up instead?",
      onPressAction: () => router.navigate("./onboarding"),
      type: "text-auth-buttons",
    },
  ];

  const authorizeAddUserAuthState = async () => {
    try {
      const user: any = await isUserSignIn(); // user sign in state
      if (user?.email) {
        dispatch(setSignedInState(user.email));
        const userCategory = await databases.listDocuments(
          appCredentials.appwriteDb,
          appCredentials.usersCollection,
          [Query.equal("email", user.email)]
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
    const fetchData = async () => {
      await authorizeAddUserAuthState();
    };
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container} testID="login-screen">
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
        translucent={true}
      />
      <View style={styles.topContainer}>
        <Image
          source={require("@/assets/images/logo.svg")}
          style={styles.logoImage}
        />
        <AuthSlider />
      </View>
      <View style={styles.bottomContainer}>
        {registerButtonData.map((item: authButtonPropsType, index: number) => (
          <AuthButton key={index} {...item} />
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
    backgroundColor: appColors.surfaceBright,
  },
  logoImage: {
    width: 190,
    height: 43.13,
  },
  topContainer: {
    marginTop: 58,
    height: 450,
    paddingHorizontal: 14,
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    marginBottom: 30,
  },

  bottomContainer: {
    flexDirection: "column",
    gap: 15,
    alignItems: "center",
  },
});
