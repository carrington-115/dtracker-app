import { StatusBar, StyleSheet, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";

export default function Index() {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (!signedIn) {
        router.push("/onboarding");
      }
    }, 2000);

    // clean up function
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View>
        <ActivityIndicator
          size={48}
          color={appColors.onPrimaryColor}
          testID="loading-indicator"
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
    backgroundColor: appColors.primaryColor,
  },
});
