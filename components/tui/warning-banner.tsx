import {
  SpeakerphoneIcon,
  XIcon,
  ExclamationIcon,
} from "@heroicons/react/outline";

export function WarningBanner() {
  return (
    <div className="fixed z-50 top-0 left-0 inset-x-0">
      <div className="bg-red-600">
        <div className="max-w-7xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-red-800">
                <ExclamationIcon
                  className="h-6 w-6 text-white"
                  aria-hidden="true"
                />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span className="md:hidden">
                  Heads up! This website is not yet completed.
                </span>
                <span className="hidden md:inline">
                  Heads up! This website is not yet completed. You may encounter
                  unfinished pages or features that are not functional.
                </span>
              </p>
              <div className="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="https://consulting.henrikvt.com"
                  className="flex items-center justify-center ml-2 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-red-600 bg-white hover:bg-red-50"
                >
                  See Main Site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
