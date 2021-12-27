import { stripe } from "~utils/stripe";
import { supabase, supabaseServer } from "../index"


// Create a customer in Supabase from Stripe
interface CreateCustomerProps {
  userID: string | undefined;
  stripeID: string | undefined;

  name: string | undefined;
  email: string | undefined;
  phone?: string | undefined;
  description?: string | undefined;
  address?: {
    line1: string | undefined;
    line2: string | undefined;
    city: string | undefined;
    postal: string | undefined;
    state: string | undefined;
    country?: "US";
  };
}

export const createCustomer = async ({userID, stripeID, name, email, phone, description, address}:CreateCustomerProps) =>{
  const result = await supabaseServer
    .from("customers")
    .insert({
      user_id: userID,
      stripe_customer_id: stripeID,
      name: name,
      email: email,
      phone: phone,
      description: description,
      address: address,
    });
  return result;
}

// Update a customer in Supabase from Stripe
interface UpdateCustomerProps {
  userID?: string;
  stripeID: string;

  name?: string;
  email?: string;
  phone?: string;
  description?: string;
  address?: {
    line1: string;
    line2: string;
    city: string;
    postal: string;
    state: string;
    country?: "US";
  };
}

export const updateCustomer = async ({userID, stripeID, name, email, phone, description, address}:UpdateCustomerProps) =>{
  const { data, error } = await supabaseServer
    .from("customers")
    .select("*")
    .eq("stripe_customer_id", stripeID);
    
  if (error) return;

  if (!data) {
    createCustomer({
      userID,
      stripeID,
      name,
      email,
      phone,
      description,
      address,
    });
  }
  else if (data) {
    const result = await supabaseServer
    .from("customers")
    .update({
      name: name,
      email: email,
      phone: phone,
      description: description,
      address: address,
    });
  }
}

// Delete a Customer
interface DeleteCustomerProps {
  stripeID: string;
}

export const deleteCustomer = async ({stripeID}:DeleteCustomerProps) =>{
  const result = await supabaseServer.from("customers").delete().match({stripe_customer_id: stripeID})

  return result;
}