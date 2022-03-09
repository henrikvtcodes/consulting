import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import { useForm, Controller, Control } from "react-hook-form";

import classNames from "./classnames";

export const Toggle = ({
  state,
  changeState,
}: {
  state: boolean;
  changeState: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Switch
      checked={state}
      onChange={changeState}
      className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-accent2h"
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bg-white w-full h-full rounded-md"
      />
      <span
        aria-hidden="true"
        className={classNames(
          state ? "bg-brand-accent2" : "bg-gray-200",
          "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
        )}
      />
      <span
        aria-hidden="true"
        className={classNames(
          state ? "translate-x-5" : "translate-x-0",
          "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
        )}
      />
    </Switch>
  );
};

export const FormToggle = ({
  state,
  changeState,
  name,
  control,
}: {
  state: boolean;
  changeState: Dispatch<SetStateAction<boolean>>;
  name: string;
  control: Control;
}) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Toggle
          state={state}
          changeState={(e) => {
            changeState(e);
            onChange(e);
          }}
        />
      )}
    />
  );
};
