import { useState } from "react";
import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useAsync } from "react-async-hook";
import useConstant from "use-constant";

export const useDebouncedFunc = (inputFunc: any, waitMs: number = 400) => {
  // Handle the input text state
  const [inputText, setInputText] = useState("");

  // Debounce the original search async function
  const debouncedInputFunc = useConstant(() =>
    AwesomeDebouncePromise(inputFunc, waitMs)
  );

  // The async callback is run each time the text changes,
  // but as the search function is debounced, it does not
  // fire a new request on each keystroke
  const searchResults = useAsync(async () => {
    if (inputText.length === 0) {
      return [];
    } else {
      return debouncedInputFunc(inputText);
    }
  }, [debouncedInputFunc, inputText]);

  // Return everything needed for the hook consumer
  return {
    inputText,
    setInputText,
    searchResults,
  };
};
