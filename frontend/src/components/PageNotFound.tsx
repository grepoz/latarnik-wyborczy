import * as React from 'react';
interface PageNotFoundProps {
  location:
      {
          pathname: string
      };
}

export const PageNotFound: React.FC<PageNotFoundProps> = ({ location }) => (
  <p>
    Page not found - the path, <code>{location.pathname}</code>, did not match
    any React Router routes. Head to the <a href={window.location.origin}>home page</a> instead.
  </p>
);
