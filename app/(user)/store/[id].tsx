import {
  BottomButton,
  ModalImageviewer,
  StoreImageComponent,
  ViewElement,
} from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { storeItemProps } from "@/constants/types";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const storeData = [
  {
    name: "Metal can bottle",
    image: require("@/assets/images/can-bottle.png"),
    labels: {
      type: "Can",
      size: "500ml",
    },
    price: 2000,
    id: "1",
    images: [require("@/assets/images/can-bottle.png")],
  },
  {
    name: "Plastic bottle",
    image: require("@/assets/images/plastic-bottle.png"),
    labels: {
      type: "Bottle",
      size: "1L",
    },
    price: 1000,
    id: "2",
    images: [require("@/assets/images/plastic-bottle.png")],
  },
];

const { width } = Dimensions.get("window");

export default function componentName() {
  // use tanstack query when loading the data
  // current testing with react state

  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useLocalSearchParams();
  const [imageViewerModal, setImageViewerModal] = useState<boolean>(false);

  // item details
  const [itemName, setItemName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [itemWeight, setItemWeight] = useState<string>("");
  const [priceControl, setPriceControl] = useState<
    "default" | "negotiate" | "free"
  >("default");
  const [priceAmount, setPriceAmount] = useState<number>(0);

  const router = useRouter();
  let images: any;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (id) {
      const item: storeItemProps | any = storeData.find(
        (item) => item.id === id
      );
      setItemName(item.name);
      setCategory(item.labels.type);
      setItemWeight(item.labels.size);
      setPriceAmount(item.price);
      setPriceControl("default");
    }
  }, [loading, id]);

  if (loading) {
    return (
      <SafeAreaView
        style={{
          ...styles.container,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={appColors.primaryColor} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "transparent", height: 0 }}>
        <Appbar.BackAction onPress={() => router.back()} />
      </Appbar.Header>
      <ScrollView style={styles.scrollViewStyles}>
        <View style={{ width: "100%", alignItems: "center", marginTop: 20 }}>
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
          <View style={{ width: "100%", marginVertical: 20, marginBottom: 40 }}>
            <BottomButton name="Add to Cart" onPressAction={() => {}} />
          </View>
        </View>
      </ScrollView>
      {/* <ModalImageviewer
        images={images}
        visible={imageViewerModal}
        closeModal={() => setImageViewerModal(false)}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  scrollViewStyles: {
    padding: 16,
    width: width,
  },
  detailsContainerStyles: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
});
