import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  CameraType,
  CameraView,
  useCameraPermissions,
  Camera,
} from "expo-camera";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import appColors from "@/constants/colors";
import { Image } from "react-native";
import { useDispatch } from "react-redux";
import { addTrashImage } from "@/redux/features/trashImageSlice";

const { width } = Dimensions.get("window");
const { height } = Dimensions.get("window");

export default function componentName({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  const [hasPermission, requestPermission] = useCameraPermissions();
  const [type, setType] = useState<CameraType>("back");
  const [image, setImage] = useState<any>({
    takenPhoto: false,
    photo: null,
  });
  const camRef = useRef<CameraView>(null);
  const [torchState, setTorchState] = useState(false);
  const dispatch = useDispatch();

  const handleToggleCameraFacing = () => {
    setType((prev) => (prev === "back" ? "front" : "back"));
  };

  const handleSnapImage = async () => {
    if (camRef.current) {
      const photo = await camRef.current.takePictureAsync({
        quality: 0.5,
        base64: true,
      });
      setImage((prev: any) => {
        return {
          ...prev,
          takenPhoto: true,
          photo: photo?.uri,
        };
      });
    }
  };

  const handleControlTorch = () => {
    setTorchState((prev) => !prev);
  };

  const handleBackToCamera = () => {
    setImage((prev: any) => {
      return {
        ...prev,
        takenPhoto: false,
        photo: null,
      };
    });
  };

  const handleSaveImage = () => {
    dispatch(addTrashImage(image.photo));
    onClose();
  };

  useEffect(() => {}, []);

  if (!hasPermission) {
    return (
      <>
        <Modal visible={visible} animationType="slide">
          <View style={styles.noPermissionStyle}>
            <Text>No access to camera</Text>
            <Pressable onPress={requestPermission}>
              <Text>Request Permission</Text>
            </Pressable>
            <Pressable onPress={onClose}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </>
    );
  }

  return (
    <>
      {visible && (
        <Modal style={styles.container} visible={visible} animationType="slide">
          <>
            {image.takenPhoto ? (
              <View
                style={{
                  height: height * (4 / 5),
                  width: width,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: appColors.surfaceBright,
                }}
              >
                <Image
                  source={{ uri: image.photo }}
                  style={{ width: width, height: height / 2 }}
                />
              </View>
            ) : (
              <CameraView
                style={styles.cameraViewStyle}
                ref={camRef}
                enableTorch={torchState}
              />
            )}
          </>
          <>
            <View style={styles.cameraControlPanel}>
              {image.takenPhoto ? (
                <>
                  <TouchableOpacity
                    style={{
                      ...styles.cameraControlButtonStyle,
                      backgroundColor: appColors.surfaceContainerLow,
                    }}
                    onPress={handleBackToCamera}
                  >
                    <MaterialCommunityIcons
                      name="delete"
                      size={24}
                      color={appColors.onSurface}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.cameraControlButtonStyle,
                      backgroundColor: appColors.surfaceContainerLow,
                    }}
                    onPress={handleSaveImage}
                  >
                    <MaterialCommunityIcons
                      name="check"
                      size={24}
                      color={appColors.onSurface}
                    />
                  </TouchableOpacity>
                </>
              ) : (
                <>
                  <TouchableOpacity
                    style={{
                      ...styles.cameraControlButtonStyle,
                      backgroundColor: torchState
                        ? appColors.onSurface
                        : appColors.surfaceContainerLow,
                    }}
                    onPress={handleControlTorch}
                  >
                    <MaterialCommunityIcons
                      name="lightning-bolt"
                      size={24}
                      color={
                        torchState
                          ? appColors.surfaceBright
                          : appColors.onSurface
                      }
                    />
                  </TouchableOpacity>
                  <Pressable
                    style={styles.snapButtonStyle}
                    onPress={handleSnapImage}
                  >
                    <View />
                  </Pressable>
                  <TouchableOpacity
                    style={{
                      ...styles.cameraControlButtonStyle,
                      backgroundColor: appColors.surfaceContainerLow,
                    }}
                    onPress={handleToggleCameraFacing}
                  >
                    <MaterialIcons
                      name="cameraswitch"
                      size={24}
                      color={appColors.onSurface}
                    />
                  </TouchableOpacity>
                </>
              )}
            </View>
          </>
        </Modal>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: width,
    height: height,
  },
  noPermissionStyle: {},
  cameraViewStyle: {
    flex: 1,
  },
  cameraControlPanel: {
    width: width,
    flexDirection: "row",
    paddingHorizontal: 60,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 40,
    backgroundColor: appColors.surfaceContainerLowest,
  },
  cameraControlButtonStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 50,
  },
  snapButtonStyle: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: appColors.onSurface,
  },
});
