import { BottomButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { textInputElementProps } from "@/constants/types";
import { useRouter } from "expo-router";
import React, { useState } from "react";
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
  const [size, setSize] = useState<number>(0);
  const [amount, setAmount] = useState<number>(0);

  const handleSubmitForm = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor={appColors.surfaceBright}
        />
        <Appbar.Header
          statusBarHeight={0}
          style={{ backgroundColor: appColors.surfaceBright }}
        >
          <Appbar.BackAction onPress={() => router.back()} />
        </Appbar.Header>
      </>
      <ScrollView style={{ width: width, paddingHorizontal: 16 }}>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            gap: 20,
            marginBottom: 450,
          }}
        >
          <InputElementStructure
            label="Size"
            inputProps={{
              placeholder: "Size",
              keyboardType: "numeric",
              value: size,
              onChangeValue: setSize,
              required: true,
              type: "single-line",
            }}
          />
          <InputElementStructure
            label="Amount paid"
            inputProps={{
              placeholder: "XAF",
              keyboardType: "numeric",
              value: amount,
              onChangeValue: setAmount,
              required: true,
              type: "single-line",
            }}
          />
        </View>
        <BottomButton name="Create code" onPressAction={handleSubmitForm} />
      </ScrollView>
    </SafeAreaView>
  );
}

const InputElementStructure = ({
  label,
  inputProps,
}: {
  label: string;
  inputProps: textInputElementProps;
}) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "column",
        gap: 10,
      }}
    >
      <Text
        style={{
          ...textFontStyles.bodyLargeRegular,
          color: appColors.onSurface,
        }}
      >
        {label}
      </Text>
      <TextInputElement {...inputProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: appColors.surfaceBright,
  },
});
