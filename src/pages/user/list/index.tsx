import React from 'react';
import { Link } from 'umi';
import users from '../../../data/users';

const UserList = () => {
  return (
    <div>
      <h2>User List</h2>
      <div style={{ padding: '0 10px' }}>
        <p>
          <Link to="/user/add">新增</Link>
        </p>
        <p style={{ display: 'flex' }}>
          <span style={{ flex: 1 }}>编号</span>
          <span style={{ flex: 1 }}>姓名</span>
          <span style={{ flex: 1 }}>编号</span>
          <span style={{ flex: 1 }}>操作</span>
        </p>
        {users.map(({ id, name, age }: any) => (
          <p style={{ display: 'flex' }} key={id}>
            <span style={{ flex: 1 }}>{id}</span>
            <span style={{ flex: 1 }}>{name}</span>
            <span style={{ flex: 1 }}>{age}</span>
            <Link
              style={{ flex: 1 }}
              to={{ pathname: `/user/detail/${id}`, state: { id, name, age } }}
            >
              详情
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserList;
