import { StatusBar, StyleSheet, ActivityIndicator, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { isUserSignIn } from "@/appwrite/actions";
import { appCredentials, databases } from "@/appwrite/config.appwrite";
import { Query } from "react-native-appwrite";
import { useNavigationState } from "@react-navigation/native";

export default function Index() {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const isReady = useNavigationState((state) => state.key !== undefined);

  const handleUpdateAuthRoute = async () => {
    try {
      const user: any = await isUserSignIn();
      if (user?.email || user?.phone) {
        const userDoc = await databases.listDocuments(
          appCredentials.appwriteDb,
          appCredentials.usersCollection,
          [
            Query.or([
              Query.equal("email", user.email),
              Query.equal("phone", user.phone),
            ]),
          ]
        );
        if (userDoc?.documents[0]?.category) {
          router.push(
            userDoc.documents[0].category === "user" ? "/(user)" : "/(agent)"
          );
        } else {
          router.push("/(register)/user-category");
        }
      } else {
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const loadTimeout = () => {
      if (loading) setTimeout(() => setLoading(false), 500);
    };

    const action = async () => {
      await handleUpdateAuthRoute();
      loadTimeout();
    };

    if (isReady) {
      // action();
      router.push("/(user)");
    }
  }, [router]);

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={appColors.primaryColor}
        />
        <View>
          <ActivityIndicator
            size={48}
            color={appColors.onPrimaryColor}
            testID="loading-indicator"
          />
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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
