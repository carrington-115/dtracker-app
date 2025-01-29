import React, { useState } from "react";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Modal, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import {
  PanGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const { height } = Dimensions.get("window");

export default function BottomSheetModalControl({
  visible,
  setVisible,
  children,
}: {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: React.ReactNode;
}) {
  const modalHeight = useSharedValue(height * 0.3);
  const animatedStyles = useAnimatedStyle(() => ({
    height: modalHeight.value,
  }));

  const onGestureEvent = (event: any) => {
    const newHeight = height - event.nativeEvent.absoluteY;
    modalHeight.value = withSpring(
      Math.max(height * 0.15, Math.min(newHeight, height * 0.35)),
      {
        damping: 15,
        stiffness: 120,
      }
    );

    if (newHeight < height * 0.2) {
      setVisible(false);
    }
  };

  return (
    <>
      <Modal visible={visible} transparent={true} animationType="slide">
        <GestureHandlerRootView>
          <PanGestureHandler onGestureEvent={onGestureEvent}>
            <Animated.View
              style={[styles.bottomSheetModalStyles, animatedStyles]}
            >
              {children}
            </Animated.View>
          </PanGestureHandler>
        </GestureHandlerRootView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  bottomSheetModalStyles: {
    backgroundColor: appColors.surfaceContainerHighest,
    padding: 20,
    elevation: 10,
    minHeight: "25%",
    marginTop: 100,
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    paddingBottom: 60,
    paddingTop: 10,
    paddingHorizontal: 20,
    flexDirection: "column",
    alignItems: "center",
    gap: 50,
  },
});
