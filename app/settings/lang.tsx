import { BottomButton, DropDownElement } from "@/components";
import appColors from "@/constants/colors";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [lang, setLang] = React.useState<string>("en");
  const handleSave = () => {
    // do something
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <DropDownElement
          dropDownItems={[
            { label: "English", value: "en" },
            { label: "French", value: "fr" },
          ]}
          dropDownValue={lang}
          onValueChange={setLang}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
          right: "5%",
        }}
      >
        <BottomButton name="Save" onPressAction={handleSave} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    width: width,
    paddingHorizontal: 16,
    position: "relative",
  },
});
