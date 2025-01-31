import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import Entypo from "@expo/vector-icons/Entypo";
import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TrashSizeInput() {
  const [trashSize, setTrashSize] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const [trashSizeUnit, setTrashSizeUnit] = useState<string>("Select");

  const handlePressUnit = (unit: string) => {
    setVisible(false);
    setTrashSizeUnit(unit);
  };

  return (
    <>
      <Pressable style={styles.trashInputStyle}>
        <Pressable
          onPress={() => setVisible(!visible)}
          style={(innerPressed) => [
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              paddingHorizontal: 10,
              paddingVertical: 10,
              borderRadius: 20,
              width: "100%",
              backgroundColor: innerPressed.pressed
                ? appColors.surfaceContainerHighest
                : appColors.surfaceContainer,
            },
          ]}
        >
          <Text style={{ ...textFontStyles.titleMediumRegular }}>
            {trashSizeUnit}
          </Text>
          <Entypo
            name={visible ? "chevron-small-up" : "chevron-small-down"}
            size={24}
            color="black"
          />
        </Pressable>
      </Pressable>
      {visible && (
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 10,
            borderRadius: 10,
            backgroundColor: appColors.surfaceContainer,
            paddingHorizontal: 30,
            paddingVertical: 10,
            elevation: 2,
            position: "absolute",
            top: 45,
            right: 16,
          }}
        >
          {["Select", "Bags", "Buckets"].map((unit, index) => (
            <TouchableOpacity key={index} onPress={() => handlePressUnit(unit)}>
              <Text style={{ ...textFontStyles.bodyMediumRegular }}>
                {unit}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  trashInputStyle: {
    position: "relative",
  },
  trashTypeStyles: {
    width: "90%",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 20,
  },
});
