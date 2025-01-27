import React from "react";
import { Tabs } from "expo-router";

export default function componentName() {
  return (
    <>
      <Tabs>
        <Tabs.Screen name="index" />
        <Tabs.Screen name="store" />
        <Tabs.Screen name="actions" />
        <Tabs.Screen name="notifications" />
      </Tabs>
    </>
  );
}
