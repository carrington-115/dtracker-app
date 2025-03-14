import { ActiveButton, BottomButton, RadioComponent } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { databases, appCredentials } from "@/appwrite/config.appwrite";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { Appbar } from "react-native-paper";
import { isUserSignIn } from "@/appwrite/actions";
import { Query } from "react-native-appwrite";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [userrole, setUserrole] = useState<"user" | "agent" | "collector">(
    "user"
  );
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(false);
  const stateDocId = useSelector((state: any) => state.auth.userDocId);

  async function getUserDocId() {
    const user: any = await isUserSignIn();
    return user.email;
  }

  /*
      - first get the user sign in state
      - from the state, get the signed in email that can ge used to get the doc id
      - update the doc by the user role
      - 
  */
  const handleAddUserCategory = async () => {
    try {
      setLoading(true);
      await databases.updateDocument(
        appCredentials.appwriteDb,
        appCredentials.usersCollection,
        stateDocId,
        {
          category: userrole,
        }
      );
      router.push(userrole === "user" ? "/(user)" : "/(agent)");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const action = async () => {
      const email = await getUserDocId();
      const userDocId = await databases.listDocuments(
        appCredentials.appwriteDb,
        appCredentials.usersCollection,
        [Query.equal("email", email)]
      );
      if (userDocId.documents[0]?.category) {
        router.push("/(user)");
      }
    };
    action();
  }, [stateDocId]);

  return (
    <SafeAreaView
      style={
        loading
          ? {
              flex: 1,
              backgroundColor: appColors.surfaceBright,
            }
          : styles.container
      }
    >
      <>
        {!loading && (
          <Appbar.Header statusBarHeight={0}>
            <Appbar.BackAction onPress={() => router.dismissAll()} />
          </Appbar.Header>
        )}
      </>
      {loading ? (
        <View
          style={{
            flex: 1,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator size={48} color={appColors.primaryColor} />
        </View>
      ) : (
        <ScrollView style={{ width: "100%", marginTop: 50 }}>
          <View style={styles.innerContainer}>
            <View style={styles.formContainer}>
              <Text
                style={{
                  ...textFontStyles.titleLargeBold,
                  color: appColors.onSurface,
                  textAlign: "center",
                }}
              >
                How would you like to continue?
              </Text>
              <RadioComponent
                label="Homes & Businesses: Schedule pickups, sell recyclables, and keep your space clean."
                value="user"
                checked={userrole}
                checkedAction={() => setUserrole("user")}
              />
              <RadioComponent
                label="Agents: Collect, deliver, and earn from recyclables."
                value="agent"
                checked={userrole}
                checkedAction={() => setUserrole("agent")}
              />
              <RadioComponent
                label="Collection Centers: Process recyclables and connect with businesses and agents."
                value="collector"
                checked={userrole}
                checkedAction={() => setUserrole("collector")}
              />
            </View>
            <View style={styles.infoContainer}>
              <MaterialCommunityIcons
                name="information-outline"
                size={24}
                color={appColors.onTertiaryContainerColor}
              />
              <Text
                style={{
                  width: "40%",
                  ...textFontStyles.bodyLargeRegular,
                  color: appColors.onTertiaryContainerColor,
                }}
              >
                Learn more about DTRACKER user roles
              </Text>
              <ActiveButton
                name="Learn more"
                color={appColors.onTertiaryContainerColor}
                bgColor={appColors.tertiaryContainerColor}
                focusedColor={appColors.tertiaryContainerColor}
                onPressAction={() => {}}
              />
            </View>
          </View>
          <View style={{ width: "100%", marginTop: 150 }}>
            <BottomButton
              name="Complete"
              onPressAction={handleAddUserCategory}
            />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    paddingHorizontal: 16,
    width: width,
  },
  innerContainer: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 40,
  },

  formContainer: {
    width: "80%",
    flexDirection: "column",
    gap: 20,
  },
  infoContainer: {
    width: "100%",
    flexDirection: "row",
    padding: 20,
    borderRadius: 20,
    backgroundColor: "#EFEDE34D",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
});
