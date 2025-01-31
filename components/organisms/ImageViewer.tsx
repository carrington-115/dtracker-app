import appColors from "@/constants/colors";
import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  Modal,
} from "react-native";
import Swiper from "react-native-swiper";

interface imageViewerPropsType {
  images: string[];
  type?: string;
  userState?: boolean;
}

const { width } = Dimensions.get("window");

export default function componentName({
  images,
  type,
  userState,
}: imageViewerPropsType) {
  const [currentImage, setCurrentImage] = useState<null | number>(null);
  const [swiperIsSelected, setSwiperIsSelected] = useState<boolean>(false);

  return (
    <>
      {swiperIsSelected ? (
        <>
          <Modal>
            {/* <Swiper
              - fix modal issues
              - fix bug on the swiper and enable image swiping
            */}
          </Modal>
        </>
      ) : (
        <Pressable style={styles.container}>
          <Swiper
            loop
            showsPagination
            paginationStyle={{ bottom: 10 }}
            style={{ width: "100%", height: "100%" }}
            showsButtons
            activeDotColor={appColors.primaryColor}
            index={currentImage!}
            onIndexChanged={(index) => setCurrentImage(index)}
          >
            {images.map((image, index) => (
              <ViewImage
                key={index}
                image={image}
                indexValue={index}
                updateIndex={setCurrentImage}
              />
            ))}
          </Swiper>
        </Pressable>
      )}
    </>
  );
}

const ViewImage = ({
  image,
  indexValue,
  updateIndex,
}: {
  image: string;
  indexValue: number;
  updateIndex: (num: number) => void;
}) => {
  useEffect(() => {
    updateIndex(indexValue);
  }, [indexValue]);
  return (
    <>
      <View style={styles.viewElementStyle}>
        <Image
          source={{ uri: image }}
          style={{ width: "100%", height: "100%" }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 250,
    position: "relative",
    marginBottom: 50,
  },
  viewElementStyle: {
    width: "100%",
    height: "100%",
  },
});
