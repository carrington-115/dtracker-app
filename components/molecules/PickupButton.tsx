import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { useRouter } from "expo-router";

export default function componentName({ icon, name, onPress }: any) {
  const router = useRouter();

  function handlePress() {
    if (name === "") return "error";
    else router.navigate("../../app/(login)/login-with-email");
  }

  return (
    <>
      <Pressable onPress={handlePress}>
        <View>{icon}</View>
        <Text>{name}</Text>
      </Pressable>
    </>
  );
}
