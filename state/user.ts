import { Customer, User } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Session } from "next-auth";

type UserSliceState = {
  session: Session | null;
  user: {
    name: string;
    email: string;
    image: string;
  } | null;
  userData: User | null;
  customerData: Customer | null;
};

const initialState: UserSliceState = {
  session: null,
  user: null,
  userData: null,
  customerData: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    login: (state, action: PayloadAction<Session>) => {},
  },
});
