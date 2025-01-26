import { ActiveButton, BottomButton, RadioComponent } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { auth, firestore } from "@/firebase/config.firebase";
import {
  updateDoc,
  doc,
  query,
  where,
  collection,
  getDocs,
} from "firebase/firestore";

export default function componentName() {
  const [userrole, setUserrole] = useState<string>("Agent");
  const [loading, setLoading] = useState<boolean>(false);
  const [userId, setUserId] = useState<any>(null);
  const [docId, setDocId] = useState<any>(null);

  const userCollections = collection(firestore, "users");

  useEffect(() => {
    const user = auth.currentUser;
    setUserId(user?.uid);
    const action = async () => {
      const fieldQuery = query(userCollections, where("uid", "==", userId));
      const fieldSnap = await getDocs(fieldQuery);
      fieldSnap.forEach((doc) => {
        setDocId(doc.id);
      });
    };
    action();
  }, [userId]);

  const handleAddUserCategory = async () => {
    try {
      const docRef = doc(firestore, "users", docId);
      setLoading(true);
      await updateDoc(docRef, {
        role: userrole,
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      {loading ? (
        <>
          <ActivityIndicator size={48} color={appColors.primaryColor} />
        </>
      ) : (
        <>
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
                label="User: I want to enjoy waste management solutions"
                value="User"
                checked={userrole}
                checkedAction={() => setUserrole("User")}
              />
              <RadioComponent
                label="Agent: For individuals or businesses looking to earn by becoming waste collection or recycling agents."
                value="Agent"
                checked={userrole}
                checkedAction={() => setUserrole("Agent")}
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
          <View style={{ width: "100%", marginTop: 200 }}>
            <BottomButton
              name="Complete"
              onPressAction={handleAddUserCategory}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: appColors.surfaceBright,
    paddingHorizontal: 16,
    paddingTop: 190,
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
