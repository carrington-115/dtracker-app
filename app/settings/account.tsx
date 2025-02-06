import {
  BottomSheetModal,
  IconButton,
  Camera as AppCamera,
  ActiveButton,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const [userEmail, setUserEmail] = useState<string>("example@email.com");
  const [username, setUsername] = useState<string>("John Doe Nde");
  const [profilePhoto, setProfilePhoto] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("Phone number");
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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  if (loading) {
    return (
      <SafeAreaView
        style={{
          width: width,
          height: height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
        />
        <StatusBar barStyle="dark-content" backgroundColor="transparent" />
        <ActivityIndicator size={48} color={appColors.primaryColor} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
      />
      <AppCamera
        visible={cameraVisible}
        onClose={() => setCameraVisible(false)}
        closeModalAction={() => setVisible(false)}
        imageType={"profile"}
      />
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
          <Pressable
            onPress={() => router.navigate("/settings/edit-account")}
            style={({ pressed }) => [
              {
                width: "100%",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 20,
                backgroundColor: pressed
                  ? appColors.primaryContainerColor
                  : "transparent",
                borderBottomWidth: 0.5,
                borderBottomColor: appColors.surfaceContainerHighest,
              },
            ]}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                gap: 50,
              }}
            >
              <MaterialIcons
                name="edit"
                size={24}
                color={appColors.onPrimaryContainerColor}
              />
              <Text
                style={{
                  ...textFontStyles.titleLargeRegular,
                  color: appColors.onPrimaryContainerColor,
                }}
              >
                Edit Account
              </Text>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            gap: 30,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Pressable
              style={{
                width: "100%",
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: appColors.surfaceContainerHighest,
              }}
            >
              <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                {username}
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: "100%",
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: appColors.surfaceContainerHighest,
              }}
            >
              <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                {userEmail}
              </Text>
            </Pressable>
            <Pressable
              style={{
                width: "100%",
                paddingHorizontal: 20,
                paddingVertical: 12,
                borderBottomWidth: 1,
                borderBottomColor: appColors.surfaceContainerHighest,
              }}
            >
              <Text style={{ ...textFontStyles.bodyLargeRegular }}>
                {phoneNumber}
              </Text>
            </Pressable>
          </View>
          <ActiveButton
            name="Log out"
            icon={
              <>
                <MaterialIcons
                  name="logout"
                  size={24}
                  color={appColors.onErrorContainerColor}
                />
              </>
            }
            onPressAction={() => {}}
            bgColor={"#fff1efad"}
            color={appColors.onErrorContainerColor}
            focusedColor={appColors.errorContainerColor}
          />
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
});
