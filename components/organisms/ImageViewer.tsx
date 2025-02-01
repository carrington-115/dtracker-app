import appColors from "@/constants/colors";
import React, { useEffect, useState, useRef } from "react";
import { View, StyleSheet, Dimensions, Image, ScrollView } from "react-native";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get("window");
export default function componentName({ images }: { images: string[] }) {
  const scrollViewRef = useRef<ScrollView>(null);
  return (
    <PagerView style={styles.container}>
      {images.map((image, index) => (
        <ViewImage key={index} image={image} />
      ))}
    </PagerView>
  );
}

const ViewImage = ({ image }: { image: string }) => {
  return (
    <View style={styles.viewElementStyle}>
      <Image
        source={{ uri: image }}
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: "100%",
    marginBottom: 50,
  },
  viewElementStyle: {
    width: "100%",
    height: "100%",
  },
});
