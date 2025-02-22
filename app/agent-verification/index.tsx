import { BottomButton, VerificationElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { verificationElementProps } from "@/constants/types";
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
  const [verificationStepStatus, setVerificationStepStatus] = React.useState<
    boolean[]
  >([false, false, false]);
  const router = useRouter();
  const [buttonName, setButtonName] =
    React.useState<string>("Start Verification");

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

  const handleVerificationButton = () => {
    if (verificationStepStatus[0]) {
      router.push("/agent-verification/momo-payment");
    } else if (verificationStepStatus[1]) {
      router.push("/agent-verification/photo-verification");
    } else if (verificationStepStatus[2]) {
      setButtonName("Start earning");
    } else {
      router.push("/agent-verification/identification");
    }
  };

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
          <BottomButton
            name={buttonName}
            onPressAction={handleVerificationButton}
          />
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
