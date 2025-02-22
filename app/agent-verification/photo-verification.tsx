import { ActiveButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import { Camera as AppCamera } from "@/components";

const { width } = Dimensions.get("window");

export default function componentName() {
  const agentProfileUrl = useSelector(
    (state: any) => state.agent.agentVerifyPhoto
  );
  const router = useRouter();
  const [cameraVisible, setCameraVisible] = React.useState<boolean>(false);

  const handleTakeSnapShot = () => {
    if (agentProfileUrl === "") {
      setCameraVisible(true);
    } else {
      router.push("/agent-verification");
    }
  };

  console.log("Photo: ", agentProfileUrl);

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        style={{ backgroundColor: appColors.surfaceBright }}
        statusBarHeight={0}
      >
        <Appbar.BackAction onPress={() => {}} />
      </Appbar.Header>
      <AppCamera
        visible={cameraVisible}
        onClose={() => setCameraVisible(false)}
        imageType="agent-profile"
        closeModalAction={() => {}}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "column",
          gap: 40,
          paddingHorizontal: 16,
        }}
      >
        <View style={{ width: "100%", gap: 8, flexDirection: "column" }}>
          <Text style={{ ...textFontStyles.titleLargeBold }}>
            Photo Verification
          </Text>
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>
            Take a selfie or upload a clear and recent photo of yourself
          </Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
            height: "auto",
            marginTop: 40,
          }}
        >
          <ActiveButton
            name={agentProfileUrl === "" ? "Take Snapshot" : "Complete"}
            onPressAction={handleTakeSnapShot}
            bgColor={appColors.primaryColor}
            color={appColors.surfaceBright}
            focusedColor={appColors.primaryColor}
          />
        </View>
      </View>
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
