import { memo } from 'react';

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
const Search = memo(({ value, placeholder, className, handleChangeValue }: SearchProps) => {
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
});
export default Search;
