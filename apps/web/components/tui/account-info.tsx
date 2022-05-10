import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR, { mutate, useSWRConfig } from "swr";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";

import { UserMetadata, UserMetaData_Alter } from "types/user";
import { useUser } from "utils/hooks/useUser";
import { AddressForm } from "./address";
import { Toggle, FormToggle } from "./switch";
import { userInfo } from "os";
import { Switch } from "@headlessui/react";
import { CustomerData, UpsertCustomer } from "types/customer";

import { API_URL } from "~utils/config";

const PersonalInfo = () => {
  const { user, signOut: mutUser } = useUser();

  const {
    data: userDataRes,
    error: userDataError,
    isValidating,
  } = useSWR(`${API_URL}/user`);

  const userData: UserMetadata = userDataRes?.data;

  const userImage = userData?.image;

  const { mutate } = useSWRConfig();

  const { register, handleSubmit, formState } = useForm();

  const alterUserDetails: SubmitHandler<UserMetaData_Alter> = (data) => {
    const {
      name,
      phone,
      address_line1,
      address_line2,
      city,
      state,
      postal_code,
      photo_url,
    } = data;

    const result = axios.patch(
      `${API_URL}/user`,
      {
        name,
        phone,
        address_line1,
        address_line2,
        city,
        state,
        postal_code,
        photo_url,
      },
      {
        withCredentials: true,
      }
    );

    result.then((res) => {
      mutate(`${API_URL}/user`);
      mutate("/api/auth/session");
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
                defaultValue={userData?.name}
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
                  defaultValue={userImage}
                  autoComplete="photo"
                  className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block flex-grow shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {/* eslint-disable-next-line */}
                <img
                  className="inline-block h-10 w-10 rounded-full ml-2"
                  src={userImage}
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

            <AddressForm register={register} addressData={userData} />
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
  const { data, error } = useSWR(`${API_URL}/user/customer`);

  const { register, handleSubmit, control, formState } = useForm();

  const {
    data: custDataRes,
    error: custDataError,
    isValidating,
  } = useSWR(`${API_URL}/user/customer`);

  const userData: CustomerData = custDataRes;

  // const userData: CustomerData | { customerNotFound: boolean } =
  //   userDataRes?.data;

  const newCustomer = (custDataRes?.customerNotFound as boolean) === true;

  const [addressState, setAddressState] = useState<boolean>(
    newCustomer ? false : data?.sepBillingAddr
  );

  const upsertCustomer: SubmitHandler<UpsertCustomer> = (data) => {
    data.sepBillingAddr = !data.sepBillingAddr;

    const {
      first_name,
      last_name,
      address_line1,
      address_line2,
      city,
      state,
      postal_code,
      sepBillingAddr,
    } = data;

    const reqMethod = newCustomer ? axios.post : axios.patch;
    // console.log(reqMethod);

    const result = reqMethod(
      `${API_URL}/user/customer`,
      {
        first_name,
        last_name,
        address_line1,
        address_line2,
        city,
        state,
        postal_code,
        sepBillingAddr,
      },
      {
        withCredentials: true,
      }
    );

    result.then((res) => {
      mutate(`${API_URL}/user/customer`);
      console.log("Payment Info Update Request Completed");
      console.log(res);
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
                    htmlFor="first_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    {...register("first_name")}
                    defaultValue={data?.first_name as string}
                    autoComplete="given-name"
                    className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="last_name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    {...register("last_name")}
                    defaultValue={data?.last_name as string}
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
                  addressData={userData}
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
