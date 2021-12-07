import { supabase } from "./supabase";

import type { NextApiRequest, NextApiResponse } from "next";

export const getUserCookie = async (req: NextApiRequest) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  return user;
}

export const getValidUserCookie = async (req: NextApiRequest, res:NextApiResponse) => {
  const { user, error } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    res.status(401).json({ message: "Unauthorized" });
    return null;  
  }
  else if (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  else {
    return user;
  }
};