import MessagesComponent from "@/components/molecules/MessagesComponent";
import appColors from "@/constants/colors";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";

const { width } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="Messages" />
      </Appbar.Header>
      <View style={styles.messagesSectionStyles}>
        <ScrollView
          style={{
            width: "100%",
          }}
        >
          <MessagesComponent
            image={require("@/assets/images/user-image.png")}
            name="John Doe"
            time="12:00 PM"
            unread={1}
            onPress={() => {}}
          />
          <MessagesComponent
            image={require("@/assets/images/user-image.png")}
            name="John Doe"
            time="12:00 PM"
            unread={1}
            onPress={() => {}}
          />
          <MessagesComponent
            image={require("@/assets/images/user-image.png")}
            name="John Doe"
            time="12:00 PM"
            unread={1}
            onPress={() => {}}
          />
          <MessagesComponent
            image={require("@/assets/images/user-image.png")}
            name="John Doe"
            time="12:00 PM"
            unread={1}
            onPress={() => {}}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.surfaceBright,
  },
  messagesSectionStyles: {
    width: width,
    height: "auto",
  },
});
