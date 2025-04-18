import { ActionButton, ActiveButton, ExchangeElement } from "@/components";
import { NoElementOnPage } from "@/components/organisms/NoElementOnPage";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { exchangeElementProps } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
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

const { width, height } = Dimensions.get("window");

export default function componentName() {
  // use tanstack query when loading the data
  const [loading, setLoading] = useState<boolean>(true);
  const [exchangeOffers, setExchangeOffers] = useState<exchangeElementProps[]>(
    []
  );
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  useEffect(() => {
    setExchangeOffers([]);
  }, []);

  if (exchangeOffers.length === 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: appColors.surfaceBright,
          width: width,
        }}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor={appColors.surfaceContainerLow}
          translucent
        />
        <Header />
        <View
          style={{
            width: "100%",
            paddingHorizontal: 50,
            flexDirection: "column",
            gap: 30,
            alignItems: "center",
            marginTop: height / 8,
          }}
        >
          <Image
            source={require("@/assets/images/greenstore-no-collections.png")}
            style={{ width: 295, height: 265 }}
          />
          <NoElementOnPage
            title="No Exchange Offers"
            message="Looks like there are no exchange offers yet. When an offer is made, we will notify you here!"
          />
          <ActiveButton
            icon={
              <MaterialIcons
                name="add"
                color={appColors.onPrimaryColor}
                size={24}
              />
            }
            name="New request"
            color={appColors.onPrimaryColor}
            bgColor={appColors.primaryColor}
            onPressAction={() => {}}
            focusedColor={appColors.onPrimaryContainerColor}
          />
        </View>
      </SafeAreaView>
    );
  }

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
                  pathname: "/(marketplace)/store/[id]",
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
