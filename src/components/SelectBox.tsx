import { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

import { classNames } from "../helpers";
import { ReactComponent as CheckIcon } from "../assets/check.svg";
import { ReactComponent as ChevronDownIcon } from "../assets/arrow-drop-down.svg";

import statuses from "../data/statuses.json";

interface Props {
  className?: string;
}

const SelectBox = ({ className }: Props) => {
  const [selected, setSelected] = useState(statuses[3]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <Listbox.Label className="block text-sm font-medium leading-6 text-black sr-only">
            Status
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button
              className={classNames(
                "relative cursor-default rounded py-1.5 pl-3 pr-10 text-left text-black ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6",
                className
              )}
            >
              <span className="flex items-center space-x-2 rtl:space-x-reverse">
                <span
                  aria-label={selected.online ? "Online" : "Offline"}
                  className={classNames(
                    selected.online ? "bg-green" : "bg-red",
                    "inline-block h-2 w-2 flex-shrink-0 rounded-full"
                  )}
                />
                <span className="block truncate">{selected.name}</span>
              </span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {statuses.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "bg-gray-100 text-black/90" : "text-black/70",
                        "relative cursor-default select-none py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span
                            className={classNames(
                              person.online ? "bg-green" : "bg-red",
                              "inline-block h-2 w-2 flex-shrink-0 rounded-full"
                            )}
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "block truncate"
                            )}
                          >
                            {person.name}
                            <span className="sr-only">
                              {" "}
                              is {person.online ? "online" : "offline"}
                            </span>
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
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

export default SelectBox;
