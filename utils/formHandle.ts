import { supabase } from "./supabase";
import type { User, Session } from "@supabase/supabase-js";

import type { SignInFormProps } from "~components/forms/signIn";


const testOnSubmit = (formData:any) => {
    let parsedFormData = JSON.stringify(formData);
    console.log(`Submitted Form Data: ${parsedFormData}`);
}

const submitSignIn = async (formData:SignInFormProps) => {

    console.log(` Email: ${formData.email}`);
    console.log(` Password: ${formData.password}`);

    const { user, session, error } = await supabase.auth.signIn({
        email: formData.email,
        password: formData.password,
    },
    {
        redirectTo: "/handleLogin",      
    }
    )
    if (error) {
        console.log(`Sign In Error: ${error.message}`);
    }
    return { user, session, error };
}

export { submitSignIn, testOnSubmit };