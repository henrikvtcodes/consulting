

import { supabase } from "./Supabase";
import type { SignInFormProps } from "~components/forms/signIn";
import type { SignUpFormProps } from "~components/forms/signUpFull";
import logger from "./logger";

const { miscEvent } = logger;

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
        redirectTo: `${window.location.origin}/handleLogin`,      
    }
    )
    if (error) {
        miscEvent("error", `Sign In Error (${error.status})`, error.message);
    }

    return { user, session, error };
}

export { submitSignIn, testOnSubmit };