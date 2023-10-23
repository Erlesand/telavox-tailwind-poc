import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { classNames } from "../helpers";

import { ReactComponent as MoreVertIcon } from "../assets/more-vert.svg";
import { ReactComponent as MarkChatUnreadIcon } from "../assets/mark-chat-unread.svg";

interface Props {
  className?: string;
}

const menu = [
  { icon: <MarkChatUnreadIcon />, label: "Mark as unread" },
  { icon: <MarkChatUnreadIcon />, label: "Mark as unread" },
];

const ChatMenu = ({ className }: Props) => {
  return (
    <div className="dark:bg-transparent">
      <Menu as="div" className="relative inline-block text-left group">
        <div>
          <Menu.Button
            className={classNames(
              "group-hover:inline-flex hidden justify-center w-full p-1 text-sm font-medium text-white bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
              className
            )}
          >
            <MoreVertIcon
              className="w-6 h-6 text-black dark:text-white hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute w-56 mt-2 origin-top-right bg-white rounded end-0 ring-1 ring-black ring-opacity-5 focus:outline-none">
            {menu.map((item) => {
              return (
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-happy-red text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md p-2 space-x-2 rtl:space-x-reverse text-sm`}
                    >
                      <div>{item.icon}</div>
                      <p>{item.label}</p>
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );

  // <Button icon={moreVertIcon} />;
};

export default ChatMenu;
