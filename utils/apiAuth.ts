import { supabase, supabaseServer } from "./Supabase";
import cookie from "cookie";

import type { NextApiRequest, NextApiResponse } from "next";

export const getUserCookie = async (req: NextApiRequest) => {
  const { user } = await supabaseServer.auth.api.getUserByCookie(req);
  return user;
}

export const getValidUserCookie = async (req: NextApiRequest, res:NextApiResponse) => {
  const { user, error } = await supabaseServer.auth.api.getUserByCookie(req);

  if (!user) {
    return res.status(401).send("Unauthorized");
  }
  else if (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
  else {
    const token = cookie.parse(req.headers.cookie as string)["sb:token"];

    // @ts-ignore
    supabaseServer.auth.session = () => ({
      user: user,
      access_token: token,
    });
    return user;
  }
};

export const setUserCookie = async (req: NextApiRequest, res:NextApiResponse, user:any) => {
  await supabaseServer.auth.api.setAuthCookie(req, res);
}