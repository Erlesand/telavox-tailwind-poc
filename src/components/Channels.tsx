import { format, parseISO } from "date-fns";

import Avatar from "./Avatar";
import Button from "./Button";
import SearchInput from "./SearchInput";

import chats from "../data/chats.json";

import { ReactComponent as MoreVertIcon } from "../assets/more-vert.svg";

const Channels = () => {
  return (
    <aside className="flex flex-col py-4 bg-grey-100 dark:bg-gray-800">
      <div className="flex px-4 space-x-4 rtl:space-x-reverse">
        <SearchInput
          id="search"
          name="search"
          className="flex-1 bg-gray-300 dark:bg-gray-900 dark:ring-transparent"
        />

        <Button Icon={MoreVertIcon} className="dark:border-gray-500" />
      </div>

      <div className="flex-1 overflow-y-scroll">
        {chats.map((chat) => (
          <div className="flex items-center space-x-4 rtl:space-x-reverse hover:bg-gray-200 dark:hover:bg-gray-600 rounded p-4 w-[460px]">
            <div className="relative self-start">
              <Avatar badge={chat.numberOfUnreadMessages} />
            </div>
            <div className="flex-1">
              <div className="font-bold">{chat.description}</div>
              <div className="text-gray-500 line-clamp-2">
                {`${
                  chat.latestMessage.from.contact.firstName
                } ${chat.latestMessage.message.slice(0, 400)}`}
              </div>
            </div>

            <div className="self-start text-gray-500">
              {format(parseISO(chat.latestMessage.sent), "HH:mm")}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Channels;
