import styled from 'styled-components';

const Button = styled.button`
     padding: 0.5em;
     margin: 0.5em;
     color: palevioletred;
     background: papayawhip;
     border-radius: 3px;
     width: 50%;
     border: 1px solid #ccc;
     &:hover {
          background: #ccc;
     }
`;

export type MyButtonProps = {
     onClick?: () => void;
     label: string;
     children?: React.ReactNode;
     disabled?: boolean;
     type?: 'button' | 'submit' | 'reset';
};
const MyButton = ({ onClick, label, disabled, type }: MyButtonProps) => {
     return (
          <Button onClick={onClick} disabled={disabled} type={type}>
               {label}
          </Button>
     );
};
export default MyButton;
