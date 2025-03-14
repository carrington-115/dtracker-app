import appColors from "@/constants/colors";
import React, { useEffect, useState } from "react";
import { View, StatusBar, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import { account, oAuth } from "@/appwrite/config.appwrite";
import { makeRedirectUri } from "expo-auth-session";

WebBrowser.maybeCompleteAuthSession();

export default function componentName() {
  const [userInfo, setUserInfo] = useState<null>(null);
  const deepLink = new URL(makeRedirectUri({ preferLocalhost: true }));
  if (!deepLink.hostname) {
    deepLink.hostname = "localhost";
  }
  const scheme = `${deepLink.protocol}`;
  const provider = oAuth.Google;

  useEffect(() => {
    const handleGoogleSignIn = async () => {
      try {
        const loginUrl = account.createOAuth2Token(
          provider,
          `${deepLink}`,
          `${deepLink}`
        );
        const session = await WebBrowser.openAuthSessionAsync(
          `${loginUrl}`,
          scheme
        );
        console.log(session);
      } catch (e) {
        console.error(e);
      }
    };

    handleGoogleSignIn();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />
      <View>
        <ActivityIndicator
          animating={true}
          color={appColors.primaryColor}
          size={48}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.surfaceBright,
  },
});
