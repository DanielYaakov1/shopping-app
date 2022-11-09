import { memo } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

export type paginationProps = {
  children?: React.ReactNode;
};

const PaginationLink = memo(({ children }: paginationProps) => {
  return (
    <MemoryRouter initialEntries={['/inbox']} initialIndex={0}>
      <Route path="*">{children}</Route>
    </MemoryRouter>
  );
});

export default PaginationLink;
