import React from 'react';
import { Link } from 'umi';

const UserDetail = (props: any) => {
  const {
    location: { state: user },
  } = props;
  return (
    <div>
      <h2>User Detail</h2>
      <div style={{ padding: '0 10px' }}>
        {user ? (
          <>
            <p>
              <span>编号：</span>
              <span>{user?.id}</span>
            </p>
            <p>
              <span>姓名：</span>
              <span>{user?.name}</span>
            </p>
            <p>
              <span>年龄：</span>
              <span>{user?.age}</span>
            </p>
          </>
        ) : (
          '暂无数据'
        )}
        <Link to="/user">返回</Link>
      </div>
    </div>
  );
};

export default UserDetail;
