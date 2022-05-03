import { useState, useEffect, useMemo, useRef } from "react";

import { Address, UserMetadata, UserMetaData_Alter } from "types/user";

export const AddressForm = ({
  addressData,
  register,
  isHidden,
  isRequired,
}: {
  addressData: Address;
  register: any;
  isHidden?: boolean;
  isRequired?: boolean;
}) => {
  return (
    <>
      <div className={`col-span-6 ${isHidden && "hidden"} `}>
        <label
          htmlFor="address_line1"
          className="block text-sm font-medium text-gray-700"
        >
          Address Line 1
        </label>
        <input
          type="text"
          {...register("address_line1")}
          autoComplete="address-line1"
          defaultValue={addressData?.address_line1}
          required={isRequired}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className={`col-span-6 ${isHidden && "hidden"} `}>
        <label
          htmlFor="address_line2"
          className="block text-sm font-medium text-gray-700"
        >
          Address Line 2
        </label>
        <input
          type="text"
          {...register("address_line2")}
          autoComplete="address-line2"
          defaultValue={addressData?.address_line2}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div
        className={`col-span-6 ${
          isHidden && "hidden"
        } sm:col-span-6 lg:col-span-2`}
      >
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
          defaultValue={addressData?.city}
          required={isRequired}
          minLength={2}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div
        className={`col-span-6 ${
          isHidden && "hidden"
        } sm:col-span-3 lg:col-span-2`}
      >
        <label
          htmlFor="state"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <input
          type="text"
          {...register("state")}
          autoComplete="address-level1"
          defaultValue={addressData?.state}
          required={isRequired}
          minLength={2}
          maxLength={2}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div
        className={`col-span-6 ${
          isHidden && "hidden"
        } sm:col-span-3 lg:col-span-2`}
      >
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
          defaultValue={addressData?.postal_code}
          required={isRequired}
          minLength={5}
          maxLength={5}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>
  );
};
