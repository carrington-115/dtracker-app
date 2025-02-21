import { StoreItemComponent } from "@/components";
import appColors from "@/constants/colors";
import { storeItemProps } from "@/constants/types";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { ActivityIndicator, Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  // use tanstack query when loading the data
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  const itemTestProps: storeItemProps = {
    name: "Metal can bottle",
    image: require("@/assets/images/can-bottle.png"),
    labels: {
      type: "Can",
      size: "500ml",
    },
    price: 2000,
    id: "1",
    pressAction: () =>
      router.navigate({
        pathname: "/(user)/store/[id]",
        params: { id: Number(itemTestProps.id) },
      }),
    addButtonAction: () => {},
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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
      <StatusBar barStyle="dark-content" backgroundColor={"transparent"} />
      <Appbar.Header
        statusBarHeight={10}
        style={{ backgroundColor: "#F2F2F266" }}
      >
        <Appbar.Content title="Green Store" />
        <Appbar.Action
          icon={"store-plus-outline"}
          onPress={() => router.navigate("/(indirect)/marketplace/add-item")}
        />
        <Appbar.Action
          icon={"cog-outline"}
          onPress={() => router.navigate("/settings")}
        />
      </Appbar.Header>
      <ScrollView style={styles.scrollViewStyles}>
        <View style={styles.innerGridViewStyles}>
          <StoreItemComponent {...itemTestProps} />
          <StoreItemComponent {...itemTestProps} />
          <StoreItemComponent {...itemTestProps} />
          <StoreItemComponent {...itemTestProps} />
          <StoreItemComponent {...itemTestProps} />
          <StoreItemComponent {...itemTestProps} />
          <StoreItemComponent {...itemTestProps} />
          <StoreItemComponent {...itemTestProps} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    width: width,
  },
  scrollViewStyles: {
    width: width,
    paddingHorizontal: 16,
  },
  innerGridViewStyles: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    justifyContent: "space-between",
  },
});
