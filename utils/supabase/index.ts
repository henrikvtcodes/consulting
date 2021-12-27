import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

/**
 * If supbase service role key not available, use client with anon key.  
 * 
 * Fixes Next.js tree shaking / bundling issue where it would try to create a client with service role key client side 
 * and cause client side error
 * @param fallbackClient 
 * @returns 
 */
const initSupabaseServer = (fallbackClient:SupabaseClient) => {
  if (process.env.SUPABASE_SERVICE_ROLE_KEY) {
  const supabaseServer = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    process.env.SUPABASE_SERVICE_ROLE_KEY as string
  );
  return supabaseServer;
  }
  else {
    return fallbackClient;
  }
}

const supabaseServer = initSupabaseServer(supabase);

export { supabase, supabaseServer}