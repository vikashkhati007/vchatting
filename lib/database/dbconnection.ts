import { Client, Databases } from "appwrite";

const client = new Client();

export const databases = new Databases(client);

client
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("5df5acd0d48c2"); // Your project ID
