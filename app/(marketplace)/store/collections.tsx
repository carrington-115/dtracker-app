import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import appColors from "@/constants/colors";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";
import { CollectionsComponent } from "@/components";
import { NoElementOnPage } from "@/components/organisms/NoElementOnPage";
import { CollectionsComponentProps } from "@/constants/types";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const [collections, setCollections] = useState<CollectionsComponentProps[]>(
    []
  );

  useEffect(() => {
    setCollections([]);
  }, []);

  if (collections.length === 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: width,
          height: height,
          backgroundColor: appColors.surfaceBright,
        }}
      >
        <Appbar.Header statusBarHeight={0}>
          <Appbar.BackAction onPress={() => router.back()} />
          <Appbar.Content title="Collections" />
        </Appbar.Header>
        <View
          style={{
            width: "100%",
            height: "100%",
            alignItems: "center",
            paddingHorizontal: 50,
            marginTop: height / 3,
          }}
        >
          <NoElementOnPage
            title="No Collections Yet!"
            message="Looks like you haven't made any collections yet—start collecting waste to earn rewards!"
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header statusBarHeight={0}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Collections" />
      </Appbar.Header>
      <ScrollView
        style={{
          paddingHorizontal: 18,
          width: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {collections.map((collection, index) => (
            <CollectionsComponent key={index} {...collection} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
});
