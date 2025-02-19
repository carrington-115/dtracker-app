import {
  BottomButton,
  BottomSheetModal,
  ModalImageviewer,
  StoreImageComponent,
  ViewElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
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

  // item details
  const itemName: string = useSelector((state: any) => state.store.itemName);
  const category: string = useSelector((state: any) => state.store.trashType);
  const itemWeight: string = useSelector((state: any) => state.store.itemSize);
  const priceControl: "default" | "negotiate" | "free" = useSelector(
    (state: any) => state.store.priceControl
  );
  const priceAmount: number = useSelector(
    (state: any) => state.store.priceAmount
  );

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
        <View style={styles.detailsContainerStyles}>
          <View style={{ width: "100%" }}>
            <Text style={{ ...textFontStyles.titleLargeBold }}>{itemName}</Text>
          </View>
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
                  {category}
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
                  {itemWeight}
                </Text>
              </View>
            }
          />
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
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Text style={{ ...textFontStyles.bodyMediumRegular }}>
                  {priceControl === "default" ? "Fixed price" : priceControl}
                </Text>
                {priceControl === "default" && (
                  <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                    {priceAmount} XAF
                  </Text>
                )}
              </View>
            }
          />
          <View style={{ width: "100%", marginVertical: 20 }}>
            <BottomButton name="Add to Store" onPressAction={() => {}} />
          </View>
        </View>
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
  detailsContainerStyles: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
});
