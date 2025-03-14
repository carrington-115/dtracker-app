import {
  account,
  appCredentials,
  databases,
  id,
} from "@/appwrite/config.appwrite";
import { PinCodeScreen } from "@/components";
import { addUserDocId } from "@/redux/features/authSlice";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Appbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

export default function componentName() {
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();
  const phoneNumber = useSelector((state: any) => state.auth.phoneAuth);
  const userId = useSelector((state: any) => state.auth.userId);
  const username = useSelector((state: any) => state.auth.authName);
  const dispatch = useDispatch();

  const handleSubmitForm = async (userId: string) => {
    /*
      - This is what happens in this function
      - When the form is submitted, the user session is created
      - the user profile is created in the db.
    */
    await account.createSession(userId, otp);
    const userDbProfile = await databases.createDocument(
      appCredentials.appwriteDb,
      appCredentials.usersCollection,
      id.unique(),
      {
        name: username,
        phone: phoneNumber,
      }
    );
    if (userDbProfile) dispatch(addUserDocId(userDbProfile.$id));
    router.push("./user-category");
  };

  const handleResend = async (phoneNumber: string) => {
    await account.createPhoneToken(id.unique(), phoneNumber);
  };
  useEffect(() => {}, [phoneNumber]);

  return (
    <>
      <PinCodeScreen
        otp={otp}
        setOtp={setOtp}
        buttonAction={() => handleSubmitForm(userId)}
        resendCodeAction={() => handleResend(phoneNumber)}
      />
    </>
  );
}
