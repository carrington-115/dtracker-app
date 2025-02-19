import {
  BottomSheetModal,
  ModalImageviewer,
  StoreImageComponent,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Pressable,
} from "react-native";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);
  const [imageViewerModal, setImageViewerModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const images = useSelector((state: any) => state.immediate.trashImages);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  });

  if (loading) {
    return (
      <>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: appColors.surfaceBright,
            width: width,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" color={appColors.primaryColor} />
        </SafeAreaView>
      </>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "transparent", height: 58 }}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="" />
        <Appbar.Action
          icon="dots-vertical"
          onPress={() => setBottomSheetVisible(true)}
        />
      </Appbar.Header>
      <ScrollView style={styles.scrollViewStyles}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <StoreImageComponent
            action={() => setImageViewerModal(true)}
            type="image-view"
            images={images}
          />
        </View>
        <Text>Hello world</Text>
      </ScrollView>
      <BottomSheetModal
        visible={bottomSheetVisible}
        setVisible={setBottomSheetVisible}
        initialHeight={0.35}
        maxHeight={0.4}
        minHieght={0.2}
        collapseHeight={0.15}
      >
        <Pressable style={styles.modalControllerStyles} />
        <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
          <Pressable
            style={styles.modalButtonStyles}
            onPress={() => router.back()}
          >
            <MaterialIcons name="edit" size={24} color={appColors.onSurface} />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Edit item
            </Text>
          </Pressable>
        </View>
      </BottomSheetModal>
      <ModalImageviewer
        images={images}
        visible={imageViewerModal}
        closeModal={() => setImageViewerModal(false)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceBright,
    width: width,
    flex: 1,
  },
  scrollViewStyles: {
    paddingHorizontal: 16,
    width: width,
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
