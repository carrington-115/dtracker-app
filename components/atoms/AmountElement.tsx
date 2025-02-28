import React from "react";
import { View, Text } from "react-native";

export default function componentName({
  currency,
  amount,
  amountStyle,
  currentStyle,
}: {
  currency: string;
  amount: number;
  currentStyle: any;
  amountStyle: any;
}) {
  return (
    <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
      <Text style={currentStyle}>{currency}</Text>
      <Text style={amountStyle}>{amount}</Text>
    </View>
  );
}
