import { ModalImageviewer, StoreImageComponent } from "@/components";
import appColors from "@/constants/colors";
import { storeItemProps } from "@/constants/types";
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
  const [itemData, setItemData] = useState<storeItemProps | null>(null);
  const [imageViewerModal, setImageViewerModal] = useState<boolean>(false);

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
      setItemData(item);
    }
  }, [loading]);

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
        <View style={{ width: "100%", alignItems: "center" }}>
          <StoreImageComponent
            action={() => setImageViewerModal(true)}
            type="image-view"
            images={images}
          />
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
});
