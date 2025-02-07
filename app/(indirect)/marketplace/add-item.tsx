import appColors from "@/constants/colors";
import { Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { Image } from "expo-image";
import { IconButton } from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [loading, setLoading] = useState<boolean>(true);
  const [imagePresent, setImagePresent] = useState<boolean>(false);
  if (loading) {
    <SafeAreaView
      style={{
        ...styles.container,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ActivityIndicator size={48} color={appColors.primaryColor} />
    </SafeAreaView>;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header style={{ backgroundColor: "transparent", height: 58 }}>
        <Appbar.BackAction onPress={() => {}} />
        <Appbar.Content title="" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView style={styles.ScrollViewStyles}>
        {imagePresent ? (
          <></>
        ) : (
          <View style={{ width: "100%", alignItems: "center" }}>
            <ImageUploadElement />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const ImageUploadElement = () => {
  return (
    <TouchableOpacity style={styles.uploadElementContainer}>
      <Image
        source={require("../../../assets/images/marketplace-Image.png")}
        style={{
          width: 120,
          height: 120,
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
      >
        <IconButton
          icon={
            <MaterialIcons name="add" size={24} color={appColors.onSurface} />
          }
          btnAction={() => {}}
          bgColor={appColors.surfaceContainerHighest}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  ScrollViewStyles: {
    width: width,
    padding: 16,
  },
  uploadElementContainer: {
    width: "88%",
    height: 352,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColors.surfaceContainer,
    borderRadius: 20,
  },
});
