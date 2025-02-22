import { ActiveButton, AuthButton, BottomSheetModal } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { uploadIDImage, cancelIDImage } from "@/redux/features/agentSlice";
import { Camera as AppCamera } from "@/components";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function componentName() {
  // state
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  // id state image
  const idImage = useSelector((state: any) => state.agent.agentIDLink);
  const cameraIdImage = useSelector((state: any) => state.agent.agentIDLink);

  // upload image
  const handleUploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      dispatch(uploadIDImage(result.assets[0].uri));
      setBottomSheetVisible(false);
    }
  };

  const router = useRouter();

  // useEffect(() => {
  // }, [idImage]);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        statusBarHeight={0}
        style={{ backgroundColor: appColors.surfaceBright }}
      >
        <Appbar.BackAction onPress={() => router.back()} />
      </Appbar.Header>
      <AppCamera
        visible={cameraVisible}
        onClose={() => setCameraVisible(false)}
        closeModalAction={() => setBottomSheetVisible(false)}
        imageType="agentID"
      />
      <ScrollView style={styles.scrollViewStyles}>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <Text style={{ ...textFontStyles.titleLargeBold }}>
            Identification
          </Text>
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>
            Please upload an image of your ID, Passport, or Driving licence
          </Text>
          {idImage !== "" && (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderWidth: 1,
                borderColor: appColors.outline,
                borderRadius: 10,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 20,
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    position: "relative",
                  }}
                >
                  <Image
                    source={{
                      uri: idImage,
                    }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                    }}
                  />
                  <Pressable
                    style={{
                      padding: 4,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 50,
                      backgroundColor: appColors.surfaceBright,
                      position: "absolute",
                      top: -5,
                      right: -5,
                      borderWidth: 1,
                      borderColor: appColors.outline,
                    }}
                    onPress={() => dispatch(cancelIDImage())}
                  >
                    <MaterialIcons name="close" color={"black"} size={12} />
                  </Pressable>
                </View>
                <Text>Agent ID photo</Text>
              </View>
              <Pressable
                style={{
                  padding: 10,
                  backgroundColor: appColors.surfaceContainer,
                  borderRadius: 50,
                }}
                onPress={() => setBottomSheetVisible(true)}
              >
                <MaterialCommunityIcons
                  name="pencil-outline"
                  size={24}
                  color={appColors.onSurface}
                />
              </Pressable>
            </View>
          )}

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "auto",
              height: "auto",
              marginTop: 40,
            }}
          >
            <ActiveButton
              name={idImage !== "" ? "Continue" : "Upload"}
              onPressAction={() =>
                router.push("/agent-verification/momo-payment")
              }
              bgColor={appColors.primaryColor}
              color={appColors.surfaceBright}
              focusedColor={appColors.primaryColor}
            />
          </View>
        </View>
      </ScrollView>
      <BottomSheet
        visible={bottomSheetVisible}
        setVisible={setBottomSheetVisible}
        setCameraVisible={setCameraVisible}
        handleUploadImage={handleUploadImage}
      />
    </SafeAreaView>
  );
}

const BottomSheet = ({
  visible,
  setVisible,
  setCameraVisible,
  handleUploadImage,
}: {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setCameraVisible: React.Dispatch<React.SetStateAction<boolean>>;
  handleUploadImage: () => void;
}) => {
  return (
    <BottomSheetModal
      visible={visible}
      setVisible={setVisible}
      initialHeight={0.35}
      maxHeight={0.4}
      minHieght={0.2}
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
        <Pressable style={styles.modalButtonStyles} onPress={handleUploadImage}>
          <MaterialCommunityIcons
            name="folder-multiple-image"
            size={24}
            color={appColors.onSurface}
          />
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>
            Upload from device
          </Text>
        </Pressable>
      </View>
    </BottomSheetModal>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  scrollViewStyles: {
    paddingHorizontal: 16,
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
