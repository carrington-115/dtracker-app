import { BottomButton, VerificationElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { verificationElementProps } from "@/constants/types";
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
  const [verificationStepStatus, setVerificationStepStatus] = React.useState<
    boolean[]
  >([false, false, false]);
  const verificationData: verificationElementProps[] = [
    {
      title: "Identification",
      body: "Please upload you ID, passport, or driving license",
      step: 1,
      completed: verificationStepStatus[0],
      link: "/agent-verification/identification",
    },
    {
      title: "Mobile money payment",
      body: "Enter your mobile money number",
      step: 2,
      completed: verificationStepStatus[1],
      link: "/agent-verification/momo-payment",
    },
    {
      title: "Photo verification",
      body: "Take a selfie or upload a clear and recent photo of yourself",
      step: 3,
      completed: verificationStepStatus[2],
      link: "/agent-verification/photo-verification",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <Appbar.Header
        statusBarHeight={0}
        style={{ backgroundColor: appColors.surfaceBright }}
      >
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="" />
      </Appbar.Header>
      <ScrollView style={styles.scrollViewStyles}>
        <View
          style={{
            flexDirection: "column",
            gap: 8,
            marginBottom: 40,
          }}
        >
          <Text style={{ ...textFontStyles.titleLargeBold }}>
            Agent Verification
          </Text>
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>
            Please follow the steps below
          </Text>
        </View>
        <View
          style={{ flexDirection: "column", alignItems: "center", gap: 20 }}
        >
          {verificationData.map((itemData, index) => (
            <VerificationElement {...itemData} key={index} />
          ))}
        </View>
        <View style={{ width: "100%", marginTop: 200 }}>
          <BottomButton name="Start Verification" onPressAction={() => {}} />
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
  scrollViewStyles: {
    paddingHorizontal: 16,
  },
});
