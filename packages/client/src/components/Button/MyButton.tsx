import { memo } from 'react';
import { Button } from './useStyles';

export type MyButtonProps = {
  onClick?: () => void;
  label: string | JSX.Element;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
};
const MyButton = memo(({ onClick, label, disabled, type }: MyButtonProps) => {
  return (
    <Button onClick={onClick} disabled={disabled} type={type}>
      {label}
    </Button>
  );
});
export default MyButton;
