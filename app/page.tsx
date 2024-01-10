import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  // Get the current user

  return (
    <div>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default page;
