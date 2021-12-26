import { authState, AuthContext } from "./auth";
import { useInterpret } from "@xstate/react";
import React from "react";



export const AuthProvider = (props:{children?: React.ReactNode}) => {
  const authService = useInterpret(authState, {
    devTools: true,
  });

  return (
    <AuthContext.Provider value={{ authService }}>
      {props.children}
    </AuthContext.Provider>
  );
};