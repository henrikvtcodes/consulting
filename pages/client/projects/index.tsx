import type { NextPage } from "next";

import { ClientDashLayout } from "layouts/ClientDash";

const Page: NextPage = (props) => {
  return (
    <ClientDashLayout>
      <main>
        <h1 className="text-4xl">Client Account</h1>
      </main>
    </ClientDashLayout>
  );
};

export default Page;
