import { ClientDashLayout } from "layouts/ClientDash";
import { PersonalInfo } from "~components/client/PersonalInfo";
import { PaymentInfo } from "~components/client/PaymentInfo";

const Page = () => {
  return (
    <ClientDashLayout>
      <main>
        <h1 className="text-4xl font-semibold text-gray-900 mb-6">
          Account Information
        </h1>
        <div className="space-y-6">
          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            {/* Profile Information */}
            <PersonalInfo />
          </div>

          <div className="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
            {/* Payment Information */}
            <PaymentInfo />
          </div>
        </div>
      </main>
    </ClientDashLayout>
  );
};

export default Page;
