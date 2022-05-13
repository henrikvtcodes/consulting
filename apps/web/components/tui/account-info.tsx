import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR, { mutate, useSWRConfig } from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import type {
  Address,
  UserDetailsForm,
  User,
  CustomerDetailsForm,
  Customer,
} from "types";
import { useUser } from "utils/hooks/useUser";
import { useCustomer } from "~utils/hooks/useCustomer";
import { AddressForm } from "./address";
import { Toggle, FormToggle } from "./switch";
import { Switch } from "@headlessui/react";

import { API_URL } from "~utils/config";

const PersonalInfo = () => {
  const { user, updateUser, isValidating } = useUser();

  const image = user?.image === undefined ? null : user.image;

  const { mutate } = useSWRConfig();

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

    const result = axios.patch(
      `${API_URL}/user`,
      {
        name,
        phone,
        addressLine1,
        addressLine2,
        addressCity,
        addressState,
        addressZip,
        image,
      },
      {
        withCredentials: true,
      }
    );

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
                defaultValue={user?.phone}
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

  const { register, handleSubmit, control, formState } = useForm();

  // const userData: CustomerData | { customerNotFound: boolean } =
  //   userDataRes?.data;

  const newCustomer = customer === null;

  const [addressState, setAddressState] = useState<boolean>(
    newCustomer ? false : customer?.separateAddr
  );

  const upsertCustomer: SubmitHandler<CustomerDetailsForm> = (data) => {
    data.separateAddr = !data.separateAddr;

    const req = newCustomer ? axios.post : axios.patch;

    const result = req(
      `${API_URL}/user/customer`,
      {
        ...data,
      },
      {
        withCredentials: true,
      }
    );

    result.then((res) => {
      update();
    });
  };

  return (
    <div className="md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <h3 className="text-lg font-medium leading-6 text-gray-900">
          Billing Information
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Processed securely by Stripe.
        </p>
        {/* {newCustomer && (
          <div className="w-full bg-yellow-200 rounded-md p-1 mt-2">
            <p className="font-semibold text-sm text-yellow-700">
              You are a new customer.
            </p>
            <p className="font-normal text-xs text-yellow-600">
              Please enter your billing information.
            </p>
          </div>
        )} */}
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit(upsertCustomer)}>
          <div className="grid grid-cols-6 gap-4">
            {!true ? (
              <div className="col-span-6 text-center">Loading...</div>
            ) : (
              <>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    {...register("firstName")}
                    defaultValue={customer?.firstName as string}
                    autoComplete="given-name"
                    className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    {...register("lastName")}
                    defaultValue={customer?.lastName as string}
                    autoComplete="family-name"
                    className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-4 flex items-center">
                  <FormToggle
                    name={"sepBillingAddr"}
                    control={control}
                    state={addressState}
                    changeState={setAddressState}
                  />
                  <label className=" text-sm font-medium text-gray-700 ml-2">
                    Use shipping address as billing address
                  </label>
                </div>
                <AddressForm
                  register={register}
                  addressData={customer}
                  isHidden={addressState}
                />
              </>
            )}
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

export { PersonalInfo, PaymentInfo };
