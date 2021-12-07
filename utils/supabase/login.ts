import { supabase } from "./index";
import type { Provider } from "@supabase/supabase-js"


// Types
type CustomProvider = "google" | "facebook" | undefined

type EmailPasswordLogin = {
  email: string;
  password: string;
}

// Login Hooks
export const useLogin = async (provider:CustomProvider) => await supabase.auth.signIn({provider:provider})

export const useEmailPasswordLogin = async (data:EmailPasswordLogin) => await supabase.auth.signIn({email:data.email, password:data.password})

// Signup Flow
export const useCodeValidation = async (code:string) => {
  
}

export const useSignup = async (data:EmailPasswordLogin) => await supabase.auth.signUp({email:data.email, password:data.password})

// Forgot Password
export const useForgotPassword = async (email:string) => await supabase.auth.api.resetPasswordForEmail(email)

// Logout Hook
export const useLogout = async () => await supabase.auth.signOut()