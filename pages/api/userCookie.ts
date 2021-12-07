// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import { supabase } from '~utils/supabase'

export default async function authHandler( req: NextApiRequest, res: NextApiResponse ) {
    await supabase.auth.api.setAuthCookie(req, res);
}
