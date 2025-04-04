import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MapActivityElement } from "..";
import { mapActivityElementProps } from "@/constants/types";

export default function componentName({
  mapsDetails,
}: {
  mapsDetails: mapActivityElementProps[];
}) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.innerContainer}>
        {mapsDetails.map((item, index) => (
          <MapActivityElement key={index} {...item} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  innerContainer: {
    width: "100%",
    gap: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
});
