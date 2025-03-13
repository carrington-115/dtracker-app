import { Client, Databases, Account, ID } from "react-native-appwrite";

// appwrite variables
const projectId = String(process.env.EXPO_PUBLIC_PROJECT_ID);
const endpointApi = String(process.env.EXPO_PUBLIC_APPWRITE_API_ENDPOINT);
const appwriteDb = String(process.env.EXPO_PUBLIC_APPWRITE_DB_ID);
const usersCollection = String(process.env.EXPO_PUBLIC_APPWRITE_USERS);

const appCredentials = {
  projectId,
  endpointApi,
  appwriteDb,
  usersCollection,
};

const client = new Client().setEndpoint(endpointApi).setProject(projectId);
const account = new Account(client);

const databases = new Databases(client);
const id = ID;

export { client, databases, id, appCredentials, account };
