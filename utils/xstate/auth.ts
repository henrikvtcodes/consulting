import React, { createContext } from "react";
import { createMachine } from "xstate";

export const authState = createMachine({
  // Machine identifier
  id: "auth",

  // Initial state
  initial: "loggedOut",

  // Local context for entire machine
  context: {
    elapsed: 0,
  },

  // State definitions
  states: {
    loggedOut: {
      /* ... */
    },
    loggedIn: {
      /* ... */
    },
    loggedInWithData: {
      /* ... */
    },
  },
});

export const AuthContext = createContext({});