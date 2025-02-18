import React from "react";
import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import PagerView from "react-native-pager-view";
import appColors from "@/constants/colors";
import IconButton from "@/components/atoms/IconButton";
import { Image } from "expo-image";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

const ImageUploadElement = ({
  uploadAction,
  type,
  images,
}: {
  type: "image" | "default";
  images?: string[];
  uploadAction: () => void;
}) => {
  if (type === "image") {
    return (
      <View
        style={[
          styles.uploadElementContainer,
          {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: appColors.secondaryContainerColor,
          },
        ]}
      >
        <PagerView
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {images?.map((image: string, index: number) => (
            <View
              key={index}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: image }}
                contentFit="contain"
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: 20,
                }}
              />
            </View>
          ))}
        </PagerView>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <IconButton
            icon={
              <MaterialIcons name="add" size={24} color={appColors.onSurface} />
            }
            btnAction={uploadAction}
            bgColor={appColors.surfaceContainerHighest}
          />
        </View>
      </View>
    );
  }
  if (type === "default") {
    return (
      <TouchableOpacity
        style={[
          styles.uploadElementContainer,
          {
            backgroundColor: appColors.surfaceContainer,
          },
        ]}
        onPress={uploadAction}
      >
        <Image
          source={require("@/assets/images/marketplace-Image.png")}
          style={{
            width: 120,
            height: 120,
          }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
          }}
        >
          <IconButton
            icon={
              <MaterialIcons name="add" size={24} color={appColors.onSurface} />
            }
            btnAction={uploadAction}
            bgColor={appColors.surfaceContainerHighest}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return <></>;
};

export default ImageUploadElement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  ScrollViewStyles: {
    width: width,
    padding: 16,
  },
  uploadElementContainer: {
    width: "88%",
    height: 352,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  modalButtonStyles: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "100%",
    padding: 10,
  },
  modalControllerStyles: {
    width: 50,
    height: 5,
    backgroundColor: appColors.outline,
    borderRadius: 10,
  },
});
