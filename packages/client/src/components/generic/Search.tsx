import MyInput from './MyInput';

export type SearchProps = {
  onSearch?: (value: string) => void;
  handleChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
  className?: string;
  style?: React.CSSProperties;
  autoFocus?: boolean;
  autoComplete?: string;
};
const Search = ({ value, placeholder, className, handleChangeValue }: SearchProps) => {
  // const { onChange, value, placeholder, className, ...otherProps } = props;
  return (
    <input
      className={className}
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => {
        handleChangeValue(e);
      }}
    />
  );
  //<MyInput></MyInput>;
};
export default Search;
