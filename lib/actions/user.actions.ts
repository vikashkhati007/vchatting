import { UserSchema } from "@/types/useraction";
import { databases } from "../database/dbconnection";
import { ID } from "appwrite";

const DATABASE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID;

export const createUser = async (user: UserSchema) => {
  const { clerkId, username, firstName, lastName, email, photo } = user;
  try {
    const promise = databases.createDocument(
      `${DATABASE_ID}`,
      `${COLLECTION_ID}`,
      ID.unique(),
      {
        clerkId: clerkId,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        photo: photo,
      }
    );

    promise.then(
      function (response) {
        return response;
      },
      function (error) {
        return error;
        // Failure
      }
    );
  } catch (error) {
    console.log(error);
  }
};
