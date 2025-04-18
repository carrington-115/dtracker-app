import { NoElementOnPage } from "@/components/organisms/NoElementOnPage";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, StatusBar, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={appColors.surfaceContainerLow} />
      <Appbar.Header
        statusBarHeight={0}
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.2,
          borderColor: appColors.outlineVariant,
        }}
      >
        <Appbar.Content
          title="Notifications"
          titleStyle={{
            ...textFontStyles.titleLargeMedium,
          }}
        />
        <Appbar.Action
          icon="cog-outline"
          onPress={() => router.push("/settings")}
        />
      </Appbar.Header>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "center",
          paddingHorizontal: 50,
          marginTop: height / 3,
        }}
      >
        <NoElementOnPage
          title="No notifications"
          message="You're all caught up! Stay tuned for important updates and alerts"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
});
