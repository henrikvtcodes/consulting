// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { supabaseServer } from '~utils/Supabase'

export default async function authHandler( req: NextApiRequest, res: NextApiResponse ) {
    const result = supabaseServer.auth.api.setAuthCookie(req, res);
}
