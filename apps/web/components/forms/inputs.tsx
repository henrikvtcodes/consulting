import { useFormContext } from "react-hook-form";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import formStyles from "~styles/forms.module.css";
import classNames from "../tui/classnames";

type TextFieldProps = {
  label: string;
  type: string;
  id: string;
  auto: string;
  isRequired: boolean;
  placeholder?: string;
};

const Input = ({
  label,
  type,
  id,
  auto,
  isRequired,
  placeholder,
}: TextFieldProps) => {
  const { register } = useFormContext();

  return (
    <div className={formStyles.Input}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...register(id)}
        placeholder={placeholder}
        type={type}
        autoComplete={auto}
        required={isRequired}
      />
    </div>
  );
};

type CheckboxProps = {
  id: string;
  label: string;
};

const Checkbox = ({ id, label }: CheckboxProps) => {
  const { register } = useFormContext();

  return (
    <div className={formStyles.Checkbox}>
      <input id={id} {...register(id)} type="checkbox" />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

type SelectMenuProps = {
  id: string;
  label: string;
  options: Array<{
    id: string;
    name: string;
  }>;
};
const SelectMenu = ({ id, label, options }: SelectMenuProps) => {
  const [selected, setSelected] = useState(options[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium text-gray-700">
            Assigned to
          </Listbox.Label>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate"
                          )}
                        >
                          {option.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
};

const SubmitButton = () => {
  return (
    <div>
      <button type="submit" className={formStyles.Button}>
        Sign in
      </button>
    </div>
  );
};

export { Input, Checkbox, SubmitButton };
