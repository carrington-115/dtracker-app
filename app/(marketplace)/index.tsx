import { ActionButton, ExchangeElement, PickupButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { exchangeElementProps, pickupButtonProps } from "@/constants/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import {
  setItemName,
  setItemSize,
  setTrashType,
  setPriceControl,
  setLocation,
} from "@/redux/features/storeSlice";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const [agentElement, setAgentElement] = useState<exchangeElementProps | null>(
    null
  );
  const dispatch = useDispatch();

  const pickupOptions: pickupButtonProps[] = [
    {
      icon: (
        <MaterialIcons
          name="access-time"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Immediate pickup",
      onPress: () => router.navigate("../(pickups)/immediate"),
    },
    {
      icon: (
        <MaterialCommunityIcons
          name="book-multiple-outline"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Reserve pickup",
      onPress: () => router.navigate("../(pickups)/reserve"),
    },
    {
      icon: (
        <FontAwesome
          name="recycle"
          size={48}
          color={appColors.onPrimaryContainerColor}
        />
      ),
      name: "Request exchange",
      onPress: () =>
        router.navigate("/(marketplace)/store/create-exchange-offer"),
    },
  ];

  const goToExchangeElement = () => {
    if (agentElement) {
      dispatch(setItemName(agentElement.title));
      dispatch(setItemSize(agentElement.size));
      dispatch(setTrashType(agentElement.wasteType));
      dispatch(setPriceControl(agentElement.price));
      dispatch(setLocation(agentElement.storeLocation));
      router.navigate("./store/agent-exchange");
    }
  };

  useEffect(() => {
    setAgentElement(null);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor={appColors.surfaceContainerLowest}
      />
      <ScrollView style={styles.scrollContainerStyles}>
        <View style={styles.homeTitleStyle}>
          <Text
            style={{
              ...textFontStyles.headlineSmallMedium,
              color: appColors.onSurface,
              textAlign: "center",
            }}
          >
            Trash Management Options
          </Text>
          <View style={styles.actionStyles}>
            {pickupOptions.map((option, index) => (
              <PickupButton key={index} {...option} />
            ))}
          </View>
        </View>

        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 20,
          }}
        >
          <ActionButton
            title="Create your business profile"
            context="Create your business profile to start sending exchange alerts."
            action={() => router.push("../navigation/business_location")}
          />
        </View>
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 16,
          }}
        >
          {agentElement && (
            <ExchangeElement {...agentElement} action={goToExchangeElement} />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: appColors.surfaceBright,
    flex: 1,
  },
  homeTitleStyle: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  actionStyles: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 16,
    gap: 13.5,
  },
  scrollContainerStyles: {
    width: width,
  },
});
