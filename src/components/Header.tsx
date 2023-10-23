import Avatar from "./Avatar";
import Button from "./Button";
import SelectBox from "./SelectBox";
import SearchInput from "./SearchInput";

import { ReactComponent as DialpadIcon } from "../assets/dialpad.svg";
import { ReactComponent as AccountBoxIcon } from "../assets/account-box.svg";
import { ReactComponent as ChatIcon } from "../assets/chat.svg";
import { ReactComponent as LanIcon } from "../assets/lan.svg";
import { ReactComponent as HistoryIcon } from "../assets/history.svg";
import { ReactComponent as SettingsIcon } from "../assets/settings.svg";
import { ReactComponent as NotificationIcon } from "../assets/notification.svg";

const menu = [
  { icon: <AccountBoxIcon /> },
  { icon: <ChatIcon /> },
  { icon: <LanIcon /> },
  { icon: <HistoryIcon /> },
  { icon: <SettingsIcon /> },
];

const Header = () => {
  return (
    <header className="flex justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <div className="flex space-x-3 rtl:space-x-reverse">
        <div className="flex">
          {menu.map((item) => (
            <div className="px-3 py-1.5 bg-gray-300 dark:bg-gray-900 first:rounded-l last:rounded-r hover:bg-gray-300">
              {item.icon}
            </div>
          ))}
        </div>

        <div>
          <SearchInput
            id="global-search"
            name="global-search"
            className="bg-gray-300 !w-[320px] dark:bg-gray-900 dark:ring-transparent"
          />
        </div>

        <div>
          <Button className="dark:border-gray-500">
            <DialpadIcon />
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-3 rtl:space-x-reverse">
        <Button Icon={NotificationIcon} className="dark:border-gray-500" />
        <SelectBox className="w-[300px] dark:ring-gray-500 dark:text-white" />
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
