import { createReducer } from "@reduxjs/toolkit";

import { supabase } from "~utils/supabase";

const initialState = {
  user: null
}


export const UserReducer = createReducer(initialState, (builder) => {

});