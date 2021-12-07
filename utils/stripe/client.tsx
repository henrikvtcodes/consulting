import { loadStripe } from "@stripe/stripe-js";
import type { Stripe } from "@stripe/stripe-js";


export const stripeClient = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);


const elements = stripeClient!.elements();
