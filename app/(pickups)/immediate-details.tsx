import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";
import appColors from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { BottomButton, ImageViewer, ViewElement } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [images, setImages] = useState<String[]>([]);
  const router = useRouter();

  /*
    program parameters
    - price
    - pickup type and amount
    - trash category
    - weight
    - total
  */

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
        translucent
      />
      <Appbar.Header
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "transparent",
          zIndex: 20,
        }}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Immediate Pickup" />
      </Appbar.Header>
      <ScrollView
        style={{
          marginTop: 50,
        }}
      >
        <Image
          source={require("@/assets/images/icon.png")}
          style={{
            width: width,
            height: 300,
          }}
        />
        {/* <ImageViewer images={[]} /> */}
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            paddingHorizontal: 16,
            gap: 10,
          }}
        >
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
                  Immediate pickup
                </Text>
                <Text style={{ ...textFontStyles.bodyLargeMedium }}>
                  2 bags/pickup
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
                  Organic +
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
                  2 bags
                </Text>
              </View>
            }
          />
        </View>
        <View
          style={{
            width: "100%",
            paddingHorizontal: 45,
            paddingVertical: 20,
            marginTop: 10,
            gap: 30,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                ...textFontStyles.bodySmallRegular,
              }}
            >
              Total
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 5 }}
            >
              <Text
                style={{
                  ...textFontStyles.bodySmallRegular,
                  color: appColors.onSurface,
                }}
              >
                XAF
              </Text>
              <Text style={{ ...textFontStyles.bodyLargeBold }}>1000</Text>
            </View>
          </View>
          <BottomButton name="Complete now" onPressAction={() => {}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
