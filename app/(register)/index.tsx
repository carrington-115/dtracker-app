import appColors from "@/constants/colors";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { auth } from "@/firebase/config.firebase";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

export default function componentName() {
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId: process.env.EXPO_PUBLIC_GCLOUD_ANDROID_CLIENT_ID,
    iosClientId: process.env.EXPO_PUBLIC_GCLOUD_IOS_CLIENT_ID,
    webClientId: process.env.EXPO_PUBLIC_GCLOUD_WEB_CLIENT_ID,
    scopes: ["profile", "email"],
  });

  const [userInfo, setUserInfo] = useState<null>(null);

  const handleGoogleSignIn = async () => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      try {
        const userCredential = await signInWithCredential(auth, credential);
        const user: any = userCredential.user;
        console.log("User: ", user);
        setUserInfo(user);
        console.log("User Info: ", userInfo);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    setTimeout(() => {
      promptAsync();
    }, 1500);
    handleGoogleSignIn();
  }, [response]);

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
