import {
  SpeakerphoneIcon,
  XIcon,
  ExclamationIcon,
} from "@heroicons/react/outline";

export function WarningBanner() {
  return (
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
              <span className="md:hidden">We announced a new product!</span>
              <span className="hidden md:inline">
                Heads up! This website is not yet completed. You may encounter
                unfinished pages or features that are not functional.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
