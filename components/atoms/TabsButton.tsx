import { textFontStyles } from "@/constants/fonts";
import { tabsButtonProps } from "@/constants/types";
import { Link, usePathname } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View } from "react-native";

export default function componentName({ link, icon, name }: tabsButtonProps) {
  const pathname = usePathname();
  const [tabState, setTabState] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === link) {
      setTabState(true);
    } else {
      setTabState(false);
    }
  }, [pathname, link]);
  return (
    <>
      <Link
        href={link}
        style={[
          styles.tabStyles,
          {
            borderBottomWidth: tabState ? 2 : 0,
            borderBottomColor: tabState ? "#000" : "transparent",
          },
        ]}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
          }}
        >
          <>{icon}</>
          <Text style={{ ...textFontStyles.bodyLargeRegular }}>{name}</Text>
        </View>
      </Link>
    </>
  );
}

const styles = StyleSheet.create({
  tabStyles: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    width: "auto",
  },
});
