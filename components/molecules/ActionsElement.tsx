import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface actionsElementProps {
  userProfileImage: any;
  actionType: "pickup" | "pickup-request" | "marketplace";
  size: number;
  units: string;
  distance?: string;
  price?: number;
  userType: "user" | "agent";
  status: "active" | "pending" | "available";
  date?: string;
  username?: string;
  time?: string;
  pickupType?: "immediate" | "scheduled";
}

export default function componentName({
  userProfileImage,
  actionType,
  size,
  units,
  distance,
  price,
  userType,
  status,
  date,
  username,
  time,
  pickupType,
}: actionsElementProps) {
  if (actionType === "pickup") {
    return (
      <Pressable
        style={({ pressed }) => [
          styles.container,
          {
            backgroundColor: pressed
              ? appColors.surfaceContainerLow
              : "transparent",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <Image source={userProfileImage} style={styles.imageStyle} />
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 10,
            }}
          >
            <Text style={{ ...textFontStyles.titleMediumMedium }}>
              {userType === "agent" ||
              (userType === "user" && status !== "active")
                ? "Trash Pickup"
                : username}
            </Text>
            <View
              style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
            >
              <View
                style={{ flexDirection: "row", gap: 5, alignItems: "center" }}
              >
                <MaterialCommunityIcons name="weight" size={16} color="black" />
                <Text style={{ ...textFontStyles.bodyMediumMedium }}>
                  {size} {units}
                </Text>
              </View>
              <View
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: 20,
                  backgroundColor: appColors.onSurface,
                }}
              />
              {userType === "agent" ||
              (userType === "user" && pickupType !== "immediate") ? (
                <Text style={{ ...textFontStyles.bodyMediumMedium }}>
                  XAF {price}
                </Text>
              ) : (
                userType === "user" &&
                status === "active" &&
                pickupType === "immediate" && (
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 5,
                      alignItems: "center",
                    }}
                  >
                    <MaterialIcons name="alt-route" size={16} color="black" />
                    <Text style={{ ...textFontStyles.bodyMediumMedium }}>
                      {distance}
                    </Text>
                  </View>
                )
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "column",
          }}
        >
          {userType &&
            (pickupType === "immediate" ? (
              <>
                <View
                  style={{
                    flexDirection: "column",
                    gap: 5,
                    alignItems: "flex-end",
                  }}
                >
                  {userType !== "user" && status !== "available" && (
                    <View
                      style={{
                        padding: 2.5,
                        backgroundColor: appColors.tertiaryContainerColor,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                      }}
                    >
                      {status === "active" ? (
                        <Entypo name="cycle" size={24} color="black" />
                      ) : (
                        <MaterialCommunityIcons
                          name="progress-upload"
                          size={24}
                          color="black"
                        />
                      )}
                    </View>
                  )}
                  {userType !== "agent" && status !== "available" && (
                    <View
                      style={{
                        padding: 2.5,
                        backgroundColor: appColors.tertiaryContainerColor,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "100%",
                      }}
                    >
                      {status === "active" ? (
                        <Entypo name="cycle" size={24} color="black" />
                      ) : (
                        <MaterialCommunityIcons
                          name="progress-upload"
                          size={24}
                          color="black"
                        />
                      )}
                    </View>
                  )}
                  {userType === "agent" && (
                    <View
                      style={{
                        flexDirection: "row",
                        gap: 5,
                        alignItems: "center",
                      }}
                    >
                      <MaterialIcons name="alt-route" size={24} color="black" />
                      <Text style={{ ...textFontStyles.bodyMediumMedium }}>
                        {distance}
                      </Text>
                    </View>
                  )}
                </View>
              </>
            ) : (
              pickupType === "scheduled" && (
                <>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <View style={{ flexDirection: "column", gap: 5 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                        }}
                      >
                        <MaterialCommunityIcons
                          name="calendar-month-outline"
                          size={24}
                          color="black"
                        />
                        <Text style={{ ...textFontStyles.bodyMediumMedium }}>
                          {date}
                        </Text>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          gap: 5,
                          alignItems: "center",
                        }}
                      >
                        <MaterialIcons
                          name="timelapse"
                          size={24}
                          color="black"
                        />
                        <Text style={{ ...textFontStyles.bodyMediumMedium }}>
                          {time}
                        </Text>
                      </View>
                    </View>
                    {status !== "available" && (
                      <View
                        style={{
                          padding: 2.5,
                          backgroundColor: appColors.tertiaryContainerColor,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: "100%",
                        }}
                      >
                        {status === "active" ? (
                          <Entypo name="cycle" size={24} color="black" />
                        ) : (
                          <MaterialCommunityIcons
                            name="progress-upload"
                            size={24}
                            color="black"
                          />
                        )}
                      </View>
                    )}
                  </View>
                </>
              )
            ))}
        </View>
      </Pressable>
    );
  }

  if (actionType === "pickup-request") {
    return (
      <Pressable style={styles.container}>
        <Text>Pickup Request</Text>
      </Pressable>
    );
  }

  if (actionType === "marketplace") {
    return (
      <Pressable style={styles.container}>
        <Text>Marketplace</Text>
      </Pressable>
    );
  }

  return <></>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageStyle: {
    width: 48,
    height: 48,
    borderRadius: 100,
  },
});
