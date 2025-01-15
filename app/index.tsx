import { StatusBar, Text, View, Button, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textFontStyles } from "@/constants/fonts";
import { useState } from "react";
import { increment, decrement } from "@/redux/features/CounterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Index() {
  const value = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle="light-content" />
      <View>
        <Text>Simple counter application with redux</Text>
        <View style={[styles.counterContainer]}>
          <Button title="Subtract" onPress={() => dispatch(decrement())} />
          <Button title="Add" onPress={() => dispatch(increment())} />
          <Text>{value}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  counterContainer: {},
});
