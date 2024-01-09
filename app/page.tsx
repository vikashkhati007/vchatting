import { SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
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
