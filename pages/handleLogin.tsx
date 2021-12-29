import { useRouter } from "next/router";
import Typical from "react-typical";
import { useEffect } from "react";

import { supabase } from "~utils/Supabase";

const Page = () => { // Page that directs user to administrator or client dashboard if logged in, directs to home page if not logged in
  const router = useRouter();

  useEffect(() => {
    const user = supabase.auth.user();

    if (!user) {
      console.log("User not logged in");
      setTimeout(() => {
        router.push("/");
      }, 10000);
    }
  })
  
  return (
    <main className="h-screen w-screen bg-gray-50 grid place-content-center place-items-center">
      <h1 className="text-4xl text-brand-text1">
        <Typical
          steps={[
            "Please wait while we log you in..."
          ]}
          loop={1}
        />
      </h1>
    </main>
  );
}
export default Page;