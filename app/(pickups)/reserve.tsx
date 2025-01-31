import React from "react";
import { View, Text, StatusBar, StyleSheet, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { SizeDropDown, TextInputElement } from "@/components";

export default function componentName() {
  const router = useRouter();
  const [trashSize, setTrashSize] = React.useState<string>("");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={appColors.surfaceBright}
      />
      <Appbar.Header
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          backgroundColor: "rgba(242, 242, 242, 0.40)",
          borderBottomWidth: 0.5,
          borderBottomColor: appColors.outline,
        }}
      >
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Pickup reservation" />
      </Appbar.Header>
      <View style={styles.formContainer}>
        <View style={styles.sectionOneStyle}>
          <Text
            style={{
              ...textFontStyles.bodyLargeRegular,
              color: appColors.onSurface,
            }}
          >
            Expected trash size
          </Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: "45%" }}>
              <TextInputElement
                placeholder="Size"
                value={trashSize}
                onChangeValue={setTrashSize}
                keyboardType="default"
                type="single-line"
                required
              />
            </View>
            <View style={{ width: "45%" }}>
              <SizeDropDown />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
  },
  formContainer: {
    flexDirection: "column",
    gap: 20,
    marginTop: 70,
    width: width,
    paddingHorizontal: 16,
  },
  sectionOneStyle: {
    gap: 10,
    paddingBottom: 12,
  },
});
