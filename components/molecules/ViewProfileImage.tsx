import appColors from "@/constants/colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { useDispatch } from "react-redux";

export default function componentName({
  idImage,
  cancelIDImage,
  setBottomSheetVisible,
}: {
  idImage: string;
  cancelIDImage: any;
  setBottomSheetVisible: (value: boolean) => void;
}) {
  const dispatch = useDispatch();

  return (
    <>
      {idImage !== "" && (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: appColors.outline,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 20,
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                position: "relative",
              }}
            >
              <Image
                source={{
                  uri: idImage,
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
              <Pressable
                style={{
                  padding: 4,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                  backgroundColor: appColors.surfaceBright,
                  position: "absolute",
                  top: -5,
                  right: -5,
                  borderWidth: 1,
                  borderColor: appColors.outline,
                }}
                onPress={() => dispatch(cancelIDImage())}
              >
                <MaterialIcons name="close" color={"black"} size={12} />
              </Pressable>
            </View>
            <Text>Agent ID photo</Text>
          </View>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: appColors.surfaceContainer,
              borderRadius: 50,
            }}
            onPress={() => setBottomSheetVisible(true)}
          >
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color={appColors.onSurface}
            />
          </Pressable>
        </View>
      )}
    </>
  );
}
