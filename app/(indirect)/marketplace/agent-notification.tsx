import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import appColors from "@/constants/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { textFontStyles } from "@/constants/fonts";
import { NoElementOnPage } from "@/components/organisms/NoElementOnPage";

const { height } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.25,
          borderBottomColor: appColors.outlineVariant,
        }}
        statusBarHeight={0}
      >
        <StatusBar
          barStyle="dark-content"
          backgroundColor={appColors.surfaceContainerLow}
        />
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title="Notification"
          titleStyle={{
            ...textFontStyles.titleLargeMedium,
          }}
        />
        <Appbar.Action
          icon="cog-outline"
          onPress={() => router.navigate("/settings")}
        />
      </Appbar.Header>
      <View
        style={{
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
    backgroundColor: appColors.surfaceBright,
  },
});
