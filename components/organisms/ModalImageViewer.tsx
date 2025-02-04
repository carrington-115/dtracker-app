import appColors from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { View, Image, StyleSheet, Modal, Dimensions } from "react-native";
import PagerView from "react-native-pager-view";
import { IconButton } from "..";

interface ModalImageViewerPropsTypes {
  visible: boolean;
  images: string[];
  closeModal: () => void;
}

export default function componentName({
  visible,
  images,
  closeModal,
}: ModalImageViewerPropsTypes) {
  return (
    <>
      <Modal animationType="slide" transparent visible={visible}>
        <View style={styles.container}>
          <View
            style={{
              width: "100%",
              position: "absolute",
              top: 0,
              paddingHorizontal: 16,
              justifyContent: "flex-start",
              alignItems: "flex-start",
            }}
          >
            <IconButton
              icon={
                <MaterialCommunityIcons
                  name="arrow-left"
                  size={24}
                  color={appColors.onSurface}
                />
              }
              bgColor="transparent"
              btnAction={closeModal}
              pressedColor={appColors.surfaceContainer}
            />
          </View>
          <PagerView style={styles.viewStyle}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{
                  uri: image,
                }}
                resizeMode="contain"
                style={styles.imageStyle}
              />
            ))}
          </PagerView>
        </View>
      </Modal>
    </>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.surfaceBright,
    width: width,
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    width: width,
    height: height / 2,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
