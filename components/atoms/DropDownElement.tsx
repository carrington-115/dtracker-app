import React from "react";
import { Picker } from "@react-native-picker/picker";
import { dropDownElementProps } from "@/constants/types";
import { StyleSheet } from "react-native";
import appColors from "@/constants/colors";

export default function componentName({
  dropDownItems,
  dropDownValue,
  onValueChange,
  bgColor,
}: dropDownElementProps) {
  return (
    <>
      <Picker
        style={[
          styles.pickerStyleType,
          {
            backgroundColor: bgColor ? bgColor : appColors.surfaceContainer,
          },
        ]}
        selectedValue={dropDownValue}
        onValueChange={onValueChange}
        itemStyle={{
          backgroundColor: appColors.surfaceContainer,
          borderRadius: 50,
        }}
      >
        {dropDownItems.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
    </>
  );
}

const styles = StyleSheet.create({
  pickerStyleType: {
    width: "100%",
    borderRadius: 50,
    paddingHorizontal: 30,
  },
});
