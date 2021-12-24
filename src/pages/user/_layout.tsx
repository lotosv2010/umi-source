import React, { cloneElement } from 'react';

const User = (props: any) => {
  const { children } = props;
  console.log('user index props', props);
  return (
    <div>
      <h1>User</h1>
      <div style={{ padding: '0 10px' }}>
        // 传递参数给子路由
        {cloneElement(children, { name: 'user index' })}
      </div>
    </div>
  );
};

export default User;
