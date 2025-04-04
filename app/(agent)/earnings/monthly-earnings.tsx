import { Chart } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { BarChartElementProps } from "@/constants/types";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();

  // there need to be an algorithm to calculate the height of the bars
  const barsData: BarChartElementProps[] = [
    { height: 30, day: "M" },
    { height: 60, day: "T" },
    { height: 40, day: "W" },
    { height: 80, day: "T" },
    { height: 60, day: "F" },
    { height: 50, day: "SA" },
    { height: 10, day: "S" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceContainerLow}
      />
      <Appbar.Header
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outlineVariant,
        }}
        statusBarHeight={0}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content
          title="Monthly Earnings"
          titleStyle={{
            ...textFontStyles.titleLargeMedium,
          }}
        />
      </Appbar.Header>
      <ScrollView style={{ width: "100%" }}>
        <View style={{ width: "100%", paddingHorizontal: 20, marginTop: 40 }}>
          <Chart
            bars={barsData}
            date={{
              month: "Jun",
              initialDate: 1,
              finalDate: 7,
            }}
            rightAction={() => {}}
            leftAction={() => {}}
          />
        </View>
        <View style={{ width: "100%", flexDirection: "column", marginTop: 20 }}>
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              marginLeft: 16,
              color: appColors.onSurfaceVariant,
            }}
          >
            Yesterday
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
