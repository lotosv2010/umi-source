import React from 'react';

const User = ({ children }: any) => {
  return (
    <div>
      <h1>User</h1>
      <div style={{ padding: '0 10px' }}>{children}</div>
    </div>
  );
};

export default User;
