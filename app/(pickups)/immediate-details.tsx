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
import { ImageViewer, ViewElement } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [images, setImages] = useState<String[]>([]);
  const router = useRouter();
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
