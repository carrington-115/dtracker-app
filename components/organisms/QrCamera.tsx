import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import { Camera, CameraView } from "expo-camera";
import appColors from "@/constants/colors";
import { Appbar } from "react-native-paper";
import { QrCameraProps } from "@/constants/types";

const { width, height } = Dimensions.get("window");

export default function componentName({
  onScannedAction,
  onBackButtonAction,
  setShowCamera,
}: QrCameraProps) {
  const [hasPermissions, setHasPermissions] = useState<boolean>(false);
  const [scanned, setScanned] = useState<boolean>(false);
  const cameraRef = useRef<CameraView>(null);

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermissions(status === "granted");
    };

    getBarCodeScannerPermissions();
  }, []);

  if (!hasPermissions) {
    return (
      <View style={styles.container}>
        <Text>No permissions</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={onBackButtonAction} />
      </Appbar.Header>
      <View
        style={{
          width: "100%",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CameraView
          style={styles.cameraStyles}
          ref={cameraRef}
          onBarcodeScanned={scanned ? undefined : onScannedAction}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    width: width,
    height: height,
    position: "absolute",
    zIndex: 1000,
  },
  cameraStyles: {
    width: "82%",
    height: 400,
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 100,
  },
});
