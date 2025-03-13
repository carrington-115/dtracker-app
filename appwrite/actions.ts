import { account, id } from "./config.appwrite";

async function isUserSignIn() {
  try {
    const signInState = await account.get();
    return signInState;
  } catch (error) {
    return error;
  }
}

const signUpUser = async (
  handleVerifications: () => void,
  email: string,
  password: string
) => {
  handleVerifications();
  await account.create(id.unique(), email, password);
};

const createUserSession = async (email: string, password: string) => {
  try {
    const user = account.createEmailPasswordSession(email, password);
    return user;
  } catch (error) {
    return error;
  }
};

export { isUserSignIn, signUpUser, createUserSession };
