import { useState, useEffect, useMemo, useRef } from "react";

// import { Address, UserMetadata, UserMetaData_Alter } from "types/user";
import type { Address, AddressOpt } from "types";

export const AddressForm = ({
  addressData,
  register,
  isHidden,
  isRequired,
}: {
  addressData: AddressOpt;
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
          {...register("addressLine1")}
          autoComplete="address-line1"
          defaultValue={addressData?.addressLine1}
          required={isRequired}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className={`col-span-6 ${isHidden && "hidden"} `}>
        <label
          htmlFor="addressLine2"
          className="block text-sm font-medium text-gray-700"
        >
          Address Line 2
        </label>
        <input
          type="text"
          {...register("addressLine2")}
          autoComplete="address-line2"
          defaultValue={addressData?.addressLine2}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div
        className={`col-span-6 ${
          isHidden && "hidden"
        } sm:col-span-6 lg:col-span-2`}
      >
        <label
          htmlFor="addressCity"
          className="block text-sm font-medium text-gray-700"
        >
          City
        </label>
        <input
          type="text"
          {...register("addressCity")}
          autoComplete="address-level2"
          defaultValue={addressData?.addressCity}
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
          htmlFor="addressState"
          className="block text-sm font-medium text-gray-700"
        >
          State
        </label>
        <input
          type="text"
          {...register("addressState")}
          autoComplete="address-level1"
          defaultValue={addressData?.addressState}
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
          htmlFor="addressZip"
          className="block text-sm font-medium text-gray-700"
        >
          ZIP / Postal code
        </label>
        <input
          type="text"
          {...register("addressZip")}
          autoComplete="postal-code"
          defaultValue={addressData?.addressZip}
          required={isRequired}
          minLength={5}
          maxLength={5}
          className="mt-1 focus:ring-brand-accent2h focus:border-brand-accent2h block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>
  );
};
