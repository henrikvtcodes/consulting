import { supabase } from "./index";

export const getUserProps = async ( ) =>{
  const user = supabase.auth.user();
  if (!user) return;

  // query user and customer data
  const { data: userData, error: UserDataError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id);

  const { data: customerData, error: customerDataError } = await supabase
    .from("customers")
    .select("*")
    .eq("id", user.id);

  if (UserDataError || customerDataError) return;

  return {
    user: user,
    userData: userData,
    customerData: customerData,
  }
}