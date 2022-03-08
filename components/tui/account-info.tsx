import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR, { mutate, useSWRConfig } from "swr";
import { UserMetadata, UserMetaData_Alter } from "types/user";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

const PersonalInfo = () => {
  const session = useSession();

  const userImage = session.data?.user?.image ? session.data?.user?.image : "";

  const { data: userDataRes, error: userDataError } = useSWR("/api/user/meta");

  const userData: UserMetadata = userDataRes?.data;

  const { mutate } = useSWRConfig();

  const { register, handleSubmit, formState } = useForm();

  const alterUserDetails: SubmitHandler<UserMetaData_Alter> = (data) => {
    const { name, phone, street_address, city, state, postal_code } = data;

    console.log("alterUserDetails", data);

    const result = axios({
      method: "PATCH",
      url: "/api/user/meta",
      data: {
        name,
        phone,
        street_address,
        city,
        state,
        postal_code,
      },
    });

    result.then((res) => {
      mutate("/api/user/meta");
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
          <div className="grid grid-cols-6 gap-6">
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
                defaultValue={userData?.name}
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
                defaultValue={userData?.email}
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
                defaultValue={userData?.phone}
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
                  defaultValue={userImage}
                  autoComplete="photo"
                  className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block flex-grow shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* eslint-disable-next-line */}
                <img
                  className="inline-block h-10 w-10 rounded-full ml-2"
                  src={userImage}
                  alt=""
                />
              </div>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street_address"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <input
                type="text"
                {...register("street_address")}
                autoComplete="street_address"
                className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                {...register("city")}
                autoComplete="address-level2"
                className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <input
                type="text"
                {...register("state")}
                autoComplete="address-level1"
                className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="postal_code"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP / Postal code
              </label>
              <input
                type="text"
                {...register("postal_code")}
                autoComplete="postal-code"
                className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2h"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PaymentInfo = () => {
  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Payment Information
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Processed securely by Stripe.
        </p>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="last-name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                name="email-address"
                id="email-address"
                autoComplete="email"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country-name"
                className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="col-span-6">
              <label
                htmlFor="street-address"
                className="block text-sm font-medium text-gray-700"
              >
                Street address
              </label>
              <input
                type="text"
                name="street-address"
                id="street-address"
                autoComplete="street-address"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                autoComplete="address-level2"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700"
              >
                State / Province
              </label>
              <input
                type="text"
                name="region"
                id="region"
                autoComplete="address-level1"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP / Postal code
              </label>
              <input
                type="text"
                name="postal-code"
                id="postal-code"
                autoComplete="postal-code"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { PersonalInfo, PaymentInfo };
