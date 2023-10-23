interface Props {
  id: string;
  name: string;
  placeholder: string;
  className: string;
  icon?: string;
  type?: "text";
  Icon?: ReactElement;
}

const Input = ({
  id,
  name,
  placeholder = "",
  className = "",
  type = "text",
  icon = "",
  Icon,
}: Props) => {
  return (
    <div className="flex-1">
      <div className="relative rounded">
        <div className="absolute inset-y-0 flex items-center pointer-events-none start-0 ps-3">
          <img src={icon} />
          {Icon && <Icon />}
        </div>

        <input
          type={type}
          name={name}
          id={id}
          className={`block w-full rounded border-0 py-1.5 ps-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${className}`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
