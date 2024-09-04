import React from "react";
import ReactDOM from "react-dom";
import {
  ClerkProvider,
  RedirectToSignIn,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";

const frontendApi =
  "pk_test_YWNjZXB0ZWQtZHJhZ29uLTY4LmNsZXJrLmFjY291bnRzLmRldiQ";

const App = () => (
  <ClerkProvider frontendApi={frontendApi}>
    <SignedIn>
      <div>Welcome! You are signed in.</div>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>
);

ReactDOM.render(<App />, document.getElementById("root"));
