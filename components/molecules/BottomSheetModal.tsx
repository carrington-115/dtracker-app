import React from "react";
import appColors from "@/constants/colors";
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
import { bottomSheetPropsType } from "@/constants/types";

const { height } = Dimensions.get("window");

export default function BottomSheetModalControl({
  visible,
  setVisible,
  children,
  initialHeight,
  minHieght,
  maxHeight,
  collapseHeight,
}: bottomSheetPropsType) {
  const modalHeight = useSharedValue(height * initialHeight);
  const animatedStyles = useAnimatedStyle(() => ({
    height: modalHeight.value,
  }));

  const onGestureEvent = (event: any) => {
    const newHeight = height - event.nativeEvent.absoluteY;
    modalHeight.value = withSpring(
      Math.max(height * minHieght, Math.min(newHeight, height * maxHeight)),
      {
        damping: 25,
        stiffness: 120,
      }
    );

    if (newHeight < height * collapseHeight) {
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
    backgroundColor: appColors.surfaceDimColor,
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
