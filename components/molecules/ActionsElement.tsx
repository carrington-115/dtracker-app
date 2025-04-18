import appColors from "@/constants/colors";
import { textFontStyles } from "@/constants/fonts";
import { actionsElementProps } from "@/constants/types";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Image } from "expo-image";
import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

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
  itemName,
  paymentMethod,
  pressAction,
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
        onPress={pressAction}
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
              {userType === "agent"
                ? username
                : (userType === "user" && status !== "active") ||
                  (status === "available" && "Trash Pickup")}
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
  } else if (actionType === "marketplace") {
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
        onPress={pressAction}
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
              {itemName}
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
              <Text style={{ ...textFontStyles.bodyMediumMedium }}>
                {paymentMethod === "fixed" ? (
                  <>XAF {price}</>
                ) : paymentMethod === "negotiate" ? (
                  <>Negotiable</>
                ) : (
                  <>Free</>
                )}
              </Text>
            </View>
          </View>
        </View>
        <>
          {status !== "available" && (
            <View
              style={{
                padding: 2.5,
                backgroundColor: appColors.tertiaryContainerColor,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 20,
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
        </>
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
