import { ActiveButton, TextInputElement } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Appbar } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [value, setValue] = React.useState<string>("");
  const [error, setError] = React.useState<boolean>(false);

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header
        style={{ backgroundColor: appColors.surfaceBright }}
        statusBarHeight={0}
      >
        <Appbar.BackAction onPress={() => router.back()} />
      </Appbar.Header>
      <View
        style={{
          width: width,
          flexDirection: "column",
          gap: 40,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            width: "100%",
            gap: 8,
            flexDirection: "column",
          }}
        >
          <Text style={{ ...textFontStyles.titleLargeBold }}>
            Mobile number payment
          </Text>
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>
            Enter your mobile money number
          </Text>
        </View>
        <TextInputElement
          keyboardType="default"
          value={value}
          onChangeValue={setValue}
          placeholder="Mobile money number"
          required
          error={error}
          errorMessage="This field is required"
          type="single-line"
        />
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
            name="Verify number"
            onPressAction={() =>
              router.push("/agent-verification/pincode-verification")
            }
            bgColor={appColors.primaryColor}
            color={appColors.surfaceBright}
            focusedColor={appColors.primaryColor}
          />
          <ActiveButton
            name="Skip"
            onPressAction={() =>
              router.push("/agent-verification/photo-verification")
            }
            bgColor={"transparent"}
            color={appColors.onSurface}
            focusedColor={appColors.surfaceContainer}
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
