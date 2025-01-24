import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./config.firebase";

async function handleSignInWithGoogle() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

export { handleSignInWithGoogle };
