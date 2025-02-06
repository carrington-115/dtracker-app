import appColors from "@/constants/colors";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  StatusBar,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { AccountEditComponent, IconButton } from "@/components";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { editElementTypes } from "@/constants/types";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("John Doe Nde");
  const [userEmail, setUserEmail] = useState<string>("example@email.com");
  const [phoneNumber, setPhoneNumber] = useState<string>("Phone number");
  const [profilePhoto, setProfilePhoto] = useState<string>("");
  const [photoFromDevice, setPhotoFromDevice] = useState<boolean>(false);

  // redux utitlies
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);

  // bottom sheet modal utilities
  const [visible, setVisible] = useState<boolean>(false);
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);

  // routing
  const router = useRouter();

  const editContent: editElementTypes[] = [
    {
      title: "Username",
      value: username,
      action: () => router.push("/settings/(account-details)/edit-username"),
    },
    {
      title: "Email",
      value: userEmail,
      action: () => router.push("/settings/(account-details)/edit-email"),
    },
    {
      title: "Phone number",
      value: phoneNumber,
      action: () => router.push("/settings/(account-details)/edit-phone"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "",
        }}
      />
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <ScrollView style={styles.scrollViewStyles}>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: 5,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              gap: 5,
              alignItems: "center",
            }}
          >
            {profilePhoto ? (
              <View
                style={{
                  padding: 2.5,
                  borderRadius: 300,
                  borderWidth: 5,
                  borderColor: appColors.primaryColor,
                }}
              >
                <Image
                  source={{ uri: profilePhoto }}
                  style={styles.profilePhotoStyle}
                />
              </View>
            ) : (
              <TouchableOpacity
                style={styles.profilePhotoStyle}
                onPress={() => setVisible(true)}
              >
                <MaterialIcons
                  name="person"
                  size={96}
                  color={appColors.surfaceContainerHighest}
                />
              </TouchableOpacity>
            )}
            <IconButton
              icon={
                <>
                  <MaterialCommunityIcons
                    name="camera"
                    size={24}
                    color={appColors.onPrimaryContainerColor}
                  />
                </>
              }
              bgColor={appColors.primaryContainerColor}
              btnAction={() => setVisible(true)}
              appStyles={{
                elevation: 4,
                position: "absolute",
                bottom: 0,
                right: 0,
              }}
            />
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 40 }}>
          {editContent.map((values, index) => (
            <AccountEditComponent key={index} {...values} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
  scrollViewStyles: {
    width: width,
    paddingHorizontal: 16,
  },
  profilePhotoStyle: {
    width: 200,
    height: 200,
    borderRadius: 300,
    backgroundColor: appColors.surfaceDimColor,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  modalButtonStyles: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "100%",
    padding: 10,
  },
  modalControllerStyles: {
    width: 50,
    height: 5,
    backgroundColor: appColors.outline,
    borderRadius: 10,
  },
});
