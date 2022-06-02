import { useSWRConfig } from "swr";
import useSWRImmutable from "swr/immutable";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import type {
  Address,
  UserDetailsForm,
  User,
  CustomerDetailsForm,
  Customer,
  CustomerExists,
} from "types";

import { useUser } from "utils/hooks/useUser";
import { useCustomer } from "~utils/hooks/useCustomer";
import { AddressForm } from "./address";
import { Toggle, FormToggle } from "./switch";
import { useApiClient } from "~utils/hooks/useApiClient";

const PersonalInfo = () => {
  const { user, updateUser, isValidating } = useUser();

  const image = user?.image === undefined ? null : user.image;

  const apiClient = useApiClient();

  const { register, handleSubmit, formState } = useForm();

  const alterUserDetails: SubmitHandler<UserDetailsForm> = (data) => {
    const {
      name,
      phone,
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressZip,
      image,
    } = data;

    const result = apiClient.patch(`user`, {
      body: JSON.stringify({
        name,
        phone,
        addressLine1,
        addressLine2,
        addressCity,
        addressState,
        addressZip,
        image,
      }),
    });

    result.then((res) => {
      updateUser();
    });
  };

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Personal Information
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Make sure to use a permanent address.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        {/* Personal Info form */}
        <form onSubmit={handleSubmit(alterUserDetails)}>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                autoComplete="name"
                defaultValue={user?.name}
                minLength={2}
                maxLength={50}
                className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                {...register("email")}
                autoComplete="email"
                defaultValue={user?.email}
                disabled
                className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="text"
                {...register("phone")}
                autoComplete="tel-national"
                defaultValue={user?.phone == null ? "" : user?.phone}
                minLength={10}
                maxLength={10}
                className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="photo_url"
                className="block text-sm font-medium text-gray-700"
              >
                Photo URL
              </label>
              <div className="inline-flex w-full">
                <input
                  type="text"
                  {...register("photo_url")}
                  defaultValue={image}
                  autoComplete="photo"
                  className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block flex-grow shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* eslint-disable-next-line */}
                <img
                  className="inline-block h-10 w-10 rounded-full ml-2"
                  src={image}
                  alt=""
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="col-span-6 mt-2">
              <h4 className="text-md font-medium leading-6 text-gray-900">
                Address
              </h4>
              <p className="text-xs text-gray-500">
                This is your shipping address.
              </p>
            </div>

            <AddressForm register={register} addressData={user} />
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              disabled={isValidating}
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2h"
            >
              {isValidating ? "Loading..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PaymentInfo = () => {
  const { customer, update, isValidating } = useCustomer();

  const { data: customerState } =
    useSWRImmutable<CustomerExists>("customer/exists");

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Billing Information
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Processed securely by Stripe.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2 flex flex-col align-middle">
        {customerState ? undefined : (
          <div className="self-center w-max flex flex-col justify-around">
            <p className="text-sm text-center text-gray-500 italic">
              You are not a registered customer.
            </p>
            <button className="mt-2 inline-flex justify-center py-1 px-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2h">
              Register a payment method
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { PersonalInfo, PaymentInfo };
