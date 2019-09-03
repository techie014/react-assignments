import React from 'react';

export const UserContext = React.createContext({
  email: undefined,
  userName: undefined,
  updateUser: () => {},
});
