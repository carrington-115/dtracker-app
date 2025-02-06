import { BottomSheetModal, IconButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Pressable } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
import { Camera as AppCamera } from "@/components";
import { setProfilePhotoUrl } from "@/redux/features/profileSlice";
import { ActivityIndicator } from "react-native-paper";
import * as WebBrowser from "expo-web-browser";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [userEmail, setUserEmail] = useState<string>("example@email.com");
  const [username, setUsername] = useState<string>("John Doe Nde");
  const [profilePhoto, setProfilePhoto] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [photoFromDevice, setPhotoFromDevice] = useState<boolean>(false);

  // redux utitlies
  const dispatch = useDispatch();
  const profile = useSelector((state: any) => state.profile);

  // bottom sheet modal utilities
  const [visible, setVisible] = useState<boolean>(false);
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);

  // routing
  const router = useRouter();

  // upload image function
  const handleUploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [2, 2],
      quality: 1,
    });
    if (!result.canceled) {
      dispatch(setProfilePhotoUrl(result.assets[0].uri));
      setVisible(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (profile.profilePhotoUrl) {
      setProfilePhoto(profile.profilePhotoUrl.photo);
    }
  }, [profile]);

  if (loading) {
    return (
      <SafeAreaView
        style={{
          ...styles.container,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <ActivityIndicator size={48} color={appColors.primaryColor} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: "#F2F2F2",
          },
        }}
      />
      <AppCamera
        visible={cameraVisible}
        onClose={() => setCameraVisible(false)}
        closeModalAction={() => setVisible(false)}
        imageType={"profile"}
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
          <View
            style={{ flexDirection: "column", gap: 5, alignItems: "center" }}
          >
            <Text
              style={{
                ...textFontStyles.headlineLargeBold,
                color: appColors.onSurface,
              }}
            >
              {username}
            </Text>
            <Text
              style={{
                ...textFontStyles.bodyLargeRegular,
                color: appColors.onSurface,
              }}
            >
              {userEmail}
            </Text>
          </View>
        </View>
        <View style={styles.bottomLinkContainerStyles}>
          {[
            { name: "Account", link: "/settings/account" },
            { name: "Language", link: "/settings/lang" },
            { name: "help", link: "/settings/help", goTo: true },
            { name: "About", link: "/settings/about", goTo: true },
          ].map((item: any, index) => (
            <Pressable
              style={styles.bottomLinkStyles}
              key={index}
              onPress={() => router.push(item.link)}
            >
              <Text
                style={{
                  ...textFontStyles.bodyLargeRegular,
                  color: appColors.onSurface,
                  textDecorationLine: item?.goTo ? "underline" : "none",
                }}
              >
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
      <BottomSheetModal
        visible={visible}
        setVisible={setVisible}
        initialHeight={0.5}
        maxHeight={0.2}
        minHieght={0.1}
        collapseHeight={0.15}
      >
        <Pressable style={styles.modalControllerStyles} />
        <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
          <Pressable
            style={styles.modalButtonStyles}
            onPress={() => setCameraVisible(true)}
          >
            <MaterialIcons
              name="photo-camera"
              size={24}
              color={appColors.onSurface}
            />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>Camera</Text>
          </Pressable>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  bottomLinkContainerStyles: {
    width: "100%",
    flexDirection: "column",
    marginTop: 50,
    backgroundColor: appColors.surfaceContainerLow,
    alignItems: "flex-start",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: appColors.surfaceContainerHighest,
  },
  bottomLinkStyles: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: appColors.surfaceContainerHighest,
  },
});
