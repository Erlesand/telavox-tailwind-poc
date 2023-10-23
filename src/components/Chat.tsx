import { format, parseISO } from "date-fns";

import Button from "./Button";
import ChatMenu from "./ChatMenu";
import EmojiPicker from "./EmojiPicker";

import { ReactComponent as AddIcon } from "../assets/add.svg";

import chat from "../data/chat-session-178663.json";

const Chat = () => {
  return (
    <>
      <div className="flex flex-col flex-1 overflow-y-scroll">
        {chat.map((message) => {
          return (
            <>
              <div className="flex p-3 space-x-4 rounded rtl:space-x-reverse hover:bg-gray-100 dark:hover:bg-gray-600 group">
                <div className="relative self-start">
                  <img
                    className="rounded-full w-9 h-9"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  />
                </div>
                <div className="flex-1">
                  <p className="space-x-2 text-gray-500">
                    <span className="font-bold">{`${message.from.contact.firstName} ${message.from.contact.lastName}`}</span>
                    <span>{format(parseISO(message.sent), "HH:mm")}</span>
                  </p>
                  <p className="text-gray-500 dark:text-white line-clamp-2">
                    {message.message}
                  </p>

                  <div className="flex space-x-1 rtl:space-x-reverse">
                    {message.reactions?.map((reaction) => (
                      <div className="px-2 border rounded">
                        {reaction.icon} 1
                      </div>
                    ))}

                    {message.comments && (
                      <div className="px-2 border rounded">
                        {message.comments.length} comments
                      </div>
                    )}
                  </div>
                </div>

                <div className="self-start text-gray-500 group-hover:block">
                  <ChatMenu className="dark:bg-transparent" />
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div>
        <div className="relative mt-2 shadow-sm">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Button
              className="!w-6 !h-6 bg-gray-600 dark:bg-gray-500 dark:border-transparent text-white"
              Icon={AddIcon}
            />
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full py-3 pl-12 pr-12 text-gray-900 bg-gray-200 border-0 rounded-md dark:bg-gray-800 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 dark:ring-transparent focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Send a message to The Living Room"
            aria-describedby="price-currency"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <EmojiPicker />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
