import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { userVerificationElementProps } from "@/constants/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text } from "react-native";
import { BottomButton, IconButton } from "..";
import MapViewPinInput from "../atoms/MapPinInput";

const UserVerificationElement = ({
  code,
  qrCode,
  user,
  agent,
}: userVerificationElementProps) => {
  return (
    <>
      {user === "agent" ? (
        <View
          style={{
            paddingHorizontal: 16,
            paddingVertical: 30,
            borderRadius: 20,
            backgroundColor: appColors.surfaceContainerLow,
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>Verification Pin</Text>
            <IconButton
              icon={
                <>
                  <MaterialIcons
                    name="photo-camera"
                    size={24}
                    color={appColors.onPrimaryContainerColor}
                  />
                </>
              }
              pressedColor={appColors.primaryContainerColor}
              btnAction={agent.scanCodeAction}
              bgColor="rgba(215, 236, 227, 0.5)"
            />
          </View>
          <MapViewPinInput error={agent.inputError} setOtp={agent.setPinCode} />
          <BottomButton name="Verify" onPressAction={agent.submitCode} />
        </View>
      ) : (
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            gap: 20,
            backgroundColor: appColors.surfaceContainerLow,
            borderRadius: 20,
          }}
        >
          <Text>Verification Pin</Text>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {code.split("").map((text, index) => (
              <Text
                key={index}
                style={{
                  ...textFontStyles.displayLargeBold,
                  color: appColors.onSurface,
                }}
              >
                {text}
              </Text>
            ))}
          </View>
          <View
            style={{
              width: "100%",
              height: 200,
              padding: 20,
            }}
          >
            <Image source={qrCode} style={{ width: "100%", height: "100%" }} />
          </View>
        </View>
      )}
    </>
  );
};

export default UserVerificationElement;
