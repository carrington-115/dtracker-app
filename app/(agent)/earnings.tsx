import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
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
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={"dark-content"}
        backgroundColor={appColors.surfaceContainerLow}
      />
      <Header />
      <ScrollView>
        <Text>Hello world</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const Header = () => {
  return (
    <>
      <Appbar.Header
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outline,
        }}
      >
        <Appbar.Content
          title="Earnings"
          titleStyle={{ ...textFontStyles.titleLargeMedium }}
        />
        <Appbar.Action icon="bell-outline" onPress={() => {}} />
        <Appbar.Action icon="cog-outline" onPress={() => {}} />
      </Appbar.Header>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
