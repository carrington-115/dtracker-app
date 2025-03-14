import { isUserSignIn } from "@/appwrite/actions";
import {
  account,
  appCredentials,
  databases,
  id,
} from "@/appwrite/config.appwrite";
import { BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { addUserId, setPhoneAuth } from "@/redux/features/authSlice";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, StatusBar } from "react-native";
import { Query } from "react-native-appwrite";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

const { height } = Dimensions.get("window");

export default function componentName() {
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [phoneError, setPhoneError] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleSubmitForm = async () => {
    if (phonenumber === "") {
      setPhoneError(true);
      return;
    }
    setLoading(true);

    const user = await account.createPhoneToken(id.unique(), phonenumber);
    if (user) {
      dispatch(addUserId(user.$id));
      dispatch(setPhoneAuth(phonenumber));
      router.push("./verify-phone");
    } else {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (phonenumber !== "") {
      setPhoneError(false);
    }
    const actions = async () => {
      const user: any = await isUserSignIn();
      if (user) {
        const userCategory = await databases.listDocuments(
          appCredentials.appwriteDb,
          appCredentials.usersCollection,
          [Query.equal("phone", user?.phone)]
        );
        console.log(userCategory);
        if (userCategory)
          router.push(
            userCategory.documents[0].category === "user"
              ? "/(user)"
              : "/(agent)"
          );
      }
    };
    actions();
  }, [phonenumber]);

  if (loading) {
    <>
      <SafeAreaView
        style={[
          styles.container,
          {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: appColors.surfaceBright,
          },
        ]}
      >
        <ActivityIndicator size={"large"} color={appColors.primaryColor} />
      </SafeAreaView>
    </>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceBright}
      />
      <>
        <Appbar.Header statusBarHeight={0}>
          <Appbar.BackAction onPress={() => router.back()} />
        </Appbar.Header>
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
        <View style={{ width: "100%", marginTop: height / 2 }}>
          <BottomButton name="Login" onPressAction={handleSubmitForm} />
        </View>
      </>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    paddingHorizontal: 16,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  innerContainer: {
    width: "100%",
    flexDirection: "column",
    gap: 30,
    alignItems: "center",
    marginTop: 100,
  },
});
