import { ReactComponent as SearchIcon } from "../assets/search.svg";
import Input from "./Input";

interface Props {
  id: string;
  name: string;
  placeholder?: string;
  className?: string;
}

const SearchInput = ({
  id,
  name,
  placeholder = "Search",
  className = "",
}: Props) => {
  return (
    <Input
      Icon={SearchIcon}
      className={className}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
