import React from 'react';
import { AuthContext } from './Auth';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const withUser = Component => {
  const WrappedComponent = props => {
    return (
      <AuthContext.Consumer>
        {user => <Component user={user} {...props} />}
      </AuthContext.Consumer>
    );
  };
  WrappedComponent.displayName = `WithUser(${getDisplayName(
    WrappedComponent,
  )})`;
  return WrappedComponent;
};
export default withUser;