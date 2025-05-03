import MessagesComponent from "@/components/molecules/MessagesComponent";
import { NoElementOnPage } from "@/components/organisms/NoElementOnPage";
import appColors from "@/constants/colors";
import { MessagesComponentProps } from "@/constants/types";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { Appbar } from "react-native-paper";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const router = useRouter();
  const [messages, setMessages] = useState<MessagesComponentProps[]>([]);

  useEffect(() => {
    setMessages([]);
  }, []);

  if (messages.length === 0) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          width: width,
          height: height,
          backgroundColor: appColors.surfaceBright,
        }}
      >
        <Appbar.Header>
          <Appbar.BackAction onPress={() => router.back()} />
          <Appbar.Content title="Messages" />
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
            title="No messages Yet!"
            message="Looks like you haven't received any messages yet—stay tuned 
        for updates from the waste collection center or business agent!"
          />
        </View>
      </SafeAreaView>
    );
  }

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
          {messages.map((message, index) => (
            <MessagesComponent key={index} {...message} />
          ))}
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
