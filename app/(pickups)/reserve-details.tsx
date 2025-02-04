import appColors from "@/constants/colors";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Pressable,
  Text,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import {
  BottomSheetModal,
  Camera as AppCamera,
  ViewElement,
  ImageViewer,
  IconButton,
  ModalImageviewer,
  BottomButton,
} from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { addTrashImage } from "@/redux/features/trashImageSlice";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [visible, setVisible] = useState<boolean>(false);
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);
  const trashImagesFromState = useSelector(
    (state: any) => state.immediate.trashImages
  );
  const [loading, setLoading] = useState<boolean>(true);
  const trashDetails = useSelector((state: any) => state.trashDetail);
  const [openImageViewer, setOpenImageViewer] = useState<boolean>(false);
  const [uploadedImage, setUploadedImage] = useState<boolean>(false);

  const router = useRouter();
  const dispatch = useDispatch();

  const handleUploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      dispatch(addTrashImage(result.assets[0].uri));
      setUploadedImage(true);
      setVisible(false);
    }
  };

  const handleOpenImageViewer = () => {
    setOpenImageViewer(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    if (trashImagesFromState.length > 0) {
      setUploadedImage(true);
    }
  }, [loading, trashImagesFromState]);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={appColors.surfaceBright}
          translucent
        />
        <View
          style={{
            width: width,
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator color={appColors.primaryColor} size={48} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
        }}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="" />
        <Appbar.Action icon="camera" onPress={() => setVisible(true)} />
      </Appbar.Header>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
        translucent
      />
      <ScrollView style={styles.scrollViewStyles}>
        {uploadedImage ? (
          <View style={styles.ImageSection}>
            <ImageViewer images={trashImagesFromState} />
            <IconButton
              icon={
                <MaterialCommunityIcons
                  name={"arrow-expand"}
                  size={16}
                  color={appColors.surfaceBright}
                />
              }
              bgColor={appColors.onSurface}
              btnAction={handleOpenImageViewer}
              appStyles={{
                elevation: 5,
                position: "absolute",
                bottom: 21,
                left: 16,
              }}
            />
          </View>
        ) : (
          <></>
        )}
        <View style={{ flexDirection: "column", gap: 20 }}>
          <ViewElement
            icon={
              <>
                <MaterialIcons
                  name="sell"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text
                  style={{
                    ...textFontStyles.titleMediumRegular,
                    color: appColors.onSurface,
                  }}
                >
                  XAF
                </Text>
                <Text style={{ ...textFontStyles.headlineMediumMedium }}>
                  1000
                </Text>
              </View>
            }
          />
          <ViewElement
            icon={
              <>
                <MaterialIcons
                  name="bike-scooter"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 5,
                }}
              >
                <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                  {trashDetails?.pickupType}
                </Text>
                <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                  <>{trashDetails.trashWeight}</> bags/pickup
                </Text>
              </View>
            }
          />
          <ViewElement
            icon={
              <>
                <MaterialIcons
                  name="info-outline"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text
                  style={{
                    ...textFontStyles.bodyLargeMedium,
                    color: appColors.onSurface,
                  }}
                >
                  {trashDetails.trashType}
                </Text>
              </View>
            }
          />
          <ViewElement
            icon={
              <>
                <MaterialCommunityIcons
                  name="weight"
                  size={24}
                  color={appColors.onSurface}
                />
              </>
            }
            details={
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
              >
                <Text
                  style={{
                    ...textFontStyles.bodyLargeMedium,
                    color: appColors.onSurface,
                  }}
                >
                  <>{trashDetails.trashWeight}</> bags
                </Text>
              </View>
            }
          />
        </View>
        <ViewElement
          icon={
            <>
              <MaterialIcons
                name="access-time-filled"
                size={24}
                color={appColors.onSurface}
              />
            </>
          }
          details={
            <View
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 5,
              }}
            >
              <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                {trashDetails?.pickupTime}
              </Text>
              <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                {trashDetails.pickupDate}
              </Text>
            </View>
          }
        />
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 40,
          }}
        >
          <BottomButton name="Complete" onPressAction={() => {}} />
        </View>
      </ScrollView>
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
          <Pressable
            style={styles.modalButtonStyles}
            onPress={handleUploadImage}
          >
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
      <AppCamera
        visible={cameraVisible}
        onClose={() => setCameraVisible(false)}
        closeModalAction={() => setVisible(false)}
      />
      <ModalImageviewer
        images={trashImagesFromState}
        visible={openImageViewer}
        closeModal={() => setOpenImageViewer(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
    width: width,
  },
  scrollViewStyles: {
    marginTop: 50,
    width: width,
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
  ImageSection: {
    height: 250,
    width: "100%",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
});
