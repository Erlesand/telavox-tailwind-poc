import { classNames } from "../helpers";

interface Props {
  icon?: string;
  className?: string;
  children?: string | Element;
  Icon?: ReactComponent;
}

const Button = ({ icon, Icon, className, children }: Props) => {
  return (
    <button
      className={classNames(
        "border border-gray-300 rounded h-9 w-9 flex items-center justify-center",
        className
      )}
    >
      {icon && <img className="w-6 h-6" src={icon} />}
      {children}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
