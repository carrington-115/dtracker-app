import { ExchangeElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { exchangeElementProps } from "@/constants/types";
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

  const exchangeOffers: exchangeElementProps[] = [
    {
      id: 1,
      title: "Plastic bottles",
      wasteType: "plastics",
      size: 5,
      storeLocation: { latitude: 5, longitude: -50 },
      owner: false,
      price: 200,
    },
    {
      id: 2,
      title: "Glass jars",
      wasteType: "glass",
      size: 3,
      storeLocation: { latitude: 10, longitude: 20 },
      owner: false,
      price: 150,
    },
    {
      id: 3,
      title: "Cardboard boxes",
      wasteType: "papers",
      size: 10,
      storeLocation: { latitude: 15, longitude: 25 },
      owner: false,
      price: 100,
    },
    {
      id: 4,
      title: "Metal cans",
      wasteType: "metals",
      size: 7,
      storeLocation: { latitude: 5, longitude: 10 },
      owner: false,
      price: 250,
    },
    {
      id: 5,
      title: "Electronic waste",
      wasteType: "others",
      size: 2,
      storeLocation: { latitude: 30, longitude: 40 },
      owner: false,
      price: 300,
    },
  ];

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
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceContainerLow}
        translucent
      />
      <Header />
      <ScrollView style={styles.scrollViewStyles}>
        <Text
          style={{ ...textFontStyles.titleMediumRegular, marginVertical: 20 }}
        >
          Store offers
        </Text>
        <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
          {exchangeOffers.map((items) => (
            <ExchangeElement
              action={() =>
                router.navigate({
                  pathname: "/(agent)/store/[id]",
                  params: { id: items?.id! },
                })
              }
              key={items?.id}
              {...items}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  const router = useRouter();
  return (
    <Appbar.Header
      statusBarHeight={0}
      style={{
        backgroundColor: appColors.surfaceContainerLow,
        borderBottomWidth: 0.2,
        borderColor: appColors.outlineVariant,
      }}
    >
      <Appbar.Content
        title="Greenstore"
        titleStyle={{ ...textFontStyles.titleLargeMedium }}
      />
      <Appbar.Action
        icon={"recycle"}
        onPress={() => router.navigate("/exchange")}
      />
      <Appbar.Action
        icon={"cog-outline"}
        onPress={() => router.navigate("/settings")}
      />
    </Appbar.Header>
  );
};

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
