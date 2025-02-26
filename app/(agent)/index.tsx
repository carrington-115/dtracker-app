import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  StatusBar,
} from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
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
        statusBarHeight={0}
        style={{
          backgroundColor: appColors.surfaceContainerLow,
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outline,
        }}
      >
        <Appbar.Content
          title="DTRACKER"
          titleStyle={{ ...textFontStyles.headlineMediumBold }}
        />
        <Appbar.Action icon="magnify" onPress={() => {}} />
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
