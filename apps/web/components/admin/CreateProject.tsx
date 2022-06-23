import { Dispatch, Fragment, SetStateAction } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { Controller, useForm } from "react-hook-form";
import { XIcon } from "@heroicons/react/outline";
import { useSWRConfig } from "swr";

import { useApiClient } from "~utils/hooks/useApiClient";
import { CreateProject, RequestProject } from "types";
import { HTTPError } from "ky";
import toast from "react-hot-toast";
import { SelectCustomerList } from "./SelectCustomerList";

const CreateProject = (props: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const client = useApiClient();
  const { register, control, handleSubmit } = useForm<CreateProject>();

  const { mutate } = useSWRConfig();

  const submitRequest = async (data: CreateProject) => {
    console.log(data);
    try {
      await client.post("project/create", {
        body: JSON.stringify(data),
      });
    } catch (e) {
      const error = e as HTTPError;

      if (error.response.status === 429) {
        toast.error("You cannot request a project more than once in 24 hours.");
      } else {
        toast.error("An error occurred while trying to request a project.");
      }
    }
    mutate("project");
    props.setOpen(false);
  };
  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-sm sm:w-full sm:p-6">
                <div className="flex flex-col">
                  <div className="flex justify-between">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Request a Project
                    </h3>
                    <div className="hidden sm:block">
                      <button
                        type="button"
                        className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                        onClick={() => props.setOpen(false)}
                      >
                        <span className="sr-only">Close</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <form
                    onSubmit={handleSubmit(submitRequest)}
                    className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          {...register("name")}
                          autoComplete="off"
                          required
                          maxLength={140}
                          className="py-1 px-2 block w-full shadow-sm focus:ring-brand-primary focus:border-brand-primary border border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Owner
                      </label>
                      <div className="mt-1">
                        <Controller
                          name="ownerId"
                          control={control}
                          rules={{ required: true }}
                          render={({ field }) => <SelectCustomerList />}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                      <div className="mt-1">
                        <textarea
                          {...register("description")}
                          rows={4}
                          required
                          maxLength={240}
                          className=" max-h-40 py-1 px-2 block w-full shadow-sm focus:ring-brand-primary focus:border-brand-primary border border-gray-300 rounded-md"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-primary hover:bg-brand-accent1h focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export { CreateProject };
