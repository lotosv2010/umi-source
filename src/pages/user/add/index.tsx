import React, { useRef } from 'react';
import users from '../../../data/users';

const UserAdd = (props: any) => {
  const inputEl = useRef(null);
  const { history } = props;

  const add = (e: any) => {
    e.preventDefault();
    const { value }: any = inputEl.current;
    if (!value) return;
    const id = users.length + 1;
    const name = `${value}${id}`;
    const age = Math.round(Math.random() * 100);
    users.push({ id, name, age });
    history.goBack();
  };

  return (
    <div>
      <h2>User Add</h2>
      <div style={{ padding: '0 10px' }}>
        <form>
          <span>用户名：</span>
          <span>
            <input ref={inputEl} type="text" />
          </span>
          <input type="submit" value="添加" onClick={add} />
        </form>
      </div>
    </div>
  );
};

export default UserAdd;
