import { ChatInput, ChatMessage } from "@/components";
import appColors from "@/constants/colors";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);
  const [time, setTime] = useState<Date | null>(null);

  const handleSubmitMessage = (message: string) => {
    if (text === "") return;
    else {
      setMessages((prevMessages) => {
        return [...prevMessages, message];
      });
      setText("");
    }
  };

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollViewStyles}>
        <View style={styles.messageFlowStyles}>
          {messages.map((message, index) => (
            <ChatMessage
              message={message}
              key={index}
              isCurrentUser={true}
              time={time?.toLocaleTimeString()!}
            />
          ))}
        </View>
      </ScrollView>
      <ChatInput
        text={text}
        setText={setText}
        submitAction={() => handleSubmitMessage(text)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    flex: 1,
    backgroundColor: appColors.surfaceBright,
    position: "relative",
  },
  scrollViewStyles: {
    flex: 1,
    width: width,
    paddingHorizontal: 16,
    marginTop: 14,
  },
  messageFlowStyles: {
    width: "100%",
    padding: 10,
    flexDirection: "column",
    gap: 20,
  },
});
