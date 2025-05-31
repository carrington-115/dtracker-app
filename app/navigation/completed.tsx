import { ActiveButton, IconButton } from "@/components";
import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Animated,
  Easing,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");

export default function componentName() {
  const [barStyleState, setBarStyleState] = useState<boolean>(false);
  const [submitButtonVisible, setSubmitButtonVisible] =
    useState<boolean>(false);
  const router = useRouter();

  // rectangle animated parameters
  const animatedWidth = useRef(new Animated.Value(484)).current;
  const animatedHeight = useRef(new Animated.Value(484)).current;

  // content parameters
  const animatedBoxOpacity = useRef(new Animated.Value(0)).current;
  const animatedLineWidth = useRef(new Animated.Value(42)).current;
  const animatedTextScale = useRef(new Animated.Value(0.8)).current;
  const animatedRatings = useRef(new Animated.Value(0)).current;

  const [starRatings, setStarRatings] = useState<
    { stars: number; title: string; state: boolean }[]
  >([
    {
      stars: 5,
      title: "Excellent / Outstanding",
      state: false,
    },
    {
      stars: 4,
      title: "Very Good / Highly Satisfying",
      state: false,
    },
    {
      stars: 3,
      title: "Good / Average / Acceptable",
      state: false,
    },
    {
      stars: 2,
      title: "Fair / Below Average / Disappointing",
      state: false,
    },
    {
      stars: 1,
      title: "Poor / Unacceptable / Terrible",
      state: false,
    },
  ]);

  useEffect(() => {
    // rectangle animation
    const rectangleAnimation = Animated.parallel([
      Animated.timing(animatedWidth, {
        toValue: 1163,
        duration: 1250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: false,
      }),
      Animated.timing(animatedHeight, {
        toValue: 1163,
        duration: 1250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: false,
      }),
    ]);

    const boxRatingsAnimation = Animated.timing(animatedBoxOpacity, {
      toValue: 1,
      duration: 250,
      easing: Easing.in(Easing.ease),
      useNativeDriver: false,
    });

    // line and text animation
    const contentAnimation = Animated.parallel([
      Animated.timing(animatedLineWidth, {
        toValue: 200,
        duration: 250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: false,
      }),
      Animated.timing(animatedTextScale, {
        toValue: 1,
        duration: 250,
        easing: Easing.in(Easing.ease),
        useNativeDriver: false,
      }),
    ]);

    // ratings box animation
    const ratingsBoxAnimation = Animated.timing(animatedRatings, {
      toValue: 1,
      duration: 250,
      easing: Easing.in(Easing.ease),
      useNativeDriver: false,
    });

    // content
    Animated.sequence([
      rectangleAnimation,
      Animated.delay(250),
      boxRatingsAnimation,
      Animated.delay(250),
      contentAnimation,
      Animated.delay(250),
      ratingsBoxAnimation,
    ]).start();
    setTimeout(() => setBarStyleState(true), 500);
  }, []);

  // we need to know if the rating is increasing or decreasing
  const getRatingStatus = (maxPosition: number): boolean => {
    let status = false; // this means decreasing else true means increasing
    for (let star = 0; star < starRatings.length; star++) {
      if (
        star < maxPosition - 1 &&
        starRatings[star].state === true &&
        starRatings[maxPosition - 1].state === false
      ) {
        status = true;
        break;
      } // increase
      else if (
        star > maxPosition &&
        starRatings[star].state === true &&
        starRatings[maxPosition - 1].state === true
      ) {
        // decrease
        break;
      }
    }
    return status;
  };

  const handleSetRatingScore = (index: number) => {
    const starPosition = index + 1;
    const ratingStatus = getRatingStatus(starPosition);
    switch (ratingStatus) {
      case true:
        for (let star = 0; star < starPosition; star++) {
          setStarRatings((prev) => {
            const selectedRating = prev[star];
            selectedRating.state = true;
            return [...prev];
          });
        }
        break;

      case false:
        for (let star = 0; star < starPosition; star++) {}
        break;
      default:
        console.log("nothing");
    }
    setSubmitButtonVisible(true);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={barStyleState ? "light-content" : "dark-content"}
        backgroundColor={
          barStyleState ? appColors.primaryColor : appColors.surfaceBright
        }
      />
      {barStyleState && (
        <View
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 100,
          }}
        >
          <IconButton
            icon={
              <MaterialIcons
                name="arrow-back"
                size={36}
                color={appColors.onPrimaryColor}
              />
            }
            bgColor={"transparent"}
            pressedColor="rgba(255, 255, 255, 0.25)"
            btnAction={() => router.push("/")}
          />
        </View>
      )}
      <Animated.View
        style={[
          styles.rectangle,
          {
            width: animatedWidth,
            height: animatedHeight,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.content,
            {
              opacity: animatedBoxOpacity,
            },
          ]}
        >
          <MaterialIcons
            name="check-circle"
            size={96}
            color={appColors.onPrimaryColor}
          />
          <Text
            style={{
              ...textFontStyles.headlineMediumBold,
              color: appColors.onPrimaryColor,
            }}
          >
            Pickup Completed
          </Text>
          <Animated.View
            style={{
              width: animatedLineWidth,
              borderTopWidth: 2,
              borderColor: appColors.onPrimaryColor,
            }}
          />
          <Animated.Text
            style={{
              ...textFontStyles.titleLargeRegular,
              color: appColors.onPrimaryColor,
              width: "70%",
              textAlign: "center",
              transform: [{ scale: animatedTextScale }],
            }}
          >
            Thanks for using our service
          </Animated.Text>
          <Animated.View
            style={[
              styles.rating,
              {
                opacity: animatedRatings,
              },
            ]}
          >
            <Text
              style={{
                ...textFontStyles.bodyLargeMedium,
                color: appColors.onPrimaryColor,
              }}
            >
              Please rate us
            </Text>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              {starRatings.map((value, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleSetRatingScore(index)}
                >
                  <MaterialIcons
                    name={value.state ? "star" : "star-outline"}
                    size={48}
                    color={appColors.onPrimaryColor}
                  />
                </Pressable>
              ))}
            </View>
            {submitButtonVisible && (
              <ActiveButton
                name="Submit"
                color={appColors.primaryColor}
                bgColor={appColors.onPrimaryColor}
                onPressAction={() => {}}
                focusedColor={appColors.surfaceColor}
              />
            )}
          </Animated.View>
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: "relative",
    backgroundColor: appColors.surfaceBright,
  },
  rectangle: {
    position: "absolute",
    bottom: -(484 - 360),
    right: -(484 - 256),
    backgroundColor: appColors.primaryColor,
    borderRadius: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
    position: "absolute",
    zIndex: 100,
    left: "51%",
    width: width / 1.5,
  },
  rating: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
    gap: 2,
  },
});
