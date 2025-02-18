import appColors from "@/constants/colors";
import { Stack, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { Image } from "expo-image";
import {
  BottomButton,
  BottomSheetModal,
  DropDownElement,
  IconButton,
  TextInputElement,
  Camera as AppCamera,
} from "@/components";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { textFontStyles } from "@/constants/fonts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import { addTrashImage as addImage } from "@/redux/features/trashImageSlice";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get("window");

export default function componentName() {
  const [loading, setLoading] = useState<boolean>(true);
  const [imagePresent, setImagePresent] = useState<boolean>(false);
  const [bottomSheetVisible, setBottomSheetVisible] = useState<boolean>(false);
  const [cameraVisible, setCameraVisible] = useState<boolean>(false);

  // item details
  const [itemName, setItemName] = useState<string>("");
  const [itemSize, setItemSize] = useState<string>("");
  const [trashType, setTrashType] = useState<string>("none");
  const [priceControl, setPriceControl] = useState<
    "default" | "negotiate" | "free"
  >("default");
  const [priceAmount, setPriceAmount] = useState<number>(0);

  const dispatch = useDispatch();
  const images = useSelector((state: any) => state.immediate.trashImages);

  const router = useRouter();

  const handleUploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      dispatch(addImage(result.assets[0].uri));
      setBottomSheetVisible(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

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
      <AppCamera
        visible={cameraVisible}
        onClose={() => setCameraVisible(false)}
        closeModalAction={() => setBottomSheetVisible(false)}
      />
      <Appbar.Header style={{ backgroundColor: "transparent", height: 58 }}>
        <Appbar.BackAction onPress={() => router.back()} />
        <Appbar.Content title="" />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>
      <ScrollView style={styles.ScrollViewStyles}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <ImageUploadElement
            uploadAction={() => setBottomSheetVisible(true)}
            type={images.length > 0 ? "image" : "default"}
            images={images}
          />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "column",
            gap: 20,
            alignItems: "center",
            backgroundColor: appColors.surfaceBright,
            marginTop: 20,
            paddingHorizontal: 10,
            paddingBottom: 40,
          }}
        >
          <TextInputElement
            placeholder="Name of Item"
            keyboardType="default"
            value={itemName}
            onChangeValue={setItemName}
            required
            type="single-line"
          />
          <TextInputElement
            placeholder="Size"
            keyboardType="default"
            value={itemSize}
            onChangeValue={setItemSize}
            required
            type="single-line"
          />
          <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Trash type
            </Text>
            <DropDownElement
              dropDownItems={[
                { label: "Select", value: "none" },
                { label: "Mixed", value: "mixed" },
                { label: "Paper", value: "paper" },
                { label: "Electronics", value: "e-waste" },
                { label: "Plastic", value: "plastic" },
                { label: "Glass", value: "glass" },
                { label: "Metal", value: "metal" },
                { label: "Organic", value: "organic" },
              ]}
              dropDownValue={trashType}
              onValueChange={(value) => setTrashType(value)}
            />
          </View>
          <View
            style={{
              width: "100%",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Set pricing
            </Text>
            <PriceElement
              type={priceControl}
              onChangeType={setPriceControl}
              amount={priceAmount}
              onChangeAmount={setPriceAmount}
            />
          </View>
          <View style={{ width: "100%" }}>
            <BottomButton name="Add to store" onPressAction={() => {}} />
          </View>
        </View>
      </ScrollView>
      <BottomSheetModal
        visible={bottomSheetVisible}
        setVisible={setBottomSheetVisible}
        initialHeight={0.35}
        maxHeight={0.4}
        minHieght={0.2}
        collapseHeight={0.15}
      >
        <Pressable style={styles.modalControllerStyles} />
        <View style={{ width: "100%", flexDirection: "column", gap: 10 }}>
          <Pressable
            style={styles.modalButtonStyles}
            onPress={() => setCameraVisible(true)}
          >
            <MaterialIcons
              name="photo-camera"
              size={24}
              color={appColors.onSurface}
            />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>Camera</Text>
          </Pressable>
          <Pressable
            style={styles.modalButtonStyles}
            onPress={handleUploadImage}
          >
            <MaterialCommunityIcons
              name="folder-multiple-image"
              size={24}
              color={appColors.onSurface}
            />
            <Text style={{ ...textFontStyles.bodyLargeRegular }}>
              Upload from device
            </Text>
          </Pressable>
        </View>
      </BottomSheetModal>
    </SafeAreaView>
  );
}

const ImageUploadElement = ({
  uploadAction,
  type,
  images,
}: {
  type: "image" | "default";
  images?: string[];
  uploadAction: () => void;
}) => {
  if (type === "image") {
    return (
      <View
        style={[
          styles.uploadElementContainer,
          {
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: appColors.secondaryContainerColor,
          },
        ]}
      >
        <PagerView
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          {images?.map((image: string, index: number) => (
            <View
              key={index}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: image }}
                contentFit="contain"
                style={{
                  width: "90%",
                  height: "90%",
                  borderRadius: 20,
                }}
              />
            </View>
          ))}
        </PagerView>
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
            btnAction={uploadAction}
            bgColor={appColors.surfaceContainerHighest}
          />
        </View>
      </View>
    );
  }
  if (type === "default") {
    return (
      <TouchableOpacity
        style={[
          styles.uploadElementContainer,
          {
            backgroundColor: appColors.surfaceContainer,
          },
        ]}
        onPress={uploadAction}
      >
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
            btnAction={uploadAction}
            bgColor={appColors.surfaceContainerHighest}
          />
        </View>
      </TouchableOpacity>
    );
  }

  return <></>;
};

const PriceElement = ({
  type,
  onChangeType,
  amount,
  onChangeAmount,
}: {
  type: "default" | "free" | "negotiate";
  onChangeType: (value: any) => void;
  amount?: number;
  onChangeAmount?: (value: number) => void;
}) => {
  return (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: type !== "default" ? "100%" : "48%" }}>
          <DropDownElement
            dropDownItems={[
              { label: "Fix price", value: "default" },
              { label: "Free", value: "free" },
              { label: "Negotiate amount", value: "negotiate" },
            ]}
            dropDownValue={type}
            onValueChange={(value) => onChangeType(value)}
          />
        </View>
        <>
          {type === "default" && (
            <View style={{ width: "48%" }}>
              <TextInputElement
                placeholder="XAF"
                value={amount}
                onChangeValue={onChangeAmount}
                required
                type="single-line"
                keyboardType="numeric"
              />
            </View>
          )}
        </>
      </View>
    </>
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
    borderRadius: 20,
  },
  modalButtonStyles: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    width: "100%",
    padding: 10,
  },
  modalControllerStyles: {
    width: 50,
    height: 5,
    backgroundColor: appColors.outline,
    borderRadius: 10,
  },
});
