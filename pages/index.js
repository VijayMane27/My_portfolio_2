// pages/index.js

import React from "react";
import CommandPrompt from "./components/prompt";

const IndexPage = () => {
  return (
    <main
      className="flex min-h-screen flex-col bg-[#121212]"
      style={{ backgroundImage: `url('/background.jpg')` }}
    >
      <CommandPrompt />
    </main>
  );
};

export default IndexPage;
