import Button from "./Button";

import { ReactComponent as TuneIcon } from "../assets/tune.svg";
import { ReactComponent as GroupIcon } from "../assets/group.svg";
import { ReactComponent as VideoCamIcon } from "../assets/videocam.svg";

const menu = [{ icon: TuneIcon }, { icon: GroupIcon }, { icon: VideoCamIcon }];

const Shortcuts = () => {
  return (
    <nav className="w-16 bg-gray-100 dark:bg-gray-800">
      <div className="flex flex-col items-center">
        {menu.map((item) => (
          <div className="flex justify-center w-full py-4 hover:bg-gray-300 dark:hover:bg-gray-600">
            <Button Icon={item.icon} className="border-transparent" />
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Shortcuts;
