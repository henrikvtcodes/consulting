import { supabase } from "./index";

export const getUserData = async ( ) =>{
  const user = supabase.auth.user();
  if (!user) return;

  // query user and customer data
  const { data: userData, error: UserDataError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.id);

  

  if (UserDataError) return;

  return {
    user: user,
    userData: userData,
  }
}

export const getCustomerData = async ({userId}:{userId: string}) =>{
  const { data: customerData, error: customerDataError } = await supabase
    .from("customers")
    .select("*")
    .eq("id", userId);

    if (customerDataError) return;

    return {
      customerData: customerData,
    }
}